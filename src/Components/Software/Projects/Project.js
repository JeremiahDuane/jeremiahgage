import styles from './Project.module.scss'

function Project(props) {
    return (
        <div className={styles.review}>
            <img width="400px" height="350px" src={props.image}></img>
            <div className={styles.heading}>    
                <h1>{props.title}</h1>
            </div>
        </div>
    );
}


export default Project;
