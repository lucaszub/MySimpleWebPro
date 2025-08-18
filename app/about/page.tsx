"use client";

import AboutHero from "../components/about/AboutHero";
import AboutApproach from "../components/about/AboutApproach";
import AboutProcess from "../components/about/AboutProcess";
import AboutTools from "../components/about/AboutTools";
import AboutStory from "../components/about/AboutStory";
import AboutCTA from "../components/about/AboutCTA";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-7xl px-6 lg:px-8">
        <AboutHero />
        <AboutApproach />
        <AboutProcess />
        <AboutTools />
        <AboutStory />
        <AboutCTA />
      </main>
      <Footer />
    </>
  );
}

