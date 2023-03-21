import ProjectsList from './ProjectsList';
import Software from '../Software';

function Projects(props) {
    return (
        <Software 
            heading="projects"
            demoPath="/repos/anchoredapplications/jeremiahgage/contents/src/Components/Software/Projects/"
            footerPath="/blob/master/src/Components/Software/Projects/Projects.js"
            description={props.descriptions.skills}
        >
            <ProjectsList projects={props.projects}/>
        </Software>
    );
}


export default Projects;
