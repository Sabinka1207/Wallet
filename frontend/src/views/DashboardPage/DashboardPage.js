// import DiagramTab from '../../components/DiagramTab';
import '../../css/main.min.css';
import ButtonAddTransaction from '../../components/ButtonAddTransactions/ButtonAddTransactions';
import HomeTab from '../../components/homeTab/HomeTab';

function DashboardPage() {
  return (
    <>
      <div className="dashboardPageContainer">
        <div className="dashboardPageSidebar">
          <ButtonAddTransaction />
          <HomeTab />
        </div>
        <div className="dashboardPageMain"></div>
      </div>
      {/* <DiagramTab /> */}
    </>
  );
}

export default DashboardPage;
