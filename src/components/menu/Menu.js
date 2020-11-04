import "./Menu.scss";
import { NavLink } from "react-router-dom";

function Menu({ isHeader, isOpen }) {
  let menuClassName = "menu";
  if (isOpen && isHeader) {
    menuClassName = "menu menu--header menu--show";
  } else if (isHeader) {
    menuClassName = "menu menu--header menu--hide";
  }

  return (
    <nav className={menuClassName}>
      <ul className={isHeader ? "menu_list  menu_list--header" : "menu_list"}>
        <li className={isHeader ? "menu_item menu_item--header" : "menu_item"}>
          <NavLink to="/home" activeClassName="active-link">
            Home
          </NavLink>
        </li>
        <li className={isHeader ? "menu_item menu_item--header" : "menu_item"}>
          <NavLink to="/about" activeClassName="active-link">
            About Me
          </NavLink>
        </li>
        <li className={isHeader ? "menu_item menu_item--header" : "menu_item"}>
          <NavLink to="/portfolio" activeClassName="active-link">
            Portfolio
          </NavLink>
        </li>
        <li className={isHeader ? "menu_item menu_item--header" : "menu_item"}>
          <NavLink to="/contact" activeClassName="active-link">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
