"use client";

import { signIn } from "next-auth/react";
import { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaTwitter } from "react-icons/fa";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

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
    <div className="h-screen flex items-center justify-center bg-gray-100 px-4">
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
          onClick={() => signIn("twitter", { callbackUrl: "/" })}
          className="w-full flex items-center justify-center gap-2 bg-blue-500 text-white rounded-lg px-4 py-2 text-sm hover:bg-blue-600"
        >
          <FaTwitter size={18} />
          Continue with Twitter
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
        </form>

        <p className="text-xs text-gray-600 text-center">
          By signing in, you agree to our{" "}
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
      </div>
    </div>
  );
}
