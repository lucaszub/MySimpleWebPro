"use client";

import { useEffect, useRef } from "react";

export default function AboutStory() {
  const storyRefs = useRef<(HTMLElement | null)[]>([]);

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

    storyRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const setStoryRef = (index: number) => (el: HTMLElement | null) => {
    storyRefs.current[index] = el;
  };

  return (
    <section className="py-8 lg:py-12">
      <div
        className="reveal opacity-0 translate-y-6 transition-all duration-700"
        data-delay="140"
        ref={setStoryRef(0)}
      >
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
          Pourquoi j'ai choisi cette voie
        </h2>
        <p className="mt-2 text-zinc-700 max-w-3xl">
          Après mes expériences en grandes entreprises, j'ai voulu me rapprocher
          des petites structures, là où chaque outil compte et où je peux
          réellement avoir un impact. Mon but : vous donner les moyens d'exister
          sur Internet et de commencer à attirer vos premiers clients, avec des
          solutions simples mais efficaces.
        </p>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4">
        <div
          className="reveal opacity-0 translate-y-6 transition-all duration-700"
          data-delay="220"
          ref={setStoryRef(1)}
        >
          <div className="rounded-xl bg-white ring-1 ring-zinc-200 p-4">
            <div>
              <p className="text-sm text-zinc-700">
                Je choisis de travailler au plus près des besoins réels des
                petites entreprises et des indépendants, pour que chaque site
                livré serve un objectif clair et mesurable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
