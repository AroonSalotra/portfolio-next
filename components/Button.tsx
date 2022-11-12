import Link from "next/link"

const Button = () => {

    const handleClick = () => {
        return "location.href='http://localhost:3000/projects'"
    }


    return (
        <>
            <Link className="btn-project"
                href={"/projects"}>
                My Projects
            </Link>
        </>
    );
}

export default Button;