import SinglePageNav from './SinglePageNav/SinglePageNav'
import Landing from './Landing/Landing';
import About from './About/About';
import Languages from './Languages/Languages';
import Experience from './Experience/Experience';
import Projects from './Projects/Projects';

import LocalData from './Data';
import { GitHub } from './API_Gateway'

function App() {
    const data = {...LocalData, ...GitHub()};
    return (
        <>
            <SinglePageNav>
                <Landing header="Home"/>
                <About header="About" descriptions={data.descriptions}/>
                <Languages header="Lang." languages={data.languages} descriptions={data.descriptions}/>
                <Experience header="Experience" experiences={data.experiences} descriptions={data.descriptions}/>
                <Projects header="Proj." projects={data.projects} descriptions={data.descriptions}/>
                {/* <div header="TBD" style={{textAlign:'center', padding:'25%'}}><h1>Coming soon.</h1></div> */}
            </SinglePageNav>
        </>
    );
}

export default App;
