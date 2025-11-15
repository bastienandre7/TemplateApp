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
}: DynamicBuyButtonProps) {
  const { status } = useSession();
  const isOwned = purchases.some((p) => p.template === template.name);

  if (status === "loading") {
    return (
      <Button disabled className="w-full px-8 py-4 text-lg h-[50px] opacity-60">
        Loading...
      </Button>
    );
  }

  if (status === "unauthenticated") {
    return (
      <Button
        className="w-full px-8 py-4 text-lg h-[50px] bg-primary text-white border border-white/20"
        onClick={() => signIn()}
      >
        Get the Template
      </Button>
    );
  }

  if (isOwned) {
    return (
      <Link href="/dashboard" className="w-full">
        <Button className="w-full px-8 py-4 text-lg bg-primary text-white h-[50px] shadow-xl hover:shadow-2xl flex items-center justify-center gap-2 border border-white/20">
          <Download className="w-5 h-5" />
          Download
        </Button>
      </Link>
    );
  }

  return (
    <Link href={template.lemonLink} className="w-full" target="_blank">
      <Button className="w-full px-8 py-4 text-lg bg-primary text-white h-[50px] shadow-xl hover:shadow-2xl flex items-center justify-center gap-2 border border-white/20">
        <Download className="w-5 h-5" />
        Get the Template
      </Button>
    </Link>
  );
}
