import { categories } from "../../Constants";
import CategoriesItem from "../CategoriesItem/CategoriesItem";
import WebTitle from "../WebTitle/WebTitle";

export default function Categories() {
    return (
        <section className="categories">
            <div className="container">
                <div className="categories__inner">
                    <WebTitle text="Order.uk Popular Categories 🤩" />

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
