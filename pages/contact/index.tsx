import styles from "../../styles/Contact.module.css"
import ContactForm from '../../components/ContactForm';
import ContactLinkedIn from "../../components/ContactLinkedIn";

const Contact = () => {
    return (
        <div className={styles.container}>
            <ContactForm />
            {/* <h1>Contact</h1> */}
            <div className={styles.break} />
            <a href="https://www.linkedin.com/in/aroon-salotra-0aa5b6209/"
                className={styles.linkedin}
                target={"_blank"}
                rel="noreferrer">
                Find me on LinkedIn
            </a>

            <p>or</p>

            <button className={styles.email}>
                Copy my email directly
            </button>

        </div>
    );
}

export default Contact;