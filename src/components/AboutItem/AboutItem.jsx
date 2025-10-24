export default function AboutItem({ title, icon, description }) {
    return (
        <li className="about__item">
            <h2 className="about__subtitle">
                {title}
            </h2>
            <img src={icon} alt="" className="about__img" />

            <p className="about__description">
                {description}
            </p>
        </li>
    )
}
