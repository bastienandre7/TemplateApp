"use client";

import { useEffect, useState } from "react";

interface Props {
  children: React.ReactNode;
}

export default function CookieConsentGate({ children }: Props) {
  const [consent, setConsent] = useState<null | boolean>(null);

  useEffect(() => {
    const saved = localStorage.getItem("cookie_consent");
    if (saved === "true") setConsent(true);
    if (saved === "false") setConsent(false);
  }, []);

  if (!consent) return null;

  return <>{children}</>;
}
