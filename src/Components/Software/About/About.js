import Software from '../Software';
import styles from './About.module.scss';

export default function About(props) {
    return (
        <Software 
            heading="about"
            demoPath="/repos/anchoredapplications/jeremiahgage/contents/src/Components/Software/About/"
            footerPath="/blob/master/src/Components/Software/About/About.js"
            description={props.descriptions.about}
        >
            <div className={styles.about}>
                <div>
                    {props.descriptions.about.front}
                </div>
            </div>
        </Software>
    );
}