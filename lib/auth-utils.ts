import { authOptions } from "@/auth"; // Import des options depuis auth.ts
import { prisma } from "@/lib/prisma";
import { Role } from "@prisma/client";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export async function requireAdmin() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    redirect("/auth/signin");
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    select: { role: true, email: true, id: true },
  });

  if (user?.role !== "ADMIN") {
    redirect("/unauthorized");
  }

  return user;
}

export async function requireAuth() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    redirect("/auth/signin");
  }

  return session;
}

// Nouvelle fonction pour récupérer l'utilisateur courant
export async function getCurrentUser() {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return null;
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        image: true,
      },
    });

    return user;
  } catch {
    return null;
  }
}

// Helper pour vérifier les permissions
export async function hasRole(requiredRole: Role): Promise<boolean> {
  const user = await getCurrentUser();
  return user?.role === requiredRole;
}

export async function isAdmin(): Promise<boolean> {
  return hasRole("ADMIN");
}
