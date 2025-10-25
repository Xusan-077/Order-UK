import HeaderItem from '../../components/HeaderItem/HeaderItem'

import Basket from "../../assets/img/Basket.svg"
import Forward from "../../assets/img/Forward.svg"

import maleUser from "../../assets/icons/male-user.svg"

import LocatioIcon from "../../assets/icons/Location.svg"


export default function Burger({ setBurger }) {
    return (
        <div className="burger-div" onClick={() => setBurger(false)}>

            <div className="burger">
                <ul className="burger__nav-list">
                    <HeaderItem text="Home" />
                    <HeaderItem text="Browse Menu" />
                    <HeaderItem text="Special Offers" />
                    <HeaderItem text="Restaurants" />
                    <HeaderItem text="Track Order" />
                </ul>

                <div className="burger__promo">
                    <p className="burger__promo-text">
                        <span>🌟</span>
                        Get 5% Off your first order, <span>Promo: ORDER5</span>
                    </p>
                    <p className="burger__location-text">
                        <img src={LocatioIcon} alt="Location" className="burger__location-icon" />
                        Regent Street, A4, A4201, London
                        <span className="burger__change-location">Change Location</span>
                    </p>
                </div>

                <div className="burger__cart">
                    <img src={Basket} alt="Basket" className="burger__cart-icon" />
                    <p className="burger__cart-items">23 Items</p>
                    <p className="burger__cart-total">GBP 79.89</p>
                    <img src={Forward} alt="Forward" className="burger__cart-arrow" />
                </div>

                <button className="burger__button">
                    <img src={maleUser} alt="User" className="burger__button-icon" />
                    Login / Signup
                </button>
            </div>
        </div>


    )
}
