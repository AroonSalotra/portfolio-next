import Link from "next/link"

const Navbar = () => {

    const navbarList: { title: string, linkTo: string }[] = [
        { title: "Home", linkTo: "/" },
        { title: "Projects", linkTo: "/projects" },
        { title: "Contact", linkTo: "/contact" },
    ]

    return (
        <nav className="navbar bg-col-a">
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
        </nav>
    );
}

export default Navbar;