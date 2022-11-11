import styles from "../styles/Interaction.module.css"

const Footer = () => {

    const footerList = ["My Github", "Contact Me"]

    return (
        <footer className={styles.container}>
            <ul>
                {footerList.map((elem) => {
                    return <li key={elem}>{elem}</li>
                })}
            </ul>
        </footer>
    );
}

export default Footer;