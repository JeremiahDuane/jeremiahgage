const { skills } = require("../data");

function Skills(request, response) {
    response.json(skills)
}

module.exports = { Skills };