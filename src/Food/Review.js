import { useEffect } from 'react'
import styles from './Review.module.scss'
import FlipCard from '../components/FlipCard.js'
import StarMeter from '../components/StarMeter.js'

function Review(props) {
    return (
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
                        <a href="/">
                            <button>
                                READ MORE
                            </button>
                        </a>
                    </div>
                </div>
            </FlipCard>
        </div>
    );
}


export default Review;
