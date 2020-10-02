const { isModuleSpecifier } = require("babel-types")
const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    firstName: String,
    secondName: String,
    email: String,
    college: String,
    course: String,
    admissionYear: Number,
    password: String,
    isVerified: Boolean,
    pin: Number
})

const userModel = mongoose.model("User", userSchema)

module.exports = userModel