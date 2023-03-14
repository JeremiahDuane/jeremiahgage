import Landing from './Landing/Landing';
import Languages from './Languages/Languages';
import Projects from './Projects/Projects';
import SinglePageNav from './SinglePageNav/SinglePageNav'

import { GitHub } from './API_Gateway'
import About from './About/About';
import Experience from './Experience/Experience';

function App() {
    const data = GitHub();
    return (
        <>
            <SinglePageNav>
                <Landing header="Home"/>
                <About header="About"/>
                <Languages header="Lang." languages={data.languages}/>
                <Experience header="Experience"/>
                <Projects header="Proj." projects={data.projects} />
                {/* <div header="TBD" style={{textAlign:'center', padding:'25%'}}><h1>Coming soon.</h1></div> */}
            </SinglePageNav>
        </>
    );
}

export default App;
