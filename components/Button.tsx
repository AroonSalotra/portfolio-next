import Link from "next/link"

interface btnProps {
    body: string,
    linkTo: string
}

const Button = ({ body, linkTo }: btnProps) => {

    return (
        <>
            <Link className="btn-project"
                href={linkTo}>
                {body}
            </Link>
        </>
    );
}

export default Button;