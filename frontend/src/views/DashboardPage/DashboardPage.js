// import "../sass/main.css";
import React from "react";
import HomeTab from '../../components/homeTab/HomeTab';

function DashboardPage() {
  return (
    <div className="dashboardPageContainer">
      <div className="dashboardPageSidebar"></div>
      <div className="dashboardPageMain">
        <HomeTab />
      </div>

    </div>
  );
}

export default DashboardPage;
