import { useEffect, useState } from 'react'
import styles from './GitHubCodeDemo.module.scss'
import axios, { CancelToken } from "axios";
import cfg from '../config';
import { Octokit, App } from "octokit";

function GitHubCodeDemo(props) {
    var [code, setCode] = useState("");

    useEffect(() => {
        const cancelTokenSource = CancelToken.source();
    
        async function loadCode() {
            try {
                const octokit = new Octokit({
                    auth: cfg.github.api_auth
                });
                const asyncResponse = await octokit.request(cfg.github.api_url + props.path);
                setCode(Buffer.from(asyncResponse.data.content, 'base64').toString('ascii'))
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
            <textarea 
                readOnly 
                value={code}
                onClick={(event) => {event.stopPropagation()}}            
            ></textarea>
        </div>
    );
}


export default GitHubCodeDemo;
