const { SendEmail } = require("./handlers/email")
const { SendIfReCaptcha } = require("./handlers/recaptcha")
const { Error400 } = require("./handlers/error")
const { GitHubLanguages, GitHubProjects } = require("./handlers/github")

module.exports = [
    {route: "/api/email/send", handler: (req, res) => SendIfReCaptcha(req, res, SendEmail, Error400)},
    {route: "/api/github/languages", handler: GitHubLanguages},
    {route: "/api/github/projects", handler: GitHubProjects},
]