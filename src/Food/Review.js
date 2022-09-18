import { useState } from 'react'
import styles from './Review.module.scss'
import FlipCard from '../components/FlipCard.js'
import StarMeter from '../components/StarMeter.js'
import Modal from '../components/Modal.js'
import Article from './Article.js'

function Review(props) {
    const [visible, setVisible] = useState(false);
    const toggleArticle = () => {
        setVisible(!visible)
    }
    return (
        <>
            <div className={styles.review}>
                <FlipCard>
                    <div className={[styles.card, styles.front].join(" ")}>
                        <img width="400px" height="350px" src={props.image}></img>
                        <div className={styles.heading}>    
                            <h1>{props.title}</h1>
                        </div>
                    </div>
                    <div className={[styles.card, styles.back].join(" ")}>
                        <StarMeter value={props.rating}/>
                        <p>
                            <i>
                                "{props.summary}"
                            </i>
                        </p>
                        <div className={styles.wrapper}>
                            <button onClick={toggleArticle}>
                                READ MORE
                            </button>
                        </div>
                    </div>
                </FlipCard>
            </div>
            {visible && 
                <Modal control={toggleArticle}>
                    <Article
                        title={props.title}
                        body={props.body}
                    />
                </Modal>
            }
        </>
    );
}


export default Review;
