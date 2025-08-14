import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ConnectLab — Sites web modernes pour petites entreprises",
  description:
    "ConnectLab crée des sites professionnels et minimalistes qui paraissent fiables et sans effort. Axés sur une structure claire, des performances rapides et un design honnête—idéal pour les premiers clients aujourd'hui, évolutif pour les PME demain.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${inter.variable} antialiased selection:bg-emerald-300 selection:text-zinc-900 bg-zinc-50 text-zinc-900`}
      >
        {children}
      </body>
    </html>
  );
}
