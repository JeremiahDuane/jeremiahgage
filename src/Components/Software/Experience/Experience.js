import {experiences, descriptions} from '../Data';
import { useState } from 'react'
import Software from '../Software';
import ExperiencePaneList from './ExperiencePaneList';
import ExperienceDescriptionPane from './ExperienceDescriptionPane';
import styles from './Experience.module.scss'

function Experience(props) {
    const [description, setDescription] = useState(null);
    const handleClick = (value) => {
        setDescription(null);
        setTimeout(() => {
            setDescription(value);
        }, description ? 100 : 0)
    }

    return (
        <Software 
            heading="experience"
            demoPath="/repos/anchoredapplications/jeremiahgage/contents/src/Components/Software/About/"
            footerPath="/blob/master/src/Components/Software/About/About.js"
            description={descriptions.experience}
        >
            <div className={styles.experience}>
                <ExperiencePaneList experiences={experiences} handleClick={handleClick}/>
                <ExperienceDescriptionPane description={description}/>
            </div>
        </Software>
    );
}

export default Experience;
