import emailjs from '@emailjs/browser';
import { useState, useRef } from 'react';
import styles from "../styles/Contact.module.css"
import Link from 'next/link';

const ContactForm = () => {

    const [isFormActive, setIsFormActive] = useState<boolean>(true)

    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: any) => {
        e.preventDefault();

        const currentForm = form.current;
        if (currentForm == null) return;

        emailjs.sendForm('service_r76eupk', 'template_u9xaust', currentForm, 'mxTTQBdikoSMlFRj9')
            .then((result) => {
                setIsFormActive(form => false)
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <>
            {isFormActive ? <form
                ref={form}
                onSubmit={sendEmail}
                className={styles.formwrapper}>

                <label>Your Name</label>
                <input type="text" name="user_name" />

                <label>Your Email<span className={styles.required}>*</span></label>
                <input type="email" name="user_email" required />

                <label>Your Message<span className={styles.required}>*</span>
                </label>
                <textarea name="message" required />

                <input className={styles.submit}
                    type="submit"
                    value="Send" />

            </form>

                :
                <>
                    <p style={{ textAlign: "center" }}>
                        Thank you for your message, I will be in contact shortly
                    </p>

                    <Link href={"/"} className={styles.submit}>
                        Return to home
                    </Link>
                </>
            }

        </>
    );
}

export default ContactForm;