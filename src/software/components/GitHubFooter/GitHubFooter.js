import styles from './GitHubFooter.module.scss'
import data from '../../data';

function GitHubFooter(props) {
    return (
        <div className={styles.github}>
            <p>
                GitHub: <a target="_blank" rel="noreferrer" href={process.env.REACT_APP_GITHUB_SITE_URL + props.path} onClick={(event) => {event.stopPropagation()}}>
                {process.env.REACT_APP_GITHUB_SITE_URL + props.path}
                </a>
            </p>
        </div>
    );
}


export default GitHubFooter;
