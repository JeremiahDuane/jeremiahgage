import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Project from './Project';

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 2500 },
        items: 5
    },
    largeDesktop: {
        breakpoint: { max: 2500, min: 2000 },
        items: 4
    },
    desktop: {
        breakpoint: { max: 2000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 700, min: 0 },
        items: 1
    }
};

function ProjectsList(props) {
    return (
        <div onClick={(event) => {event.stopPropagation()}}>                
            <Carousel infinite={true} responsive={responsive}>
                {props.projects.map((project, idx) => {
                    return <Project key={idx} title={project.title} image={project.image} summary={project.summary}/>
                })}
            </Carousel>
        </div>
    );
}

export default ProjectsList;
