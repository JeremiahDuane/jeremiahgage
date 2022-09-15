import styles from './Landing.module.scss'
import Anchor from '../imgs/Anchor.js'

function Landing() {
    return (
        <>
            <div className={[styles.section, styles.splitPane, styles.colXS12, styles.colSM6, styles.software].join(' ')}>
                <div>
                    <div className={[styles.textContent].join(' ')}>
                        <div className={styles.bold}>Looking for</div>
                        <div className={styles.big}>SOFTWARE?</div>
                    </div>
                    <a href="/software">
                        <button>
                            SHOW ME THE CODE
                        </button>
                    </a>
                </div>
            </div>
            <div className={[styles.section, styles.splitPane, styles.colXS12, styles.colSM6, styles.food].join(' ')}>
                <div>
                    <div className={[styles.textContent].join(' ')}>
                        <div className={styles.bold}>Looking for</div>
                        <div className={styles.big}>REVIEWS?</div>
                    </div>
                    <a href="/food">
                        <button>
                            SHOW ME THE FOOD
                        </button>
                    </a>
                </div>
            </div>
            <div id={styles.splitPaneOr}>
                <Anchor color="#222222" width/>
            </div>
        </>
    );
}


export default Landing;
