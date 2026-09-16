import { SITE } from "@/lib/site";
import { CopyButton } from "./CopyButton";
import { DrawnButton } from "./DrawnButton";
import { MiniBot, ScribbleArrow } from "./Doodles";

export function Hero() {
  return (
    <section id="top" className="relative px-4 md:px-8 pb-16">
      <div className="relative max-w-6xl mx-auto mt-6 md:mt-4">
        <ScribbleArrow
          className="absolute -left-1 md:-left-6 top-16 hidden sm:block z-10"
          label="it's him."
        />
        <p className="absolute right-2 md:right-6 top-8 font-hand text-xl md:text-2xl rotate-2 wiggle z-10">
          the final form.
        </p>

        <img
          src="/arceus-prime-banner.png"
          alt="ARCEUS PRIME — maxximum transformation"
          className="w-full h-auto object-contain mix-art"
        />
      </div>

      <p className="font-hand text-lg md:text-2xl max-w-2xl mx-auto mt-6 text-center leading-snug">
        {SITE.description}
      </p>

      <div className="flex flex-wrap justify-center gap-4 mt-8">
        <DrawnButton href={SITE.buyUrl} className="-rotate-1">
          BUY {SITE.ticker}
        </DrawnButton>
        <DrawnButton href="#contract" className="rotate-1">
          VIEW CONTRACT
        </DrawnButton>
      </div>

      <div
        id="contract"
        className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-7 font-hand text-lg md:text-xl"
      >
        <span className="-rotate-1">CA:</span>
        <code className="ink-box px-3 py-1 text-sm md:text-base break-all max-w-full">
          {SITE.ca}
        </code>
        <CopyButton text={SITE.ca} />
      </div>

      <div className="flex flex-wrap justify-center gap-6 mt-10">
        <MiniBot quote="it's him." />
        <MiniBot quote="all models converge." hand="down" className="bob-delay" />
        <MiniBot quote="the ARC is real." className="bob-slow" />
        <MiniBot quote="we are witnesses." hand="point" className="bob-delay" />
      </div>
    </section>
  );
}
