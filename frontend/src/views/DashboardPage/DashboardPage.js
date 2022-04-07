
import "../../css/main.min.css";
import ButtonAddTransaction from '../../components/ButtonAddTransactions/ButtonAddTransactions';

function DashboardPage() {
  return (
    <div className="dashboardPageContainer">
      <div className="dashboardPageSidebar">
        <span>DashboardPage</span>
        <ButtonAddTransaction />
      </div>
      <div className="dashboardPageMain"></div>
    </div>
  );
}

export default DashboardPage;
