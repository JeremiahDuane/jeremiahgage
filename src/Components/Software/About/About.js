import {descriptions} from '../data';
import Software from '../Software';

function About(props) {
    return (
        <Software 
            heading="about"
            demoPath="/repos/anchoredapplications/jeremiahgage/contents/src/Components/Software/About/"
            footerPath="/blob/master/src/Components/Software/About/About.js"
            description={descriptions.about}
        >
        </Software>
    );
}


export default About;
