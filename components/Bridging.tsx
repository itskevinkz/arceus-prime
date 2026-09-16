import { MiniBot } from "./Doodles";

export function Bridging() {
  return (
    <section id="bridging" className="relative px-4 md:px-10 py-20">
      <h2 className="font-scribble text-6xl md:text-8xl text-center -rotate-1">BRIDGING</h2>
      <p className="font-hand text-2xl md:text-3xl text-center mt-3 leading-tight">
        between chains.
        <br />
        between worlds.
        <br />
        between people.
      </p>

      <div className="relative max-w-5xl mx-auto mt-8">
        <svg viewBox="0 0 900 380" className="w-full h-auto" aria-hidden>
          <path d="M20 360 L20 190 L200 80 L210 360 Z" fill="none" stroke="#111" strokeWidth="2" />
          <path d="M880 360 L880 180 L700 70 L690 360 Z" fill="none" stroke="#111" strokeWidth="2" />
          <path
            d="M210 100 C 360 20, 540 16, 690 90"
            stroke="#7ec8f5"
            strokeWidth="18"
            fill="none"
            strokeLinecap="round"
            className="arc-pulse"
          />
          <text x="50" y="160" fontFamily="Patrick Hand, cursive" fontSize="36">
            ETH
          </text>
          <text x="760" y="150" fontFamily="Patrick Hand, cursive" fontSize="36">
            ARC
          </text>
          <circle cx="300" cy="62" r="4" fill="#111" />
          <circle cx="400" cy="38" r="4" fill="#111" />
          <circle cx="520" cy="36" r="4" fill="#111" />
          <circle cx="620" cy="56" r="4" fill="#111" />
        </svg>

        <img
          src="/arceus-prime.png"
          alt=""
          className="absolute left-1/2 -translate-x-1/2 bottom-0 w-28 sm:w-40 md:w-48 object-contain mix-art"
        />

        <MiniBot quote="is this safe?" className="absolute left-2 bottom-2 md:left-8" />
        <MiniBot quote="probably" className="absolute right-2 bottom-2 md:right-8 bob-delay" hand="down" />
      </div>
    </section>
  );
}
