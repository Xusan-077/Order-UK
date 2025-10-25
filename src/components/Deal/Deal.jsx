import { deals } from "../../Constants";
import DealCardItem from "../DealCardItem/DealCardItem";
import DealItem from "../DealItem/DealItem";

import next from "../../assets/icons/Next-btn.svg"
import { useState } from "react";
import Menu from "../Menu/Menu";

export default function Deal() {
    const [menu, setMenu] = useState(false)
    return (
        <section className="deal">
            <div className="container">
                <div className="deal__inner">

                    {
                        menu && <Menu setMenu={setMenu} />
                    }
                    <div className="deal__top">
                        <h2 className="deal__title">
                            Up to -40% 🎊 Order.uk exclusive deals
                        </h2>
                        <h2 className="deal__title2">
                            Up to -40% Discount Offers 🎊
                        </h2>

                        <ul className="deal__list">
                            <DealItem text="Vegan" />
                            <DealItem text="Sushi" />
                            <DealItem text="Pizza & Fast food" />
                            <DealItem text="others" />
                        </ul>

                        <button className="deal__menu-btn" onClick={() => setMenu(true)}>
                            <img src={next} alt="" className="" />
                            Pizza & Fast Food</button>
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
