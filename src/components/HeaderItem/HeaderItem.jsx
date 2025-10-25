export default function HeaderItem({ text, width, active }) {
    const liClass = `header__item ${width ? "max-width-327px" : ""}`;
    const linkClass = `header__link ${width ? "max-width-327px" : ""} ${active ? "active" : ""}`;

    return (
        <li className={liClass}>
            <a href="#" className={linkClass}>
                {text}
            </a>
        </li>
    );
}
