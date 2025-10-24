export default function DealCardItem({ text, percentage, img }) {
    return (
        <li
            className="deal__card-item"
            style={{
                backgroundImage: `url(${img})`,
                borderRadius: "12px"
            }}
        >
            <div className="deal__card-percentage">
                {percentage}
            </div>

            <div className="deal__card__bottom">
                <p className="deal__card__text">
                    Restaurant
                </p>
                <h2 className="deal__card__title">
                    {text}
                </h2>
            </div>
        </li>
    )
}
