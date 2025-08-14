"use client";

import { Zap, Clock, Users, Smartphone, Search, Shield } from "lucide-react";
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

    featureRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const setFeatureRef = (index: number) => (el: HTMLElement | null) => {
    featureRefs.current[index] = el;
  };

  const features = [
    {
      icon: Zap,
      title: "Ultra Rapide",
      description:
        "Construit avec Next.js pour des performances optimales et des chargements instantanés.",
      delay: 100,
    },
    {
      icon: Clock,
      title: "Livraison Rapide",
      description:
        "Obtenez votre site web opérationnel en jours, pas en semaines ou mois.",
      delay: 200,
    },
    {
      icon: Users,
      title: "Axé Utilisateur",
      description:
        "Conçu avec vos clients à l'esprit pour un engagement maximum.",
      delay: 300,
    },
    {
      icon: Smartphone,
      title: "Mobile First",
      description:
        "Design responsive qui s'affiche parfaitement sur tous les appareils et tailles d'écran.",
      delay: 400,
    },
    {
      icon: Search,
      title: "Optimisé SEO",
      description:
        "Fonctionnalités SEO intégrées pour vous aider à mieux vous classer dans les résultats de recherche.",
      delay: 500,
    },
    {
      icon: Shield,
      title: "Sécurisé & Fiable",
      description:
        "Sécurité de niveau entreprise et garantie de disponibilité de 99,9%.",
      delay: 600,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-zinc-900 reveal opacity-0 translate-y-4 blur-[2px] transition-all duration-700"
            data-delay="50"
            ref={setFeatureRef(0)}
          >
            Pourquoi Choisir ConnectLab ?
          </h2>
          <p
            className="mt-4 text-lg text-zinc-600 max-w-2xl mx-auto reveal opacity-0 translate-y-4 blur-[2px] transition-all duration-700"
            data-delay="100"
            ref={setFeatureRef(1)}
          >
            Nous combinons une technologie de pointe avec des principes de
            design éprouvés pour livrer des sites web qui convertissent les
            visiteurs en clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 rounded-2xl border border-zinc-200 bg-white hover:border-emerald-200 hover:shadow-lg transition-all duration-300 reveal opacity-0 translate-y-4 blur-[2px] transition-all duration-700"
              data-delay={feature.delay}
              ref={setFeatureRef(index + 2)}
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 mb-4 group-hover:bg-emerald-200 transition-colors duration-300">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-zinc-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div
            className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm backdrop-blur border-zinc-200 bg-white/70 text-zinc-600 reveal opacity-0 translate-y-4 blur-[2px] transition-all duration-700"
            data-delay="700"
            ref={setFeatureRef(8)}
          >
            <span className="relative inline-flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping bg-emerald-400"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            Approuvé par 100+ petites entreprises
          </div>
        </div>
      </div>
    </section>
  );
}
