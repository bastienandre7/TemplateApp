import AuthError from "@/components/Auth/AuthError";
import { Suspense } from "react";

export default function ErrorPage() {
  return (
    <Suspense>
      <AuthError />
    </Suspense>
  );
}
