import styles from "../styles/Interaction.module.css"
import { AiFillGithub, AiFillFilePdf } from "react-icons/ai"

const Footer = () => {

    const footerList: { title: any, linkTo: string, id: string }[] = [
        { title: <AiFillGithub />, linkTo: "https://github.com/AroonSalotra", id: "github" },
        { title: <AiFillFilePdf />, linkTo: "https://drive.google.com/file/d/1cqA7aXGQuY2G08-LSVbCBOTBTyRqdwk9/view?usp=share_linkk", id: "resume" }
    ]

    return (
        <footer className="footer">
            <ul>

                {footerList.map(({ title, linkTo, id }) => {
                    return <a href={linkTo}
                        key={id}
                        target="_blank"
                        rel="noreferrer"
                        className="hover-bold footer-icons"
                    >
                        <li>{title}</li>
                    </a>
                })}
            </ul>

        </footer>
    );
}

export default Footer;