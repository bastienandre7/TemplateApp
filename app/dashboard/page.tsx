import { authOptions } from "@/auth";
import DashboardSection from "@/components/Dashboard/Dashboard";
import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Dashboard - Best Next.js Templates | BloomTPL",
  description:
    "Manage your purchased Next.js templates, download files, and access your premium resources on BloomTPL.",
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "Dashboard - Best Next.js Templates | BloomTPL",
    description:
      "Manage your purchased Next.js templates, download files, and access your premium resources on BloomTPL.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Dashboard - Best Next.js Templates | BloomTPL",
    description:
      "Manage your purchased Next.js templates, download files, and access your premium resources on BloomTPL.",
  },
};

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    redirect("/auth/signin");
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50/30">
      <DashboardSection />
    </div>
  );
}
