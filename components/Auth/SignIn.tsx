"use client";

import { signIn } from "next-auth/react";
import { useEffect, useState } from "react";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null; // évite les erreurs d'hydratation

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (emailSent) return;

    const res = await signIn("email", {
      email,
      redirect: false,
      callbackUrl: "/",
    });

    if (!res?.error) {
      setMessage("Check your email for the login link.");
      setEmailSent(true);
    } else {
      setMessage("Error sending login link.");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100 px-4 md:px-0">
      <div className="max-w-md w-full p-6 bg-white shadow-lg rounded-xl">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
          Sign in
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            autoComplete="email"
            className="w-full p-2 border rounded-lg text-black"
          />
          <button
            type="submit"
            className={`w-full p-2 rounded-lg ${
              emailSent
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 text-white"
            }`}
            disabled={emailSent}
          >
            {emailSent ? "Login Link Sent" : "Get Login Link"}
          </button>
          {message && (
            <p className="text-green-600 text-sm text-center">{message}</p>
          )}
          <p className="text-xs text-gray-600 text-center">
            By creating an account, you agree to our{" "}
            <a
              href="/privacy&terms/terms"
              className="text-blue-600 hover:underline"
            >
              Terms of Service
            </a>{" "}
            and{" "}
            <a
              href="/privacy&terms/privacy"
              className="text-blue-600 hover:underline"
            >
              Privacy Policy
            </a>
            .
          </p>
        </form>
      </div>
    </div>
  );
}
