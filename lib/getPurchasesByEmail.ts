import { prisma } from "@/lib/prisma";

export async function getPurchasesByEmail(
  email: string
): Promise<{ template: string }[]> {
  const purchases = await prisma.purchase.findMany({
    where: { email },
    select: { template: true },
  });
  return purchases;
}
