import { useEffect, useState } from 'react'
import { Octokit } from "octokit";
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
                //check to see if the cache exists
                const cacheName = 'github_documents';
                const cacheExists = await caches.has(cacheName);
                const cache = await caches.open(cacheName);
                
                //check to see if the cache has expired 
                const timeCache = await caches.match("/time-cached");
                const timeCached = timeCache ? await timeCache.json() : false;
                const timeCacheHasNotExpired = timeCached && timeCached > (Date.now() - 60*60*1000);
                
                const retVal = [];
                const octokit = new Octokit({
                    auth: cfg.github.api_auth
                });
                
                if (cacheExists && timeCacheHasNotExpired) {
                    const response  = await cache.match(cfg.github.api_url + props.path);                    
                    const body = await response.json()
                    body.forEach(async el => {
                        const r = await cache.match(el.url);
                        const document = await r.json();
                        retVal.push({title: el.name, document: Buffer.from(document.content, 'base64').toString('ascii')});
                        setRefresh(val => val + 1);
                    });
                } else {
                    const response = await octokit.request(cfg.github.api_url + props.path);
                    const body = response.data
                    body.forEach(async el => {
                        cache.add(el.url);
                        const document = await octokit.request(el.url);
                        retVal.push({title: el.name, document: Buffer.from(document.data.content, 'base64').toString('ascii')});
                        setRefresh(val => val + 1);
                    });
                    cache.put('/time-cached', new Response( Date.now()));
                    cache.add(cfg.github.api_url + props.path);
                }
                setDocuments(retVal);
            } catch (err) {
                if (axios.isCancel(err)) {
                  return console.info(err);
                }
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
                        {documents.map((el, idx) => {
                            return (<div key={idx} title={el.title} stylesLinks={styles.links}
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
