const axios = require("axios")
require('dotenv').config()

async function SendIfReCaptcha(request, response, ifSuccess, ifFail) {
    if (request.body && request.body.token) {
        const isHuman = await ValidateReCaptcha(request.body.token)
        if (isHuman) {
            return ifSuccess(request, response)
        }
    } 
    return ifFail(request, response)
}

async function ValidateReCaptcha(token) {
    const secret = process.env.GOOGLE_RECAPTCHA_SECRET_KEY
    const response = await axios.get(`https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`);
    const status = response.data.success
    return status
}

module.exports = { SendIfReCaptcha };