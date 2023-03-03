import styles from './Project.module.scss'
import FlipCard from '../../Shared/FlipCard/FlipCard.js'

function Project(props) {
    const inlineStyle = {    
        background: `linear-gradient(
          rgba(0, 0, 0, 0.3), 
          rgba(0, 0, 0, 0.3)
        ),
        url(${props.image})`,
        height: '40vh', 
        width: '40vh', 
        textAlign: 'center', 
        marginLeft:'12vh'
    }
    return (
        <div className={styles.project}> 
            <FlipCard>
                    <div className={[styles.card, styles.front].join(" ")} style={inlineStyle} >
                        <h2 className={styles.heading}>    
                            {props.title}
                        </h2>
                    </div>
                <div className={[styles.card, styles.back].join(" ")}>

                </div>
            </FlipCard>
        </div>
    );
}


export default Project;
