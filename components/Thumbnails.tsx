import Projects from "../data/projects.json"
import Image from "next/image"
import styles from "../styles/Thumbnails.module.css"

const Thumbnails = () => {

    interface mapProps {
        title: string;
        desktopImg: string;
        webUrl: string;
    }

    return (
        <div className={styles.container}>
            
            {Projects.map(({ title, desktopImg, webUrl }: mapProps) => {
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

                            <figcaption className={styles.title}>
                                {title}
                            </figcaption>

                        </figure>

                    </a>

                </div>
            })}
        </div>
    );
}

export default Thumbnails;