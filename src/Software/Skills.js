import styles from './Skills.module.scss'
import descriptions from './descriptions';
import FlipCard from '../components/FlipCard.js'
import SkillsList from './SkillsList';
import GitHubFooter from './GitHubFooter';
import GitHubCodeDemo from './GithubCodeDemo';

function Skills() {
    var heading = "Skills"
    return (
        <div className={styles.row}>
            <FlipCard>
                <div className={[styles.card, styles.front].join(" ")}>
                    <h1 className={styles.heading}>
                        {heading}
                    </h1>                   
                    <div className={styles.content}>
                        <SkillsList/>
                        <div className={styles.wrapper}>
                            {descriptions.skills.front}
                        </div>
                    </div>
                </div>
                <div className={[styles.card, styles.back].join(" ")}>
                    <h1 className={styles.heading}>
                        {heading}
                    </h1>        
                    <div className={styles.content}>
                        <div className={styles.wrapper}>
                            {descriptions.skills.back}
                        </div>
                        <div className={styles.wrapper}>
                            <GitHubCodeDemo path="/repos/JeremiahDuane/jeremiahgage/contents/src/Software/Skills.js"/>
                        </div>
                    </div>
                    <GitHubFooter path="/blob/master/src/Software/Skills.js"/>
                </div>
            </FlipCard>
        </div>
    );
}


export default Skills;
