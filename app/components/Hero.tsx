"use client";

import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";

export default function Hero() {
  const heroRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = parseInt(
              entry.target.getAttribute("data-delay") || "0",
              10
            );
            setTimeout(() => {
              entry.target.classList.remove(
                "opacity-0",
                "translate-y-4",
                "-translate-y-6",
                "translate-y-6",
                "blur-[2px]",
                "blur-sm"
              );
              entry.target.classList.add("opacity-100", "translate-y-0");
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    heroRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const setHeroRef = (index: number) => (el: HTMLElement | null) => {
    heroRefs.current[index] = el;
  };

  return (
    <main className="mx-auto max-w-4xl px-6 lg:px-8">
      <section className="py-20 lg:py-32 text-center">
        {/* Titre principal */}
        <h1
          className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05] reveal opacity-0 translate-y-4 blur-[2px] transition-all duration-700 mb-8"
          data-delay="200"
          ref={setHeroRef(0)}
        >
          Création de sites web pour PME à Nantes
        </h1>

        {/* Description */}
        <p
          className="text-xl text-zinc-700 max-w-3xl mx-auto mb-12 reveal opacity-0 translate-y-4 blur-[2px] transition-all duration-700"
          data-delay="400"
          ref={setHeroRef(1)}
        >
          Nous accompagnons les petites et moyennes entreprises à Nantes dans la
          création et la refonte de sites internet clairs, efficaces et adaptés
          à leur activité. Un site qui attire vos clients tout en reflétant
          votre image professionnelle.
        </p>

        {/* CTA Principal */}
        <div
          className="reveal opacity-0 translate-y-4 blur-[2px] transition-all duration-700"
          data-delay="600"
          ref={setHeroRef(2)}
        >
          <a
            href="/contact"
            className="group inline-flex items-center justify-center gap-3 rounded-xl px-8 py-4 shadow-sm ring-1 ring-zinc-900/10 hover:-translate-y-0.5 hover:shadow-lg bg-zinc-900 text-zinc-50 text-lg font-medium transition-all duration-200"
          >
            📩 Contactez-nous pour votre projet
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </section>
    </main>
  );
}
