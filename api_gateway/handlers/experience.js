const { experiences } = require("../data");

function Experiences(request, response) {
    response.json(experiences)
}

module.exports = { Experiences };