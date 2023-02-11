import styles from "../styles/Interaction.module.css"
import { AiFillGithub, AiFillFilePdf } from "react-icons/ai"

const Footer = () => {

    const footerList: { title: any, linkTo: string, id: string }[] = [
        { title: <AiFillGithub />, linkTo: "https://github.com/AroonSalotra", id: "github" },
        { title: <AiFillFilePdf />, linkTo: "/Aroon_Salotra_Resume.pdf", id: "resume" }
    ]

    return (
        <footer className="footer">

            <div className="break" />

            <ul>
                {footerList.map(({ title, linkTo, id }) => {
                    return <li key={id}>

                        <a href={linkTo}
                            target="_blank"
                            rel="noreferrer"
                            className="hover-bold footer-icons"
                        >
                            {title}
                        </a>

                    </li>
                })}
            </ul>

        </footer>
    );
}

export default Footer;