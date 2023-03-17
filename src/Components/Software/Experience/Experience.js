import {experiences, descriptions} from '../data';
import Software from '../Software';
import ExperiencePaneList from './ExperiencePaneList';

function Experience(props) {
    return (
        <Software 
            heading="experience"
            demoPath="/repos/anchoredapplications/jeremiahgage/contents/src/Components/Software/About/"
            footerPath="/blob/master/src/Components/Software/About/About.js"
            description={descriptions.experience}
        >
            <ExperiencePaneList experiences={experiences}/>
        </Software>
    );
}

export default Experience;
