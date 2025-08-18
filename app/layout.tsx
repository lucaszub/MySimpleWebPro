import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "mysimplewebpro — Sites web modernes pour petites entreprises",
  description:
    "mysimplewebpro crée des sites professionnels et minimalistes qui paraissent fiables et sans effort. Axés sur une structure claire, des performances rapides et un design honnête—idéal pour les premiers clients aujourd'hui, évolutif pour les PME demain.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-V18GH4Z7V6"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-V18GH4Z7V6');
          `}
        </Script>
      </head>
      <body
        className={`${inter.variable} antialiased selection:bg-emerald-300 selection:text-zinc-900 bg-zinc-50 text-zinc-900`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
