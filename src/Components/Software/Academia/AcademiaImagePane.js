import styles from './Academia.module.scss'
import ImagePane from './ImagePane';

function AcademiaImagePane(props) {
    return (
        <div className={styles.imagePane} >
            <div className={styles.imageWrapper}>
                <ImagePane image={props.image}/>
            </div>
            <h2>{props.institution}</h2>
            <h4>({props.location})</h4>
        </div>
    );
}

export default AcademiaImagePane;
