"use client";

import { Sparkles, Calendar, ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function Header() {
  const navRefs = useRef<(HTMLElement | null)[]>([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

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
            MySimpleWebPro
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="reveal opacity-0 translate-y-4 blur-[2px] transition-all duration-700 font-medium text-zinc-700 hover:text-zinc-900 relative group hover:-translate-y-0.5"
            data-delay="150"
            ref={setNavRef(1)}
          >
            Accueil
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-zinc-900 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link
            href="/pricing"
            className="reveal opacity-0 translate-y-4 blur-[2px] transition-all duration-700 font-medium text-zinc-700 hover:text-zinc-900 relative group hover:-translate-y-0.5"
            data-delay="250"
            ref={setNavRef(3)}
          >
            Tarifs
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-zinc-900 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link
            href="/about"
            className="reveal opacity-0 translate-y-4 blur-[2px] transition-all duration-700 font-medium text-zinc-700 hover:text-zinc-900 relative group hover:-translate-y-0.5"
            data-delay="300"
            ref={setNavRef(4)}
          >
            À propos
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-zinc-900 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <a
            href="/contact"
            className="group reveal opacity-0 translate-y-4 blur-[2px] transition-all duration-700 inline-flex items-center gap-2 rounded-full px-4 py-2 shadow-sm ring-1 hover:-translate-y-0.5 hover:shadow-md bg-emerald-600 text-white ring-emerald-600/20"
            data-delay="350"
            ref={setNavRef(5)}
          >
            <Calendar className="h-4 w-4 text-emerald-100" />
            <span className="font-medium">Appel gratuit</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-zinc-100 transition-colors duration-200"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 text-zinc-700" />
          ) : (
            <Menu className="h-6 w-6 text-zinc-700" />
          )}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMounted && isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-black/20 backdrop-blur-sm">
          <div className="absolute top-0 right-0 w-80 h-full bg-white shadow-2xl border-l border-zinc-200 transform transition-transform duration-300 ease-out">
            <div className="p-6">
              <div className="flex items-center justify-end mb-8">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-lg hover:bg-zinc-100 transition-colors duration-200"
                >
                  <X className="h-5 w-5 text-zinc-700" />
                </button>
              </div>

              <nav className="space-y-6">
                <Link
                  href="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-3 text-lg font-medium text-zinc-700 hover:text-zinc-900 border-b border-zinc-100 hover:border-zinc-300 transition-colors duration-200"
                >
                  Accueil
                </Link>

                <Link
                  href="/pricing"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-3 text-lg font-medium text-zinc-700 hover:text-zinc-900 border-b border-zinc-100 hover:border-zinc-300 transition-colors duration-200"
                >
                  Tarifs
                </Link>

                <Link
                  href="/about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-3 text-lg font-medium text-zinc-700 hover:text-zinc-900 border-b border-zinc-100 hover:border-zinc-300 transition-colors duration-200"
                >
                  À propos
                </Link>
              </nav>

              <div className="mt-8 pt-6 border-t border-zinc-200">
                <a
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 shadow-sm ring-1 hover:-translate-y-0.5 hover:shadow-md bg-emerald-600 text-white ring-emerald-600/20 transition-all duration-200"
                >
                  <Calendar className="h-4 w-4 text-emerald-100" />
                  <span className="font-medium">Appel gratuit de 30 min</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
