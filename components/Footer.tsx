import styles from "../styles/Interaction.module.css"

const Footer = () => {

    // const footerList: string[] = ["My Github", "My CV"]

    const footerList: { title: string, linkTo: string }[] = [
        { title: "My Github", linkTo: "https://github.com/AroonSalotra" },
        { title: "My CV", linkTo: "https://drive.google.com/file/d/1cqA7aXGQuY2G08-LSVbCBOTBTyRqdwk9/view?usp=share_linkk" }
    ]

    return (
        <footer className="footer">
            <ul>
                {/* {footerList.map((elem) => {
                    return <li key={elem}>{elem}</li>
                })} */}

                {footerList.map(({ title, linkTo }) => {
                    return <a href={linkTo}
                        key={title}
                        target="_blank"
                        rel="noreferrer">
                        <li>{title}</li>
                    </a>
                })}
            </ul>
        </footer>
    );
}

export default Footer;