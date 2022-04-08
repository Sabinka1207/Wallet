import DiagramTab from '../../components/DiagramTab';
import '../../css/main.min.css';
import ButtonAddTransaction from '../../components/ButtonAddTransactions/ButtonAddTransactions';

function DashboardPage() {
  return (
    <>
      <div className="dashboardPageContainer">
        <div className="dashboardPageSidebar">
          <span>DashboardPage</span>
          <ButtonAddTransaction />
        </div>
        <div className="dashboardPageMain"></div>
      </div>
      <DiagramTab />
    </>
  );
}

export default DashboardPage;
