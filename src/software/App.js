import SinglePageNav from './components/SinglePageNav/SinglePageNav'
import Landing from './components/sections/Landing/Landing';
import About from './components/sections/About/About';
import Languages from './components/sections/Languages/Languages';
import Experience from './components/sections/Experience/Experience';
import Projects from './components/sections/Projects/Projects';

import LocalData from './data';
import { GitHub } from './API_Gateway'
import Academia from './components/sections/Academia/Academia';
import Footer from './components/sections/Footer/Footer';
import Contact from './components/sections/Contact/Contact';

function App() {
    const data = {...LocalData, ...GitHub()};
    return (
        <SinglePageNav footer={<Footer/>}>
            <Landing header="Home"/>
            <About header="About" descriptions={data.descriptions}/>
            <Academia header="Academia" school={data.school} descriptions={data.descriptions}/>
            <Experience header="Experience" experiences={data.experiences} descriptions={data.descriptions}/>
            <Projects header="Proj." projects={data.projects} descriptions={data.descriptions}/>
            <Languages header="Lang." languages={data.languages} descriptions={data.descriptions}/>
            <Contact header="Contact" descriptions={data.descriptions}/>
        </SinglePageNav>
    );
}

export default App;
