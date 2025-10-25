import { restaurants } from "../../Constants";
import RestaurantsItem from "../RestaurantsItem/RestaurantsItem";
import WebTitle from "../WebTitle/WebTitle";

export default function Restaurants() {
    return (
        <section className="restaurants">
            <div className="container">
                <div className="restaurants__inner">
                    <WebTitle text="Popular Restaurants" />
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
