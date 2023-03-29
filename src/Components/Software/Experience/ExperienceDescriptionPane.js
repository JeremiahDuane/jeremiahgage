import Skills from "../Skills/Skills"
import styles from "./Experience.module.scss"

function ExperienceDescriptionPane(props) {
    return (
        <div className={[styles.experienceDescriptionPane, props.jobTitle ? `${styles.slideIn} ${styles.slider} ${styles.experienceModal}` : ""].join(" ")}>
            {props.jobTitle ?       
                <>
                    <h2>{props.jobTitle}</h2>
                    <h4>{props.employer} - {props.duration}</h4>

                    <div className={styles.description}>
                        { props.description }
                    </div>

                    {props.skills.length > 0 ? 
                        <>
                            <h3>Technologies:</h3>
                            <br/>
                            <Skills skills={props.skills}/>
                        </>
                        : null
                    }
                </>      
            : null
            }    

        </div>
    )
}

export default ExperienceDescriptionPane;