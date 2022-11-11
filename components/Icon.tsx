interface props {
    iconType: any;
    title?: string
}

const Icon = ({ iconType, title }: props) => {

    return (
        <div>
            {iconType}
            <p className="icon-title">{title}</p>
        </div>
    );
}

export default Icon;