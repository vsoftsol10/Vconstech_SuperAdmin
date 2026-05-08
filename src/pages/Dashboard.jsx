import StatsCards from "../components/cards/StatsCards";
import PlanUsageSection from "../components/cards/PlanUsageSection";
import ActiveUsersChart from "../components/charts/ActiveUsersChart";
import RecentCustomers from "../components/tables/RecentCustomers";

const Dashboard = () => {
  return (
    <div className="space-y-6">

      {/* Dashboard Title */}
      <div>
        <h1 className="text-[32px] font-bold text-[#111111]">
          Dashboard
        </h1>

        <p className="text-gray-500 mt-1 text-sm">
          Welcome back to your analytics dashboard.
        </p>
      </div>

      {/* Stats Cards */}
      <StatsCards />

      {/* Plan Usage + Donut */}
      <PlanUsageSection />

      <ActiveUsersChart />

      <RecentCustomers />

    </div>
  );
};

export default Dashboard;