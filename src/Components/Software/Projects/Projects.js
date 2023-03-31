import ProjectsList from './ProjectsList';
import Software from '../Software';
import styles from './Project.module.scss';

function Projects(props) {
    return (
        <Software 
            heading="projects"
            demoPath="/repos/anchoredapplications/jeremiahgage/contents/src/Components/Software/Projects/"
            footerPath="/blob/master/src/Components/Software/Projects/Projects.js"
            description={props.descriptions.skills}
        >
            <div className={styles.projects}>
                <ProjectsList projects={props.projects}/>
            </div>
        </Software>
    );
}


export default Projects;
