import styles from './StarMeter.module.scss'
import SvgStarMeter from '../../../imgs/StarMeter'

function StarMeter(props) {
    return (
        <div className={styles.starMeter}>
            <div className={styles.fill} style={{width: `${props.value}%`}}></div>
            <div className={styles.overlay__wrapper}>
                <div className={styles.overlay}>
                    <SvgStarMeter color="#FFFFFF"/>
                </div>    
            </div>    
        </div>
    );
}


export default StarMeter;
