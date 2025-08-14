import { CheckCircle2, Search, Server } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-8 pb-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-500">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-400" />
            <span>Mises en page accessibles et mobile-first</span>
          </div>
          <div className="flex items-center gap-2">
            <Search className="h-4 w-4 text-emerald-400" />
            <span>Structure prête pour le SEO</span>
          </div>
          <div className="flex items-center gap-2">
            <Server className="h-4 w-4 text-emerald-400" />
            <span>Performance optimisée</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
