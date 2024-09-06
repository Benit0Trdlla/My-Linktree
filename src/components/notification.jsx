import './notification.css'

export default function Notification({ title, description, href }) {
    return (
        <a href={href} target="_blank" style={{ textDecoration: 'none' }} download="Frontend - Benito Tridella Dolce.pdf">
            <div className="notification">
                <div className="notiglow"></div>
                <div className="notiborderglow"></div>
                <div className="notititle">{title}</div>
                <div className="notibody">{description}</div>
            </div>
        </a>
    )
}