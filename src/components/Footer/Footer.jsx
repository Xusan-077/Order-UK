import Logo from "../../assets/img/logo.svg"

import moreImg1 from "../../assets/icons/more-img-1.svg"
import moreImg2 from "../../assets/icons/more-img-2.svg"
import SiteInput from "../SiteInput/SiteInput"

import footerImg1 from "../../assets/icons/Facebook.svg"
import footerImg2 from "../../assets/icons/Snapchat.svg"
import footerImg3 from "../../assets/icons/Instagram.svg"
import footerImg4 from "../../assets/icons/TikTok.svg"
import FooterItem from "../FooterItem/FooterItem"

export default function Footer() {
    return (

        <footer className="footer">
            <div className="container">
                <div className="footer__inner">
                    <div className="footer__top">
                        <div className="footer-first">
                            <a href="#" className="footer__logo-link">
                                <img src={Logo} alt="" className="footer__logo" />
                            </a>

                            <div className="footer__top-button-div">
                                <button>
                                    <img src={moreImg1} alt="" />
                                </button>
                                <img src={moreImg2} alt="" />
                            </div>
                            <p className="footer__text">
                                Company # 490039-445, Registered with House of companies.
                            </p>
                        </div>
                        <div className="footer-second">
                            <h2 className="footer__subtitle">
                                Get Exclusive Deals in your Inbox
                            </h2>
                            <SiteInput />
                            <p className="footer__input-text">
                                we wont spam, read our email policy
                            </p>

                            <ul className="footer__icon-list">
                                <li className="footer__icon-item">
                                    <a href="#" className="footer__icon-link">
                                        <img src={footerImg1} alt="" className="footer__icon-img" />
                                    </a>
                                </li>
                                <li className="footer__icon-item">
                                    <a href="#" className="footer__icon-link">
                                        <img src={footerImg2} alt="" className="footer__icon-img" />
                                    </a>
                                </li>
                                <li className="footer__icon-item">
                                    <a href="#" className="footer__icon-link">
                                        <img src={footerImg3} alt="" className="footer__icon-img" />
                                    </a>

                                </li>
                                <li className="footer__icon-item">
                                    <a href="#" className="footer__icon-link">
                                        <img src={footerImg4} alt="" className="footer__icon-img" />
                                    </a>

                                </li>
                            </ul>
                        </div>
                        <ul className="footer__main-list">
                            <li className="footer__main-item">
                                <h3 className="footer__h3">Legal Pages</h3>
                                <ul className="footer__list">
                                    <FooterItem text="Terms and conditions" />
                                    <FooterItem text="Privacy" />
                                    <FooterItem text="Cookies" />
                                    <FooterItem text="Modern Slavery Statement" />
                                </ul>
                            </li>
                            <li className="footer__main-item">

                                <ul className="footer__list">
                                    <h3 className="footer__h3">Important Links</h3>
                                    <FooterItem text="Get help" />
                                    <FooterItem text="Add your restaurant" />
                                    <FooterItem text="Sign up to deliver" />
                                    <FooterItem text="Create a business account" />
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer__bottom">
                <div className="footer__bottom-div">

                    <p className="footer__bottom-text">
                        Order.uk Copyright 2024, All Rights Reserved.
                    </p>

                    <ul className="footer__bottom-list">
                        <li className="footer__bottom-item">
                            Privacy Policy
                        </li>
                        <li className="footer__bottom-item">
                            Terms
                        </li>
                        <li className="footer__bottom-item">
                            Pricing
                        </li>
                        <li className="footer__bottom-item">
                            Do not sell or share my personal information
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
