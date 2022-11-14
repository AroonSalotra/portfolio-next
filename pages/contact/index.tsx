import styles from "../../styles/Contact.module.css"
import ContactForm from '../../components/ContactForm';

const Contact = () => {

    const copyEmail = () => {
        return navigator.clipboard.writeText("aroonsalotra@gmail.com")
    }


    return (
        <section className={`${styles.container} fade-up`}>
            <h1 className={`title ${styles.title}`}>Get in touch</h1>
            <ContactForm />
            <div className="break" style={{width: "40vw"}} />
            <a href="https://www.linkedin.com/in/aroon-salotra-0aa5b6209/"
                className={`${styles.contactBtn} ${styles.linkedin}`}
                target={"_blank"}
                rel="noreferrer">
                Find me on LinkedIn
            </a>

            <p>or</p>

            <button className={`${styles.contactBtn} ${styles.email}`}
                onClick={copyEmail}>
                Copy my email
            </button>

        </section>
    );
}

export default Contact;