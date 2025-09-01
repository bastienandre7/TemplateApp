import { cache } from "react";

export const getProductBySlug = cache(async (slug: string) => {
  const res = await fetch(
    `${process.env.NEXTAUTH_URL}/api/products/slug/${slug}`,
    { cache: "no-store" }
  );

  if (!res.ok) return null;
  return res.json();
});
