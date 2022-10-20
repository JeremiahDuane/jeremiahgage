import Landing from './Landing/Landing';
import Languages from './Languages/Languages';
import SinglePageNav from './SinglePageNav/SinglePageNav'

function App() {
    console.log("v1.0.2")
    return (
        <>
            <SinglePageNav>
                <Landing header="Home"/>
                <Languages header="Lang"/>
                {/* <div header="TBD" style={{textAlign:'center', padding:'25%'}}><h1>Coming soon.</h1></div> */}
            </SinglePageNav>
        </>
    );
}

export default App;
