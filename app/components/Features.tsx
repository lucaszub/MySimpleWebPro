"use client";

import {
  LayoutDashboard,
  Target,
  Activity,
  Sparkles,
  Map,
  Gauge,
} from "lucide-react";
import { useEffect, useRef } from "react";

export default function Features() {
  const featureRefs = useRef<(HTMLElement | null)[]>([]);

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

    featureRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const setFeatureRef = (index: number) => (el: HTMLElement | null) => {
    featureRefs.current[index] = el;
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Titre */}
        <div className="text-center mb-16">
          <h2
            className="reveal opacity-0 translate-y-4 blur-[2px] transition-all duration-700 text-3xl lg:text-4xl font-bold text-zinc-900 mb-6"
            data-delay="100"
            ref={setFeatureRef(0)}
          >
            Solutions web et SEO locales pour les petites entreprises
          </h2>
        </div>

        {/* 3 cartes Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div
            className="reveal opacity-0 translate-y-4 blur-[2px] transition-all duration-700 group rounded-xl bg-zinc-50 ring-1 ring-zinc-200 p-6 hover:bg-white hover:shadow-sm hover:ring-zinc-300 transition-all duration-500 ease-out hover:-translate-y-0.5"
            data-delay="200"
            ref={setFeatureRef(1)}
          >
            <div className="flex items-start gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-lg bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200">
                <LayoutDashboard className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-lg font-semibold text-zinc-800 tracking-tight mb-2">
                  Création et refonte de site internet
                </h3>
                <p className="text-sm text-zinc-600 mb-3">
                  Architecture claire, design soigné et performances au
                  rendez‑vous.
                </p>
                <div className="flex items-center gap-2 text-xs text-zinc-600">
                  <Sparkles className="h-4 w-4 text-emerald-500" />
                  Site vitrine • Landing pages • CMS
                </div>
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div
            className="reveal opacity-0 translate-y-4 blur-[2px] transition-all duration-700 group rounded-xl bg-zinc-50 ring-1 ring-zinc-200 p-6 hover:bg-white hover:shadow-sm hover:ring-zinc-300 transition-all duration-500 ease-out hover:-translate-y-0.5"
            data-delay="300"
            ref={setFeatureRef(2)}
          >
            <div className="flex items-start gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-lg bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200">
                <Target className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-lg font-semibold text-zinc-800 tracking-tight mb-2">
                  Optimisation SEO locale
                </h3>
                <p className="text-sm text-zinc-600 mb-3">
                  Cocon sémantique, Google Business Profile et signaux de
                  proximité.
                </p>
                <div className="flex items-center gap-2 text-xs text-zinc-600">
                  <Map className="h-4 w-4 text-emerald-500" />
                  Pack Local SEO • Fiches locales • Avis & NAP
                </div>
              </div>
            </div>
          </div>

          {/* Feature 3 */}
          <div
            className="reveal opacity-0 translate-y-4 blur-[2px] transition-all duration-700 group rounded-xl bg-zinc-50 ring-1 ring-zinc-200 p-6 hover:bg-white hover:shadow-sm hover:ring-zinc-300 transition-all duration-500 ease-out hover:-translate-y-0.5"
            data-delay="400"
            ref={setFeatureRef(3)}
          >
            <div className="flex items-start gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-lg bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200">
                <Activity className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-lg font-semibold text-zinc-800 tracking-tight mb-2">
                  Analyse de trafic SEO et performance
                </h3>
                <p className="text-sm text-zinc-600 mb-3">
                  Suivi des positions, audit Core Web Vitals et recommandations.
                </p>
                <div className="flex items-center gap-2 text-xs text-zinc-600">
                  <Gauge className="h-4 w-4 text-emerald-500" />
                  Core Web Vitals • Logs • Dashboard
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
