const { Octokit } = require("octokit");
const octokit = new Octokit({
    auth: process.env.GITHUB_SITE_AUTH
});

//STATE VARIABLES
const GITHUB_REPOSITORIES = { value: [], dateUpdated: null }
const GITHUB_PROJECTS = { value: [], dateUpdated: null }
const GITHUB_LANGUAGES = { value: [], dateUpdated: null }

function StateIsValid(state) {
    var stateIsNotNull = !!state
    const ONE_HOUR = 5 * 60 * 1000
    var stateIsNotOutdated = ((new Date()) - state.dateUpdated) < ONE_HOUR

    return stateIsNotNull && stateIsNotOutdated
}

async function GetGitHubRepositories() {
    if (!StateIsValid(GITHUB_REPOSITORIES)) {
        await LoadGitHubRepositories() 
    }    
    return GITHUB_REPOSITORIES
}

async function GetGitHubProjects() {
    if (!StateIsValid(GITHUB_PROJECTS)) {
        await LoadGitHubProjects() 
    }    
    return GITHUB_PROJECTS
}

async function GetGitHubLanguages() {
    if (!StateIsValid(GITHUB_LANGUAGES)) {
        await LoadGitHubLanguages() 
    }    
    return GITHUB_LANGUAGES
}

async function LoadGitHubRepositories() {
    const response = await octokit.request(process.env.GITHUB_API_URL + process.env.GITHUB_API_REPOS_URL)
    const repositories = response.data
    
    GITHUB_REPOSITORIES.value = repositories
    GITHUB_REPOSITORIES.dateUpdated = new Date()
    
    return response.status;
}

async function LoadGitHubProjects() {
    const repositories = await GetGitHubRepositories()
    const projects = []
    repositories.value.forEach(repo => {
        projects.push({title: repo.name, summary: repo.description, image: `${repo.html_url}/blob/master/thumbnail.png?raw=true`}) 
    });

    GITHUB_PROJECTS.value = projects
    GITHUB_PROJECTS.dateUpdated = new Date()
    
    return projects;
}

async function LoadGitHubLanguages() {
    const repositories = await GetGitHubRepositories()

    const languageURLs = []
    for (let repo of repositories.value) {
        languageURLs.push(repo.languages_url)
    }

    const languageResponses = []
    for (let url of languageURLs) {
        const languageResponse = await octokit.request(url).catch(error => console.log(error))        
        languageResponses.push(languageResponse)
    }

    const languages = []
    languageResponses.forEach((languageResponse) => {
        const data = languageResponse.data
        for (var prop in data) {
            if (
                !languages.some(item => {
                    if (item.name === prop) {
                        item.value += data[prop]
                        return true
                    }
                }) 
                ) {
                languages.push({name : prop, value : data[prop]});  
            }
        } 
    })

    GITHUB_LANGUAGES.value = languages
    GITHUB_LANGUAGES.dateUpdated = new Date()

    return languages;
}

async function GitHubLanguages(request, response) {
    const languages = await GetGitHubLanguages()
    response.json(languages)
}

async function GitHubProjects(request, response) {
    const projects = await GetGitHubProjects()
    response.json(projects)
}

module.exports = { GitHubLanguages, GitHubProjects };