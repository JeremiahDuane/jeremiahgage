const { decorations } = require("../data");

function Decorations(request, response) {
    response.json(decorations)
}

module.exports = { Decorations };