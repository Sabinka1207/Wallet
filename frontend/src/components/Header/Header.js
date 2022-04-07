import "../../css/main.min.css";
import { NavLink } from "react-router-dom";
import logout from "../../img/icons/logout.svg";
import LogoWallet from "../LogoWallet/LogoWallet";

function Header() {
  return (
    <header className="header">
      <NavLink
        exact
        to="/dashboard"
        className="linkLogo"
        activeClassName="activeLinkLogo"
      >
        <LogoWallet></LogoWallet>
      </NavLink>
      <div className="headerLogoutWrap">
        <p className="headerUserName">Имя</p>
        {/* <svg className="headerLogoutImg" width="24px" height="24px">
          <use href="img/icons/logout.svg"></use>
        </svg> */}
        <img className="headerLogoutImg" src={logout} alt="Выйти" />
        <p className="headerLogout">Выйти</p>
      </div>
    </header>
  );
}

export default Header;
