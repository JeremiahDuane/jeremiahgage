import { useEffect, useState } from 'react'
import styles from './ProjectsList.module.scss'
import axios, { CancelToken } from "axios";
import CircleMeter from "../../Shared/CircleMeter/CircleMeter"
import cfg from '../../../config';
import { Octokit } from "octokit";
import { getCookie, setCookie } from '../../Shared/Cookie/Cookie';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Project from './Project';
const PROJECTS_COOKIE = "PROJECTS"

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

function ProjectsList() {
    var [languages, setLanguages] = useState([]);
    var [refresh, setRefresh] = useState(0);

    
    return (
        <div className={styles.list} onClick={(event) => {event.stopPropagation()}}   >                
            <Carousel responsive={responsive}>
                <Project title="Hello" image="https://community.arm.com/cfs-file/__key/communityserver-blogs-components-weblogfiles/00-00-00-21-42/Code-on-computer-screen.jpg"/>
                <Project title="dajhfdkjafh" image="https://community.arm.com/cfs-file/__key/communityserver-blogs-components-weblogfiles/00-00-00-21-42/Code-on-computer-screen.jpg"/>
                <Project title="Hello" image="https://community.arm.com/cfs-file/__key/communityserver-blogs-components-weblogfiles/00-00-00-21-42/Code-on-computer-screen.jpg"/>
                <Project title="Hello" image="https://community.arm.com/cfs-file/__key/communityserver-blogs-components-weblogfiles/00-00-00-21-42/Code-on-computer-screen.jpg"/>
            </Carousel>
        </div>
    );
}

export default ProjectsList;
