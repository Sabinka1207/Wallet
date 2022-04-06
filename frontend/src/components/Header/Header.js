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
      <div className="headerLogoutWrap">
        <p className="headerUserName">Имя</p>
        <svg className="headerLogoutImg" width="24px" height="24px">
          <use href="img/icons/logout.svg"></use>
        </svg>
        {/* <img className="headerLogoutImg" src={logout} alt="Выйти" /> */}
        <p className="headerLogout">Выйти</p>
      </div>
    </header>
  );
}

export default Header;
