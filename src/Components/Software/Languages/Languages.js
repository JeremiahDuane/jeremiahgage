import LanguagesList from './LanguagesList';
import Software from '../Software';
import styles from './LanguagesList.module.scss'

function Languages(props) {
    return (
        <Software 
            heading="languages"
            demoPath="/repos/anchoredapplications/jeremiahgage/contents/src/Components/Software/Languages/"
            footerPath="/blob/master/src/Components/Software/Languages/Languages.js"
            description={props.descriptions.skills}
        >
            <div className={styles.languages}>
                <LanguagesList languages={props.languages}/>
            </div>
        </Software>
    );
}


export default Languages;
