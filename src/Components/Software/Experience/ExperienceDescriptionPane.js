import styles from "./Experience.module.scss"

function ExperienceDescriptionPane(props) {
    return (
        <div className={[styles.experienceDescriptionPane, props.description ? `${styles.slideIn} ${styles.slider} ${styles.experienceModal}` : ""].join(" ")}>
            {
                props.description
            }
        </div>
    )
}

export default ExperienceDescriptionPane;