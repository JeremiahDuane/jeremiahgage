import { useEffect } from 'react'
import Review from './Review';
import styles from './Reviews.module.scss'
import data from  '../json/Reviews.json'

function Reviews() {
    return (
        <div className={styles.reviews}>     
            <div className={styles.flexContainer}>
                {data.map((el, idx) => (
                    <Review key={idx}
                        image={el.image}
                        title={el.title}
                        rating={el.rating}
                        summary={el.summary}
                    />
                ))}
            </div>
        </div>
    );
}


export default Reviews;
