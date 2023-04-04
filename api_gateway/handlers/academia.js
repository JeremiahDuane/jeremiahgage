const { academia } = require("../data");

function Academia(request, response) {
    response.json(academia)
}

module.exports = { Academia };