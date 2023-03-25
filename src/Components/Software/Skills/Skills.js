import Skill from './Skill';
import styles from './Skills.module.scss'

export default function Skills(props) {
    return (
        <div className={styles.skills}>
            {props.skills.map((item, index) => {
                return <Skill key={index} image={item.image} subtitle={item.name}/>
            })}
        </div>
    );
}