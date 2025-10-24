export default function RestaurantsItem({ name, img }) {
    return (
        <li className="restaurants__item">
            <img src={img} alt="" className="restaurants__item-img" />
            <div className="restaurants__item-bottom">
                <p className="restaurants__text">{name}</p>
            </div>
        </li>
    )
}
