import {descriptions} from '../data';
import LanguagesList from './LanguagesList';
import Software from '../Software';

function Languages(props) {
    return (
        <Software 
            heading="languages"
            demoPath="/repos/anchoredapplications/jeremiahgage/contents/src/Components/Software/Languages/"
            footerPath="/blob/master/src/Components/Software/Languages/Languages.js"
            description={descriptions.skills}
        >
            <LanguagesList languages={props.languages}/>
        </Software>
    );
}


export default Languages;
