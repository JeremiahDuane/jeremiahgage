import { useRef, useState } from 'react';
import Section from '../../Section';
import styles from './Contact.module.scss'

export default function Contact(props) {
    const getPayload = (name, email, message) => {
        return {
            name: name,
            email: email,
            message: message
        }
    }
    const refName = useRef()
    const refEmail = useRef()
    const refMessage = useRef()
    
    const [payload, setPayload] = useState(getPayload("", "", ""))
    const [wasSubmit, setWasSubmit] = useState(false)

    const nameIsValid = payload.name.length > 1 
    const emailIsValid = payload.email.length > 1 && payload.email.indexOf('@') > 1
    const messageIsValid = payload.message.length > 1

    const handleChange = () => {
        setPayload(getPayload(refName.current.value, refEmail.current.value, refMessage.current.value))
    }
    const handleSubmit = () => {
        setWasSubmit(true)
        if (nameIsValid && emailIsValid && messageIsValid) {
            console.log("sent", payload)
            setPayload(getPayload("", "", ""))
            setWasSubmit(false)
        }
    }

    return (
        <Section
            heading="contact"
            demoPath="/repos/anchoredapplications/jeremiahgage/contents/src/Components/Software/Contact/"
            footerPath="/blob/master/src/Components/Software/Academia/Contact.js"
            description={props.descriptions.contact}
        >
            <div className={styles.contact} onClick={(e)=>{e.stopPropagation()}}>
                <div className={styles.group}>
                    <label>{wasSubmit && !nameIsValid ? <i>Invalid name</i> : <br/>}</label>
                    <input ref={refName} className={[styles.field, styles.shadowed, styles.rounded, wasSubmit && !nameIsValid ? styles.invalid : ""].join(" ")} placeholder='Full name...' onChange={handleChange} value={payload.name} type="text" id="name"/>
                </div>
                <div className={styles.group}>
                    <label>{wasSubmit && !emailIsValid ? <i>Invalid email</i> : <br/>}</label>
                    <input ref={refEmail} className={[styles.field, styles.shadowed, styles.rounded, wasSubmit && !emailIsValid ? styles.invalid : ""].join(" ")}  placeholder='Contact email address...' onChange={handleChange} value={payload.email} type="email" id="email"/>
                </div>
                <div className={styles.group}>
                    <label>{wasSubmit && !messageIsValid ? <i>Invalid message</i> : <br/>}</label>
                    <textarea ref={refMessage} className={[styles.shadowed, styles.rounded, wasSubmit && !messageIsValid ? styles.invalid : ""].join(" ")}  onChange={handleChange} value={payload.message}/>
                </div>                
                <div className={styles.group}>
                    <br/>
                    <button onClick={handleSubmit} disabled={wasSubmit && (!messageIsValid || !emailIsValid || !nameIsValid)} className={[styles.submit, styles.field, styles.shadowed, styles.rounded].join(" ")}>Send</button>
                </div>
            </div>
        </Section>
    );
}
