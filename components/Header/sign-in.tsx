"use client";

import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function AuthButton() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div>
        <Button
          className="cursor-pointer text-black"
          variant="link"
          onClick={() => signIn()}
        >
          Sign In
        </Button>
        <Button
          className="bg-black text-white hover:bg-gray-800 cursor-pointer"
          onClick={() => signIn()}
        >
          Get Started
        </Button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <Button
        className="cursor-pointer text-black font-thin"
        variant="link"
        onClick={() => signOut()}
      >
        Sign Out
      </Button>
      <Button
        className="bg-black text-white hover:bg-gray-800 cursor-pointer"
        asChild
      >
        <Link href="/dashboard">Dashboard</Link>
      </Button>
    </div>
  );
}
