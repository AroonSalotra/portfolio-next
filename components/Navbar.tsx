import Link from "next/link"
import { GiHamburgerMenu } from "react-icons/gi"
import { useState, useEffect } from "react"

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

            <button className="navbar-mobile" onClick={handleClick}>
                <GiHamburgerMenu
                    style={{ pointerEvents: "none" }}
                />
            </button>

            <div className={`navbar-desktop ${mobileNav ? "hide" : ""}`}>

                {navbarList.map(({ title, linkTo }) => {
                    return <Link key={title}
                        href={linkTo}
                        onClick={handleClick}
                        className="hover-bold"
                    >
                        {title}
                    </Link>
                })}
            </div>

        </nav>
    );
}

export default Navbar;