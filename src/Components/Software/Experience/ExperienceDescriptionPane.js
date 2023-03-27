import Skills from "../Skills/Skills"
import styles from "./Experience.module.scss"

function ExperienceDescriptionPane(props) {
    return (
        <div className={[styles.experienceDescriptionPane, props.jobTitle ? `${styles.slideIn} ${styles.slider} ${styles.experienceModal}` : ""].join(" ")}>
            {props.jobTitle ?       
                <>
                    <h2>{props.jobTitle}</h2>
                    <h4>{props.employer} - {(props.duration)}</h4>

                    <div className={styles.description}>
                        { props.description }
                    </div>

                    <span className={styles.skillsSpacer}/>
                    <Skills skills={props.skills}/>
                </>      
            : null
            }    

        </div>
    )
}

export default ExperienceDescriptionPane;