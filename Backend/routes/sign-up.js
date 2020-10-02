const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
const bodyParser = require('body-parser')
const joi = require("joi")
const bcrypt = require("bcrypt")
const sendMail = require("../utils/mailer")
const pinGeterator = require("../utils/pinGenerator")
const session = require("express-session")
const pinGenerator = require("../utils/pinGenerator")
const UserModel = require("../models/user-model")


router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }))

router.use(session({
    secret: 'ssshhhhh',
    saveUninitialized: true,
    resave: true,
    cookie: { secure: false }
}))

const joiSchema = {
    firstName: joi.string().min(3).max(20).required(),
    secondName: joi.string().max(20).required(),
    email: joi.string().email().required(),
    college: joi.string().max(30).min(2).required(),
    course: joi.any().required(),
    admissionYear: joi.number().required(),
    firstPassword: joi.string().min(8).max(30).required(),
    secondPassword: joi.ref("firstPassword"),
}

function joiMiddleWare(joiSchema) {
    return (req, res, next) => {
        let value = joi.object({ ...joiSchema }).validate(req.body)
        if (value.error) {
            res.send({
                isError: true,
                message: value.error.details[0].message
            })
        } else {
            next()
        }
    }
}


router.post("/", joiMiddleWare(joiSchema), (req, res) => {
    let data = req.body

    data.password = bcrypt.hashSync(data.firstPassword, 10)

    delete data.firstPassword
    delete data.secondPassword

    data.isVerified = false

    data.pin = pinGeterator()

    var mail_content = `<center><h1>Your pin is <p style="font-size: 60px"><strong> ${data.pin} </strong></p></h1></center>`

    UserModel.find({
        email: req.body.email
    }).then((result) => {
        if (result.length > 0) {
            console.log(result)
            res.send({
                isError: true,
                message: "Email is already registered"
            })
        } else {
            saveToDb = new UserModel({
                ...data
            }).save().then((doc) => {
                sendMail("mailthesaurabh@gmail.com", mail_content).then((emailRes) => {
                    console.log("Email sent")
                }).catch((err) => {
                    console.log(err)
                })
                req.session.mail = data.email
                res.send({
                    isError: false,
                    message: "You have signed-up successfully"
                })
            }).catch((err) => {
                console.log(err)
            })
        }
    }).catch((err) => {
        console.log(err)
    })
})


router.get("/resend-pin", (req, res) => {
    const email = req.session.mail
    const newPin = pinGenerator()
    var mail_content = `<center><h1>Your pin is <p style="font-size: 60px"><strong> ${newPin} </strong></p></h1></center>`

    sendMail("mailthesaurabh@gmail.com", mail_content).then((result) => {

        UserModel.findOneAndUpdate({ email: email }, { pin: newPin })
            .then((res) => {
                res.send("Email sent successfully on  " + req.session.mail)
            })
            .catch((err) => {
                res.send(err)
            })
    }).catch((err) => {
        res.send(err)
    })
})



router.post("/verify-pin", (req, res) => {
    const enteredPin = req.body.enteredPin
    const email = req.session.mail
    UserModel.find({ email: email }).then((result) => {

        let id = result ? result[0].id : null

        if (id) {
            if (enteredPin == result[0].pin) {
                UserModel.findByIdAndUpdate(id, { isVerified: true, $unset: { 'pin': true } }).then((doc) => {
                    if (doc) {
                        res.json({
                            isError: false,
                            message: "You are verified user now"
                        })
                    } else {
                        res.json({
                            isError: true,
                            message: "No user found"
                        })
                    }
                }).catch((err) => {
                    res.json({
                        isError: true,
                        message: err
                    })
                })
            } else {
                res.json({
                    isError: true,
                    message: "Pin not matched"
                })
            }
        } else {
            res.json({
                isError: true,
                message: "session expired !"
            })
        }
    }).catch((err) => {
        res.json({
            isError: true,
            message: err
        })
    })
})




module.exports = router