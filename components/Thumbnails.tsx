import Projects from "../data/projects.json"
import Image from "next/image"
import styles from "../styles/Thumbnails.module.css"

const Thumbnails = () => {

    interface mapProps {
        title: string;
        desktopImg: string;
        webUrl: string;
        body?: string;
        tags: any
    }

    return (
        <>
            <h2 className={styles.title}>My Projects</h2>
            <div className={styles.container}>
                {Projects.map(({ title, desktopImg, webUrl, tags }: mapProps) => {
                    return <div key={title}
                        className={styles.thumbnail}>

                        <a className={styles.anchor}
                            href={webUrl}
                            target="_blank"
                            rel="noreferrer">

                            <figure>
                                <Image src={desktopImg}
                                    className={styles.img}
                                    alt={title}
                                    width={400}
                                    height={400}
                                />
                            </figure>
                        </a>

                        <div className={styles.body}>
                            <h3>{title}</h3>
                            <ul className={styles.tags}>
                                {tags.map((elem: string) => {
                                    return <li key={elem}>
                                        {elem}</li>
                                })}
                            </ul>
                        </div>



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