import styles from "../../styles/Contact.module.css"
import ContactForm from '../../components/ContactForm';
import ContactLinkedIn from "../../components/ContactLinkedIn";

const Contact = () => {

    const copyEmail = () => {
        return navigator.clipboard.writeText("aroonsalotra@gmail.com")
    }


    return (
        <div className={`${styles.container} fade-up`}>
            {/* <h1 className={styles.title}>Contact</h1> */}
            {/* <h1 className="title">Contact</h1> */}
            <h1 className={`title ${styles.title}`}>Get in touch</h1>
            <ContactForm />
            <div className="break" />
            <a href="https://www.linkedin.com/in/aroon-salotra-0aa5b6209/"
                className={styles.linkedin}
                target={"_blank"}
                rel="noreferrer">
                Find me on LinkedIn
            </a>

            <p>or</p>

            <button className={styles.email}
                onClick={copyEmail}>
                Copy my email directly
            </button>

        </div>
    );
}

export default Contact;