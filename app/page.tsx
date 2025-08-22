import { Metadata } from "next";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import BackgroundAccents from "./components/BackgroundAccents";

export const metadata: Metadata = {
  title: "Création de sites web pour PME à Nantes | MySimpleWebPro",
  description:
    "Nous accompagnons les PME à Nantes dans la création et refonte de sites internet professionnels. Sites vitrines, e-commerce et SEO local.",
};

export default function HomePage() {
  return (
    <>
      <BackgroundAccents />
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Features />
    </>
  );
}
