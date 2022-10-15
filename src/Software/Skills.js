import { useEffect, useState } from 'react'
import styles from './Skills.module.scss'
import FlipCard from '../components/FlipCard.js'
import axios, { CancelToken } from "axios";
import CircleMeter from "../components/CircleMeter"
import config from '../config';

function Skills() {
    var [languages, setLanguages] = useState([]);
    const [refreshKey, setRefreshKey] = useState(0);

    useEffect(() => {
        const cancelTokenSource = CancelToken.source();
    
        async function loadSkills() {
            try {
                var asyncResponse;
                var config = {
                    method: 'get',
                    url: 'https://api.github.com/users/JeremiahDuane/repos',
                    auth: "",
                    cancelToken: cancelTokenSource.token,
                };
                
                languages = [];
                asyncResponse = await axios(config);
                const urls = [];
                asyncResponse.data.map((repo) => {
                    if (repo.id == 270893091) return;
                    urls.push(repo.languages_url)
                    console.log(repo)
                })

                urls.map(async(url, index) => {
                    config = {
                        method: 'get',
                        url: url,
                        auth: "",
                        cancelToken: cancelTokenSource.token,
                    };
                    asyncResponse = await axios(config);
                    const json = asyncResponse.data
                    for (var prop in json) {
                        if (
                            !languages.some(item => {
                                var retVal = item.name == prop
                                if (retVal) {
                                    item.value += json[prop]
                                }
                                return retVal
                            }) 
                        ) {

                            languages.push({name : prop, value : json[prop]});
                        }
                    } 

                    if (index == urls.length-1) {
                        setLanguages(languages)
                    }
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
          // here we cancel preveous http request that did not complete yet
          cancelTokenSource.cancel(
            "Cancelling previous http call because a new one was made ;-)"
          );
        };
    }, [refreshKey]);
    
    return (
        <div className={styles.row}>
            <FlipCard>
                <div className={[styles.card, styles.front].join(" ")}>
                    {languages.map((item, idx) => {
                        const sum = languages.reduce((accumulator, object) => {
                            return accumulator + object.value;
                        }, 0);
                        return <>
                            <CircleMeter key={idx} value={(item.value)/sum} name={item.name}/>
                        </>
                    })}
                </div>
                <div className={[styles.card, styles.back].join(" ")}>
                    Back
                    <div className={styles.github}>
                        Look at the code: <a target="_blank" href={config.github_url + "/blob/master/src/Software/Skills.js"}>
                            {config.github_url + "/blob/master/src/Software/Skills.js"}
                        </a>
                    </div>
                </div>
            </FlipCard>
        </div>
    );
}


export default Skills;
