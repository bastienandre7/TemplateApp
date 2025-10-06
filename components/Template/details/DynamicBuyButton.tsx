"use client";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";

interface DynamicBuyButtonProps {
  template: {
    name: string;
    price: number;
    lemonLink: string;
  };
  purchases: { template: string }[];
  variant?: "light" | "dark";
}

export default function DynamicBuyButton({
  template,
  purchases,
  variant = "light",
}: DynamicBuyButtonProps) {
  const { data: session, status } = useSession();
  const isOwned = purchases.some((p) => p.template === template.name);

  if (status === "loading") {
    return (
      <Button
        disabled
        className="w-full px-8 py-4 rounded-2xl text-lg bg-gray-400 text-white min-h-[56px] shadow-xl opacity-60"
      >
        <div className="w-5 h-5 border-2 border-gray-300 border-t-transparent rounded-full animate-spin" />
      </Button>
    );
  }

  if (isOwned) {
    return (
      <Link href="/dashboard" className="w-full">
        <Button className="w-full px-8 py-4 rounded-2xl text-lg bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white min-h-[56px] shadow-xl hover:shadow-2xl transform transition-all duration-300 flex items-center justify-center gap-2">
          <Download className="w-5 h-5" />
          Download Template
        </Button>
      </Link>
    );
  }

  return (
    <Button
      onClick={() => {
        if (!session) {
          signIn();
        } else if (session.user?.email) {
          const email = encodeURIComponent(session.user.email);
          const url = `${template.lemonLink}?checkout[email]=${email}`;
          window.location.href = url;
        }
      }}
      className={`w-full px-8 py-4 text-lg min-h-[56px] shadow-xl hover:shadow-2xl transform transition-all duration-300 cursor-pointer ${
        variant === "dark"
          ? "bg-white text-slate-900 hover:bg-gray-100"
          : "bg-primary hover:bg-foreground text-white"
      }`}
    >
      {template.price === 0 ? "Get FREE" : `Buy Now - $${template.price}`}
    </Button>
  );
}
