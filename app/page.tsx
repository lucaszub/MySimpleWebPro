import BackgroundAccents from "./components/BackgroundAccents";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Why from "./components/Why";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";
import Footer from "./components/Footer";
import About from "./components/About";
import FinalCTA from "./components/FinalCTA";

export default function Home() {
  return (
    <>
      <BackgroundAccents />
      <Header />
      <Hero />
      <Why />
      <HowItWorks />
      <FinalCTA />
      {/* <Features /> */}
      {/* <About /> */}
      <Footer />
    </>
  );
}
