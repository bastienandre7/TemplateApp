"use client";

import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (consent === null) setVisible(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie_consent", "true");
    setVisible(false);
    location.reload(); // recharge le site pour que CookieConsentGate affiche les outils
  };

  const handleDecline = () => {
    localStorage.setItem("cookie_consent", "false");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 bg-white border shadow-lg rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm sm:text-base">
      <p className="text-gray-800">
        We use cookies to enhance your experience. By continuing to browse, you
        agree to our{" "}
        <a
          href="/privacy-policy"
          className="underline text-blue-400 hover:text-blue-300"
        >
          Privacy Policy
        </a>
        .
      </p>
      <div className="flex gap-2">
        <button
          onClick={handleDecline}
          className="px-4 py-2 rounded-md bg-gray-200 text-gray-800 hover:bg-gray-300"
        >
          Decline
        </button>
        <button
          onClick={handleAccept}
          className="px-4 py-2 rounded-md bg-black text-white hover:bg-gray-900"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
