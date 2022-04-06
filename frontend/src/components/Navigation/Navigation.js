import { NavLink } from "react-router-dom";
import "../../sass/main.css";

function Navigation() {
  return (
    <ul className="navigationList">
      <li className="navigationItem">
        <NavLink exact to="/home" className="link" activeClassName="activeLink">
          <svg class="navigationHome" width="38px" height="38px">
            <use href="../../img/icons/home.svg"></use>
          </svg>
          <p class="navigationText">Главная</p>
        </NavLink>
      </li>
      <li className="navigationItem">
        <NavLink
          exact
          to="/diagram"
          className="link"
          activeClassName="activeLink"
        >
          <svg class="navigationStatistic" width="38px" height="38px">
            <use href="../../img/icons/statistics.svg"></use>
          </svg>
          <p class="navigationText">Статистика</p>
        </NavLink>
      </li>
      <li className="navigationItem navigationCurrencyItem">
        <NavLink
          exact
          to="/сurrency"
          className="link"
          activeClassName="activeLink"
        >
          <svg class="navigationCurrency" width="38px" height="38px">
            <use href="../../img/icons/currency.svg"></use>
          </svg>
        </NavLink>
      </li>
    </ul>
  );
}

export default Navigation;
