"use client";

import {
  Banknote,
  Files,
  ListChecks,
  Wand2,
  MonitorSmartphone,
  Rocket,
  Zap,
  ArrowRight,
  CheckCircle2,
  Search,
  Server,
} from "lucide-react";
import { useEffect, useRef } from "react";

export default function HowItWorks() {
  const howItWorksRefs = useRef<(HTMLElement | null)[]>([]);

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
                "blur-sm"
              );
              entry.target.classList.add(
                "opacity-100",
                "translate-y-0",
                "blur-0"
              );
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    howItWorksRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const setHowItWorksRef = (index: number) => (el: HTMLElement | null) => {
    howItWorksRefs.current[index] = el;
  };

  return (
    <>
      {/* Accents */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-28 -right-24 h-72 w-72 rounded-full bg-gradient-to-tr from-emerald-300/50 to-sky-300/35 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-tr from-sky-200/30 to-emerald-200/55 blur-3xl"></div>
      </div>

      {/* Steps Gallery (alternating layout with center line + dots) */}
      <section className="relative pt-8 sm:pt-12 pb-12 sm:pb-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          {/* Section heading */}
          <div className="text-center">
            <div
              data-delay="150"
              ref={setHowItWorksRef(0)}
              className="mx-auto h-1.5 w-16 rounded-full bg-emerald-300/70 opacity-0 translate-y-4 blur-sm transition-all duration-700 ease-out"
            ></div>
            <h2
              data-delay="270"
              ref={setHowItWorksRef(1)}
              className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight opacity-0 translate-y-4 blur-sm transition-all duration-700 ease-out"
            >
              Comment ça marche ?
            </h2>
            <p
              data-delay="390"
              ref={setHowItWorksRef(2)}
              className="mt-3 text-sm sm:text-base text-zinc-600 opacity-0 translate-y-4 blur-sm transition-all duration-700 ease-out"
            >
              Nous avons simplifié le processus en 3 étapes concrètes.
            </p>
          </div>

          {/* Center line */}
          <div className="relative mt-12 sm:mt-16">
            <div className="pointer-events-none absolute inset-y-0 left-6 w-px bg-gradient-to-b from-emerald-200 via-emerald-300 to-emerald-200 md:left-1/2 md:-translate-x-1/2"></div>

            <div className="space-y-16 sm:space-y-20">
              {/* Step 1 */}
              <div
                data-delay="510"
                ref={setHowItWorksRef(3)}
                className="relative md:grid md:grid-cols-9 md:gap-8 opacity-0 translate-y-4 blur-sm transition-all duration-700 ease-out"
              >
                {/* Dot */}
                <div className="absolute -top-1 left-6 md:left-1/2 md:-translate-x-1/2">
                  <span className="relative grid place-items-center h-4 w-4 rounded-full bg-emerald-400">
                    <span className="absolute h-7 w-7 rounded-full bg-emerald-300/30 animate-ping"></span>
                  </span>
                </div>

                {/* Text */}
                <div className="md:col-span-4 md:col-start-1">
                  <div className="pl-12 md:pl-0">
                    <p className="text-xs font-medium uppercase tracking-wide text-emerald-600">
                      Étape 1
                    </p>
                    <h3 className="mt-1 text-xl sm:text-2xl font-semibold tracking-tight">
                      Choix de l'offre
                    </h3>
                    <ul className="mt-3 space-y-1 text-sm text-zinc-600">
                      <li>
                        <strong>Essentiel : 250 €</strong> — Site 1 page pour
                        présenter votre activité simplement.
                      </li>
                      <li>
                        <strong>Le plus populaire : 450 €</strong> — Site 3
                        pages avec design personnalisé.
                      </li>
                      <li>
                        <strong>Évolutif : à partir de 800 €</strong> — Site
                        sur-mesure avec CMS et fonctionnalités avancées.
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Media */}
                <div className="mt-6 md:mt-0 md:col-span-4 md:col-start-6">
                  <div className="group relative">
                    {/* green corner accent */}
                    <div className="absolute -left-3 top-5 bottom-5 w-2 rounded-full bg-emerald-200/70"></div>
                    <div className="absolute left-5 -top-2 h-1.5 w-24 rounded-full bg-emerald-300"></div>

                    <div className="rounded-2xl ring-1 ring-zinc-200 bg-white overflow-hidden shadow-sm transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:shadow-md">
                      <div className="relative">
                        <img
                          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80"
                          alt="Choix de l'offre — poste de travail"
                          className="h-56 w-full object-cover"
                        />
                        <div className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs ring-1 bg-white/80 backdrop-blur text-zinc-800 ring-zinc-200">
                          <Banknote className="h-3.5 w-3.5 text-emerald-500" />
                          Essentiel · 250 €
                        </div>
                      </div>
                      <div className="p-4">
                        <div className="flex items-center gap-2 text-sm text-zinc-700">
                          <Files className="h-4 w-4 text-emerald-400" />
                          Jusqu'à 5 pages incluses
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 (swapped) */}
              <div
                data-delay="630"
                ref={setHowItWorksRef(4)}
                className="relative md:grid md:grid-cols-9 md:gap-8 opacity-0 translate-y-4 blur-sm transition-all duration-700 ease-out"
              >
                {/* Dot */}
                <div className="absolute -top-1 left-6 md:left-1/2 md:-translate-x-1/2">
                  <span className="relative grid place-items-center h-4 w-4 rounded-full bg-emerald-400">
                    <span className="absolute h-7 w-7 rounded-full bg-emerald-300/30 animate-ping"></span>
                  </span>
                </div>

                {/* Media */}
                <div className="md:col-span-4 md:col-start-1 order-2 md:order-none mt-6 md:mt-0 mb-4 md:mb-0">
                  <div className="group relative">
                    {/* green corner accent */}
                    <div className="absolute -left-3 top-5 bottom-5 w-2 rounded-full bg-emerald-200/70"></div>
                    <div className="absolute left-5 -top-2 h-1.5 w-24 rounded-full bg-emerald-300"></div>

                    <div className="rounded-2xl ring-1 ring-zinc-200 bg-white overflow-hidden shadow-sm transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:shadow-md">
                      <div className="relative">
                        <img
                          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80"
                          alt="Préparation du contenu — atelier de travail"
                          className="h-56 w-full object-cover"
                        />
                        <div className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs ring-1 bg-white/80 backdrop-blur text-zinc-800 ring-zinc-200">
                          <ListChecks className="h-3.5 w-3.5 text-emerald-500" />
                          Questionnaire guidé
                        </div>
                      </div>
                      <div className="p-4">
                        <div className="flex items-center gap-2 text-sm text-zinc-700">
                          <Wand2 className="h-4 w-4 text-emerald-400" />
                          Réécriture possible
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Text */}
                <div className="md:col-span-4 md:col-start-6">
                  <div className="pl-12 md:pl-0">
                    <p className="text-xs font-medium uppercase tracking-wide text-emerald-600">
                      Étape 2
                    </p>
                    <h3 className="mt-1 text-xl sm:text-2xl font-semibold tracking-tight">
                      Préparation du contenu
                    </h3>
                    <ul className="mt-3 space-y-1 text-sm text-zinc-600">
                      <li>
                        Questionnaire structuré pour collecter textes, images et
                        informations essentielles.
                      </li>
                      <li>
                        Réécriture ou optimisation de vos textes pour un message
                        clair, concis et impactant.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div
                data-delay="750"
                ref={setHowItWorksRef(5)}
                className="relative md:grid md:grid-cols-9 md:gap-8 opacity-0 translate-y-4 blur-sm transition-all duration-700 ease-out"
              >
                {/* Dot */}
                <div className="absolute -top-1 left-6 md:left-1/2 md:-translate-x-1/2">
                  <span className="relative grid place-items-center h-4 w-4 rounded-full bg-emerald-400">
                    <span className="absolute h-7 w-7 rounded-full bg-emerald-300/30 animate-ping"></span>
                  </span>
                </div>

                {/* Text */}
                <div className="md:col-span-4 md:col-start-1">
                  <div className="pl-12 md:pl-0">
                    <p className="text-xs font-medium uppercase tracking-wide text-emerald-600">
                      Étape 3
                    </p>
                    <h3 className="mt-1 text-xl sm:text-2xl font-semibold tracking-tight">
                      Design et mise en ligne
                    </h3>
                    <ul className="mt-3 space-y-1 text-sm text-zinc-600">
                      <li>
                        Design moderne, responsive et adapté à votre identité.
                      </li>
                      <li>
                        Relecture et validation avec vous pour s'assurer que
                        tout correspond à vos attentes.
                      </li>
                      <li>
                        Mise en ligne sur votre domaine, tests complets et
                        optimisation multi‑appareils.
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Media */}
                <div className="mt-6 md:mt-0 md:col-span-4 md:col-start-6 mb-4 md:mb-0">
                  <div className="group relative">
                    {/* green corner accent */}
                    <div className="absolute -left-3 top-5 bottom-5 w-2 rounded-full bg-emerald-200/70"></div>
                    <div className="absolute left-5 -top-2 h-1.5 w-24 rounded-full bg-emerald-300"></div>

                    <div className="rounded-2xl ring-1 ring-zinc-200 bg-white overflow-hidden shadow-sm transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:shadow-md">
                      <div className="relative">
                        <img
                          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1600&q=80"
                          alt="Design et mise en ligne — validation et lancement"
                          className="h-56 w-full object-cover"
                        />
                        <div className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs ring-1 bg-white/80 backdrop-blur text-zinc-800 ring-zinc-200">
                          <MonitorSmartphone className="h-3.5 w-3.5 text-emerald-500" />
                          Design responsive
                        </div>
                      </div>
                      <div className="p-4">
                        <div className="flex items-center gap-2 text-sm text-zinc-700">
                          <Rocket className="h-4 w-4 text-emerald-400" />
                          Validation & mise en ligne
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom CTA removed – moved to page-level FinalCTA component */}
          </div>
        </div>
      </section>

      {/* Footer note */}
    </>
  );
}
