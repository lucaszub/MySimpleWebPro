"use client";

import {
  Paintbrush,
  FileCode2,
  Server,
  Settings2,
  Search,
  Shield,
} from "lucide-react";
import { useEffect, useRef } from "react";

export default function AboutTools() {
  const toolsRefs = useRef<(HTMLElement | null)[]>([]);

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

    toolsRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const setToolsRef = (index: number) => (el: HTMLElement | null) => {
    toolsRefs.current[index] = el;
  };

  return (
    <section className="py-8 lg:py-12">
      <div
        className="reveal opacity-0 translate-y-6 transition-all duration-700"
        data-delay="140"
        ref={setToolsRef(0)}
      >
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
          Ce que j'utilise
        </h2>
        <p className="mt-2 text-zinc-700 max-w-2xl">
          Stack léger focalisé sur la vitesse, la maintenabilité et le SEO.
        </p>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          className="reveal opacity-0 translate-y-6 transition-all duration-700"
          data-delay="200"
          ref={setToolsRef(1)}
        >
          <div className="rounded-xl bg-white ring-1 ring-zinc-200 p-4 h-full">
            <div className="flex items-center gap-2 text-zinc-800">
              <Paintbrush className="h-5 w-5 text-emerald-500" />
              <p className="text-sm font-medium">Design</p>
            </div>
            <p className="text-sm text-zinc-600 mt-1">
              Structure, mise en page et typographie avec un accent sur la
              clarté.
            </p>
          </div>
        </div>
        <div
          className="reveal opacity-0 translate-y-6 transition-all duration-700"
          data-delay="240"
          ref={setToolsRef(2)}
        >
          <div className="rounded-xl bg-white ring-1 ring-zinc-200 p-4 h-full">
            <div className="flex items-center gap-2 text-zinc-800">
              <FileCode2 className="h-5 w-5 text-emerald-500" />
              <p className="text-sm font-medium">Front‑end</p>
            </div>
            <p className="text-sm text-zinc-600 mt-1">
              Code propre et sémantique qui reste rapide sur n'importe quel
              appareil.
            </p>
          </div>
        </div>
        <div
          className="reveal opacity-0 translate-y-6 transition-all duration-700"
          data-delay="280"
          ref={setToolsRef(3)}
        >
          <div className="rounded-xl bg-white ring-1 ring-zinc-200 p-4 h-full">
            <div className="flex items-center gap-2 text-zinc-800">
              <Server className="h-5 w-5 text-emerald-500" />
              <p className="text-sm font-medium">Déploiement</p>
            </div>
            <p className="text-sm text-zinc-600 mt-1">
              Hébergement fiable et budgets de performance dès le premier jour.
            </p>
          </div>
        </div>
        <div
          className="reveal opacity-0 translate-y-6 transition-all duration-700"
          data-delay="320"
          ref={setToolsRef(4)}
        >
          <div className="rounded-xl bg-white ring-1 ring-zinc-200 p-4 h-full">
            <div className="flex items-center gap-2 text-zinc-800">
              <Settings2 className="h-5 w-5 text-emerald-500" />
              <p className="text-sm font-medium">CMS (optionnel)</p>
            </div>
            <p className="text-sm text-zinc-600 mt-1">
              Modifiez le contenu en toute sécurité sans toucher au code.
            </p>
          </div>
        </div>
        <div
          className="reveal opacity-0 translate-y-6 transition-all duration-700"
          data-delay="360"
          ref={setToolsRef(5)}
        >
          <div className="rounded-xl bg-white ring-1 ring-zinc-200 p-4 h-full">
            <div className="flex items-center gap-2 text-zinc-800">
              <Search className="h-5 w-5 text-emerald-500" />
              <p className="text-sm font-medium">SEO de base</p>
            </div>
            <p className="text-sm text-zinc-600 mt-1">
              Meta tags, sitemaps et sémantique propre intégrés.
            </p>
          </div>
        </div>
        <div
          className="reveal opacity-0 translate-y-6 transition-all duration-700"
          data-delay="400"
          ref={setToolsRef(6)}
        >
          <div className="rounded-xl bg-white ring-1 ring-zinc-200 p-4 h-full">
            <div className="flex items-center gap-2 text-zinc-800">
              <Shield className="h-5 w-5 text-emerald-500" />
              <p className="text-sm font-medium">Accessibilité</p>
            </div>
            <p className="text-sm text-zinc-600 mt-1">
              Par défaut inclusif : contraste des couleurs, navigation clavier,
              ARIA.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
