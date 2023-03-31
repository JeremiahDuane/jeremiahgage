import SinglePageNav from './SinglePageNav/SinglePageNav'
import Landing from './Landing/Landing';
import About from './About/About';
import Languages from './Languages/Languages';
import Experience from './Experience/Experience';
import Projects from './Projects/Projects';

import LocalData from './Data';
import { GitHub } from './API_Gateway'
import Academia from './Academia/Academia';
import Footer from './Footer/Footer';

function App() {
    const data = {...LocalData, ...GitHub()};
    return (
        <>
            <SinglePageNav footer={<Footer/>}>
                <Landing header="Home"/>
                <About header="About" descriptions={data.descriptions}/>
                <Academia header="Academia" school={data.school} descriptions={data.descriptions}/>
                <Experience header="Experience" experiences={data.experiences} descriptions={data.descriptions}/>
                <Projects header="Proj." projects={data.projects} descriptions={data.descriptions}/>
                <Languages header="Lang." languages={data.languages} descriptions={data.descriptions}/>
            </SinglePageNav>
        </>
    );
}

export default App;
