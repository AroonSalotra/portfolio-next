import { AiFillHtml5, AiFillGithub } from "react-icons/ai"
import { DiCss3, DiReact } from "react-icons/di"
import { SiJavascript, SiTypescript, SiFigma, SiNextdotjs } from "react-icons/si"
import Icon from "./Icon"

const IconDisplay = () => {

    const iconList: { iconType: any, title: string }[] = [
        { iconType: <AiFillHtml5 />, title: "HTML 5" },
        { iconType: <SiJavascript />, title: "Javascript" },
        { iconType: <SiTypescript />, title: "Typescript" },
        { iconType: <DiCss3 />, title: "CSS 3" },
        { iconType: <DiReact />, title: "React" },
        { iconType: <SiNextdotjs />, title: "Next.js" },
        { iconType: <SiFigma />, title: "Figma" },
        { iconType: <AiFillGithub />, title: "Git" }
    ]

    return (
        <section className="icon-grid icon">
            {iconList.map(({ iconType, title }) => {
                return <Icon
                    key={title}
                    iconType={iconType}
                    title={title}
                />
            })}
        </section>
    );
}

export default IconDisplay;