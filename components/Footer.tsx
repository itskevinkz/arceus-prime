import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="px-4 md:px-10 py-12 border-t border-ink">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <p className="font-scribble text-4xl -rotate-1">{SITE.name}</p>
          <p className="font-hand text-xl">{SITE.tagline}.</p>
        </div>
        <nav className="flex gap-6 font-hand text-2xl">
          <a href={SITE.xUrl} className="underline">
            X
          </a>
          <a href={SITE.dexscreenerUrl} className="underline">
            DEXSCREENER
          </a>
          <a href={SITE.buyUrl} className="underline">
            BUY
          </a>
        </nav>
      </div>
      <p className="font-hand text-center mt-10 text-slatey">built on arc.</p>
    </footer>
  );
}
