import ExperiencePane from './ExperiencePane';

function ExperiencePaneList(props) {
    return props.experiences.map((item, idx) => {
        return <ExperiencePane key={idx} positions={item.positions} employer={item.employer}/>
    });
}

export default ExperiencePaneList;