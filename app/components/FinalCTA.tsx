import { ArrowRight, Rocket } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="relative py-12 sm:py-16">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h3 className="text-center text-2xl sm:text-3xl font-semibold tracking-tight">
          Vous êtes à un clic de votre nouveau site
        </h3>
        <div className="mt-6 rounded-2xl ring-1 ring-zinc-200 bg-white p-6 sm:p-8 shadow-sm">
          <blockquote className="text-center space-y-4">
            <p className="text-lg sm:text-xl text-zinc-900">
              Prêt à avoir votre site en ligne et visible par vos clients ?
            </p>
            <p className="text-zinc-700">
              Avec <span className="font-semibold">MySimpleWebPro</span>, c’est
              simple, rapide et efficace.
            </p>
            <div className="pt-2">
              <a
                href="https://cal.com/lucaszubiarrain/30min?overlayCalendar=true"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-xl px-5 py-3 shadow-sm ring-1 bg-zinc-900 text-zinc-50 ring-zinc-900/10 hover:-translate-y-0.5 hover:shadow-lg"
              >
                <Rocket className="h-5 w-5 text-emerald-300" />
                <span className="font-medium">
                  Je lance mon site maintenant
                </span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
