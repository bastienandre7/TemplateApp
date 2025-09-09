"use client";

import { useChat } from "@ai-sdk/react";
import { signIn, useSession } from "next-auth/react";
import { useEffect, useRef, useState } from "react";

export default function AIBuilder() {
  const [input, setInput] = useState("");
  const [generatedCode, setGeneratedCode] = useState("");
  const [error, setError] = useState("");
  const [usageInfo, setUsageInfo] = useState<{
    currentUsage: number;
    limit: number;
    plan: string;
  } | null>(null);
  const [loading, setLoading] = useState(false);

  const { data: session } = useSession();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const { messages, sendMessage } = useChat({
    onFinish: () => setLoading(false),
    onError: (error) => {
      setLoading(false);
      try {
        const errorData = JSON.parse(error.message);
        setError(errorData.error);
        setUsageInfo({
          currentUsage: errorData.currentUsage,
          limit: errorData.limit,
          plan: errorData.plan,
        });
      } catch {
        setError("Une erreur s'est produite");
      }
    },
  });

  // Scroll automatique vers le bas
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Récupère le dernier message AI contenant du code
  useEffect(() => {
    const lastAI = [...messages].reverse().find((m) => m.role === "assistant");
    if (lastAI) {
      const codeMatch = lastAI.parts
        .map((p) => (p.type === "text" ? p.text : ""))
        .join("\n")
        .match(/```(?:tsx?|jsx?|js|typescript|javascript)?\n([\s\S]+?)```/i);
      if (codeMatch) {
        setGeneratedCode(codeMatch[1]);
      } else {
        setGeneratedCode("");
      }
    }
  }, [messages]);

  if (!session) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold mb-4">Connexion requise</h1>
        <p className="text-gray-600 mb-4">
          Vous devez être connecté pour utiliser l&apos;AI Builder.
        </p>
        <button
          onClick={() => signIn()}
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
        >
          Se connecter
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full max-w-5xl mx-auto py-16 mt-20 min-h-screen px-2">
      <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight max-w-5xl">
        AI Builder - Generate Next.js 15 Components & Pages
      </h1>
      <a
        href="https://bloom-tpl.lemonsqueezy.com/buy/46cfd4c4-de9c-49e0-bb83-c087ab672218" // Remplace par l'ID de ton produit
        className="text-indigo-600 hover:text-indigo-800 underline"
      >
        Passer au plan PRO pour plus d&apos;utilisations →
      </a>

      {/* Affichage des erreurs de limite */}
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          <p className="font-semibold">{error}</p>
          {usageInfo && (
            <div className="text-sm mt-2">
              <p>
                Utilisation: {usageInfo.currentUsage}/{usageInfo.limit} (Plan{" "}
                {usageInfo.plan})
              </p>
              {usageInfo.plan === "FREE" && (
                <a
                  href="https://bloom-tpl.lemonsqueezy.com/buy/46cfd4c4-de9c-49e0-bb83-c087ab672218" // Remplace par l'ID de ton produit
                  className="text-indigo-600 hover:text-indigo-800 underline"
                >
                  Passer au plan PRO pour plus d&apos;utilisations →
                </a>
              )}
            </div>
          )}
        </div>
      )}

      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (input.trim()) {
            setError(""); // Reset error
            setLoading(true);
            sendMessage({
              text: `Create a Next.js 15 component or page in TypeScript with Tailwind CSS.
Follow these conventions:
- "use client" if client-side interaction
- export default
- responsive layout (mobile-first)
- no third-party UI libraries

Specifications: ${input}`,
            });
            setInput("");
          }
        }}
        className="flex gap-2 pb-8"
      >
        <input
          className="flex-1 border border-zinc-300 dark:border-zinc-800 rounded-lg px-4 py-3 shadow focus:outline-none focus:ring-2 focus:ring-purple-300"
          value={input}
          placeholder="Describe the component or page to be generated..."
          onChange={(e) => setInput(e.currentTarget.value)}
          autoFocus
          disabled={loading} // Changé de 'loading' à 'isLoading'
        />
        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-purple-700 transition disabled:opacity-50"
          disabled={loading} // Changé de 'loading' à 'isLoading'
        >
          {loading ? "Génération..." : "Generate"}{" "}
          {/* Changé de 'loading' à 'isLoading' */}
        </button>
      </form>

      {/* Affichage du code généré */}
      {generatedCode && (
        <div className="bg-gray-900 rounded-xl p-6 mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-green-400 font-semibold">Generated code</span>
            <button
              type="button"
              className="text-xs bg-green-700 text-white px-2 py-1 rounded hover:bg-green-800 cursor-pointer"
              onClick={() => {
                navigator.clipboard.writeText(generatedCode);
              }}
            >
              Copy
            </button>
          </div>
          <pre className="text-blue-200 text-sm overflow-hidden">
            <code>{generatedCode}</code>
          </pre>
        </div>
      )}

      {/* Historique des messages */}
      <div className="flex-1 overflow-y-auto mb-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`whitespace-pre-wrap rounded-lg px-4 py-2 ${
              message.role === "user"
                ? "bg-purple-100 text-purple-900 self-end"
                : "bg-gray-100 text-gray-800 self-start"
            }`}
          >
            <span className="font-semibold text-xs mr-2">
              {message.role === "user" ? "You:" : "AI:"}
            </span>
            {message.parts.map((part, i) => {
              if (part.type === "text") {
                return <span key={`${message.id}-${i}`}>{part.text}</span>;
              }
              return null;
            })}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
}
