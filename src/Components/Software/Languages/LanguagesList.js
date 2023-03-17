import styles from './LanguagesList.module.scss'
import CircleMeter from "../../Shared/CircleMeter/CircleMeter"

function LanguagesList(props) {
    console.log(props.languages)
    return (
        <div className={styles.list}>                 
            {props.languages.map((item, idx) => {
                const sum = props.languages.reduce((accumulator, object) => {
                    return accumulator + object.value;
                }, 0);
                return <div key={idx} className={styles.circleMeter__wrapper}>
                    <CircleMeter  value={(item.value)/sum} name={item.name}/>
                </div>
            })}
        </div>
    );
}

export default LanguagesList;
