import { authOptions } from "@/auth";
import { prisma } from "@/lib/prisma";
import { openai } from "@ai-sdk/openai";
import { generateText } from "ai";
import { getServerSession } from "next-auth";

export const maxDuration = 30;

async function getUserPlan(email: string): Promise<"FREE" | "PRO"> {
  const subscription = await prisma.subscription.findUnique({
    where: { userEmail: email },
  });
  return subscription?.plan || "FREE";
}

async function getUserUsage(email: string): Promise<number> {
  const today = new Date().toISOString().split("T")[0];
  const usage = await prisma.aIUsage.findUnique({
    where: {
      userEmail_date: {
        userEmail: email,
        date: new Date(today),
      },
    },
  });
  return usage?.usageCount || 0;
}

async function incrementUsage(email: string): Promise<void> {
  const today = new Date().toISOString().split("T")[0];
  await prisma.aIUsage.upsert({
    where: {
      userEmail_date: {
        userEmail: email,
        date: new Date(today),
      },
    },
    update: {
      usageCount: {
        increment: 1,
      },
    },
    create: {
      userEmail: email,
      date: new Date(today),
      usageCount: 1,
    },
  });
}

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return new Response("Unauthorized", { status: 401 });
    }

    const userEmail = session.user.email;
    const userPlan = await getUserPlan(userEmail);
    const currentUsage = await getUserUsage(userEmail);

    const limits = {
      FREE: 1,
      PRO: 100,
    };

    if (currentUsage >= limits[userPlan]) {
      return new Response(
        JSON.stringify({
          error: `Daily limit reached. ${userPlan} Plan : ${limits[userPlan]} requests per day.`,
          currentUsage,
          limit: limits[userPlan],
          plan: userPlan,
        }),
        {
          status: 429,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // ✅ Parse le JSON avec validation
    const body = await req.json();
    const { messages } = body;

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return new Response(
        JSON.stringify({ error: "Messages array is required" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    await incrementUsage(userEmail);

    // ✅ Utilise generateText pour une réponse JSON
    const result = await generateText({
      model: openai("gpt-4o"),
      messages: messages.map((msg) => ({
        role: msg.role as "user" | "assistant" | "system",
        content: msg.content,
      })),
      system: `You are a code-only generator. Rules:
1. Output executable TypeScript/JSX ONLY
2. No text, no explanations, no markdown
3. Start directly with code (imports/"use client")
4. End with "export default function ComponentName() { ... }"
5. Do NOT use "const Component = () =>"
6. Use Tailwind CSS
7. Must be responsive

STRICT: Always use "export default function <Name>()" as the component definition.
VIOLATION = FAILURE. Code only.`,
    });

    return new Response(JSON.stringify({ content: result.text }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
