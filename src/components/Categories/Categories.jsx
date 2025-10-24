import { categories } from "../../Constants";
import CategoriesItem from "../CategoriesItem/CategoriesItem";

export default function Categories() {
    return (
        <section className="categories">
            <div className="container">
                <div className="categories__inner">
                    <h2 className="categories__title">
                        Order.uk Popular Categories 🤩
                    </h2>

                    <ul className="categories__list">
                        {
                            categories.map((el) => <CategoriesItem key={el.id} {...el} />)
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}
