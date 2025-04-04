// app/success/page.tsx
import SuccessClient from "@/components/SuccessClient";
import { Suspense } from "react";

export default function SuccessPage() {
  return (
    <Suspense fallback={<p className="p-8 text-center">Chargement...</p>}>
      <SuccessClient />
    </Suspense>
  );
}
