import { NavLink } from "react-router-dom";
import logout from "../../img/icons/logout.svg";
import "../../sass/main.css";

function Header({ children }) {
  return (
    <header className="header">
      <NavLink
        exact
        to="/dashboard"
        className="linkLogo"
        activeClassName="activeLinkLogo"
      >
        {children}
      </NavLink>

      <ul className="list">
        <li className="item">Имя</li>
        <li className="item">
          <img src={logout} alt="Выйти" />
        </li>
      </ul>
    </header>
  );
}

export default Header;
