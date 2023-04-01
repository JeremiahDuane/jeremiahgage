import styles from './GitHubFooter.module.scss'
import data from '../../data';

function GitHubFooter(props) {
    return (
        <div className={styles.github}>
            <p>
                GitHub: <a target="_blank" rel="noreferrer" href={data.urls.GitHub.site_url + props.path} onClick={(event) => {event.stopPropagation()}}>
                {data.urls.GitHub.site_url + props.path}
                </a>
            </p>
        </div>
    );
}


export default GitHubFooter;
