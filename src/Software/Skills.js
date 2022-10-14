import { useEffect, useState } from 'react'
import styles from './Skills.module.scss'
import FlipCard from '../components/FlipCard.js'
import axios, { CancelToken } from "axios";

function Skills() {
    var [languages, setLanguages] = useState([]);
    const [refreshKey, setRefreshKey] = useState(0);

    useEffect(() => {
        const cancelTokenSource = CancelToken.source();
    
        async function loadSkills() {
            try {
                languages = [];
                var config = {
                    method: 'get',
                    url: 'https://api.github.com/repos/JeremiahDuane/jeremiahgage/languages',
                    cancelToken: cancelTokenSource.token,
                };
                
                const asyncResponse = await axios(config);
                var json = asyncResponse.data
                for (var prop in json) {
                    languages.push({name : prop, value : json[prop]});
                }        

                setLanguages(languages);
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
                            {item.name}
                            <meter key={idx} value={(item.value)/sum}>{item.name}</meter>
                        </>
                    })}
                </div>
                <div className={[styles.card, styles.back].join(" ")}>
                    Back
                </div>
            </FlipCard>
        </div>
    );
}


export default Skills;
