import { SITE } from "@/lib/site";
import { CopyButton } from "@/components/CopyButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-ink px-4 py-5 md:px-8">
      <header className="flex items-center justify-between gap-4">
        <p className="font-scribble text-2xl md:text-3xl">{SITE.name}</p>
        <div className="flex flex-wrap items-center gap-3 font-hand text-lg">
          <a href={SITE.xUrl} className="underline">
            X
          </a>
          <a href={SITE.dexscreenerUrl} className="underline">
            DEXSCREENER
          </a>
          <a href={SITE.buyUrl} className="btn-drawn px-4 py-1">
            BUY {SITE.ticker}
          </a>
        </div>
      </header>

      <img
        src="/arceus-prime-banner.png"
        alt="ARCEUS PRIME"
        className="block w-full max-w-6xl mx-auto mt-4 h-auto"
      />

      <p className="font-hand text-center text-lg md:text-2xl max-w-2xl mx-auto mt-6">
        {SITE.description}
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6 font-hand text-lg">
        <span>CA:</span>
        <code className="ink-box px-3 py-1 text-sm md:text-base break-all max-w-full">
          {SITE.ca}
        </code>
        <CopyButton text={SITE.ca} />
      </div>

      <div className="flex justify-center mt-5">
        <a href={SITE.buyUrl} className="btn-drawn px-6 py-2 font-hand text-2xl">
          BUY {SITE.ticker}
        </a>
      </div>

      <p className="font-hand text-center text-slatey mt-10">built on arc.</p>
    </main>
  );
}
