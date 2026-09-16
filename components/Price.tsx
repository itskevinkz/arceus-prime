import { MiniBot } from "./Doodles";

export function Price() {
  return (
    <section id="price" className="relative px-4 md:px-10 py-20">
      <h2 className="font-scribble text-5xl sm:text-7xl md:text-8xl text-center rotate-1">
        PRICE DISCOVERY
      </h2>
      <p className="font-hand text-xl md:text-2xl text-center mt-2 -rotate-1">
        fundamentals improved
      </p>

      <div className="relative max-w-5xl mx-auto mt-8">
        <svg viewBox="0 0 640 340" className="w-full h-auto" aria-hidden>
          <path d="M70 20 V300 H610" stroke="#111" strokeWidth="1.8" fill="none" />
          <text x="8" y="28" fontFamily="Patrick Hand, cursive" fontSize="20">
            PRICE
          </text>
          <text x="560" y="330" fontFamily="Patrick Hand, cursive" fontSize="20">
            TIME
          </text>
          <path
            className="chart-draw"
            d="M80 280 C 160 278, 230 274, 300 260 C 360 248, 400 210, 430 130 C 450 74, 500 40, 590 22"
            stroke="#1e4b9c"
            strokeWidth="2.4"
            fill="none"
            strokeLinecap="round"
          />
          <text x="500" y="70" fontFamily="Patrick Hand, cursive" fontSize="16">
            truth emerges.
          </text>
        </svg>

        <img
          src="/arceus-prime.png"
          alt="ARCEUS PRIME"
          className="absolute right-0 bottom-0 w-24 sm:w-36 md:w-44 object-contain mix-art"
        />

        <MiniBot quote="how long" className="absolute left-2 bottom-0 md:left-8" />
        <p className="absolute left-28 md:left-40 bottom-6 font-hand text-xl rotate-2">soon</p>
      </div>
    </section>
  );
}
