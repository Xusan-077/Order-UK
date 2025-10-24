import { restaurants } from "../../Constants";
import RestaurantsItem from "../RestaurantsItem/RestaurantsItem";

export default function Restaurants() {
    return (
        <section className="restaurants">
            <div className="container">
                <div className="restaurants__inner">
                    <h2 className="restaurants__title">Popular Restaurants</h2>

                    <ul className="restaurants__list">
                        {
                            restaurants.map((el) => <RestaurantsItem key={el.id} {...el} />)
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}
