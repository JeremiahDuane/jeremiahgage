import styles from './Footer.module.scss'
require('dotenv').config()

export default function Landing() {
    return (
        <div className={styles.footer}> GPL-3.0 license | {"v1.1.0"} </div>
    );
}
