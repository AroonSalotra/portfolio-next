import Link from "next/link"
import { GiHamburgerMenu } from "react-icons/gi"
import { useState } from "react"

const Navbar = () => {

    const [mobileNav, setMobileNav] = useState(false)

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

            <div className={`navbar-desktop ${mobileNav ? "show" : ""}`}>
                {navbarList.map(({ title, linkTo }) => {
                    return <Link key={title}
                        href={linkTo}>
                        {title}
                    </Link>
                })}

                <a href="https://github.com/AroonSalotra"
                    target={"_blank"}
                    rel="noreferrer">
                    My Github
                </a>
            </div>

        </nav>
    );
}

export default Navbar;