import { Orders } from "../../Constants";
import AboutItem from "../AboutItem/AboutItem";
import DealItem from "../DealItem/DealItem";
import HeaderItem from "../HeaderItem/HeaderItem";

export default function About() {
    return (
        <section className="about">
            <div className="container">
                <div className="about__inner">
                    <div className="about__top">
                        <h2 className="about__title">
                            Know more about us!
                        </h2>

                        <ul className="about__list">
                            <DealItem text="Frequent Questions" />
                            <DealItem text="Who we are?" />
                            <DealItem text="Partner Program" />
                            <DealItem text="Help & Support" />
                        </ul>
                    </div>
                    <div className="about__bottom">
                        <div className="about__bottom-left">
                            <HeaderItem active width text="How does Order.UK work?" />
                            <HeaderItem active width text="What payment methods are accepted?" />
                            <HeaderItem active width text="Can I track my order in real-time?" />
                            <HeaderItem active width text="Are there any special discounts or promotions available?" />
                            <HeaderItem active width text="Is Order.UK available in my area?" />
                        </div>
                        <div className="about__bottom-right">
                            <ul className="about__bottom-list">
                                {
                                    Orders.map((el) => <AboutItem key={el.id} {...el} />)
                                }
                            </ul>

                            <div className="about__text-div">
                                <p className="about__text">Order.UK simplifies the food ordering process. Browse through our diverse menu, select your favorite dishes, and proceed to checkout. Your delicious meal will be on its way to your doorstep in no time!</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
