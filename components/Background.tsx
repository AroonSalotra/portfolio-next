import Image from "next/image"

const Background = () => {
    return (
        <>
            <Image src={"https://images.unsplash.com/photo-1523895665936-7bfe172b757d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"}
                className="background"
                width={1024}
                height={1024}
                alt="BG"
            />
        </>
    );
}

export default Background;