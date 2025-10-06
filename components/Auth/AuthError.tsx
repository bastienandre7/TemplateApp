"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function AuthError() {
  const params = useSearchParams();
  const error = params.get("error");

  let message = "An unknown error occurred. Please try again.";
  if (error === "AccountNotLinked") {
    message =
      "An account already exists with this email address. Please sign in using your original authentication method (Google, GitHub, or Email).";
  }

  return (
    <div className="max-w-lg mx-auto mt-20 p-8 bg-white rounded-xl shadow">
      <h1 className="text-2xl font-bold mb-4 text-red-600">
        Unable to sign in
      </h1>
      <p className="mb-6">{message}</p>
      <Link
        href="/auth/signin"
        className="inline-block px-6 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-blue-700 transition"
      >
        Back to Sign In
      </Link>
    </div>
  );
}
