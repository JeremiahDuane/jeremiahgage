import ProjectsList from './ProjectsList';
import Software from '../Software';
import styles from './Project.module.scss';

function Projects(props) {
    return (
        <div className={styles.projects}>
            <Software 
                heading="projects"
                demoPath="/repos/anchoredapplications/jeremiahgage/contents/src/Components/Software/Projects/"
                footerPath="/blob/master/src/Components/Software/Projects/Projects.js"
                description={props.descriptions.skills}
            >
                <ProjectsList projects={props.projects}/>
            </Software>
        </div>
    );
}


export default Projects;
