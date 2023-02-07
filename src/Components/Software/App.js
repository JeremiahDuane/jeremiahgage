import Landing from './Landing/Landing';
import Languages from './Languages/Languages';
import Projects from './Projects/Projects';
import SinglePageNav from './SinglePageNav/SinglePageNav'

function App() {
    console.log("v1.0.3")
    return (
        <>
            <SinglePageNav>
                <Landing header="Home"/>
                <Languages header="Lang."/>
                <Projects header="Proj."/>
                {/* <div header="TBD" style={{textAlign:'center', padding:'25%'}}><h1>Coming soon.</h1></div> */}
            </SinglePageNav>
        </>
    );
}

export default App;
