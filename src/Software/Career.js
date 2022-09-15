import { useEffect } from 'react'
import styles from './Career.module.scss'

function Career() {
    return (
        <div className={styles.row}>
            <div className={[styles.column, styles.overview].join(" ")}>
                <h2>Column 1</h2>
                <p>Some text..</p>
            </div>
            <div className={[styles.column, styles.photo].join(" ")}>
                <img width="100%" src={require("../imgs/cover.jpg")}/>
            </div>
        </div>
    );
}


export default Career;
