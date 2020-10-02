const express = require("express")
const router = express.Router()
const bodyParser = require("body-parser")
const jwt = require("jsonwebtoken")

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({
    extended : true
}))


router.post("/", (req, res)=>{
    const decoded_Token = jwt.decode(req.body.token)
    console.log(decoded_Token)
    console.log(decoded_Token)
    console.log(decoded_Token)
    console.log(decoded_Token)
    console.log(decoded_Token)
    console.log(decoded_Token)
    console.log(decoded_Token)
    console.log(decoded_Token)
    console.log(decoded_Token)
    console.log(decoded_Token)

    res.send(req.body)
})

module.exports = router