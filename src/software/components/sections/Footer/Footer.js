import styles from './Footer.module.scss'
require('dotenv').config()

export default function Landing() {
    return (
        <div className={styles.footer}> GPL-3.0 license | {process.env.REACT_APP_VERSION_NUMBER}</div>
    );
}
