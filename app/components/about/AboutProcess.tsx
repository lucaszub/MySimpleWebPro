"use client";

import { Phone, ListChecks, Code2, Rocket } from "lucide-react";
import { useEffect, useRef } from "react";

export default function AboutProcess() {
  const processRefs = useRef<(HTMLElement | null)[]>([]);

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

    processRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const setProcessRef = (index: number) => (el: HTMLElement | null) => {
    processRefs.current[index] = el;
  };

  return (
    <section className="py-8 lg:py-12">
      <div
        className="reveal opacity-0 translate-y-6 transition-all duration-700"
        data-delay="140"
        ref={setProcessRef(0)}
      >
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
          Comment ça marche
        </h2>
        <p className="mt-2 text-zinc-700 max-w-2xl">
          Un parcours court et focalisé de l'idée au lancement.
        </p>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
        <div
          className="reveal opacity-0 translate-y-6 transition-all duration-700"
          data-delay="200"
          ref={setProcessRef(1)}
        >
          <div className="rounded-xl bg-white ring-1 ring-zinc-200 p-4 h-full">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-emerald-100 text-emerald-700 text-xs font-medium ring-1 ring-emerald-200">
                  1
                </span>
                <p className="text-sm font-medium text-zinc-800">Intro</p>
              </div>
              <Phone className="h-4 w-4 text-emerald-500" />
            </div>
            <p className="text-sm text-zinc-600 mt-2">
              Appel de 30 min gratuit pour définir vos besoins et objectifs.
            </p>
          </div>
        </div>

        <div
          className="reveal opacity-0 translate-y-6 transition-all duration-700"
          data-delay="240"
          ref={setProcessRef(2)}
        >
          <div className="rounded-xl bg-white ring-1 ring-zinc-200 p-4 h-full">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-emerald-100 text-emerald-700 text-xs font-medium ring-1 ring-emerald-200">
                  2
                </span>
                <p className="text-sm font-medium text-zinc-800">
                  Plan d'action
                </p>
              </div>
              <ListChecks className="h-4 w-4 text-emerald-500" />
            </div>
            <p className="text-sm text-zinc-600 mt-2">
              Stratégie complète avec wireframes et palette de couleurs.
            </p>
          </div>
        </div>

        <div
          className="reveal opacity-0 translate-y-6 transition-all duration-700"
          data-delay="280"
          ref={setProcessRef(3)}
        >
          <div className="rounded-xl bg-white ring-1 ring-zinc-200 p-4 h-full">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-emerald-100 text-emerald-700 text-xs font-medium ring-1 ring-emerald-200">
                  3
                </span>
                <p className="text-sm font-medium text-zinc-800">Build</p>
              </div>
              <Code2 className="h-4 w-4 text-emerald-500" />
            </div>
            <p className="text-sm text-zinc-600 mt-2">
              Développement en sprints avec validations régulières.
            </p>
          </div>
        </div>

        <div
          className="reveal opacity-0 translate-y-6 transition-all duration-700"
          data-delay="320"
          ref={setProcessRef(4)}
        >
          <div className="rounded-xl bg-white ring-1 ring-zinc-200 p-4 h-full">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-emerald-700 text-emerald-100 text-xs font-medium ring-1 ring-emerald-200">
                  4
                </span>
                <p className="text-sm font-medium text-zinc-800">Launch</p>
              </div>
              <Rocket className="h-4 w-4 text-emerald-500" />
            </div>
            <p className="text-sm text-zinc-600 mt-2">
              Mise en ligne et itérations basées sur vos retours.
            </p>
          </div>
        </div>
      </div>

      {/* Plan d'action détaillé */}
      <div className="mt-12">
        <div
          className="reveal opacity-0 translate-y-6 transition-all duration-700"
          data-delay="400"
          ref={setProcessRef(5)}
        >
          <h3 className="text-xl font-semibold tracking-tight text-center mb-8">
            Votre plan d'action personnalisé inclut :
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            className="reveal opacity-0 translate-y-6 transition-all duration-700"
            data-delay="450"
            ref={setProcessRef(6)}
          >
            <div className="rounded-xl bg-white ring-1 ring-zinc-200 p-5 h-full">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-emerald-100">
                  <div className="w-4 h-4 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-sm"></div>
                </div>
                <h4 className="font-medium text-zinc-800">
                  Palette de couleurs
                </h4>
              </div>
              <p className="text-sm text-zinc-600">
                Définition de votre identité visuelle avec des couleurs qui vous
                représentent et qui convertissent.
              </p>
            </div>
          </div>

          <div
            className="reveal opacity-0 translate-y-6 transition-all duration-700"
            data-delay="500"
            ref={setProcessRef(7)}
          >
            <div className="rounded-xl bg-white ring-1 ring-zinc-200 p-5 h-full">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-emerald-100">
                  <div className="w-4 h-4 bg-zinc-800 rounded-sm"></div>
                </div>
                <h4 className="font-medium text-zinc-800">Structure du site</h4>
              </div>
              <p className="text-sm text-zinc-600">
                Organisation claire des sections : header, hero, services,
                témoignages, contact, etc.
              </p>
            </div>
          </div>

          <div
            className="reveal opacity-0 translate-y-6 transition-all duration-700"
            data-delay="550"
            ref={setProcessRef(8)}
          >
            <div className="rounded-xl bg-white ring-1 ring-zinc-200 p-5 h-full">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-emerald-100">
                  <div className="w-4 h-4 bg-zinc-600 rounded-sm"></div>
                </div>
                <h4 className="font-medium text-zinc-800">Contenu simple</h4>
              </div>
              <p className="text-sm text-zinc-600">
                Rédaction claire et efficace de vos messages clés pour toucher
                votre audience.
              </p>
            </div>
          </div>

          <div
            className="reveal opacity-0 translate-y-6 transition-all duration-700"
            data-delay="600"
            ref={setProcessRef(9)}
          >
            <div className="rounded-xl bg-white ring-1 ring-zinc-200 p-5 h-full">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-emerald-100">
                  <div className="w-4 h-4 bg-zinc-400 rounded-sm"></div>
                </div>
                <h4 className="font-medium text-zinc-800">Wireframes</h4>
              </div>
              <p className="text-sm text-zinc-600">
                Maquettes simples et claires pour visualiser la structure avant
                le développement.
              </p>
            </div>
          </div>

          <div
            className="reveal opacity-0 translate-y-6 transition-all duration-700"
            data-delay="650"
            ref={setProcessRef(10)}
          >
            <div className="rounded-xl bg-white ring-1 ring-zinc-200 p-5 h-full">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-emerald-100">
                  <div className="w-4 h-4 bg-emerald-500 rounded-sm"></div>
                </div>
                <h4 className="font-medium text-zinc-800">
                  Étapes d'itération
                </h4>
              </div>
              <p className="text-sm text-zinc-600">
                Processus de validation et d'amélioration continue pour un
                résultat optimal.
              </p>
            </div>
          </div>

          <div
            className="reveal opacity-0 translate-y-6 transition-all duration-700"
            data-delay="700"
            ref={setProcessRef(11)}
          >
            <div className="rounded-xl bg-white ring-1 ring-zinc-200 p-5 h-full">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-emerald-100">
                  <div className="w-4 h-4 bg-blue-500 rounded-sm"></div>
                </div>
                <h4 className="font-medium text-zinc-800">Timeline réaliste</h4>
              </div>
              <p className="text-sm text-zinc-600">
                Planning détaillé avec jalons clairs pour suivre l'avancement de
                votre projet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
