const { SendEmail } = require("./handlers/email")
const { SendIfReCaptcha } = require("./handlers/recaptcha")
const { Error400 } = require("./handlers/error")

module.exports = [
    {route: "/api/email/send", handler: (req, res) => SendIfReCaptcha(req, res, SendEmail, Error400)},
    {route: "/dog", handler: () => "dog"}
]