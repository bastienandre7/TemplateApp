"use client";

import { useChat } from "@ai-sdk/react";
import { useEffect, useRef, useState } from "react";

export default function AIBuilder() {
  const [input, setInput] = useState("");
  const { messages, sendMessage } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [generatedCode, setGeneratedCode] = useState("");

  // Scroll automatique vers le bas
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Récupère le dernier message AI contenant du code
  useEffect(() => {
    const lastAI = [...messages].reverse().find((m) => m.role === "assistant");
    if (lastAI) {
      // Cherche un bloc de code dans la réponse
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

  return (
    <div className="flex flex-col w-full max-w-5xl mx-auto py-16 mt-20 min-h-screen px-2">
      <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight max-w-5xl">
        AI Builder - Generate Next.js 15 Components & Pages
      </h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (input.trim()) {
            sendMessage({
              text: `Create a Next.js 15 component or page in TypeScript with Tailwind CSS.
Follow these conventions:
- “use client” if client-side interaction
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
        />
        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
        >
          Generate
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

      {/* Historique des messages (optionnel) */}
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
