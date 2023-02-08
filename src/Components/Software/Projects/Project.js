import styles from './Project.module.scss'

function Project(props) {
    return (
        <div className={styles.project}>
            <img width="400px" height="350px" src={props.image} alt={props.title}></img>
            <div className={styles.heading}>    
                <h5>{props.title}</h5>
            </div>
        </div>
    );
}


export default Project;
