import Link from "next/link"

interface btnProps {
    body: string,
    linkTo: string,
    addClass?: string
}

const Button = ({ body, linkTo, addClass }: btnProps) => {

    return (
        <>
            <Link className={addClass}
                href={linkTo}>
                {body}
            </Link>
        </>
    );
}

export default Button;