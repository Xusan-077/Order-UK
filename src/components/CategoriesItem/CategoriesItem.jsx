export default function CategoriesItem({ img, name, count }) {
    return (
        <li className="categories__item">
            <img src={img} alt="" className="categories__item-img" />
            <div className="categories__item-bottom">
                <h2 className="categories__item-title">{name}</h2>
                <p className="categories__item-count">{count} Restaurants</p>
            </div>
        </li>
    )
}
