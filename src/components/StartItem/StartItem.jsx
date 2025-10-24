

export default function StartItem({ img, subtitle, signup, us }) {
    return (
        <li className="start__item" style={{
            backgroundImage: `url(${img})`,
            borderRadius: "12px",
            backgroundRepeat: "no-repeat",
        }}>
            <div className="start__top">
                <p className="">{subtitle}</p>
            </div>
            <div className="start__bottom">
                <p className="start__text">
                    {signup}
                </p>
                <h2 className="start__title">
                    {us}
                </h2>
                <button className="start__button">
                    Get Started
                </button>
            </div>
        </li>
    )
}
