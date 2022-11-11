import Projects from "../data/projects.json"
import Image from "next/image"
import styles from "../styles/Thumbnails.module.css"

const Thumbnails = () => {

    interface mapProps {
        title: string;
        desktopImg: string;
        webUrl: string;
        body: string
    }

    return (
        <>
            <h2 className={styles.title}>My Projects</h2>
            <div className={styles.container}>
                {Projects.map(({ title, desktopImg, webUrl, body }: mapProps) => {
                    return <div key={title}
                        className={styles.thumbnail}>

                        <a href={webUrl} target="_blank" rel="noreferrer">

                            <figure>
                                <Image src={desktopImg}
                                    className={styles.img}
                                    alt={title}
                                    width={200}
                                    height={200}
                                />

                                <figcaption className={styles.subtitle}>
                                    {title}
                                </figcaption>

                            </figure>

                        </a>

                        {/* <p className={styles.body}>
                            {body}
                        </p> */}

                    </div>
                })}
            </div>
        </>
    );
}

export default Thumbnails;