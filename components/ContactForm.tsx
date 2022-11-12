import emailjs from '@emailjs/browser';
import { useState, useRef } from 'react';
import styles from "../styles/Contact.module.css"

const ContactForm = () => {

    // const [toSend, setToSend] = useState({
    //     from_name: "",
    //     email: "",
    //     message: "",
    //     reply_to: ""
    // })
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: any) => {
        e.preventDefault();

        const currentForm = form.current;
        if (currentForm == null) return;

        emailjs.sendForm('service_r76eupk', 'template_u9xaust', currentForm, 'mxTTQBdikoSMlFRj9')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <>
            {/* <h2>Send me an email</h2> */}
            <form
                ref={form}
                onSubmit={sendEmail}
                className={styles.formwrapper}>

                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
                
            </form>
        </>
    );
}

export default ContactForm;