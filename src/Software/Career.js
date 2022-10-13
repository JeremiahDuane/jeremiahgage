import { useEffect } from 'react'
import styles from './Career.module.scss'
import FlipCard from '../components/FlipCard.js'

function Career() {
    return (
        <div className={styles.row}>
            <FlipCard>
                <div className={[styles.card, styles.front].join(" ")}>
                    Front
                </div>
                <div className={[styles.card, styles.back].join(" ")}>
                    Back
                </div>
            </FlipCard>
        </div>
    );
}


export default Career;
