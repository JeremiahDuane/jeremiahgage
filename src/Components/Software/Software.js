import styles from './Software.module.scss'
import FlipCard from './../Shared/FlipCard/FlipCard'
import GitHubFooter from './GitHubFooter/GitHubFooter';
import GitHubCodeDemo from './GitHubCodeDemo/GitHubCodeDemo';

function Software(props) {
    return (
        <div className={styles.row}>
            <FlipCard>
                <div className={[styles.card, styles.front].join(" ")}>
                    <h1 className={styles.heading}>
                        {props.heading}
                    </h1>                   
                    <div className={styles.content}>
                        {props.children}
                        <div className={styles.wrapper}>
                            {props.description.front}
                        </div>
                    </div>
                </div>
                <div className={[styles.card, styles.back].join(" ")}>
                    <h1 className={styles.heading}>
                        {props.heading}
                    </h1>        
                    <div className={styles.content}>
                        <div className={styles.wrapper}>
                            {props.description.back}
                        </div>
                        <div className={styles.wrapper}>
                            <GitHubCodeDemo path={props.demoPath}/>
                        </div>
                    </div>
                    <GitHubFooter path={props.footerPath}/>
                </div>
            </FlipCard>
        </div>
    );
}


export default Software;
