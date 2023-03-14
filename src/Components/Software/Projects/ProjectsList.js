import styles from '../Software.module.scss'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Project from './Project';

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
};

function ProjectsList(props) {
    return (
        <div className={styles.list}  onClick={(event) => {event.stopPropagation()}}>                
            <Carousel responsive={responsive}>
                {props.projects.map((project, idx) => {
                    return <Project key={idx} title={project.title} image={project.image} summary={project.summary}/>
                })}
            </Carousel>
        </div>
    );
}

export default ProjectsList;
