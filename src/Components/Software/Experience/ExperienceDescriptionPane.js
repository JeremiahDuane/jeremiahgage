import styles from "./Experience.module.scss"

function ExperienceDescriptionPane(props) {
    return (
        <div className={[styles.experienceDescriptionPane, props.jobTitle ? `${styles.slideIn} ${styles.slider} ${styles.experienceModal}` : ""].join(" ")}>
            <h2>{props.jobTitle}</h2>
            {
                 props.description
            }
        </div>
    )
}

export default ExperienceDescriptionPane;