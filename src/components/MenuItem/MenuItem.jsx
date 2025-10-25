export default function MenuItem({ text }) {
    return (
        <li className="menu__item">
            <a href="#" className="menu__link">
                {text}
            </a>
        </li>
    )
}
