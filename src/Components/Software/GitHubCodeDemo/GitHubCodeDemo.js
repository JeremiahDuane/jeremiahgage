import { useEffect, useState } from 'react'
import { Octokit, App } from "octokit";
import axios, { CancelToken } from "axios";
import styles from './GitHubCodeDemo.module.scss'
import cfg from '../../../config';
import TabGroup from '../../Shared/TabGroup/TabGroup';

function GitHubCodeDemo(props) {
    const [documents, setDocuments] = useState([]);
    var [refresh, setRefresh] = useState(0);

    var isActive = false;
    useEffect(() => {
        const cancelTokenSource = CancelToken.source();
    
        async function loadCode() {
            try {
                const octokit = new Octokit({
                    auth: cfg.github.api_auth
                });
                const asyncResponse = await octokit.request(cfg.github.api_url + props.path);
                const retVal = [];
                asyncResponse.data.forEach(async el => {
                    const document = await octokit.request(el.url);
                    retVal.push({title: el.name, document: Buffer.from(document.data.content, 'base64').toString('ascii')});
                    setRefresh(val => val + 1)
                });
                setDocuments(retVal)
            } catch (err) {
                if (axios.isCancel(err)) {
                  return console.info(err);
                }
                console.error(err);
            }
        }
    
        loadCode();
    
        return () => {
          // here we cancel the previous in-flight, unfinished http request
          cancelTokenSource.cancel(
            "Cancelling previous http call because a new one was made ;-)"
          );
        };
    }, []);
    
    return (
        <div className={styles.gitHubCodeDemo}>

                <div 
                    className={styles.tabGroup__wrapper}
                    onClick={(event) => {event.stopPropagation()}}            
                    >
                    <TabGroup>
                        {documents.map((el) => {
                            return (<div title={el.title} stylesLinks={styles.links}
                                className={[styles.tab, isActive ? styles.active : ""].join(" ")}>            
                                <textarea 
                                    readOnly 
                                    value={el.document}
                                    onClick={(event) => {event.stopPropagation()}}            
                                ></textarea>
                            </div>)
                        })}
                    </TabGroup>
            </div> 
        </div>
    );
}


export default GitHubCodeDemo;
