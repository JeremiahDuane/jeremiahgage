import styles from './Skills.module.scss'

export default function Skill(props) {
    return (
        <div className={styles.skill} title={props.tooltip ?? props.subtitle} onClick={(e)=>{e.stopPropagation()}}>
            { 
                props.link ? 
                    ( <a href={props.link}>
                        {props.image}
                    </a> )    
                : props.image
            }   
            <div>            
                <h3>{props.title}</h3>
                <h5>{props.dates}</h5>
                <div>{props.subtitle}</div>
            </div>     
        </div>
    );
}