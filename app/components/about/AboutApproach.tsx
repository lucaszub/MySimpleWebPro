"use client";

import { Handshake, Rows, Target } from "lucide-react";
import { useEffect, useRef } from "react";

export default function AboutApproach() {
  const approachRefs = useRef<(HTMLElement | null)[]>([]);

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

    approachRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const setApproachRef = (index: number) => (el: HTMLElement | null) => {
    approachRefs.current[index] = el;
  };

  return (
    <section className="py-8 lg:py-12">
      <div
        className="reveal opacity-0 translate-y-6 transition-all duration-700"
        data-delay="140"
        ref={setApproachRef(0)}
      >
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
          Mon approche
        </h2>
        <p className="mt-2 text-zinc-700 max-w-2xl">
          Je travaille 100 % sur les projets de mes clients, où que je sois.
          Avec MySimpleWebPro, pas de complications inutiles : juste un site
          fonctionnel, simple à gérer et qui vous ressemble.
        </p>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div
          className="reveal opacity-0 translate-y-6 transition-all duration-700"
          data-delay="200"
          ref={setApproachRef(1)}
        >
          <div className="rounded-xl bg-white ring-1 ring-zinc-200 p-4 h-full">
            <div className="flex items-center gap-2 text-zinc-800">
              <Handshake className="h-5 w-5 text-emerald-500" />
              <p className="text-sm font-medium">Proximité et écoute</p>
            </div>
            <p className="text-sm text-zinc-600 mt-1">
              Je m'intéresse à vos besoins pour créer un site qui vous
              représente vraiment.
            </p>
          </div>
        </div>
        <div
          className="reveal opacity-0 translate-y-6 transition-all duration-700"
          data-delay="240"
          ref={setApproachRef(2)}
        >
          <div className="rounded-xl bg-white ring-1 ring-zinc-200 p-4 h-full">
            <div className="flex items-center gap-2 text-zinc-800">
              <Rows className="h-5 w-5 text-emerald-500" />
              <p className="text-sm font-medium">Simplicité et clarté</p>
            </div>
            <p className="text-sm text-zinc-600 mt-1">
              Des sites faciles à utiliser, pour vous comme pour vos clients.
            </p>
          </div>
        </div>
        <div
          className="reveal opacity-0 translate-y-6 transition-all duration-700"
          data-delay="280"
          ref={setApproachRef(3)}
        >
          <div className="rounded-xl bg-white ring-1 ring-zinc-200 p-4 h-full">
            <div className="flex items-center gap-2 text-zinc-800">
              <Target className="h-5 w-5 text-emerald-500" />
              <p className="text-sm font-medium">Impact concret</p>
            </div>
            <p className="text-sm text-zinc-600 mt-1">
              Un site qui vous aide à avancer et à vous concentrer sur votre
              métier.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
