"use client";

import { Button } from "@/components/ui/button";
import {
  Calendar,
  Clock,
  Download,
  FileText,
  Package,
  ShoppingBag,
  Trophy,
  User,
} from "lucide-react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { DeleteAccountButton } from "./DeleteAccountButton";

type Purchase = {
  id: string;
  email: string;
  template: string;
  createdAt: string;
  variantId: number;
};

export default function DashboardSection() {
  const { data: session, status } = useSession();
  const [purchases, setPurchases] = useState<Purchase[]>([]);

  useEffect(() => {
    if (session?.user?.email) {
      fetch("/api/purchases")
        .then((res) => res.json())
        .then((data) => setPurchases(data));
    }
  }, [session]);

  const handleDownload = async (variantId: number) => {
    try {
      const res = await fetch("/api/download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ variantId }),
      });

      if (!res.ok) throw new Error("Download failed");

      const data = await res.json();
      window.location.href = data.url;
    } catch (err) {
      alert("Unable to download file. Please try again later.");
      console.error(err);
    }
  };

  if (status === "loading") {
    return (
      <div className="min-h-screen pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded-md w-1/3 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded-md w-1/2 mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-6 shadow-sm border"
                >
                  <div className="h-6 bg-gray-200 rounded mb-2"></div>
                  <div className="h-8 bg-gray-200 rounded"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!session) {
    redirect("/auth/signin?callbackUrl=/dashboard");
  }

  const totalPurchases = purchases.length;
  const recentPurchases = purchases.filter((p) => {
    const purchaseDate = new Date(p.createdAt);
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    return purchaseDate >= thirtyDaysAgo;
  }).length;

  return (
    <div className="min-h-screen pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 p-8 lg:p-12">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                <User className="h-6 w-6 text-white" />
              </div>
              <span className="text-white/90 text-sm font-medium">
                Welcome back
              </span>
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Hey {session?.user?.name || session?.user?.email?.split("@")[0]}!
              👋
            </h1>
            <p className="text-white/90 text-lg max-w-2xl">
              Manage your purchased templates, download files, and access your
              premium Next.js resources.
            </p>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-purple-100 rounded-lg">
                <ShoppingBag className="h-6 w-6 text-purple-600" />
              </div>
              <span className="text-2xl font-bold text-gray-900">
                {totalPurchases}
              </span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">
              Total Purchases
            </h3>
            <p className="text-sm text-gray-600">Templates in your library</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-green-100 rounded-lg">
                <Clock className="h-6 w-6 text-green-600" />
              </div>
              <span className="text-2xl font-bold text-gray-900">
                {recentPurchases}
              </span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">
              Recent Purchases
            </h3>
            <p className="text-sm text-gray-600">Last 30 days</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Trophy className="h-6 w-6 text-blue-600" />
              </div>
              <span className="text-2xl font-bold text-gray-900">
                {totalPurchases > 0 ? "Pro" : "Starter"}
              </span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">Member Status</h3>
            <p className="text-sm text-gray-600">
              {totalPurchases > 0 ? "Premium customer" : "New member"}
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 lg:p-8 border-b border-gray-100">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Package className="h-5 w-5 text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                Your Templates
              </h2>
            </div>
            <p className="text-gray-600">
              Download and manage your purchased Next.js templates
            </p>
          </div>

          {purchases.length === 0 ? (
            <div className="p-8 lg:p-12 text-center">
              <div className="max-w-md mx-auto">
                <div className="p-4 bg-gray-100 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <FileText className="h-10 w-10 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  No templates yet
                </h3>
                <p className="text-gray-600 mb-6">
                  You haven&apos;t purchased any templates yet. Browse our
                  collection of premium Next.js templates to get started.
                </p>
                <Button
                  className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors"
                  onClick={() => (window.location.href = "/")}
                >
                  Browse Templates
                </Button>
              </div>
            </div>
          ) : (
            <>
              {/* Desktop Table */}
              <div className="hidden md:block overflow-x-auto">
                <table className="min-w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Template
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Purchase Date
                      </th>
                      <th className="px-6 py-4 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {purchases.map((purchase) => (
                      <tr
                        key={purchase.id}
                        className="hover:bg-gray-50 transition-colors duration-150"
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-purple-100 rounded-lg">
                              <FileText className="h-4 w-4 text-purple-600" />
                            </div>
                            <div>
                              <div className="font-semibold text-gray-900">
                                {purchase.template}
                              </div>
                              <div className="text-sm text-gray-500">
                                Next.js Template
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2 text-gray-600">
                            <Calendar className="h-4 w-4" />
                            <span className="text-sm">
                              {new Date(purchase.createdAt).toLocaleDateString(
                                "en-US",
                                {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                }
                              )}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <Button
                            onClick={() => handleDownload(purchase.variantId)}
                            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors inline-flex items-center gap-2"
                            size="sm"
                          >
                            <Download className="h-4 w-4" />
                            Download
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Cards */}
              <div className="md:hidden divide-y divide-gray-200">
                {purchases.map((purchase) => (
                  <div key={purchase.id} className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-purple-100 rounded-lg">
                          <FileText className="h-4 w-4 text-purple-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">
                            {purchase.template}
                          </h3>
                          <p className="text-sm text-gray-500">
                            Next.js Template
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-gray-600 mb-4">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">
                        {new Date(purchase.createdAt).toLocaleDateString(
                          "en-US",
                          {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          }
                        )}
                      </span>
                    </div>

                    <Button
                      onClick={() => handleDownload(purchase.variantId)}
                      className="w-full bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors inline-flex items-center justify-center gap-2"
                      size="sm"
                    >
                      <Download className="h-4 w-4" />
                      Download Template
                    </Button>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Account Section */}
        <div className="mt-12 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 lg:p-8 border-b border-gray-100">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-red-100 rounded-lg">
                <User className="h-5 w-5 text-red-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                Account Settings
              </h2>
            </div>
            <p className="text-gray-600">
              Manage your account preferences and data
            </p>
          </div>

          <div className="p-6 lg:p-8">
            <DeleteAccountButton />
          </div>
        </div>
      </div>
    </div>
  );
}
