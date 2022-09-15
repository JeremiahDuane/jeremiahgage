import Landing from './Landing';
import Career from './Career';
import SinglePageNav from './SinglePageNav.js'

function App() {
    return (
        <>
            <SinglePageNav>
                <Landing header="Home"/>
                <Career header="Career"/>
                <div header="TBD" style={{textAlign:'center', padding:'25%'}}><h1>Coming soon.</h1></div>
            </SinglePageNav>
        </>
    );
}

export default App;
