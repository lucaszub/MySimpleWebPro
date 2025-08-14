"use client";

import {
  Bolt,
  CaseSensitive,
  ShieldCheck,
  Gauge,
  Wallet,
  Mountain,
  Layout,
  Camera,
  ArrowRight,
} from "lucide-react";
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
    <main className="mx-auto max-w-7xl px-6 lg:px-8">
      <section className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 items-center py-10 lg:py-20">
        {/* Left: Copy */}
        <div className="md:col-span-6">
          <div
            className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs backdrop-blur reveal opacity-0 translate-y-4 blur-[2px] transition-all duration-700 border-zinc-200 bg-white/70 text-zinc-600"
            data-delay="150"
            ref={setHeroRef(0)}
          >
            <span className="relative -ml-1 inline-flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping bg-emerald-400"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
            </span>
            Lancement en cours — conçu pour les petites entreprises, évolutif
            vers les PME
          </div>

          <h1
            className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05] reveal opacity-0 translate-y-4 blur-[2px] transition-all duration-700"
            data-delay="220"
            ref={setHeroRef(1)}
          >
            Un site web simple, rapide et à votre image
          </h1>

          <p
            className="mt-5 text-base sm:text-lg max-w-2xl reveal opacity-0 translate-y-4 blur-[2px] transition-all duration-700 text-zinc-700"
            data-delay="300"
            ref={setHeroRef(2)}
          >
            Avec MySimpleWebPro, obtenez un site professionnel pour votre petite
            entreprise ou activité indépendante, prêt en 5 jours ouvrés, à
            partir de 250 €.
            <br />
            <br />
            Simple, efficace et sans stress.
          </p>

          <div
            className="mt-6 flex flex-wrap items-center gap-2 reveal opacity-0 translate-y-4 blur-[2px] transition-all duration-700"
            data-delay="360"
            ref={setHeroRef(3)}
          >
            <span className="rounded-full border px-3 py-1.5 text-sm font-medium bg-blue-50 text-blue-700 border-blue-200 animate-float-slow hover:scale-105 transition-transform duration-300">
              Artisan
            </span>

            <span className="rounded-full border px-3 py-1.5 text-sm font-medium bg-purple-50 text-purple-700 border-purple-200 animate-float-medium hover:scale-105 transition-transform duration-300">
              Freelance
            </span>

            <span className="rounded-full border px-3 py-1.5 text-sm font-medium bg-green-50 text-green-700 border-green-200 animate-float-fast hover:scale-105 transition-transform duration-300">
              Boutique locale
            </span>

            <span className="rounded-full border px-3 py-1.5 text-sm font-medium bg-pink-50 text-pink-700 border-pink-200 animate-float-slow-delayed hover:scale-105 transition-transform duration-300">
              Santé & bien-être
            </span>

            <span className="rounded-full border px-3 py-1.5 text-sm font-medium bg-orange-50 text-orange-700 border-orange-200 animate-float-slow hover:scale-105 transition-transform duration-300">
              Association / événement
            </span>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
            <a
              href="#"
              className="group reveal opacity-0 translate-y-4 blur-[2px] transition-all duration-700 inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 shadow-sm ring-1 hover:-translate-y-0.5 hover:shadow-lg bg-zinc-900 text-zinc-50 ring-zinc-900/10"
              data-delay="420"
              ref={setHeroRef(4)}
            >
              <Bolt className="h-5 w-5 text-emerald-300" />
              <span className="font-medium">Lancer mon site</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#"
              className="group reveal opacity-0 translate-y-4 blur-[2px] transition-all duration-700 inline-flex items-center gap-2 rounded-xl px-5 py-3 ring-1 hover:-translate-y-0.5 hover:shadow-md bg-white text-zinc-900 ring-zinc-200"
              data-delay="460"
              ref={setHeroRef(5)}
            >
              <CaseSensitive className="h-5 w-5 text-zinc-700" />
              <span className="font-medium">Voir nos réalisations</span>
            </a>
          </div>
        </div>

        {/* Right: Collage */}
        <div className="md:col-span-6">
          <div className="relative h-[28rem] sm:h-[32rem] lg:h-[36rem]">
            {/* Card A */}
            <div className="group absolute left-0 top-6 w-[72%] md:w-[64%] lg:w-[58%] rotate-[-4deg]">
              <div
                className="reveal opacity-0 translate-y-6 blur-sm transition-all duration-700"
                data-delay="300"
                ref={setHeroRef(9)}
              >
                <div className="rounded-2xl shadow-xl ring-1 overflow-hidden hover:-translate-y-1 hover:rotate-0 transition-transform duration-500 bg-white ring-black/5">
                  <img
                    alt="Rendu de produit minimaliste"
                    src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80"
                    className="h-52 sm:h-64 w-full object-cover"
                  />
                  <div className="p-4">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
                      <p className="text-sm font-medium text-zinc-800">
                        Interface propre et fiable
                      </p>
                    </div>
                    <p className="mt-1 text-sm text-zinc-600">
                      Espacement équilibré, ombres douces, typographie nette.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card B */}
            <div className="group absolute right-2 top-0 w-[66%] md:w-[60%] lg:w-[54%] rotate-[3deg]">
              <div
                className="reveal opacity-0 -translate-y-6 blur-sm transition-all duration-700"
                data-delay="380"
                ref={setHeroRef(10)}
              >
                <div className="rounded-2xl shadow-xl ring-1 overflow-hidden hover:-translate-y-1 hover:rotate-0 transition-transform duration-500 bg-white ring-black/5">
                  <img
                    alt="Paysage de montagne"
                    src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1400&q=80"
                    className="h-48 sm:h-56 w-full object-cover"
                  />
                  <div className="p-4">
                    <div className="flex items-center gap-2">
                      <Mountain className="h-4 w-4 text-emerald-400" />
                      <p className="text-sm font-medium text-zinc-800">
                        Fondations solides
                      </p>
                    </div>
                    <p className="mt-1 text-sm text-zinc-600">
                      Constructions évolutives prêtes pour la croissance PME.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card C */}
            <div className="group absolute left-6 bottom-6 w-[62%] md:w-[56%] lg:w-[50%] rotate-[2deg]">
              <div
                className="reveal opacity-0 translate-y-6 blur-sm transition-all duration-700"
                data-delay="460"
                ref={setHeroRef(11)}
              >
                <div className="rounded-2xl shadow-xl ring-1 overflow-hidden hover:-translate-y-1 hover:rotate-0 transition-transform duration-500 bg-white ring-black/5">
                  <img
                    alt="Intérieur minimaliste"
                    src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1400&q=80"
                    className="h-40 sm:h-48 w-full object-cover"
                  />
                  <div className="p-4">
                    <div className="flex items-center gap-2">
                      <Layout className="h-4 w-4 text-emerald-400" />
                      <p className="text-sm font-medium text-zinc-800">
                        Structure minimaliste
                      </p>
                    </div>
                    <p className="mt-1 text-sm text-zinc-600">
                      Pages axées sur le contenu avec une typographie nette.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card D */}
            <div className="group absolute right-0 bottom-0 w-[58%] md:w-[52%] lg:w-[46%] -rotate-2">
              <div
                className="reveal opacity-0 translate-y-6 blur-sm transition-all duration-700"
                data-delay="520"
                ref={setHeroRef(12)}
              >
                <div className="rounded-2xl shadow-xl ring-1 overflow-hidden hover:-translate-y-1 hover:rotate-0 transition-transform duration-500 bg-white ring-black/5">
                  <img
                    alt="Photographie de portrait"
                    src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1400&q=80"
                    className="h-40 sm:h-48 w-full object-cover"
                  />
                  <div className="p-4">
                    <div className="flex items-center gap-2">
                      <Camera className="h-4 w-4 text-emerald-400" />
                      <p className="text-sm font-medium text-zinc-800">
                        Conçu pour les entrepreneurs
                      </p>
                    </div>
                    <p className="mt-1 text-sm text-zinc-600">
                      Des photographes aux nutritionnistes et plus encore.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Accent ring */}
            <div className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-gradient-to-tr blur-2xl from-emerald-300/30 to-sky-300/30"></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
