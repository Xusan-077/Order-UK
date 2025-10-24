import Logo from "../../assets/img/logo.svg"
import SiteInput from "../SiteInput/SiteInput"

export default function Hero() {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero__inner">
                    <div className="hero__left">
                        <p className="hero__first-text">Order Restaurant food, takeaway and groceries.</p>
                        <h1 className="hero__title">Feast Your Senses, <span className="hero__title-span"> Fast and Fresh</span></h1>
                        <p className="hero__second-text">Enter a postcode to see what we deliver</p>
                        <SiteInput text/>
                    </div>
                    <div className="hero__right">
                        <div className="hero__right-comment">
                            <div className="hero__right-top">
                                <img src={Logo} alt="" className="hero__coment-img" />

                                <span className="hero__comment-span">now</span>
                            </div>
                            <div className="">
                                <h3 className="hero__coment-subtitle">We’ve Received your order!</h3>
                                <p className="hero__coment-text">Awaiting Restaurant acceptance </p>
                            </div>
                        </div>
                        <div className="hero__right-comment">
                            <div className="hero__right-top">
                                <img src={Logo} alt="" className="hero__coment-img" />

                                <span className="hero__comment-span">now</span>
                            </div>
                            <div className="">
                                <h3 className="hero__coment-subtitle">We’ve Received your order!</h3>
                                <p className="hero__coment-text">Awaiting Restaurant acceptance </p>
                            </div>
                        </div>
                        <div className="hero__right-comment">
                            <div className="hero__right-top">
                                <img src={Logo} alt="" className="hero__coment-img" />

                                <span className="hero__comment-span">now</span>
                            </div>
                            <div className="">
                                <h3 className="hero__coment-subtitle">We’ve Received your order!</h3>
                                <p className="hero__coment-text">Awaiting Restaurant acceptance </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
