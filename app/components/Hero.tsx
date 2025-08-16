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
  Calendar,
} from "lucide-react";
import Badge from "./Badge";
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
      <section className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 items-center pt-8 pb-10 lg:pt-30 lg:pb-20">
        {/* Left: Copy */}
        <div className="col-span-1 md:col-span-6">
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
            <Badge animation="slow">Artisan</Badge>

            <Badge animation="medium">Freelance</Badge>

            <Badge animation="fast">Boutique locale</Badge>

            <Badge animation="slow-delayed">Santé & bien-être</Badge>

            <Badge animation="slow">Association / événement</Badge>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
            <a
              href="https://cal.com/lucaszubiarrain/30min?overlayCalendar=true"
              target="_blank"
              rel="noopener noreferrer"
              className="group reveal opacity-0 translate-y-4 blur-[2px] transition-all duration-700 inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 shadow-sm ring-1 hover:-translate-y-0.5 hover:shadow-lg bg-emerald-600 text-white ring-emerald-600/20"
              data-delay="420"
              ref={setHeroRef(4)}
            >
              <Calendar className="h-5 w-5 text-emerald-100" />
              <span className="font-medium">Appel gratuit de 30 min</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="/pricing"
              className="group reveal opacity-0 translate-y-4 blur-[2px] transition-all duration-700 inline-flex items-center gap-2 rounded-xl px-5 py-3 ring-1 hover:-translate-y-0.5 hover:shadow-md bg-white text-zinc-900 ring-zinc-200"
              data-delay="460"
              ref={setHeroRef(5)}
            >
              <Bolt className="h-5 w-5 text-zinc-700" />
              <span className="font-medium">Voir nos tarifs</span>
            </a>
          </div>
        </div>

        {/* Right: Collage */}
        <div className="hidden md:block md:col-span-6">
          <div className="relative h-[34rem] sm:h-[40rem] lg:h-[44rem]">
            {/* Card A */}
            <div className="group md:absolute z-30 left-0 md:top-4 w-full md:w-[64%] lg:w-[58%] md:rotate-[-3deg] mb-12 md:mb-4">
              <div
                className="reveal opacity-0 translate-y-6 blur-sm transition-all duration-700"
                data-delay="300"
                ref={setHeroRef(9)}
              >
                <div className="rounded-2xl bg-white shadow-xl ring-1 ring-black/5 overflow-hidden hover:-translate-y-1 hover:rotate-0 transition-transform duration-500">
                  <img
                    alt="Rendu de produit minimaliste"
                    src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80"
                    className="h-52 sm:h-64 w-full object-cover"
                  />
                  <div className="p-4">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
                      <p className="text-sm font-medium text-zinc-800 md:block hidden">
                        Interface propre et fiable
                      </p>
                    </div>
                    <p className="mt-1 text-sm text-zinc-600 md:block hidden">
                      Espacement équilibré, ombres douces, typographie nette.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card B */}
            <div className="group md:absolute z-20 right-2 md:top-28 w-full md:w-[58%] lg:w-[52%] md:rotate-[3deg] mt-12 md:mt-4">
              <div
                className="reveal opacity-0 -translate-y-6 blur-sm transition-all duration-700"
                data-delay="380"
                ref={setHeroRef(10)}
              >
                <div className="rounded-2xl bg-white shadow-xl ring-1 ring-black/5 overflow-hidden hover:-translate-y-1 hover:rotate-0 transition-transform duration-500">
                  <img
                    alt="Paysage de montagne"
                    src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&q=80"
                    className="h-48 sm:h-56 w-full object-cover"
                  />
                  <div className="p-4">
                    <div className="flex items-center gap-2">
                      <Mountain className="h-4 w-4 text-emerald-400" />
                      <p className="text-sm font-medium text-zinc-800 md:block hidden">
                        Fondations solides
                      </p>
                    </div>
                    <p className="mt-1 text-sm text-zinc-600 md:block hidden">
                      Constructions évolutives pour PME.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card C */}
            <div className="group md:absolute z-10 left-6 md:bottom-36 w-full md:w-[56%] lg:w-[50%] md:rotate-[2deg] mt-12 md:mt-4">
              <div
                className="reveal opacity-0 translate-y-6 blur-sm transition-all duration-700"
                data-delay="460"
                ref={setHeroRef(11)}
              >
                <div className="rounded-2xl bg-white shadow-xl ring-1 ring-black/5 overflow-hidden hover:-translate-y-1 hover:rotate-0 transition-transform duration-500">
                  <img
                    alt="Intérieur minimaliste"
                    src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1400&q=80"
                    className="h-40 sm:h-48 w-full object-cover"
                  />
                  <div className="p-4">
                    <div className="flex items-center gap-2">
                      <Layout className="h-4 w-4 text-emerald-400" />
                      <p className="text-sm font-medium text-zinc-800 md:block hidden">
                        Structure minimaliste
                      </p>
                    </div>
                    <p className="mt-1 text-sm text-zinc-600 md:block hidden">
                      Pages axées sur le contenu avec une typographie nette.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card D */}
            <div className="group md:absolute z-40 right-0 md:bottom-0 w-full md:w-[52%] lg:w-[46%] md:-rotate-2 mt-12 md:mt-4">
              <div
                className="reveal opacity-0 translate-y-6 blur-sm transition-all duration-700"
                data-delay="520"
                ref={setHeroRef(12)}
              >
                <div className="rounded-2xl bg-white shadow-xl ring-1 ring-black/5 overflow-hidden hover:-translate-y-1 hover:rotate-0 transition-transform duration-500">
                  <img
                    alt="Photographie de portrait"
                    src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&q=80"
                    className="h-40 sm:h-48 w-full object-cover"
                  />
                  <div className="p-4">
                    <div className="flex items-center gap-2">
                      <Camera className="h-4 w-4 text-emerald-400" />
                      <p className="text-sm font-medium text-zinc-800 md:block hidden">
                        Conçu pour les entrepreneurs
                      </p>
                    </div>
                    <p className="mt-1 text-sm text-zinc-600 md:block hidden">
                      Des photographes aux nutritionnistes et plus encore.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Accent ring */}
            <div className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-gradient-to-tr from-emerald-300/30 to-sky-300/30 blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
