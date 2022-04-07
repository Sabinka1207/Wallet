import Header from "../../components/Header/Header";
// import Navigation from "../../components/Navigation";
import Balance from "../../components/Balance";
import Currency from "../../components/Currency";
// import MainTab from "../../components//MainTab/MainTab";

import "../../css/main.min.css";

function DashboardPage() {
  return (
    <div className="dashboardPageContainer">
      <Header></Header>
      <div className="dashboardPageSidebar">
        {/* <Navigation></Navigation> */}
        <Balance></Balance>
        <Currency></Currency>
        <span>DashboardPage</span>
      </div>
      <div className="dashboardPageMain">{/* <MainTab></MainTab> */}</div>
    </div>
  );
}

export default DashboardPage;
