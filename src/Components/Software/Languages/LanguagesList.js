import { useEffect, useState } from 'react'
import styles from './LanguagesList.module.scss'
import axios, { CancelToken } from "axios";
import CircleMeter from "../../Shared/CircleMeter/CircleMeter"
import cfg from '../../../config';
import { Octokit } from "octokit";
import { getCookie, setCookie } from '../../Shared/Cookie/Cookie';

const LANGUAGES_COOKIE = "Languages"

function LanguagesList() {
    var [languages, setLanguages] = useState([]);
    var [refresh, setRefresh] = useState(0);

    useEffect(() => {
        const cancelTokenSource = CancelToken.source();
    
        const loadLanguages = async () => {
            try {
                //check to see if the cache exists
                const cacheName = 'github_languages';
                const cacheExists = await caches.has(cacheName);
                const cache = await caches.open(cacheName);
                
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
                    const body = await response.json();
                    body.map(async(repo) => {
                        // this repo is primarily auto-generated code, and is not applicable to this query
                        if (repo.id === 270893091) return;

                        const languageResponse = await cache.match(repo.languages_url);
                        const languageBody = await languageResponse.json();
                        for (var prop in languageBody) {
                            if (
                                !languages.some(item => {
                                    if (item.name === prop) {
                                        item.value += languageBody[prop]
                                        return true
                                    }
                                }) 
                                ) {
                                    languages.push({name : prop, value : languageBody[prop]});
                                }
                            }                        
                            setRefresh(val => val + 1)
                        }       
                    );
                } else {
                    const response = await octokit.request(cfg.github.api_url + path);
                    const body = response.data;
                    cache.add(cfg.github.api_url + path);
                    
                    body.map(async(repo) => {
                        cache.put('/time-cached', new Response( Date.now()));
                        cache.add(repo.languages_url);

                        // this repo is primarily auto-generated code, and is not applicable to this query
                        if (repo.id === 270893091) return;
                        const languageResponse = await octokit.request(repo.languages_url);
                        const languageBody = languageResponse.data;
                        for (var prop in languageBody) {
                            if (
                                !languages.some(item => {
                                    if (item.name === prop) {
                                        item.value += languageBody[prop]
                                        return true
                                    }
                                }) 
                                ) {
                                    languages.push({name : prop, value : languageBody[prop]});
                                }
                            }                        
                            setRefresh(val => val + 1)
                        }       
                    );
                }
                } catch (err) {
                    if (axios.isCancel(err)) {
                        return console.info(err);
                    }
                    console.error(err);
                }
        }

        loadLanguages();
    
        return () => {
          // here we cancel the previous in-flight, unfinished http request
          cancelTokenSource.cancel(
            "Cancelling previous http call because a new one was made ;-)"
          );
        };
    }, []);
    
    return (
        <div className={styles.list}>                 
            {languages.map((item, idx) => {
                const sum = languages.reduce((accumulator, object) => {
                    return accumulator + object.value;
                }, 0);
                return <div key={idx} className={styles.circleMeter__wrapper}>
                    <CircleMeter  value={(item.value)/sum} name={item.name}/>
                </div>
            })}
        </div>
    );
}

export default LanguagesList;
