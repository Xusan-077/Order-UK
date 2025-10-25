import LocatioIcon from "../../assets/icons/Location.svg"

import Basket from "../../assets/img/Basket.svg"
import Forward from "../../assets/img/Forward.svg"

import Logo from "../../assets/img/logo.svg"
import HeaderItem from "../HeaderItem/HeaderItem"

import maleUser from "../../assets/icons/male-user.svg"

export default function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <div className="header__top">
                        <div className="header__top__right">
                            <p className="header__top__right-text">
                                <span className="">🌟</span>
                                Get 5% Off your first order,
                                <span> Promo: ORDER5</span>
                            </p>
                        </div>
                        <div className="header__top__left">
                            <p className="header__top__left-text">
                                <img src={LocatioIcon} alt="" className="" />
                                Regent Street, A4, A4201, London
                                <span className="">Change Location</span>
                            </p>
                            <div className="headre__top__left__div">
                                <img src={Basket} alt="" className="" />
                                <p className="">23 Items</p>
                                <p className="">GBP 79.89</p>
                                <img src={Forward} alt="" className="" />
                            </div>
                        </div>
                    </div>
                    <div className="header__bottom">
                        <a href="#" className="header__logo-link">
                            <img src={Logo} alt="" className="header__logo" />
                        </a>

                        <button className="burger-btn">
                            <i className="bi bi-list"></i>
                        </button>

                        <ul className="header__list">
                            <HeaderItem text="Home" />
                            <HeaderItem text="Browse Menu" />
                            <HeaderItem text="Special Offers" />
                            <HeaderItem text="Restaurants" />
                            <HeaderItem text="Track Order" />
                        </ul>

                        <button className="header__button">
                            <img src={maleUser} alt="" className="header__button-img" />
                            Login/Signup
                        </button>
                    </div>
                    <ul className="header__list2">
                        <HeaderItem text="Home" />
                        <HeaderItem text="Browse Menu" />
                        <HeaderItem text="Special Offers" />
                        <HeaderItem text="Restaurants" />
                        <HeaderItem text="Track Order" />
                    </ul>
                </div>
            </div>
        </header>
    )
}
