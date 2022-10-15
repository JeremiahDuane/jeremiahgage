import styles from './CircleMeter.module.scss'
import {ReactComponent as SvgCircleMeter} from './CircleMeter.svg';

function CircleMeter(props) {
     return (
        <div className={styles.circleMeter}>
            <div className={styles.skill}>
                <div className={styles.outer}>
                    <div className={styles.inner}>
                        <div className={styles.content}>
                            {props.name}
                            <br/>
                            <div className={styles.number}>
                                {Math.round(props.value*1000)/10}%
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <SvgCircleMeter className={styles.svg} fill="none" stroke="url(#GradientColor)" strokeWidth="20px" strokeDasharray={472} strokeDashoffset={472*(1-props.value)+20}/>
        </div>

    );
}


export default CircleMeter;
