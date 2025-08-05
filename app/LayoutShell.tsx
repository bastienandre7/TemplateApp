"use client";

import HeaderCPN from "@/components/Header/HeaderCPN";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import dynamic from "next/dynamic";
import Script from "next/script";
import { ReactNode } from "react";
import { Providers } from "./providers";

const CookieBanner = dynamic(() => import("@/components/CookieBanner"), {
  ssr: false,
});
const CookieConsentGate = dynamic(
  () => import("@/components/CookieConsentGate"),
  { ssr: false }
);
const FooterCPN = dynamic(() => import("@/components/Footer/FooterCPN"), {
  ssr: false,
  loading: () => <div className="h-20" />,
});

export default function LayoutShell({ children }: { children: ReactNode }) {
  return (
    <Providers>
      <div className="flex flex-col min-h-screen bg-white">
        <CookieBanner />
        <HeaderCPN />
        <main className="flex-1">{children}</main>
        <FooterCPN />
      </div>
      <CookieConsentGate>
        <SpeedInsights />
        <Analytics />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-G87T4ZW9HC"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-G87T4ZW9HC');
          `}
        </Script>
      </CookieConsentGate>
    </Providers>
  );
}
