function ReCaptcha (request, response) {
    response.json(request.query)
}

module.exports = { ReCaptcha };