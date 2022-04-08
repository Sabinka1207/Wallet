import { NavLink } from 'react-router-dom';
// import "../../sass/main.css";

function Navigation() {
  return (
    <ul className="navigationList">
      <li className="navigationItem">
        <NavLink
          exact
          to="/home"
          className="navigationLink"
          activeClassName="navigationActiveLink"
        >
          <svg class="navigationHome navigationImg" width="38px" height="38px">
            <use href="../../img/icons/home.svg"></use>
          </svg>

          <p className="navigationText">Главная</p>
        </NavLink>
      </li>

      <li className="navigationItem">
        <NavLink
          exact
          to="/diagram"
          className="navigationLink"
          activeClassName="navigationActiveLink"
        >
          <svg
            class="navigationStatistic navigationImg"
            width="38px"
            height="38px"
          >
            <use href="../../img/icons/statistics.svg"></use>
          </svg>

          <p className="navigationText">Статистика</p>
        </NavLink>
      </li>

      <li className="navigationItem navigationCurrencyItem">
        <NavLink
          exact
          to="/сurrency"
          className="navigationLink"
          activeClassName="navigationActiveLink"
        >
          <svg
            class="navigationCurrency navigationImg"
            width="38px"
            height="38px"
          >
            <use href="../../img/icons/currency.svg"></use>
          </svg>
        </NavLink>
      </li>
    </ul>
  );
}

export default Navigation;
