import { authOptions } from "@/auth";
import DashboardSection from "@/components/Dashboard";
import HeaderCPN from "@/components/Header/HeaderCPN";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    redirect("/auth/signin");
  }

  return (
    <div className="p-4 bg-gray-100">
      <HeaderCPN />
      <DashboardSection />
    </div>
  );
}
