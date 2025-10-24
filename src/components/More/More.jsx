import Logo from "../../assets/img/logo.svg"

import moreImg1 from "../../assets/icons/more-img-1.svg"
import moreImg2 from "../../assets/icons/more-img-2.svg"

export default function More() {
    return (
        <section className="more">
            <div className="container">
                <div className="more__inner">
                    <p className="more__text">
                        <img src={Logo} alt="" className="more__text-img" />
                        ing is more
                    </p>
                    <p className="more__Instant"><span>Personalised</span> & Instant</p>
                    <p className="more__scond-text">Download the Order.uk app for faster ordering</p>
                    <div className="more__bottom">
                        <button>
                            <img src={moreImg1} alt="" />
                        </button>
                        <img src={moreImg2} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}
