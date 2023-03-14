import styles from '../Software.module.scss'
import descriptions from '../descriptions';
import FlipCard from '../../Shared/FlipCard/FlipCard'
import GitHubFooter from '../GitHubFooter/GitHubFooter';
import GitHubCodeDemo from '../GitHubCodeDemo/GitHubCodeDemo';

function About(props) {
    var heading = "About"
    return (
        <div className={styles.row}>
            <FlipCard>
                <div className={[styles.card, styles.front].join(" ")}>
                    <h1 className={styles.heading}>
                        {heading}
                    </h1>                   
                    <div className={styles.content}>
                        <div className={styles.wrapper}>
                            {descriptions.projects.front}
                        </div>
                    </div>
                </div>
                <div className={[styles.card, styles.back].join(" ")}>
                    <h1 className={styles.heading}>
                        {heading}
                    </h1>        
                    <div className={styles.content}>
                        <div className={styles.wrapper}>
                            {descriptions.projects.back}
                        </div>
                        <div className={styles.wrapper}>
                            <GitHubCodeDemo path="/repos/anchoredapplications/jeremiahgage/contents/src/Components/Software/About/"/>
                        </div>
                    </div>
                    <GitHubFooter path="/blob/master/src/Components/Software/About/About.js"/>
                </div>
            </FlipCard>
        </div>
    );
}


export default About;
