"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (emailSent || loading) return;

    setLoading(true);

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

    setLoading(false);
  };

  return (
    <div className="h-screen flex items-center justify-center bg-background px-4">
      <div className="max-w-md w-full p-6 bg-white shadow-lg rounded-xl space-y-4">
        <h2 className="text-xl font-semibold text-gray-800 text-center">
          Sign in
        </h2>

        <button
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm hover:bg-gray-50"
        >
          <FcGoogle size={20} />
          Continue with Google
        </button>

        <button
          onClick={() => signIn("github", { callbackUrl: "/" })}
          className="w-full flex items-center justify-center gap-2 bg-gray-900 text-white rounded-lg px-4 py-2 text-sm hover:bg-gray-800"
        >
          <FaGithub size={18} />
          Continue with GitHub
        </button>

        <div className="relative text-center my-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative bg-white px-4 text-sm text-gray-500">
            Or sign in with email
          </div>
        </div>

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
            disabled={emailSent || loading}
            className={`w-full p-2 rounded-lg ${
              emailSent || loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-primary hover:bg-foreground text-white"
            }`}
          >
            {loading
              ? "Sending..."
              : emailSent
                ? "Login Link Sent"
                : "Get Login Link"}
          </button>
          {message && (
            <p className="text-green-600 text-sm text-center">{message}</p>
          )}
        </form>

        <p className="text-xs text-gray-600 text-center">
          By signing in, you agree to our{" "}
          <a href="/terms-of-use" className="text-blue-600 hover:underline">
            Terms of Service
          </a>
          ,{" "}
          <a
            href="/privacy&terms/privacy-policy"
            className="text-blue-600 hover:underline"
          >
            Privacy Policy
          </a>{" "}
          and{" "}
          <a href="/legal-notice" className="text-blue-600 hover:underline">
            Legal Notice
          </a>
          .
        </p>

        <div className="text-center">
          <Link href="/" className="text-sm hover:underline">
            ← Back to Menu
          </Link>
        </div>
      </div>
    </div>
  );
}
