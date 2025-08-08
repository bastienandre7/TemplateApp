import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(
  request: Request,
  context: { params: Promise<{ slug: string }> }
) {
  const { slug } = await context.params;
  const comp = await prisma.component.findUnique({
    where: { slug },
  });

  if (!comp) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json(comp);
}
