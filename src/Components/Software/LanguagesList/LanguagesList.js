import { useEffect, useState } from 'react'
import styles from './LanguagesList.module.scss'
import axios, { CancelToken } from "axios";
import CircleMeter from "../../Shared/CircleMeter/CircleMeter"
import cfg from '../../../config';
import { Octokit } from "octokit";

function SkillsList() {
    var [languages, setLanguages] = useState([]);
    var [refresh, setRefresh] = useState(0);

    useEffect(() => {
        const cancelTokenSource = CancelToken.source();
    
        async function loadSkills() {
            try {
                const octokit = new Octokit({
                    auth: cfg.github.api_auth
                });
                var asyncResponse = await octokit.request(cfg.github.api_url + '/users/JeremiahDuane/repos');

                asyncResponse.data.map(async(repo) => {
                    // this repo is primarily auto-generated code, and is not applicable to this query
                    if (repo.id === 270893091) return;
                    
                    await octokit.request(repo.languages_url).then((response) => {
                        for (var prop in response.data) {
                            if (
                                !languages.some(item => {
                                    var retVal = item.name === prop
                                    if (retVal) {
                                        item.value += response.data[prop]
                                    }
                                    return retVal
                                }) 
                            ) {
    
                                languages.push({name : prop, value : response.data[prop]});
                            }
                        }                        
                        setRefresh(val => val + 1)
                    });        
                })
            } catch (err) {
                if (axios.isCancel(err)) {
                  return console.info(err);
                }
                console.error(err);
            }
        }
    
        loadSkills();
    
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
                    <CircleMeter value={(item.value)/sum} name={item.name}/>
                </div>
            })}
        </div>
    );
}


export default SkillsList;
