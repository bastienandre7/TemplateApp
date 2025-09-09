"use client";

import { signIn, useSession } from "next-auth/react";
import { useState } from "react";

export default function AIBuilder() {
  const [input, setInput] = useState("");
  const [generatedCode, setGeneratedCode] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [usageInfo, setUsageInfo] = useState<{
    currentUsage: number;
    limit: number;
    plan: string;
  } | null>(null);

  const { data: session } = useSession();

  const generateCode = async (prompt: string) => {
    setIsLoading(true);
    setError("");
    setGeneratedCode("");

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [
            {
              role: "user",
              content: `Create a Next.js 15 component in TypeScript with Tailwind CSS.
Follow these conventions:
- "use client" if client-side interaction needed
- export default
- responsive design (mobile-first)
- no third-party UI libraries

Specifications: ${prompt}`,
            },
          ],
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.error);
        setUsageInfo({
          currentUsage: errorData.currentUsage,
          limit: errorData.limit,
          plan: errorData.plan,
        });
        return;
      }

      const data = await response.json();
      setGeneratedCode(data.content || data.message || "");
    } catch {
      setError("An error occurred while generating code");
    } finally {
      setIsLoading(false);
    }
  };

  if (!session) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen  px-4">
        <div className="bg-blue-50 rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            AI Component Builder
          </h1>
          <p className="text-gray-600 mb-6">
            Sign in to start generating Next.js components with AI
          </p>
          <button
            onClick={() => signIn()}
            className="w-full bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition"
          >
            Sign In
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full max-w-4xl mx-auto py-16 mt-20 min-h-screen px-4">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          AI Component Builder
        </h1>
        <p className="text-gray-600">
          Generate Next.js components with Tailwind CSS using AI
        </p>
        {usageInfo && (
          <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-800">
              {usageInfo.plan} Plan: {usageInfo.currentUsage}/{usageInfo.limit}{" "}
              requests used today
            </p>
          </div>
        )}
      </div>

      {/* Input Form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (input.trim()) {
            generateCode(input);
            setInput("");
          }
        }}
        className="flex flex-col sm:flex-row gap-2 mb-8"
      >
        <input
          className="flex-1 border border-zinc-300 dark:border-zinc-800 rounded-lg px-4 py-3 shadow focus:outline-none focus:ring-2 focus:ring-purple-300"
          value={input}
          placeholder="Describe the component you want to generate..."
          onChange={(e) => setInput(e.currentTarget.value)}
          autoFocus
          disabled={isLoading}
        />
        <button
          type="submit"
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition disabled:opacity-50 w-full sm:w-auto"
          disabled={isLoading}
        >
          {isLoading ? "Generating..." : "Generate"}
        </button>
      </form>

      {/* Error Display */}
      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-800">{error}</p>
          {usageInfo && (
            <a
              href="/pricing"
              className="text-red-600 underline hover:text-red-800 mt-2 inline-block"
            >
              Upgrade to Pro Plan
            </a>
          )}
        </div>
      )}

      {/* Generated Code */}
      <div className="flex flex-col flex-1">
        <h2 className="text-2xl font-semibold mb-4">Generated Code</h2>
        <div className="flex-1 bg-gray-900 rounded-lg p-6 overflow-auto min-h-[400px]">
          <pre className="text-green-400 text-sm leading-relaxed">
            <code>
              {generatedCode || "// Your generated code will appear here..."}
            </code>
          </pre>
        </div>
        {generatedCode && (
          <div className="flex gap-2 mt-4">
            <button
              onClick={() => navigator.clipboard.writeText(generatedCode)}
              className="px-6 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition cursor-pointer"
            >
              Copy Code
            </button>
            <button
              onClick={() => setGeneratedCode("")}
              className="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition cursor-pointer"
            >
              Clear
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
