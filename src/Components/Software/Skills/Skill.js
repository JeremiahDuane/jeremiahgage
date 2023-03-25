import styles from './Skills.module.scss'

export default function Skill(props) {
    return (
        <div className={styles.skill} title={props.subtitle}>
            {props.image}
            {props.subtitle} 
        </div>
    );
}