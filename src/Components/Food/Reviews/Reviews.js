import Review from '../Review/Review';
import styles from './Reviews.module.scss'
import axios, { CancelToken } from "axios";
import React, { useState, useEffect} from "react";

function Reviews() {
    const [reviews, setReviews] = useState([]);
    const [refreshKey, setRefreshKey] = useState(0);

    useEffect(() => {
        const cancelTokenSource = CancelToken.source();
    
        async function loadReviews() {
          try {
            var config = {
                method: 'post',
                url: 'https://395d7mrcx6.execute-api.us-east-2.amazonaws.com/prod/reviews/get-all-reviews',
                headers: {"Content-Type":"application/json"},
                data : '',
                cancelToken: cancelTokenSource.token,
            };
            
            const asyncResponse = await axios(config);
            const { reviews } = asyncResponse.data;
            
            setReviews(reviews);
          } catch (err) {
            if (axios.isCancel(err)) {
              return console.info(err);
            }
            console.error(err);
          }
        }
    
        loadReviews();
    
        return () => {
          // here we cancel preveous http request that did not complete yet
          cancelTokenSource.cancel(
            "Cancelling previous http call because a new one was made ;-)"
          );
        };
    }, [refreshKey]);

    return (
        <div className={styles.reviews}>     
            <div className={styles.flexContainer}>
                {reviews.map((el, idx) => (
                    <Review key={idx}
                        image={el.image}
                        title={decodeURIComponent(el.title)}
                        rating={el.rating}
                        summary={decodeURIComponent(el.summary)}
                        body={decodeURIComponent(el.body)}
                    />
                ))}
            </div>
        </div>
    );
}


export default Reviews;
