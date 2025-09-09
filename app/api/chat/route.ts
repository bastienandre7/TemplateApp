import { authOptions } from "@/auth";
import { prisma } from "@/lib/prisma";
import { openai } from "@ai-sdk/openai";
import { convertToModelMessages, streamText, UIMessage } from "ai";
import { getServerSession } from "next-auth";

export const maxDuration = 30;

async function getUserPlan(email: string): Promise<"FREE" | "PRO"> {
  const subscription = await prisma.subscription.findUnique({
    where: { userEmail: email }, // Corrigé: userEmail au lieu de user_email
  });
  return subscription?.plan || "FREE"; // Corrigé: "FREE" au lieu de "free"
}

async function getUserUsage(email: string): Promise<number> {
  const today = new Date().toISOString().split("T")[0];
  const usage = await prisma.aIUsage.findUnique({
    // Corrigé: aIUsage au lieu de aiUsage
    where: {
      userEmail_date: {
        // Corrigé: userEmail_date au lieu de user_email_date
        userEmail: email, // Corrigé: userEmail au lieu de user_email
        date: new Date(today),
      },
    },
  });
  return usage?.usageCount || 0; // Corrigé: usageCount au lieu de usage_count
}

async function incrementUsage(email: string): Promise<void> {
  const today = new Date().toISOString().split("T")[0];
  await prisma.aIUsage.upsert({
    // Corrigé: aIUsage au lieu de aiUsage
    where: {
      userEmail_date: {
        // Corrigé: userEmail_date au lieu de user_email_date
        userEmail: email, // Corrigé: userEmail au lieu de user_email
        date: new Date(today),
      },
    },
    update: {
      usageCount: {
        // Corrigé: usageCount au lieu de usage_count
        increment: 1,
      },
    },
    create: {
      userEmail: email, // Corrigé: userEmail au lieu de user_email
      date: new Date(today),
      usageCount: 1, // Corrigé: usageCount au lieu de usage_count
    },
  });
}

export async function POST(req: Request) {
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
        error: `Limite quotidienne atteinte. Plan ${userPlan}: ${limits[userPlan]} requêtes par jour.`,
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

  const { messages }: { messages: UIMessage[] } = await req.json();

  await incrementUsage(userEmail);

  const result = streamText({
    model: openai("gpt-4o"),
    messages: convertToModelMessages(messages),
    system:
      "Tu es un assistant qui génère du code React/Next.js. Réponds toujours avec du code complet et fonctionnel dans des blocs de code markdown.",
  });

  return result.toUIMessageStreamResponse();
}
