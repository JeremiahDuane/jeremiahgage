import Software from '../Software';
import styles from './About.module.scss';

export default function About(props) {
    return (
        <div className={styles.about}>
            <Software 
                heading="about"
                demoPath="/repos/anchoredapplications/jeremiahgage/contents/src/Components/Software/About/"
                footerPath="/blob/master/src/Components/Software/About/About.js"
                description={props.descriptions.about}
            />
        </div>
    );
}