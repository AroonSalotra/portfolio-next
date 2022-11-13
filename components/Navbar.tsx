import Link from "next/link"
import { GiHamburgerMenu } from "react-icons/gi"
import { useState } from "react"

const Navbar = () => {

    const [mobileNav, setMobileNav] = useState(true)

    const handleClick = () => {
        return setMobileNav(state => !mobileNav)
    }

    const navbarList: { title: string, linkTo: string }[] = [
        { title: "Home", linkTo: "/" },
        { title: "Projects", linkTo: "/projects" },
        { title: "Contact", linkTo: "/contact" },
    ]

    return (
        <nav className="navbar bg-col-a">

            <GiHamburgerMenu
                className={"navbar-mobile"}
                onClick={handleClick}
            />

            <div className={`navbar-desktop ${mobileNav ? "hide" : ""}`}>
                {navbarList.map(({ title, linkTo }) => {
                    return <Link key={title}
                        href={linkTo}
                        onClick={handleClick}>
                        {title}
                    </Link>
                })}

                <a href="https://github.com/AroonSalotra"
                    target={"_blank"}
                    rel="noreferrer">
                    Github
                </a>

                <a href="https://drive.google.com/file/d/1eX_wb5To_GR_xKO4-84zqQBAyVP3QQKF/view?usp=share_link"
                    target={"_blank"}
                    rel="noreferrer">
                    Resume
                </a>
            </div>

        </nav>
    );
}

export default Navbar;