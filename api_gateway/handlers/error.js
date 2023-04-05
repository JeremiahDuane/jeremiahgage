
function Error(response, number, errorReason) {    
    response.status(number)
    response.json({ message: errorReason})
}

function Error400(request, response) {    
    Error(response, 400, "reCaptcha validation failed")
}

module.exports = { Error400 };