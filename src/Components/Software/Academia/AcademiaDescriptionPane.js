import Skills from "../Skills/Skills"
import styles from './Academia.module.scss'

function AcademiaDescriptionPane(props) {
    return (
        <div className={styles.academiaDescriptionPane}>
            <h2>{props.degree}</h2>
            {props.majors.map((major, idx) => {
                return <h4 key={idx}>{major}</h4>
            })}

            <div className={styles.description}>
                { props.description }
            </div>

            <div className={styles.skillsSpacer}/>
            <Skills skills={props.skills}/>
        </div>
    )
}

export default AcademiaDescriptionPane;