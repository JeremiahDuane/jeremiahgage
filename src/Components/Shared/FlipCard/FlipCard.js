import styles from './FlipCard.module.scss'
import { useState } from "react"; 

function FlipCard(props) {
    const [showBack, setShowBack] = useState(false); 

    function handleClick() { 
        setShowBack(!showBack); 
    }

    return (
        <div className={styles.flipCardOuter}
            onClick={handleClick}
        >
        <div className={[styles.flipCardInner, ((showBack) ? styles.showBack : "")].join(" ")}>
            <div className={[styles.card, styles.front ].join(" ") }>
                {props.children[0]}
            </div>
            <div className={[styles.card, styles.back].join(" ")}>
                {props.children[1]}
            </div>
        </div>
        </div>
    );
}

export default FlipCard;