import { deals } from "../../Constants";
import DealCardItem from "../DealCardItem/DealCardItem";
import DealItem from "../DealItem/DealItem";

export default function Deal() {
    return (
        <section className="deal">
            <div className="container">
                <div className="deal__inner">
                    <div className="deal__top">
                        <h2 className="deal__title">
                            Up to -40% 🎊 Order.uk exclusive deals
                        </h2>

                        <ul className="deal__list">
                            <DealItem text="Vegan" />
                            <DealItem text="Sushi" />
                            <DealItem text="Pizza & Fast food" />
                            <DealItem text="others" />
                        </ul>
                    </div>
                    <div className="deal__bottom">
                        <ul className="deal__card-list">
                            {
                                deals.map((el) => <DealCardItem key={el.id} {...el} />)
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
