"use client";

import {
  Mail,
  Phone,
  MapPin,
  Clock,
  CheckCircle,
  Sparkles,
  Send,
  ArrowRight,
  Calendar,
  Shield,
  Info,
  FileText,
} from "lucide-react";
import { useEffect, useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ContactPage() {
  const contactRefs = useRef<(HTMLElement | null)[]>([]);

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

    contactRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const setContactRef = (index: number) => (el: HTMLElement | null) => {
    contactRefs.current[index] = el;
  };

  return (
    <>
      <Header />
      {/* Subtle background accents */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gradient-to-tr blur-3xl from-emerald-300/55 to-sky-300/35"></div>
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-tr blur-3xl from-sky-200/30 to-emerald-200/55"></div>
      </div>
      <main className="mx-auto max-w-7xl px-6 lg:px-8">
        <section className="py-10 lg:py-16">
          {/* Header copy */}
          <div className="mx-auto max-w-3xl text-center">
            <span
              className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs backdrop-blur reveal opacity-0 translate-y-4 blur-[2px] transition-all duration-700 border-zinc-200 bg-white/70 text-zinc-600"
              data-delay="120"
              ref={setContactRef(0)}
            >
              <Mail className="h-3.5 w-3.5 text-emerald-500" />
              Contact
            </span>
            <h1
              className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.05] reveal opacity-0 translate-y-4 blur-[2px] transition-all duration-700"
              data-delay="180"
              ref={setContactRef(1)}
            >
              Parlez‑nous de votre projet
            </h1>
            <p
              className="mt-4 text-base sm:text-lg text-zinc-700 reveal opacity-0 translate-y-4 blur-[2px] transition-all duration-700"
              data-delay="240"
              ref={setContactRef(2)}
            >
              Dites‑nous ce dont vous avez besoin. Nous revenons vers vous sous
              1 à 2 jours ouvrés avec des pistes claires et un planning.
            </p>
          </div>

          {/* Form and sidebar */}
          <div className="mt-10 lg:mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 items-start">
            {/* Form */}
            <div
              className="md:col-span-2 reveal opacity-0 translate-y-6 blur-sm transition-all duration-700"
              data-delay="340"
              ref={setContactRef(3)}
            >
              <form
                action="#"
                method="post"
                className="rounded-2xl ring-1 p-6 sm:p-7 bg-white ring-zinc-200"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-zinc-800"
                    >
                      Nom complet
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="mt-2 w-full rounded-xl border bg-white px-3.5 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none ring-1 ring-inset ring-zinc-200 focus:ring-2 focus:ring-emerald-400"
                      placeholder="Jean Dupont"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-zinc-800"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="mt-2 w-full rounded-xl border bg-white px-3.5 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none ring-1 ring-inset ring-zinc-200 focus:ring-2 focus:ring-emerald-400"
                      placeholder="jean@entreprise.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="text-sm font-medium text-zinc-800"
                    >
                      Téléphone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="mt-2 w-full rounded-xl border bg-white px-3.5 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none ring-1 ring-inset ring-zinc-200 focus:ring-2 focus:ring-emerald-400"
                      placeholder="06 12 34 56 78"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="text-sm font-medium text-zinc-800"
                    >
                      Société (optionnel)
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      className="mt-2 w-full rounded-xl border bg-white px-3.5 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none ring-1 ring-inset ring-zinc-200 focus:ring-2 focus:ring-emerald-400"
                      placeholder="Nom de votre société"
                    />
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="timeline"
                      className="text-sm font-medium text-zinc-800"
                    >
                      Délai souhaité
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      className="mt-2 w-full rounded-xl border bg-white px-3.5 py-2.5 text-sm text-zinc-900 outline-none ring-1 ring-inset ring-zinc-200 focus:ring-2 focus:ring-emerald-400"
                    >
                      <option value="">Choisir…</option>
                      <option value="urgent">Urgent (1–2 semaines)</option>
                      <option value="standard">Standard (2–4 semaines)</option>
                      <option value="flexible">Flexible (&gt; 1 mois)</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="projectType"
                      className="text-sm font-medium text-zinc-800"
                    >
                      Type de projet
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      required
                      className="mt-2 w-full rounded-xl border bg-white px-3.5 py-2.5 text-sm text-zinc-900 outline-none ring-1 ring-inset ring-zinc-200 focus:ring-2 focus:ring-emerald-400"
                    >
                      <option value="">Choisir…</option>
                      <option value="1p">Site 1 page</option>
                      <option value="3p">Site 3 pages</option>
                      <option value="cms">Site CMS / Sur‑mesure</option>
                    </select>
                  </div>
                </div>

                <div className="mt-4">
                  <label
                    htmlFor="details"
                    className="text-sm font-medium text-zinc-800"
                  >
                    Dites‑nous en plus
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    rows={6}
                    required
                    className="mt-2 w-full rounded-xl border bg-white px-3.5 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none ring-1 ring-inset ring-zinc-200 focus:ring-2 focus:ring-emerald-400"
                    placeholder="Objectifs, pages envisagées, exemples de sites que vous aimez, contraintes…"
                  ></textarea>
                </div>

                <div className="mt-4">
                  <label
                    htmlFor="file"
                    className="text-sm font-medium text-zinc-800"
                  >
                    Fichier (brief, contenu) — optionnel
                  </label>
                  <input
                    id="file"
                    name="file"
                    type="file"
                    className="mt-2 block w-full cursor-pointer rounded-xl border bg-white px-3.5 py-2.5 text-sm text-zinc-700 outline-none ring-1 ring-inset ring-zinc-200 file:mr-4 file:rounded-lg file:border-0 file:bg-zinc-900 file:px-3.5 file:py-2 file:text-sm file:font-medium file:text-zinc-50 hover:file:bg-zinc-800 focus:ring-2 focus:ring-emerald-400"
                  />
                </div>

                <div className="mt-4 flex items-start gap-3">
                  <input
                    id="consent"
                    name="consent"
                    type="checkbox"
                    required
                    className="peer mt-0.5 h-4.5 w-4.5 shrink-0 appearance-none rounded-md ring-1 ring-inset ring-zinc-300 bg-white checked:bg-emerald-500 checked:ring-emerald-500 transition outline-none cursor-pointer"
                  />
                  <label
                    htmlFor="consent"
                    className="select-none cursor-pointer text-sm text-zinc-700"
                  >
                    J'accepte la
                    <a
                      href="#"
                      className="font-medium text-zinc-800 underline decoration-emerald-400/60 underline-offset-4 hover:text-zinc-900 hover:decoration-emerald-500 transition"
                    >
                      politique de confidentialité
                    </a>
                    et j'autorise MySimpleWebPro à me recontacter au sujet de ma
                    demande.
                    <span className="mt-1 block text-xs text-zinc-500">
                      Aucun spam. Vous pouvez vous désinscrire à tout moment.
                    </span>
                  </label>
                </div>

                {/* Actions */}
                <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <button
                    type="submit"
                    className="group inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium bg-emerald-600 text-white shadow-sm ring-1 ring-emerald-600/20 hover:bg-emerald-700 hover:-translate-y-0.5 hover:shadow-md transition"
                  >
                    <Send className="h-4.5 w-4.5" />
                    Envoyer la demande
                  </button>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium bg-white ring-1 ring-inset ring-zinc-200 text-zinc-800 hover:bg-zinc-50 hover:-translate-y-0.5 hover:shadow-sm transition"
                  >
                    <Calendar className="h-4.5 w-4.5 text-emerald-500" />
                    Réserver un call
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                  <p className="sm:ml-auto text-xs text-zinc-500 flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-emerald-500" />
                    Réponse sous 1–2 jours ouvrés
                  </p>
                </div>
              </form>
            </div>

            {/* Sidebar */}
            <aside className="md:col-span-1 space-y-4 lg:space-y-6">
              <div
                className="reveal opacity-0 translate-y-6 blur-sm transition-all duration-700 sticky top-6"
                data-delay="380"
                ref={setContactRef(4)}
              >
                <div className="rounded-2xl ring-1 p-5 sm:p-6 bg-white ring-zinc-200">
                  <div className="flex items-center gap-3">
                    <div className="grid h-9 w-9 place-items-center rounded-lg ring-1 bg-zinc-900 text-zinc-50 ring-zinc-900/10">
                      <Sparkles className="h-4.5 w-4.5 text-emerald-300" />
                    </div>
                    <div>
                      <p className="font-semibold tracking-tight">
                        Pourquoi MySimpleWebPro ?
                      </p>
                      <p className="text-xs text-zinc-600">
                        Simplicité. Rapidité. Qualité.
                      </p>
                    </div>
                  </div>

                  <ul className="mt-5 space-y-3 text-sm">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle className="mt-0.5 h-4.5 w-4.5 text-emerald-600" />
                      <span>
                        <strong>Site prêt en 5 jours</strong> ouvrés maximum.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle className="mt-0.5 h-4.5 w-4.5 text-emerald-600" />
                      <span>
                        Design moderne,{" "}
                        <span className="whitespace-nowrap">
                          performance optimisée
                        </span>{" "}
                        et SEO technique.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle className="mt-0.5 h-4.5 w-4.5 text-emerald-600" />
                      <span>Livraison clé en main + guide d'édition.</span>
                    </li>
                  </ul>

                  <div className="mt-5 grid grid-cols-2 gap-3 text-xs">
                    <div className="rounded-xl ring-1 p-3 bg-zinc-50 ring-zinc-200">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-emerald-600" />
                        <span className="font-medium">Disponibilités</span>
                      </div>
                      <p className="mt-1 text-zinc-600">Places cette semaine</p>
                    </div>
                    <div className="rounded-xl ring-1 p-3 bg-zinc-50 ring-zinc-200">
                      <div className="flex items-center gap-2">
                        <Shield className="h-4 w-4 text-emerald-600" />
                        <span className="font-medium">Contrat</span>
                      </div>
                      <p className="mt-1 text-zinc-600">Facture & acompte</p>
                    </div>
                  </div>

                  <div className="mt-5 rounded-xl ring-1 p-4 bg-emerald-50 ring-emerald-200/60">
                    <div className="flex items-start gap-3">
                      <Info className="h-5 w-5 text-emerald-700" />
                      <p className="text-sm text-emerald-900">
                        Vous avez déjà un brief ou des contenus ? Joignez‑les —
                        cela accélère fortement l'estimation.
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 border-t pt-4 border-zinc-200">
                    <p className="text-xs text-zinc-600">Contact direct</p>
                    <div className="mt-2 space-y-2">
                      <a
                        href="mailto:contact@mysimplewebpro.fr"
                        className="flex items-center gap-2 text-sm font-medium text-zinc-900 underline decoration-emerald-400/60 underline-offset-4 hover:decoration-emerald-500"
                      >
                        <Mail className="h-4 w-4 text-emerald-600" />
                        contact@mysimplewebpro.fr
                      </a>
                      <a
                        href="tel:+33123456789"
                        className="flex items-center gap-2 text-sm font-medium text-zinc-900 underline decoration-emerald-400/60 underline-offset-4 hover:decoration-emerald-500"
                      >
                        <Phone className="h-4 w-4 text-emerald-600" />
                        +33 1 23 45 67 89
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="reveal opacity-0 translate-y-6 blur-sm transition-all duration-700"
                data-delay="420"
                ref={setContactRef(5)}
              >
                <div className="rounded-2xl ring-1 p-5 sm:p-6 bg-white ring-zinc-200">
                  <p className="font-semibold tracking-tight">
                    Questions fréquentes
                  </p>
                  <div className="mt-3 space-y-3">
                    <details className="group rounded-xl ring-1 p-3 bg-zinc-50 ring-zinc-200 [&_summary]:list-none">
                      <summary className="flex items-center justify-between cursor-pointer">
                        <span className="text-sm font-medium">
                          Quels sont les délais typiques ?
                        </span>
                        <svg
                          className="h-4 w-4 text-zinc-500 transition-transform group-open:rotate-180"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m19.5 8.25-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </summary>
                      <p className="mt-2 text-sm text-zinc-600">
                        De 3 à 5 jours ouvrés selon la complexité et la
                        réactivité sur les retours.
                      </p>
                    </details>
                    <details className="group rounded-xl ring-1 p-3 bg-zinc-50 ring-zinc-200 [&_summary]:list-none">
                      <summary className="flex items-center justify-between cursor-pointer">
                        <span className="text-sm font-medium">
                          Proposez‑vous la maintenance ?
                        </span>
                        <svg
                          className="h-4 w-4 text-zinc-500 transition-transform group-open:rotate-180"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m19.5 8.25-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </summary>
                      <p className="mt-2 text-sm text-zinc-600">
                        Oui, options à la carte ou forfaits mensuels selon vos
                        besoins.
                      </p>
                    </details>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
