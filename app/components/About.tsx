"use client";

import {
  Handshake,
  CaseSensitive,
  ArrowRight,
  Star,
  MapPin,
  Rocket,
  CalendarClock,
  MessageSquare,
  Check,
  LayoutDashboard,
  Gauge,
  Accessibility,
  Sparkles,
  Wrench,
  FileText,
} from "lucide-react";
import { useEffect, useRef } from "react";

export default function About() {
  const aboutRefs = useRef<(HTMLElement | null)[]>([]);

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

    aboutRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const setAboutRef = (index: number) => (el: HTMLElement | null) => {
    aboutRefs.current[index] = el;
  };

  return (
    <main className="mx-auto max-w-7xl px-6 lg:px-8">
      {/* About Section (hero-like) */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start pt-6 pb-10 lg:pt-10 lg:pb-20">
        {/* Left: Story */}
        <div className="lg:col-span-7">
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05] reveal opacity-0 translate-y-4 blur-[2px] transition-all duration-700"
            data-delay="120"
            ref={setAboutRef(0)}
          >
            Bonjour, je suis Lucas <span aria-hidden="true">👋</span>
          </h1>

          <div className="mt-6 space-y-5 max-w-2xl">
            <p
              className="text-base sm:text-lg text-zinc-700 reveal opacity-0 translate-y-4 blur-[2px] transition-all duration-700"
              data-delay="180"
              ref={setAboutRef(1)}
            >
              Après plusieurs années en grande distribution et une école de
              commerce, j'ai choisi de me réorienter vers la data analyse, puis
              le développement web. Cette double compétence me permet d'allier
              rigueur analytique et savoir-faire technique pour accompagner mes
              clients avec efficacité.
            </p>
            <p
              className="text-base sm:text-lg text-zinc-700 reveal opacity-0 translate-y-4 blur-[2px] transition-all duration-700"
              data-delay="220"
              ref={setAboutRef(2)}
            >
              J'ai créé Mysimplewebpro suite à un changement de vie à
              l'étranger, porté par l'envie d'aider les petites entreprises et
              indépendants à bâtir une présence en ligne simple, fiable et à
              leur image.
            </p>

            <div className="pt-2">
              <p
                className="text-base sm:text-lg font-semibold tracking-tight text-zinc-900 reveal opacity-0 translate-y-4 blur-[2px] transition-all duration-700"
                data-delay="300"
                ref={setAboutRef(4)}
              >
                Pourquoi choisir ConnectLab ?
              </p>
              <ul className="mt-3 space-y-2">
                <li
                  className="reveal opacity-0 translate-y-4 blur-[2px] transition-all duration-700 flex gap-3 text-zinc-700"
                  data-delay="340"
                  ref={setAboutRef(6)}
                >
                  <span className="mt-2 h-2 w-2 rounded-full bg-emerald-500 shrink-0"></span>
                  <span>
                    <span className="font-medium">
                      Accompagnement clair et rapide
                    </span>{" "}
                    : un processus simple, sans prise de tête, pour lancer votre
                    site en quelques jours.
                  </span>
                </li>
                <li
                  className="reveal opacity-0 translate-y-4 blur-[2px] transition-all duration-700 flex gap-3 text-zinc-700"
                  data-delay="380"
                  ref={setAboutRef(7)}
                >
                  <span className="mt-2 h-2 w-2 rounded-full bg-emerald-500 shrink-0"></span>
                  <span>
                    <span className="font-medium">Structure lisible</span> :
                    mise en valeur optimale de ce qui compte vraiment pour votre
                    activité.
                  </span>
                </li>
                <li
                  className="reveal opacity-0 translate-y-4 blur-[2px] transition-all duration-700 flex gap-3 text-zinc-700"
                  data-delay="420"
                  ref={setAboutRef(8)}
                >
                  <span className="mt-2 h-2 w-2 rounded-full bg-emerald-500 shrink-0"></span>
                  <span>
                    <span className="font-medium">Fondations solides</span> :
                    sites performants, sécurisés et optimisés SEO pour booster
                    votre visibilité.
                  </span>
                </li>
                <li
                  className="reveal opacity-0 translate-y-4 blur-[2px] transition-all duration-700 flex gap-3 text-zinc-700"
                  data-delay="460"
                  ref={setAboutRef(9)}
                >
                  <span className="mt-2 h-2 w-2 rounded-full bg-emerald-500 shrink-0"></span>
                  <span>
                    <span className="font-medium">
                      Approche pragmatique et personnalisée
                    </span>{" "}
                    : des solutions sur-mesure, adaptées à vos besoins
                    spécifiques.
                  </span>
                </li>
              </ul>
            </div>

            <p
              className="text-base sm:text-lg text-zinc-700 reveal opacity-0 translate-y-4 blur-[2px] transition-all duration-700"
              data-delay="500"
              ref={setAboutRef(10)}
            >
              Aujourd'hui, ConnectLab aide de nombreuses petites entreprises à
              gagner la confiance de leurs visiteurs et convertir plus
              facilement leurs prospects en clients.
            </p>

            <div
              className="mt-6 flex flex-wrap items-center gap-3 reveal opacity-0 translate-y-4 blur-[2px] transition-all duration-700"
              data-delay="540"
              ref={setAboutRef(11)}
            >
              <a
                href="https://cal.com/lucaszubiarrain/30min?overlayCalendar=true"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-xl bg-zinc-900 text-zinc-50 px-5 py-3 shadow-sm ring-1 ring-zinc-900/10 hover:-translate-y-0.5 hover:shadow-lg"
              >
                <Handshake className="h-5 w-5 text-emerald-300" />
                <span className="font-medium">Discuter de votre projet</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="/realisations"
                className="group inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-zinc-900 ring-1 ring-zinc-200 hover:-translate-y-0.5 hover:shadow-md"
              >
                <CaseSensitive className="h-5 w-5 text-zinc-700" />
                <span className="font-medium">Voir nos réalisations</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right: Profile + collage */}
        <div className="lg:col-span-5">
          <div className="relative">
            {/* Main profile card */}
            <div
              className="reveal opacity-0 translate-y-6 blur-sm transition-all duration-700"
              data-delay="220"
              ref={setAboutRef(11)}
            >
              <div className="rounded-2xl bg-white ring-1 ring-zinc-200 shadow-xl p-5">
                <div className="flex items-start gap-4">
                  <img
                    src="/LucasZubiarrain.png"
                    alt="Lucas Zubiarrain"
                    className="h-14 w-14 rounded-full object-contain ring-2 ring-white shadow-sm"
                  />
                  <div className="min-w-0">
                    <p className="text-xl font-semibold tracking-tight text-zinc-900">
                      Lucas Zubiarrain
                    </p>
                    <p className="text-sm text-zinc-600">
                      Fondateur — ConnectLab
                    </p>
                    <div className="mt-2 flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100 px-2 py-1 text-xs">
                        <Star className="h-3.5 w-3.5" /> 4.9/5
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-full bg-zinc-50 ring-1 ring-zinc-200 px-2 py-1 text-xs">
                        <MapPin className="h-3.5 w-3.5" /> Buenos Aies, AR
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-full bg-zinc-50 ring-1 ring-zinc-200 px-2 py-1 text-xs">
                        <Rocket className="h-3.5 w-3.5" /> 25+ sites livrés
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <a
                    href="https://cal.com/lucaszubiarrain/30min?overlayCalendar=true"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 rounded-lg bg-zinc-900 text-zinc-50 px-3.5 py-2 text-sm shadow-sm ring-1 ring-zinc-900/10 hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    <CalendarClock className="h-4 w-4 text-emerald-300" />
                    <span className="font-medium">Réserver un créneau</span>
                  </a>
                  <a
                    href="/contact"
                    className="group inline-flex items-center gap-1.5 rounded-lg bg-white px-3.5 py-2 text-sm ring-1 ring-zinc-200 hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <MessageSquare className="h-4 w-4 text-zinc-700" />
                    <span className="font-medium">Envoyer un message</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Floating thumbnails (overlapping like the sample) */}
            <div className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-56 w-56 rounded-full bg-gradient-to-tr from-emerald-300/30 to-sky-300/30 blur-2xl"></div>
            </div>

            <div className="relative h-[20rem] mt-6">
              {/* Card 1 */}
              <div
                className="group absolute -left-2 top-0 w-[62%] rotate-[-6deg] reveal opacity-0 -translate-y-6 blur-sm transition-all duration-700"
                data-delay="300"
                ref={setAboutRef(12)}
              >
                <div className="rounded-xl bg-white ring-1 ring-zinc-200 shadow-xl overflow-hidden hover:-translate-y-1 hover:rotate-0 transition-transform duration-500">
                  <img
                    src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200&auto=format&fit=crop"
                    alt="Accompagnement clair"
                    className="h-32 w-full object-cover"
                  />
                  <div className="p-3">
                    <p className="text-sm font-medium text-zinc-800">
                      Accompagnement clair
                    </p>
                    <p className="text-xs text-zinc-600">
                      Processus simple et transparent.
                    </p>
                  </div>
                </div>
              </div>
              {/* Card 2 */}
              <div
                className="group absolute right-0 top-6 w-[60%] rotate-[5deg] reveal opacity-0 -translate-y-6 blur-sm transition-all duration-700"
                data-delay="360"
                ref={setAboutRef(13)}
              >
                <div className="rounded-xl bg-white ring-1 ring-zinc-200 shadow-xl overflow-hidden hover:-translate-y-1 hover:rotate-0 transition-transform duration-500">
                  <img
                    src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop"
                    alt="Fondations solides"
                    className="h-28 w-full object-cover"
                  />
                  <div className="p-3">
                    <p className="text-sm font-medium text-zinc-800">
                      Fondations solides
                    </p>
                    <p className="text-xs text-zinc-600">
                      Performance et SEO optimisés.
                    </p>
                  </div>
                </div>
              </div>
              {/* Card 3 */}
              <div
                className="group absolute left-6 bottom-2 w-[58%] rotate-[3deg] reveal opacity-0 translate-y-6 blur-sm transition-all duration-700"
                data-delay="420"
                ref={setAboutRef(14)}
              >
                <div className="rounded-xl bg-white ring-1 ring-zinc-200 shadow-xl overflow-hidden hover:-translate-y-1 hover:rotate-0 transition-transform duration-500">
                  <img
                    src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80"
                    alt="Structure lisible"
                    className="h-28 w-full object-cover"
                  />
                  <div className="p-3">
                    <p className="text-sm font-medium text-zinc-800">
                      Structure lisible
                    </p>
                    <p className="text-xs text-zinc-600">
                      Mise en valeur de l'essentiel.
                    </p>
                  </div>
                </div>
              </div>
              {/* Card 4 */}
              <div
                className="group absolute right-2 bottom-0 w-[54%] -rotate-3 reveal opacity-0 translate-y-6 blur-sm transition-all duration-700"
                data-delay="480"
                ref={setAboutRef(15)}
              >
                <div className="rounded-xl bg-white ring-1 ring-zinc-200 shadow-xl overflow-hidden hover:-translate-y-1 hover:rotate-0 transition-transform duration-500">
                  <img
                    src="https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop"
                    alt="Approche pragmatique"
                    className="h-28 w-full object-cover"
                  />
                  <div className="p-3">
                    <p className="text-sm font-medium text-zinc-800">
                      Approche pragmatique
                    </p>
                    <p className="text-xs text-zinc-600">
                      Double compétence technique et analytique.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principes section */}
      <section className="border-t border-zinc-200/70 py-14 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="md:col-span-4">
              <span
                className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/70 px-3 py-1 text-xs text-zinc-600 backdrop-blur reveal opacity-0 translate-y-4 blur-[2px] transition-all duration-700"
                data-delay="80"
                ref={setAboutRef(16)}
              >
                <Check className="h-3.5 w-3.5 text-emerald-400" />
                Nos principes
              </span>
              <h2
                className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight reveal opacity-0 translate-y-4 blur-[2px] transition-all duration-700"
                data-delay="140"
                ref={setAboutRef(17)}
              >
                Une approche pragmatique et efficace
              </h2>
              <p
                className="mt-3 text-base sm:text-lg text-zinc-700 max-w-prose reveal opacity-0 translate-y-4 blur-[2px] transition-all duration-700"
                data-delay="200"
                ref={setAboutRef(18)}
              >
                Fort de mon double parcours en data analyse et développement
                web, je combine approche analytique et expertise technique pour
                livrer des solutions qui répondent vraiment aux besoins de vos
                clients.
              </p>
            </div>

            <div className="md:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {/* Card */}
                <div
                  className="group relative rounded-2xl bg-white ring-1 ring-zinc-200 p-5 hover:-translate-y-1 hover:shadow-lg transition-all duration-500 reveal opacity-0 translate-y-6 blur-sm"
                  data-delay="220"
                  ref={setAboutRef(19)}
                >
                  <div className="flex items-start gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100">
                      <LayoutDashboard className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold tracking-tight text-zinc-900">
                        Vision analytique
                      </h3>
                      <p className="mt-1 text-sm text-zinc-600">
                        Compréhension des besoins clients et des objectifs
                        business.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Card */}
                <div
                  className="group relative rounded-2xl bg-white ring-1 ring-zinc-200 p-5 hover:-translate-y-1 hover:shadow-lg transition-all duration-500 reveal opacity-0 translate-y-6 blur-sm"
                  data-delay="260"
                  ref={setAboutRef(20)}
                >
                  <div className="flex items-start gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100">
                      <Gauge className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold tracking-tight text-zinc-900">
                        Expertise technique
                      </h3>
                      <p className="mt-1 text-sm text-zinc-600">
                        Développement web moderne et bonnes pratiques.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Card */}
                <div
                  className="group relative rounded-2xl bg-white ring-1 ring-zinc-200 p-5 hover:-translate-y-1 hover:shadow-lg transition-all duration-500 reveal opacity-0 translate-y-6 blur-sm"
                  data-delay="300"
                  ref={setAboutRef(21)}
                >
                  <div className="flex items-start gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100">
                      <Accessibility className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold tracking-tight text-zinc-900">
                        Accompagnement personnalisé
                      </h3>
                      <p className="mt-1 text-sm text-zinc-600">
                        Suivi de projet et relation client privilégiée.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Card */}
                <div
                  className="group relative rounded-2xl bg-white ring-1 ring-zinc-200 p-5 hover:-translate-y-1 hover:shadow-lg transition-all duration-500 reveal opacity-0 translate-y-6 blur-sm"
                  data-delay="340"
                  ref={setAboutRef(22)}
                >
                  <div className="flex items-start gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100">
                      <Sparkles className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold tracking-tight text-zinc-900">
                        Solutions sur mesure
                      </h3>
                      <p className="mt-1 text-sm text-zinc-600">
                        Adaptées aux spécificités de votre activité.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mini CTA */}
              <div
                className="mt-6 overflow-hidden rounded-2xl border border-zinc-200 bg-white p-5 sm:p-6 reveal opacity-0 translate-y-4 blur-[2px] transition-all duration-700"
                data-delay="380"
                ref={setAboutRef(23)}
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-3">
                    <div className="grid h-9 w-9 place-items-center rounded-lg bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100">
                      <Wrench className="h-4.5 w-4.5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold tracking-tight text-zinc-900">
                        Besoin d'un accompagnement sur mesure ?
                      </p>
                      <p className="text-sm text-zinc-600">
                        Multi‑langue, e‑commerce, espaces membres et plus
                        encore.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href="#"
                      className="group inline-flex items-center gap-1.5 rounded-xl bg-zinc-900 text-zinc-50 px-4 py-2 text-sm shadow-sm ring-1 ring-zinc-900/10 hover:-translate-y-0.5 hover:shadow-lg"
                    >
                      <span className="font-medium">Demander un devis</span>
                      <ArrowRight className="h-4 w-4 text-emerald-300 transition-transform group-hover:translate-x-0.5" />
                    </a>
                    <a
                      href="#"
                      className="group inline-flex items-center gap-1.5 rounded-xl bg-white px-4 py-2 text-sm ring-1 ring-zinc-200 hover:-translate-y-0.5 hover:shadow-md"
                    >
                      <FileText className="h-4 w-4 text-zinc-700" />
                      <span className="font-medium">Voir les options</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
