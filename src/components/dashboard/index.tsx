import DashboardStats from "./components/dashboardStats";
import RecentActivities from "./components/recentActivities";



export default function Dashboard() {
  return (
    <div className="flex flex-col gap-8">
      <DashboardStats />
      <RecentActivities />
    </div>
  );
}