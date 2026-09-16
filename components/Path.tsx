import { MiniBot, TinyPrime } from "./Doodles";

const stages = [
  {
    id: "genesis",
    n: "1",
    title: "genesis",
    text: "out of noise, order.",
  },
  {
    id: "rnd",
    n: "2",
    title: "R&D",
    text: "hypothesize.\nbuild.\niterate.",
  },
  {
    id: "max-path",
    n: "3",
    title: "maxximum transformation",
    text: "all axes. max.",
  },
  {
    id: "bridge-path",
    n: "4",
    title: "bridging",
    text: "between chains.\nbetween worlds.\nbetween people.",
  },
  {
    id: "price-path",
    n: "5",
    title: "price discovery",
    text: "information → signal\nsignal → price\nprice → progress",
  },
];

function StageArt({ id }: { id: string }) {
  if (id === "genesis") {
    return (
      <svg viewBox="0 0 160 100" className="w-32 h-20 mx-auto" aria-hidden>
        <circle cx="80" cy="48" r="7" fill="#7ec8f5" />
        <ellipse cx="80" cy="48" rx="46" ry="13" fill="none" stroke="#111" strokeWidth="1.3" transform="rotate(-20 80 48)" />
        <ellipse cx="80" cy="48" rx="34" ry="9" fill="none" stroke="#111" strokeWidth="1.1" transform="rotate(28 80 48)" />
        <circle cx="30" cy="20" r="1.4" fill="#111" />
        <circle cx="128" cy="28" r="1.2" fill="#111" />
        <circle cx="40" cy="82" r="1.3" fill="#111" />
      </svg>
    );
  }
  if (id === "rnd") {
    return (
      <svg viewBox="0 0 170 110" className="w-40 h-24 mx-auto" aria-hidden>
        <path d="M18 78 L26 48 H38 L46 78 Z" fill="none" stroke="#111" strokeWidth="1.4" />
        <circle cx="32" cy="62" r="6" fill="#7ec8f5" opacity="0.7" />
        <rect x="70" y="18" width="70" height="58" fill="#fff" stroke="#111" strokeWidth="1.4" />
        <text x="78" y="40" fontFamily="Patrick Hand, cursive" fontSize="11">
          ARC theory
        </text>
        <text x="82" y="58" fontFamily="Patrick Hand, cursive" fontSize="12">
          Σ × ∞
        </text>
        <rect x="52" y="70" width="14" height="12" rx="2" fill="#fff" stroke="#111" strokeWidth="1.2" />
        <rect x="54" y="73" width="10" height="4" fill="#2a2a2a" />
      </svg>
    );
  }
  if (id === "max-path") {
    return (
      <div className="flex items-center justify-center gap-2">
        <TinyPrime className="w-12 h-16" />
        <div className="font-hand text-sm leading-tight text-left">
          <p>scale ↑</p>
          <p>speed ↑</p>
          <p>intelligence ↑</p>
          <p>recursion ↑</p>
        </div>
      </div>
    );
  }
  if (id === "bridge-path") {
    return (
      <svg viewBox="0 0 180 100" className="w-40 h-20 mx-auto" aria-hidden>
        <path d="M8 88 L40 48 L40 88 Z" fill="none" stroke="#111" strokeWidth="1.5" />
        <path d="M172 88 L140 46 L140 88 Z" fill="none" stroke="#111" strokeWidth="1.5" />
        <path d="M40 50 C 78 12, 102 12, 140 48" stroke="#7ec8f5" strokeWidth="6" fill="none" />
        <circle cx="18" cy="42" r="3" fill="none" stroke="#111" />
        <circle cx="162" cy="40" r="3" fill="none" stroke="#111" />
      </svg>
    );
  }
  return (
    <div className="relative">
      <svg viewBox="0 0 180 100" className="w-40 h-20 mx-auto" aria-hidden>
        <path d="M24 80 H160 M24 80 V24" stroke="#111" strokeWidth="1.4" />
        <path d="M30 74 L70 70 L100 58 L130 30 L156 16" stroke="#1e4b9c" strokeWidth="1.6" fill="none" />
      </svg>
      <p className="absolute right-1 top-0 font-hand text-sm rotate-2">truth emerges.</p>
    </div>
  );
}

export function Path() {
  return (
    <section className="relative px-4 md:px-10 py-16">
      <h2 className="font-scribble text-4xl sm:text-6xl md:text-7xl text-center leading-none max-w-5xl mx-auto -rotate-1">
        THE PATH TO MAXXIMUM TRANSFORMATION
      </h2>

      <div className="mt-12 flex flex-col lg:flex-row lg:items-stretch gap-8 lg:gap-4 max-w-6xl mx-auto">
        {stages.map((stage, i) => (
          <div key={stage.id} className="flex flex-col lg:flex-row items-center gap-3 flex-1">
            <article
              id={stage.id === "genesis" || stage.id === "rnd" ? stage.id : undefined}
              className="w-full text-center lg:text-left"
            >
              <p className="font-hand text-base">
                {stage.n}. {stage.title}
              </p>
              <div className="mt-2">
                <StageArt id={stage.id} />
              </div>
              <p className="font-hand text-lg leading-tight mt-2 whitespace-pre-line">
                {stage.text}
              </p>
            </article>
            {i < stages.length - 1 ? (
              <p className="font-hand text-2xl lg:rotate-[-90deg] wiggle text-slatey" aria-hidden>
                ↓
              </p>
            ) : null}
          </div>
        ))}
      </div>

      <MiniBot quote="taking notes." className="mt-10 ml-2" hand="down" />
    </section>
  );
}
