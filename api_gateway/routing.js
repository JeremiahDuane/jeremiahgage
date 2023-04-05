const { SendEmail } = require("./handlers/email")
const { SendIfReCaptcha } = require("./handlers/recaptcha")
const { Error400 } = require("./handlers/error")
const { GitHubLanguages, GitHubProjects, GitHubDocumentsByDocument } = require("./handlers/github")
const { Experiences } = require("./handlers/experience")
const { Skills } = require("./handlers/skills")
const { Academia } = require("./handlers/academia")
const { Decorations } = require("./handlers/decorations")

module.exports = {
    POST: [
        {route: "/api/email/send", handler: (req, res) => SendIfReCaptcha(req, res, SendEmail, Error400)},
        {route: "/api/github/documents", handler: GitHubDocumentsByDocument},
    ],
    GET: [
        {route: "/api/github/languages", handler: GitHubLanguages},
        {route: "/api/github/projects", handler: GitHubProjects},
        {route: "/api/me/experiences", handler: Experiences},
        {route: "/api/me/skills", handler: Skills},
        {route: "/api/me/academia", handler: Academia},
        {route: "/api/me/decorations", handler: Decorations},
    ]
}