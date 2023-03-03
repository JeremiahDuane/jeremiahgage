import { useEffect, useState } from 'react'
import axios, { CancelToken } from "axios";
import cfg from '../../config';
import { Octokit } from "octokit";

function GitHub() {
    var [languages, setLanguages] = useState([]);
    var [projects, setProjects] = useState([]);
    var [repos, setRepos] = useState([]);
    var [refresh, setRefresh] = useState(0);

    //const projects = [{title:"title", summary:"summary", image:"https://community.arm.com/cfs-file/__key/communityserver-blogs-components-weblogfiles/00-00-00-21-42/Code-on-computer-screen.jpg"}]
    useEffect(() => {
        const cancelTokenSource = CancelToken.source();
    
        const load = async () => {
            try {
                //check to see if the cache exists
                const cacheExists = await caches.has("github_repos");
                const cache = await caches.open("github_repos");
                const cacheLanguages = await caches.open("github_languages");

                //check to see if the cache has expired 
                const timeCache = await caches.match("/time-cached");
                
                const timeCached = timeCache ? await timeCache.json() : false;
                const timeCacheHasNotExpired = timeCached && timeCached > (Date.now() - 60*60*1000);
                
                const path = '/users/anchoredapplications/repos';
                const octokit = new Octokit({
                    auth: cfg.github.api_auth
                });

                if (cacheExists && timeCacheHasNotExpired) {
                    const response = await cache.match(cfg.github.api_url + path);
                    const body = await response.json()

                    const arrayProjects = [];
                    const arrayLanguages = [];
                    await body.map(async(repo) => {
                        repos.push(repo);

                        const project = {title: repo.name, summary: repo.description, image: `${repo.html_url}/blob/master/thumbnail.png?raw=true`}
                        arrayProjects.push(project);

                        const languageResponse = await cacheLanguages.match(repo.languages_url);
                        const languageBody = await languageResponse.json();

                        for (var prop in languageBody) {
                            if (
                                !arrayLanguages.some(item => {
                                    if (item.name === prop) {
                                        item.value += languageBody[prop]
                                        return true
                                    }
                                }) 
                            ) {
                                arrayLanguages.push({name : prop, value : languageBody[prop]});    
                                setRefresh(val => val + 1)
                                setProjects(arrayProjects)                
                                setLanguages(arrayLanguages)
                            }
                        }         
                    });                           
                } else {
                    const response = await octokit.request(cfg.github.api_url + path);
                    const body = response.data;
                    
                    cache.add(cfg.github.api_url + path);
                    cache.put('/time-cached', new Response( Date.now()));
                    
                    const arrayProjects = [];
                    const arrayLanguages = [];
                    await body.map(async(repo) => {
                        repos.push(repo)

                        const project = {title: repo.name, summary: repo.description, image: `${repo.html_url}/blob/master/thumbnail.png?raw=true`}
                        arrayProjects.push(project);

                        cacheLanguages.add(repo.languages_url);
                        cacheLanguages.put('/time-cached', new Response( Date.now()));
                        
                        // this repo is primarily auto-generated code, and is not applicable to this query
                        if (repo.id === 270893091) return;
                        const languageResponse = await octokit.request(repo.languages_url);
                        const languageBody = languageResponse.data;
                        for (var prop in languageBody) {
                            if (
                                !arrayLanguages.some(item => {
                                    if (item.name === prop) {
                                        item.value += languageBody[prop]
                                        return true
                                    }
                                }) 
                                ) {
                                arrayLanguages.push({name : prop, value : languageBody[prop]});
                                setRefresh(val => val + 1)
                                setProjects(arrayProjects)                
                                setLanguages(arrayLanguages)                
                            }
                        }        
                    });
                }
            } catch (err) {
                if (axios.isCancel(err)) {
                    return console.info(err);
                }
                console.error(err);
            }
        }

        load();
    
        return () => {
          // here we cancel the previous in-flight, unfinished http request
          cancelTokenSource.cancel(
            "Cancelling previous http call because a new one was made ;-)"
          );
        };
    }, []);
    
    return { repos: repos, languages: languages, projects: projects}
}

export { GitHub };