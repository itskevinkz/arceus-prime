import { SITE } from "@/lib/site";
import { CopyButton } from "./CopyButton";
import { DrawnButton } from "./DrawnButton";
import { MiniBot, UpArrow } from "./Doodles";

export function Buy() {
  return (
    <section id="buy" className="relative px-4 md:px-10 py-24 text-center">
      <h2 className="font-scribble text-5xl sm:text-7xl md:text-8xl leading-[0.85] max-w-4xl mx-auto -rotate-1">
        THE TRANSFORMATION HAS BEGUN.
      </h2>
      <p className="font-scribble text-6xl md:text-8xl mt-5 rotate-1">{SITE.ticker}</p>

      <div className="flex justify-center my-5">
        <div className="relative">
          <UpArrow className="w-14 h-28 wiggle" />
          <p className="absolute -right-32 top-8 font-hand text-lg rotate-2 hidden sm:block">
            maxximum transformation
          </p>
        </div>
      </div>

      <p className="font-hand text-xl">CA:</p>
      <code className="inline-block ink-box px-3 py-2 mt-2 break-all max-w-full font-hand text-base md:text-lg">
        {SITE.ca}
      </code>
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        <CopyButton text={SITE.ca} label="COPY CA" />
        <DrawnButton href={SITE.buyUrl} className="-rotate-1">
          BUY {SITE.ticker}
        </DrawnButton>
      </div>

      <div className="flex justify-center mt-10">
        <MiniBot quote="we are witnesses." hand="point" />
      </div>
    </section>
  );
}
