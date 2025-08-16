"use client";

import {
  User,
  Bolt,
  Mail,
  IdCard,
  ShieldCheck,
  ArrowRight,
  Calendar,
} from "lucide-react";
import { useEffect, useRef } from "react";
import Link from "next/link";

export default function AboutHero() {
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
              entry.target.classList.remove("opacity-0", "translate-y-6");
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
    <section className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 items-center py-8 lg:py-16">
      {/* Copy */}
      <div className="md:col-span-7">
        <div
          className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/70 px-3 py-1 text-xs text-zinc-600 backdrop-blur reveal opacity-0 translate-y-6 transition-all duration-700"
          data-delay="120"
          ref={setHeroRef(0)}
        >
          <User className="h-3.5 w-3.5 text-emerald-500" />
          Un studio solo — simple, honnête, responsable
        </div>
        <h1
          className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05] reveal opacity-0 translate-y-6 transition-all duration-700"
          data-delay="180"
          ref={setHeroRef(1)}
        >
          Qui je suis
        </h1>
        <p
          className="mt-5 text-base sm:text-lg text-zinc-700 max-w-2xl reveal opacity-0 translate-y-6 transition-all duration-700"
          data-delay="260"
          ref={setHeroRef(2)}
        >
          Je m'appelle Lucas. Après une école de commerce et une formation en
          data, j'ai travaillé dans de grandes entreprises : grande
          distribution, secteur bancaire et automobile, principalement sur des
          projets liés aux données. Ces expériences m'ont beaucoup appris sur le
          fonctionnement des entreprises, mais ce qui me tient vraiment à cœur,
          c'est de me rapprocher des personnes et de voir des résultats
          concrets.
        </p>
        <p
          className="mt-4 text-base sm:text-lg text-zinc-700 max-w-2xl reveal opacity-0 translate-y-6 transition-all duration-700"
          data-delay="300"
          ref={setHeroRef(3)}
        >
          J'ai donc choisi de lancer MySimpleWebPro, pour aider les petites
          entreprises et indépendants à avoir un site web simple, clair et
          efficace. Mon objectif : comprendre vos besoins et vous apporter une
          solution concrète, adaptée à votre activité.
        </p>

        <div
          className="mt-8 flex flex-col sm:flex-row items-center gap-3 reveal opacity-0 translate-y-6 transition-all duration-700"
          data-delay="380"
          ref={setHeroRef(4)}
        >
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-zinc-900 text-zinc-50 px-5 py-3 shadow-sm ring-1 ring-zinc-900/10 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
          >
            <Bolt className="h-5 w-5 text-emerald-300" />
            <span className="font-medium">Démarrer un projet</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-xl bg-emerald-50 px-5 py-3 text-emerald-800 ring-1 ring-emerald-200 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
          >
            <Calendar className="h-5 w-5 text-emerald-600" />
            <span className="font-medium">Appel gratuit de 30 min</span>
          </Link>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-zinc-900 ring-1 ring-zinc-200 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
          >
            <Mail className="h-5 w-5 text-zinc-700" />
            <span className="font-medium">M'envoyer un email</span>
          </Link>
        </div>

        <div
          className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 reveal opacity-0 translate-y-6 transition-all duration-700"
          data-delay="420"
          ref={setHeroRef(5)}
        ></div>
      </div>

      {/* Portrait / Card */}
      <div className="md:col-span-4">
        <div
          className="reveal opacity-0 translate-y-6 transition-all duration-700"
          data-delay="220"
          ref={setHeroRef(6)}
        >
          <div className="rounded-2xl bg-white shadow-xl ring-1 ring-black/5 overflow-hidden hover:-translate-y-1 transition-transform duration-500">
            <img
              alt="Portrait du fondateur"
              src="/LucasZubiarrain.png"
              className="w-full h-auto"
            />
            <div className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <IdCard className="h-4 w-4 text-emerald-500" />
                  <p className="text-sm font-medium text-zinc-800">
                    Lucas, Fondateur
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs text-zinc-600">
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />
                  Solo, full‑stack
                </span>
              </div>
              <p className="mt-1 text-sm text-zinc-600">
                Design, développement et livraison — tout en un seul endroit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
