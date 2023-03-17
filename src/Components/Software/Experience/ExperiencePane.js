
function ExperiencePane(props) {
    return (
        <div>
            <h3>{props.employer}</h3>
            <h3>{props.positions.map((item, idx) => {
                return <div>
                    <h4>{item.title}</h4>
                    <h4>{item.startDate}-{item.endDate ?? "Current"}</h4>
                    <h5>{item.location}</h5>
                    <h5>{item.description}</h5>
                </div>
            })}</h3>
        </div>
    );
}

export default ExperiencePane;
