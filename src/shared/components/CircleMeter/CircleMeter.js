import { useState } from 'react';
import styles from './CircleMeter.module.scss'
import {ReactComponent as SvgCircleMeter} from '../../../images/CircleMeter.svg';
import {ReactComponent as SvgCircleMeterMobile} from '../../../images/CircleMeter__Mobile.svg';

function CircleMeter(props) {
    var [isMobile, setIsMobile] = useState(window.matchMedia("(max-width: 700px)").matches)

    window.addEventListener('resize', () => {
        setIsMobile(window.matchMedia("(max-width: 700px)").matches);
    }, true);

    const CircleMeterToUse = isMobile ? SvgCircleMeterMobile : SvgCircleMeter;
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
            <CircleMeterToUse className={styles.svg} fill="none" stroke="url(#GradientColor)" strokeWidth="20px" strokeDasharray={440} strokeDashoffset={440 - 440*props.value}/>
        </div>

    );
}


export default CircleMeter;
