async function SendEmail(request, response) {
    const data = request.body

    console.log(data)
    response.status(201)
    response.json({ message: "Message sent!", body: data})
}

module.exports = { SendEmail };