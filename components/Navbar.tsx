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
        </nav>
    );
}

export default Navbar;