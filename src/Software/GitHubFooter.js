import styles from './GitHubFooter.module.scss'
import cfg from '../config';

function GitHubFooter(props) {
    return (
        <div className={styles.github}>
            <p>
                GitHub: <a target="_blank" rel="noreferrer" href={cfg.github.site_url + props.path}>
                {cfg.github.site_url + props.path}
                </a>
            </p>
        </div>
    );
}


export default GitHubFooter;
