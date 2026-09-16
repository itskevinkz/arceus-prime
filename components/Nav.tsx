import { SITE } from "@/lib/site";
import { DrawnButton } from "./DrawnButton";

const links = [
  { href: "#genesis", label: "genesis" },
  { href: "#rnd", label: "r&d" },
  { href: "#transformation", label: "transformation" },
  { href: "#bridging", label: "bridging" },
  { href: "#price", label: "price discovery" },
];

export function Nav() {
  return (
    <header className="relative z-20 flex flex-col gap-4 md:flex-row md:items-center md:justify-between px-4 md:px-8 pt-5">
      <a href="#top" className="font-scribble text-3xl md:text-4xl -rotate-1 leading-none">
        {SITE.name}
      </a>
      <nav className="flex flex-wrap gap-x-5 gap-y-2 font-hand text-xl">
        {links.map((link) => (
          <a key={link.href} href={link.href} className="hover:underline">
            {link.label}
          </a>
        ))}
      </nav>
      <DrawnButton href={SITE.buyUrl} className="self-start md:self-auto rotate-1">
        BUY {SITE.ticker}
      </DrawnButton>
    </header>
  );
}
