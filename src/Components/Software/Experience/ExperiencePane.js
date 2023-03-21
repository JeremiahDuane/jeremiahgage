
import styles from "./Experience.module.scss"
import {FormatDateTimeAsString, FormatDurationAsString} from '../System'

function ExperiencePane(props) {
    const startDate = FormatDateTimeAsString(props.startDate);
    const endDate = props.endDate ? FormatDateTimeAsString(props.endDate) : 'Present';
    const duration = props.endDate ? FormatDurationAsString(props.startDate, props.endDate) : FormatDurationAsString(props.startDate, new Date())
    const emitDescription = (event) => {
        event.stopPropagation(); 
        const experience = {
            jobTitle: props.title, 
            jobType: props.jobType,
            employer: props.employer,
            displayDate: `${startDate} - ${endDate}`,
            duration: duration, 
            location: props.location,
            description: props.description
        }
        props.handleClick(experience)
    }

    return (
        <div className={styles.experiencePane} onClick={emitDescription}>
            <table>
                <tbody>
                    <tr>
                        <td><h3>{props.title}</h3></td>
                        <td><h4>{startDate} - {endDate}</h4></td>
                    </tr>
                    <tr>
                        <td><h4>{props.employer}</h4></td>
                        <td>
                            <h5>
                                {duration} · {props.jobType}
                            </h5>
                        </td>
                    </tr>
                    <tr>
                        <td><h5>{props.location}</h5></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ExperiencePane;
