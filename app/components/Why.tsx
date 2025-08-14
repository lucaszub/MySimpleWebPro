"use client";

import {
  BadgeCheck,
  Target,
  Timer,
  Handshake,
  MonitorSmartphone,
} from "lucide-react";
import { useEffect, useRef } from "react";

export default function Why() {
  const whyRefs = useRef<(HTMLElement | null)[]>([]);

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

    whyRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const setWhyRef = (index: number) => (el: HTMLElement | null) => {
    whyRefs.current[index] = el;
  };

  return (
    <div className="relative min-h-[80vh] overflow-hidden">
      {/* Soft background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 -top-32 h-64 w-64 rounded-full bg-emerald-200/40 blur-3xl"></div>
        <div className="absolute -right-24 top-1/3 h-80 w-80 rounded-full bg-cyan-200/40 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-emerald-100/40 blur-3xl"></div>
      </div>

      <main className="relative">
        <section className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-2 pt-10 sm:pt-20 pb-8 sm:pb-12">
          {/* Heading */}
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <h1
              data-delay="150"
              ref={setWhyRef(0)}
              className="opacity-0 translate-y-4 blur-sm transition-all duration-700 ease-out text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-neutral-900"
            >
              Un site qui travaille pour vous, pas l'inverse
            </h1>
            <p
              data-delay="270"
              ref={setWhyRef(1)}
              className="opacity-0 translate-y-4 blur-sm transition-all duration-700 ease-out delay-100 text-base sm:text-lg text-neutral-600"
            >
              Pour une petite entreprise ou un indépendant, ne pas avoir de site
              web fonctionnel peut freiner le développement et la visibilité.
            </p>
          </div>

          {/* Card */}
          <div
            data-delay="390"
            ref={setWhyRef(2)}
            className="opacity-0 translate-y-4 blur-sm transition-all duration-700 ease-out delay-200 mt-12 sm:mt-16 max-w-6xl mx-auto rounded-3xl border border-neutral-200 bg-white shadow-sm backdrop-blur-sm"
          >
            {/* Card header */}
            <div className="flex items-start gap-3 p-5 sm:p-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 ring-1 ring-emerald-100">
                <BadgeCheck className="h-5 w-5 text-emerald-600" />
              </div>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="truncate text-base sm:text-lg font-semibold tracking-tight text-emerald-700">
                    MySimpleWebPro
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">
                    <Target className="h-3.5 w-3.5" />
                    Orienté résultats
                  </span>
                </div>
                <p className="mt-1 text-sm text-neutral-600">
                  Avec MySimpleWebPro, vous bénéficiez :
                </p>
              </div>
            </div>

            <div className="h-px w-full bg-neutral-200/70"></div>

            {/* List */}
            <ul className="divide-y divide-neutral-200">
              {/* Item 1 */}
              <li className="group relative">
                <div className="flex items-start gap-4 p-5 sm:p-6 transition-all duration-300 border-l-2 border-transparent hover:border-emerald-400/80 hover:bg-emerald-50/60">
                  <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 ring-1 ring-emerald-100 transition-all duration-300 group-hover:scale-105 group-hover:rotate-1 group-hover:bg-emerald-100">
                    <Timer className="h-5 w-5 text-emerald-600 transition-transform duration-300 group-hover:-rotate-3" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-base sm:text-lg font-semibold tracking-tight text-neutral-900">
                      D'un site prêt rapidement
                    </p>
                    <p className="mt-1 text-sm sm:text-base text-neutral-600">
                      Visibilité en quelques jours grâce à des sprints focus et
                      un processus clair.
                    </p>
                  </div>
                </div>
              </li>

              {/* Item 2 */}
              <li className="group relative">
                <div className="flex items-start gap-4 p-5 sm:p-6 transition-all duration-300 border-l-2 border-transparent hover:border-emerald-400/80 hover:bg-emerald-50/60">
                  <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 ring-1 ring-emerald-100 transition-all duration-300 group-hover:scale-105 group-hover:rotate-1 group-hover:bg-emerald-100">
                    <BadgeCheck className="h-5 w-5 text-emerald-600 transition-transform duration-300 group-hover:-rotate-3" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-base sm:text-lg font-semibold tracking-tight text-neutral-900">
                      D'une solution claire et accessible
                    </p>
                    <p className="mt-1 text-sm sm:text-base text-neutral-600">
                      Tout est transparent, sans surprises : structure simple,
                      options lisibles, coûts maîtrisés.
                    </p>
                  </div>
                </div>
              </li>

              {/* Item 3 */}
              <li className="group relative">
                <div className="flex items-start gap-4 p-5 sm:p-6 transition-all duration-300 border-l-2 border-transparent hover:border-emerald-400/80 hover:bg-emerald-50/60">
                  <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 ring-1 ring-emerald-100 transition-all duration-300 group-hover:scale-105 group-hover:rotate-1 group-hover:bg-emerald-100">
                    <Handshake className="h-5 w-5 text-emerald-600 transition-transform duration-300 group-hover:-rotate-3" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-base sm:text-lg font-semibold tracking-tight text-neutral-900">
                      D'un accompagnement humain
                    </p>
                    <p className="mt-1 text-sm sm:text-base text-neutral-600">
                      Nous vous guidons à chaque étape : cadrage, contenu, mise
                      en ligne, et après.
                    </p>
                  </div>
                </div>
              </li>

              {/* Item 4 */}
              <li className="group relative">
                <div className="flex items-start gap-4 p-5 sm:p-6 transition-all duration-300 border-l-2 border-transparent hover:border-emerald-400/80 hover:bg-emerald-50/60">
                  <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 ring-1 ring-emerald-100 transition-all duration-300 group-hover:scale-105 group-hover:rotate-1 group-hover:bg-emerald-100">
                    <MonitorSmartphone className="h-5 w-5 text-emerald-600 transition-transform duration-300 group-hover:-rotate-3" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-base sm:text-lg font-semibold tracking-tight text-neutral-900">
                      D'un site moderne et professionnel
                    </p>
                    <p className="mt-1 text-sm sm:text-base text-neutral-600">
                      Design actuel, performant et adapté à votre activité, prêt
                      à inspirer confiance.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
