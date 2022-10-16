import Landing from './Landing';
import Skills from './Skills';
import SinglePageNav from './SinglePageNav.js'

function App() {
    console.log("v1.0.2")
    return (
        <>
            <SinglePageNav>
                <Landing header="Home"/>
                <Skills header="Skills"/>
                {/* <div header="TBD" style={{textAlign:'center', padding:'25%'}}><h1>Coming soon.</h1></div> */}
            </SinglePageNav>
        </>
    );
}

export default App;
