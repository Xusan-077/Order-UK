import { statusArr } from "../../Constants";
import StatusItem from "../StatusItem/StatusItem";

export default function Status() {
    return (
        <section className="status">
            <div className="container">
                <div className="status__inner">
                    <ul className="status__list">
                        {
                            statusArr.map((el, index) => <StatusItem key={index} {...el} />)
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}
