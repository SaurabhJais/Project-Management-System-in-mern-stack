const nodemailer = require("nodemailer")

const  emailSender = (to, data) => {
    var transport = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "jsaurabh1122@gmail.com",
            pass: "lhghjpcbwluvilrn"
        }
    })

    var mailOptions = {
        from: "jsaurabh1122@gmail.com",
        to: to,
        subject: 'This is a testing email',
        html: data
    }

    return transport.sendMail(mailOptions)
}


module.exports = emailSender
