import DashboardSection from "@/components/Dashboard";
import HeaderCPN from "@/components/Header/HeaderCPN";

export default function Dashboard() {

  return (
    <div className="p-4 bg-gray-100">
      <HeaderCPN />
      <DashboardSection />
    </div>
  )
}
