import BackgroundAccents from "../components/BackgroundAccents";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RevealInit from "../components/RevealInit";
import type { Metadata } from "next";
import {
  Check,
  Wrench,
  Euro,
  Rocket,
  ArrowRight,
  Star,
  FileText,
  ShieldCheck,
  Gauge,
  Wallet,
  HelpCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "ConnectLab — Nos offres",
};

export default function PricingPage() {
  return (
    <>
      <RevealInit />
      <BackgroundAccents />
      <Header />

      <main className="mx-auto max-w-7xl px-6 lg:px-8">
        <section className="py-10 lg:py-16">
          {/* Header copy */}
          <div className="mx-auto max-w-3xl text-center">
            <span
              className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs backdrop-blur reveal opacity-0 translate-y-4 blur-[2px] transition-all duration-700 border-zinc-200 bg-white/70 text-zinc-600"
              data-delay="120"
            >
              <Check className="h-3.5 w-3.5 text-emerald-500" />
              Nos offres
            </span>
            <h1
              className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.05] reveal opacity-0 translate-y-4 blur-[2px] transition-all duration-700"
              data-delay="180"
            >
              Votre site web, fait sur mesure
            </h1>
            <p
              className="mt-4 text-base sm:text-lg text-zinc-700 reveal opacity-0 translate-y-4 blur-[2px] transition-all duration-700"
              data-delay="240"
            >
              On écoute vos besoins et on crée un site qui vous ressemble.
              Simple, efficace et à votre image.
            </p>
          </div>

          {/* Refonte inline note */}
          <div
            className="mx-auto mt-6 max-w-3xl reveal opacity-0 translate-y-4 blur-[2px] transition-all duration-700"
            data-delay="300"
          >
            <div className="flex items-center gap-3 rounded-xl border p-3.5 sm:p-4 bg-white border-zinc-200">
              <div className="grid h-9 w-9 place-items-center rounded-lg ring-1 bg-emerald-50 text-emerald-600 ring-emerald-100">
                <Wrench className="h-4.5 w-4.5" />
              </div>
              <div className="text-sm">
                <p className="font-semibold tracking-tight text-zinc-900">
                  Refonte incluse avec chaque offre
                </p>
                <p className="text-zinc-600">
                  Modernisez un site existant avec une structure claire et un
                  design soigné.
                </p>
              </div>
            </div>
          </div>

          {/* Cards */}
          <div className="lg:mt-14 grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 mt-10 items-stretch">
            {/* Plan 1 */}
            <div
              className="group relative rounded-2xl ring-1 p-6 sm:p-7 bg-white ring-zinc-200 hover:-translate-y-1 hover:shadow-lg transition-all duration-500 reveal opacity-0 translate-y-4 blur-[2px]"
              data-delay="340"
              tabIndex={0}
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-[11px] ring-1 bg-zinc-50 ring-zinc-200 text-zinc-700">
                    Essentiel
                  </div>
                  <h3 className="mt-3 text-xl font-semibold tracking-tight text-zinc-900">
                    Site 1 page
                  </h3>
                </div>
                <div className="text-right">
                  <div className="flex items-center justify-end gap-1">
                    <span className="text-3xl font-semibold tracking-tight text-zinc-900">
                      250 €
                    </span>
                  </div>
                  <p className="text-xs text-zinc-500 mt-1">
                    Livraison en 5 jours ouvrés
                  </p>
                </div>
              </div>

              <div className="mt-5 h-px bg-zinc-100" />

              {/* <ul className="mt-5 space-y-2.5">
                <li className="flex items-start gap-2.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="0"
                    height="0"
                  />
                  <span className="sr-only">icon</span>
                  <span className="inline-flex">
                    <CheckCircle2Icon />
                  </span>
                </li>
              </ul> */}

              <ul className="mt-5 space-y-2.5">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2Icon />
                  <span className="text-sm text-zinc-700">
                    Contenu clair et prêt à l’emploi
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2Icon />
                  <span className="text-sm text-zinc-700">
                    Idéal pour présenter votre activité simplement
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2Icon />
                  <span className="text-sm text-zinc-700">
                    Design simple et fonctionnel
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2Icon />
                  <span className="text-sm text-zinc-700">
                    Préparation du contenu&nbsp;: vous fournissez textes &
                    images, nous optimisons le reste
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2Icon />
                  <span className="text-sm text-zinc-700">
                    Refonte possible pour moderniser un site existant
                  </span>
                </li>
              </ul>

              <div className="mt-6">
                <a
                  href="https://cal.com/lucaszubiarrain/30min?overlayCalendar=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex w-full items-center justify-center gap-2 ring-1 hover:-translate-y-0.5 hover:shadow-lg ring-zinc-200 text-sm text-zinc-50 bg-zinc-900 rounded-xl pt-2.5 pr-4 pb-2.5 pl-4 shadow-sm"
                >
                  <Rocket className="w-6 h-6 text-emerald-300" />
                  <span className="font-medium">Lancer cette offre</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>

              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-0 group-hover:ring-2 group-hover:ring-emerald-300/40 transition" />
            </div>

            {/* Plan 2 (Popular) */}
            <div
              className="group relative rounded-2xl p-6 sm:p-7 bg-zinc-900 text-zinc-50 ring-1 ring-zinc-800 hover:-translate-y-1 hover:shadow-2xl transition-all duration-500 reveal opacity-0 translate-y-4 blur-[2px]"
              data-delay="420"
              tabIndex={0}
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-[11px] ring-1 bg-emerald-400/10 ring-emerald-300/50 text-emerald-300">
                    <Star className="h-3.5 w-3.5" />
                    Le plus populaire
                  </div>
                  <h3 className="mt-3 text-xl font-semibold tracking-tight">
                    Site 3 pages
                  </h3>
                </div>
                <div className="text-right">
                  <div className="flex items-center justify-end gap-1">
                    <span className="text-3xl font-semibold tracking-tight">
                      450 €
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 mt-1">
                    Livraison en 7 jours ouvrés
                  </p>
                </div>
              </div>

              <div className="mt-5 h-px bg-white/10" />

              <ul className="mt-5 space-y-2.5">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2Icon classNameOverride="text-emerald-300" />
                  <span className="text-sm">
                    Page d’accueil + 2 pages supplémentaires (ex&nbsp;: Services
                    / Contact)
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2Icon classNameOverride="text-emerald-300" />
                  <span className="text-sm">
                    Contenu préparé en collaboration&nbsp;: vous rédigez, nous
                    structurons
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2Icon classNameOverride="text-emerald-300" />
                  <span className="text-sm">
                    Design adapté à votre image et responsive
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2Icon classNameOverride="text-emerald-300" />
                  <span className="text-sm">
                    Refonte possible pour moderniser un site existant
                  </span>
                </li>
              </ul>

              <div className="mt-6">
                <a
                  href="https://cal.com/lucaszubiarrain/30min?overlayCalendar=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm shadow-sm ring-1 hover:-translate-y-0.5 hover:shadow-emerald-500/10 bg-white text-zinc-900 ring-white/10"
                >
                  <Rocket className="h-4.5 w-4.5 text-emerald-600" />
                  <span className="font-medium">Lancer cette offre</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>

              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-0 group-hover:ring-2 group-hover:ring-emerald-300/30 transition" />
            </div>

            {/* Plan 3 */}
            <div
              className="group relative rounded-2xl ring-1 p-6 sm:p-7 bg-white ring-zinc-200 hover:-translate-y-1 hover:shadow-lg transition-all duration-500 reveal opacity-0 translate-y-4 blur-[2px]"
              data-delay="500"
              tabIndex={0}
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-[11px] ring-1 bg-zinc-50 ring-zinc-200 text-zinc-700">
                    Évolutif
                  </div>
                  <h3 className="mt-3 text-xl font-semibold tracking-tight text-zinc-900">
                    Site CMS / Blog / Sur‑mesure
                  </h3>
                </div>
                <div className="text-right">
                  <div className="flex items-baseline justify-end gap-1">
                    <span className="text-3xl font-semibold tracking-tight text-zinc-900">
                      800 €
                    </span>
                  </div>
                  <p className="text-xs text-zinc-500 mt-1">
                    Livraison selon le projet
                  </p>
                </div>
              </div>

              <div className="mt-5 h-px bg-zinc-100" />

              <ul className="mt-5 space-y-2.5">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2Icon />
                  <span className="text-sm text-zinc-700">
                    Site plus complexe ou évolutif (CMS, blog, boutique simple)
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2Icon />
                  <span className="text-sm text-zinc-700">
                    Contenu et structure travaillés en collaboration
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2Icon />
                  <span className="text-sm text-zinc-700">
                    Design personnalisé et fonctionnalités avancées
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2Icon />
                  <span className="text-sm text-zinc-700">
                    Prix définitif sur devis selon vos besoins
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2Icon />
                  <span className="text-sm text-zinc-700">
                    Refonte possible pour moderniser un site existant
                  </span>
                </li>
              </ul>

              <div className="mt-6">
                <a
                  href="/contact"
                  className="group inline-flex w-full items-center justify-center gap-2 ring-1 hover:-translate-y-0.5 hover:shadow-lg ring-zinc-200 text-sm text-zinc-900 bg-white rounded-xl pt-2.5 pr-4 pb-2.5 pl-4 shadow-sm"
                >
                  <FileText className="h-4.5 w-4.5 text-zinc-700" />
                  <span className="font-medium">Demander un devis</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>

              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-0 group-hover:ring-2 group-hover:ring-emerald-300/40 transition" />
            </div>
          </div>

          {/* What’s included */}
          <div className="mt-10 lg:mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div
              className="reveal opacity-0 translate-y-4 blur-[2px] transition-all duration-700"
              data-delay="560"
            >
              <div className="rounded-xl border bg-white p-4 sm:p-5 border-zinc-200">
                <div className="flex items-center gap-2 text-zinc-800">
                  <ShieldCheck className="h-5 w-5 text-emerald-500" />
                  <p className="text-sm font-medium">Design fiable</p>
                </div>
                <p className="text-sm mt-1 text-zinc-600">
                  Structure claire, typographie soignée, expérience accessible.
                </p>
              </div>
            </div>
            <div
              className="reveal opacity-0 translate-y-4 blur-[2px] transition-all duration-700"
              data-delay="600"
            >
              <div className="rounded-xl border bg-white p-4 sm:p-5 border-zinc-200">
                <div className="flex items-center gap-2 text-zinc-800">
                  <Gauge className="h-5 w-5 text-emerald-500" />
                  <p className="text-sm font-medium">Délais maîtrisés</p>
                </div>
                <p className="text-sm mt-1 text-zinc-600">
                  Des sprints ciblés pour mettre en ligne rapidement.
                </p>
              </div>
            </div>
            <div
              className="reveal opacity-0 translate-y-4 blur-[2px] transition-all duration-700"
              data-delay="640"
            >
              <div className="rounded-xl border bg-white p-4 sm:p-5 border-zinc-200">
                <div className="flex items-center gap-2 text-zinc-800">
                  <Wallet className="h-5 w-5 text-emerald-500" />
                  <p className="text-sm font-medium">Tarifs transparents</p>
                </div>
                <p className="text-sm mt-1 text-zinc-600">
                  Des offres claires adaptées aux petites entreprises et PME.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div
            className="mt-12 overflow-hidden rounded-2xl border p-5 sm:p-6 bg-white border-zinc-200 reveal opacity-0 translate-y-4 blur-[2px] transition-all duration-700"
            data-delay="700"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <div className="grid h-9 w-9 place-items-center rounded-lg ring-1 bg-emerald-50 text-emerald-600 ring-emerald-100">
                  <HelpCircle className="h-4.5 w-4.5" />
                </div>
                <div>
                  <p className="text-sm font-semibold tracking-tight text-zinc-900">
                    Vous hésitez entre deux offres&nbsp;?
                  </p>
                  <p className="text-sm text-zinc-600">
                    Parlons de vos objectifs et trouvons la meilleure
                    configuration.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="https://cal.com/lucaszubiarrain/30min?overlayCalendar=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 rounded-xl px-4 py-2 text-sm shadow-sm ring-1 hover:-translate-y-0.5 hover:shadow-lg bg-zinc-900 text-zinc-50 ring-zinc-900/10"
                >
                  <span className="font-medium">Réserver un appel</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 text-emerald-300" />
                </a>
                <a
                  href="/contact"
                  className="group inline-flex items-center gap-1.5 rounded-xl px-4 py-2 text-sm ring-1 hover:-translate-y-0.5 hover:shadow-md bg-white ring-zinc-200"
                >
                  <FileText className="h-4 w-4 text-zinc-700" />
                  <span className="font-medium">Demander un devis</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

function CheckCircle2Icon({
  classNameOverride = "text-emerald-500",
}: {
  classNameOverride?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`lucide lucide-check-circle-2 h-4.5 w-4.5 mt-0.5 ${classNameOverride}`}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
