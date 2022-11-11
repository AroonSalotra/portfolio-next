import { AiFillHtml5, AiFillGithub } from "react-icons/ai"
import { DiCss3, DiReact } from "react-icons/di"
import { SiJavascript, SiTypescript, SiFigma, SiNextdotjs } from "react-icons/si"
import { TiHtml5 } from "react-icons/ti"
import Icon from "./Icon"

const IconDisplay = () => {

    const iconList: { iconType: any, title: string }[] = [
        { iconType: <AiFillHtml5 />, title: "HTML 5" },
        { iconType: <SiJavascript />, title: "JS" },
        { iconType: <SiTypescript />, title: "TS" },
        { iconType: <DiReact />, title: "React" },
        { iconType: <SiNextdotjs />, title: "Next.js" },
        { iconType: <SiFigma />, title: "Figma" },
        { iconType: <AiFillGithub />, title: "Git" }
    ]

    return (
        <div className="icon-grid icon">
            {iconList.map(({ iconType, title }) => {
                return <Icon
                    key={title}
                    iconType={iconType}
                    title={title}
                />
            })}
        </div>
    );
}

export default IconDisplay;