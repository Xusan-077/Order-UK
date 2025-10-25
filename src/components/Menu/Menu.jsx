import menu from "../../assets/icons/menu.svg"
import MenuItem from "../MenuItem/MenuItem"

export default function Menu({ setMenu }) {
    return (
        <div className="menu-div" onClick={() => setMenu(false)}>
            <div className="menu">
                <div className="menu__top">
                    <img src={menu} alt="" className="menu__top-img" />
                    <h2 className="menu__top-title">
                        Menu
                    </h2>
                </div>
                <ul className="menu__list">
                    <MenuItem text="Pizzas" />
                    <MenuItem text="Garlic Bread" />
                    <MenuItem text="Calzone" />
                    <MenuItem text="Kebabas" />
                    <MenuItem text="Salads" />
                    <MenuItem text="Cold drinks" />
                    <MenuItem text="Happy Meal®" />
                    <MenuItem text="Desserts" />
                    <MenuItem text="Hot drinks" />
                    <MenuItem text="Sauces" />
                    <MenuItem text="Orbit®" />
                </ul>
            </div>
        </div>
    )
}
