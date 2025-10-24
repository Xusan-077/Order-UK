import { StartArr } from "../../Constants";
import StartItem from "../StartItem/StartItem";

export default function Start() {
    return (
        <section className="start">
            <div className="container">
                <div className="start__inner">
                    <ul className="start__list">
                        {
                            StartArr.map((el) => <StartItem key={el.id} {...el} />)
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}
