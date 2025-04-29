import { authOptions } from "@/auth";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function DELETE() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Supprimer toutes les données liées si besoin :
  await prisma.purchase.deleteMany({
    where: { email: session.user.email },
  });

  // Supprimer l'utilisateur
  await prisma.user.delete({
    where: { email: session.user.email },
  });

  return NextResponse.json({ success: true });
}
