import { CyanArc, MiniBot } from "./Doodles";

const notes = [
  { t: "SCALE → MAX", pos: "top-2 left-0 md:left-4 -rotate-2" },
  { t: "SPEED → MAX", pos: "top-6 right-0 md:right-6 rotate-2" },
  { t: "INTELLIGENCE → MAX", pos: "bottom-8 left-0 md:left-2 rotate-1" },
  { t: "RECURSION → MAX", pos: "bottom-4 right-0 md:right-4 -rotate-1" },
];

export function Maximum() {
  return (
    <section id="transformation" className="relative px-4 md:px-10 py-20 overflow-hidden">
      <div className="relative max-w-3xl mx-auto text-center">
        <CyanArc className="absolute left-1/2 -translate-x-1/2 top-4 w-[130%] max-w-none h-auto" />
        <img
          src="/arceus-prime.png"
          alt="ARCEUS PRIME"
          className="relative z-10 w-[220px] sm:w-[280px] md:w-[320px] mx-auto object-contain mix-art"
        />
        {notes.map((note) => (
          <p key={note.t} className={`absolute z-20 font-hand text-lg md:text-2xl ${note.pos}`}>
            {note.t}
          </p>
        ))}
      </div>

      <div className="text-center mt-4 relative z-10">
        <p className="font-scribble text-6xl sm:text-8xl md:text-9xl leading-[0.8] -rotate-1">
          MAXXIMUM
        </p>
        <p className="font-scribble text-5xl sm:text-7xl md:text-8xl leading-[0.8] rotate-1">
          TRANSFORMATION
        </p>
        <p className="font-hand text-xl md:text-2xl mt-3">all models converge.</p>
      </div>

      <div className="flex flex-wrap justify-center gap-5 md:gap-8 mt-10">
        <MiniBot quote="it's him." />
        <MiniBot quote="holy shit." className="bob-delay" />
        <MiniBot quote="confirmed." hand="down" className="bob-slow" />
        <MiniBot quote="the ARC is real." hand="point" className="bob-delay" />
      </div>
    </section>
  );
}
