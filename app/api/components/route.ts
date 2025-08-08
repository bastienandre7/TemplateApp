import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  const components = await prisma.component.findMany({
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json(components);
}
