"use client";

import { Sparkles, Calendar, ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import Link from "next/link";

export default function Header() {
  const navRefs = useRef<(HTMLElement | null)[]>([]);

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
                "blur-[2px]"
              );
              entry.target.classList.add("opacity-100", "translate-y-0");
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    navRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const setNavRef = (index: number) => (el: HTMLElement | null) => {
    navRefs.current[index] = el;
  };

  return (
    <header className="relative">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8 py-6 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-3 reveal opacity-0 translate-y-4 blur-[2px] transition-all duration-700"
          data-delay="100"
          ref={setNavRef(0)}
        >
          <span className="relative grid place-items-center h-9 w-9 rounded-xl shadow-sm bg-zinc-900 text-zinc-50">
            <Sparkles className="h-5 w-5" />
          </span>
          <span className="text-lg font-semibold tracking-tight">
            MySimpleWebProc
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link
            href="#"
            className="reveal opacity-0 translate-y-4 blur-[2px] transition-all duration-700 font-medium text-zinc-700 hover:text-zinc-900"
            data-delay="150"
            ref={setNavRef(1)}
          >
            Réalisations
          </Link>
          <Link
            href="#"
            className="reveal opacity-0 translate-y-4 blur-[2px] transition-all duration-700 font-medium text-zinc-700 hover:text-zinc-900"
            data-delay="200"
            ref={setNavRef(2)}
          >
            Services
          </Link>
          <Link
            href="/pricing"
            className="reveal opacity-0 translate-y-4 blur-[2px] transition-all duration-700 font-medium text-zinc-700 hover:text-zinc-900"
            data-delay="250"
            ref={setNavRef(3)}
          >
            Tarifs
          </Link>
          <Link
            href="/about"
            className="reveal opacity-0 translate-y-4 blur-[2px] transition-all duration-700 font-medium text-zinc-900"
            data-delay="300"
            ref={setNavRef(4)}
          >
            À propos
          </Link>
          <a
            href="#"
            className="group reveal opacity-0 translate-y-4 blur-[2px] transition-all duration-700 inline-flex items-center gap-2 rounded-full px-4 py-2 shadow-sm ring-1 hover:-translate-y-0.5 hover:shadow-md bg-zinc-900 text-zinc-50 ring-zinc-900/10"
            data-delay="350"
            ref={setNavRef(5)}
          >
            <Calendar className="h-4 w-4 text-emerald-300" />
            <span className="font-medium">Réserver un appel</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </nav>
    </header>
  );
}
