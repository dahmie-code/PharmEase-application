import "./Dashboard.css";
import "../Global/Sidebar.css";
import OverviewCard from "./OverviewCard";
import TitleBar from "../Global/TitleBar";
import MonthlyProgressChart from "./BarChart"
import RecentOrders from "./RecentOrders";
import DailyReport from "./PieChart";
import TaskList from "./TaskList";
import Calendar from "./Calendar";


const Dashboard = () => {
  return (
    <>
      <TitleBar title="Dashboard" icon="FaThList" />
      <div className="dashboard-container">
        {" "}
        <div className="overview-cards">
          <OverviewCard icon="group" title="Total Customers" value="200" />
          <OverviewCard icon="medicines" title="Medicines" value="500" />
          <OverviewCard icon="stack" title="Out of Stock" value="0" style />
          <OverviewCard icon="expired" title="Expired Products" value="0" />
        </div>
        <div className="mid-cards">
          <div className="graph">
          <MonthlyProgressChart />
          </div>
          <div className="orders">
            <RecentOrders />
          </div>
        </div>
        <div className="last-cards">
          <div className="chart">
            <DailyReport />
          </div>
          <div className="to-do">
          <TaskList/>
          </div>
          <div className="calendar">
            <Calendar />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
