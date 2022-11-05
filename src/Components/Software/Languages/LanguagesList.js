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
                const cacheName = 'github_languages';
                const path = '/users/JeremiahDuane/repos';
                const cacheExists = await caches.has(cacheName);
                const cache = await caches.open(cacheName);
                const retVal = [];
                const octokit = new Octokit({
                    auth: cfg.github.api_auth
                });
                
                if (cacheExists) {
                    const response = await cache.match(cfg.github.api_url + path);
                    const body = await response.json();
                    body.map(async(repo) => {
                        // this repo is primarily auto-generated code, and is not applicable to this query
                        if (repo.id === 270893091) return;
                        cache.add(repo.languages_url);
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
                    cache.add(cfg.github.api_url + path);
                    const body = response.data;
                    body.map(async(repo) => {
                        // this repo is primarily auto-generated code, and is not applicable to this query
                        if (repo.id === 270893091) return;
                        cache.add(repo.languages_url)
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
