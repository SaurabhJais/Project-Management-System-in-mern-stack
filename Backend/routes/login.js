const express = require("express")
const bodyParser = require("body-parser")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const userModel = require("../models/user-model")
const router = express.Router()
const cookieParser = require("cookie-parser")



router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }))
router.use(cookieParser("This is a secret string"))


router.post("/", (req, res) => {
    const body = req.body
    console.log(body)
    userModel.findOne({ email: body.email }).then((result) => {

        if (result) {
            const isPasswordMatched = bcrypt.compareSync(body.password, result.password)
            if (isPasswordMatched) {

                const jwtToken = jwt.sign(
                    {
                        email: body.email, 
                        password: body.password
                    }, 
                    "This is a jwt secret Token", 
                    { 
                        expiresIn: 100000
                    }
                )

                res.cookie("token", jwtToken )

                res.json({
                    isError: false,
                    isLoggedIn: true,
                    data: result.firstName + " " + result.secondName,
                    message: "You are logged-in successfully",
                })
                
            } else {
                res.json({
                    isError: true,
                    message: " Password is wrong"
                })
            }
        } else {
            res.json({
                isError: true,
                message: "Email or Password is wrong"
            })
        }
    })
})


module.exports = router