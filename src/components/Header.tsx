import iconMoon from '../assets/icon-moon.svg'

type headerProps = {
    title: string,
    icon: string
}

export const Header = (props: headerProps) => {
    return (
        <div className="header">
            <h1 className="title">{props.title}</h1>
            <button className="icon-switch">
                <span>{props.icon}</span> <img src={iconMoon} alt="icon-switch" />
            </button>
        </div>
    );
}