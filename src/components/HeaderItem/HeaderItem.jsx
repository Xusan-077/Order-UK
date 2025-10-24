export default function HeaderItem({ text, width }) {
    return (
        <li className={`header__item ${width ? "max-width-327px" : ""}`}>
            <a href="#" className={`header__link ${width ? "max-width-327px" : ""}`}>{text}</a>
        </li>
    )
}
