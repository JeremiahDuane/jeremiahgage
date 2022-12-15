import styles from './Languages.module.scss'
import descriptions from '../descriptions';
import FlipCard from '../../Shared/FlipCard/FlipCard'
import LanguagesList from './LanguagesList';
import GitHubFooter from '../GitHubFooter/GitHubFooter';
import GitHubCodeDemo from '../GitHubCodeDemo/GitHubCodeDemo';
 
function Languages() {
    var heading = "Languages"
    return (
        <div className={styles.row}>
            <FlipCard>
                <div className={[styles.card, styles.front].join(" ")}>
                    <h1 className={styles.heading}>
                        {heading}
                    </h1>                   
                    <div className={styles.content}>
                        <LanguagesList/>
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
                            <GitHubCodeDemo path="/repos/anchoredapplications/jeremiahgage/contents/src/Components/Software/Languages/"/>
                        </div>
                    </div>
                    <GitHubFooter path="/blob/master/src/Components/Software/Languages/Languages.js"/>
                </div>
            </FlipCard>
        </div>
    );
}


export default Languages;
