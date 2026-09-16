import { MiniBot, Monitor } from "./Doodles";

const lines = [
  "STATUS: ONLINE",
  "SUBJECT: ARCEUS PRIME",
  "TRANSFORMATION: MAXIMUM",
  "BRIDGING: ACTIVE",
  "PRICE DISCOVERY: PENDING",
  "TERMINALLY BULLISH: TRUE",
];

export function Terminal() {
  return (
    <section className="relative px-4 md:px-10 py-20">
      <h2 className="font-scribble text-5xl md:text-7xl text-center -rotate-1">ARC CORE</h2>

      <div className="relative max-w-3xl mx-auto mt-8 flex flex-col md:flex-row items-center justify-center gap-6">
        <div className="hidden md:block">
          <Monitor label="ARC TECH" className="w-28 h-24" />
          <MiniBot quote="logging..." hand="up" />
        </div>

        <div className="w-full ink-box p-5 md:p-8 font-hand text-lg md:text-xl rotate-[-0.4deg] bg-[#fafafa]">
          <p className="font-scribble text-3xl mb-3">ARC CORE</p>
          {lines.map((line) => (
            <p key={line} className="leading-relaxed">
              {line}
            </p>
          ))}
          <p className="mt-3">
            <span className="cursor-blink">█</span>
          </p>
        </div>

        <div className="hidden md:block">
          <Monitor label="ARC CORE" className="w-28 h-24" />
          <MiniBot quote="copy that" hand="down" className="bob-delay" />
        </div>
      </div>

      <div className="flex justify-center gap-8 mt-6 md:hidden">
        <MiniBot quote="logging..." />
        <MiniBot quote="copy that" className="bob-delay" />
      </div>
    </section>
  );
}
