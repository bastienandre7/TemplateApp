"use client";

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
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

  if (status === "loading") return <p className="p-4">Loading...</p>;

  if (!session) {
    redirect("/auth/signin?callbackUrl=/dashboard");
  }

  return (
    <div className="p-4 sm:p-8 max-w-6xl mx-auto min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Your Products</h1>

      {purchases.length === 0 ? (
        <p className="text-muted-foreground">
          You haven&apos;t bought anything yet.
        </p>
      ) : (
        <div className="overflow-x-auto rounded-lg border">
          <table className="min-w-full text-sm text-left text-gray-700">
            <thead className="bg-white border-b text-xs font-medium uppercase tracking-wider text-gray-500">
              <tr>
                <th className="px-4 py-3">Template</th>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {purchases.map((p) => (
                <tr
                  key={p.id}
                  className="border-b hover:bg-gray-50 transition-colors"
                >
                  <td className="px-4 py-3 font-medium">{p.template}</td>
                  <td className="px-4 py-3 text-sm text-gray-500">
                    {new Date(p.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-3 text-right">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDownload(p.variantId)}
                      className="flex justify-end items-center gap-2 ml-auto"
                    >
                      <Download size={14} />
                      Download
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <DeleteAccountButton />
    </div>
  );
}
