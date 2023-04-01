import LanguagesList from './LanguagesList';
import Section from '../../Section';
import styles from './LanguagesList.module.scss'

function Languages(props) {
    return (
        <Section
            heading="languages"
            demoPath="/repos/anchoredapplications/jeremiahgage/contents/src/Components/Software/Languages/"
            footerPath="/blob/master/src/Components/Software/Languages/Languages.js"
            description={props.descriptions.skills}
        >
            <div className={styles.languages}>
                <LanguagesList languages={props.languages}/>
            </div>
        </Section>
    );
}


export default Languages;
