export function CyanArc({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 800 420" className={`arc-pulse ${className}`} fill="none" aria-hidden>
      <path
        d="M80 370 C 200 30, 600 20, 730 360"
        stroke="#7ec8f5"
        strokeWidth="22"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ScribbleArrow({
  className = "",
  label,
}: {
  className?: string;
  label?: string;
}) {
  return (
    <div className={`wiggle font-hand text-ink ${className}`}>
      <svg viewBox="0 0 120 70" className="w-20 h-12" fill="none" aria-hidden>
        <path d="M8 40 C 30 12, 70 18, 96 28" stroke="#111" strokeWidth="1.6" />
        <path d="M86 18 L104 30 L82 38" stroke="#111" strokeWidth="1.6" />
      </svg>
      {label ? <p className="text-lg -mt-2">{label}</p> : null}
    </div>
  );
}

export function MiniBot({
  quote,
  className = "",
  hand = "up",
}: {
  quote?: string;
  className?: string;
  hand?: "up" | "down" | "point";
}) {
  return (
    <div className={`bob inline-flex flex-col items-center ${className}`}>
      {quote ? (
        <div className="relative mb-1">
          <svg viewBox="0 0 120 44" className="w-[120px] h-11" aria-hidden>
            <ellipse cx="60" cy="18" rx="54" ry="16" fill="#fff" stroke="#111" strokeWidth="1.4" />
            <path d="M52 33 L58 42 L66 32" fill="#fff" stroke="#111" strokeWidth="1.2" />
          </svg>
          <p className="absolute inset-0 flex items-center justify-center font-hand text-[13px] leading-none pb-1">
            {quote}
          </p>
        </div>
      ) : null}
      <svg viewBox="0 0 70 110" className="w-12 h-[76px] md:w-14 md:h-[88px]" aria-hidden>
        <rect x="24" y="6" width="22" height="18" rx="3" fill="#fff" stroke="#111" strokeWidth="1.5" />
        <rect x="27" y="11" width="16" height="7" rx="1" fill="#2a2a2a" />
        <path d="M20 28 H50 L54 72 H16 Z" fill="#fff" stroke="#111" strokeWidth="1.5" />
        <path d="M22 40 H48" stroke="#111" strokeWidth="1" />
        <line x1="28" y1="72" x2="26" y2="100" stroke="#111" strokeWidth="1.5" />
        <line x1="42" y1="72" x2="44" y2="100" stroke="#111" strokeWidth="1.5" />
        <line x1="24" y1="100" x2="30" y2="100" stroke="#111" strokeWidth="1.5" />
        <line x1="40" y1="100" x2="48" y2="100" stroke="#111" strokeWidth="1.5" />
        {hand === "up" ? (
          <>
            <path d="M20 36 L8 18" stroke="#111" strokeWidth="1.5" />
            <path d="M50 40 L60 52" stroke="#111" strokeWidth="1.5" />
          </>
        ) : hand === "point" ? (
          <>
            <path d="M20 40 L8 40" stroke="#111" strokeWidth="1.5" />
            <path d="M50 38 L64 28" stroke="#111" strokeWidth="1.5" />
          </>
        ) : (
          <>
            <path d="M20 40 L10 58" stroke="#111" strokeWidth="1.5" />
            <path d="M50 40 L60 58" stroke="#111" strokeWidth="1.5" />
          </>
        )}
      </svg>
    </div>
  );
}

export function Monitor({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <svg viewBox="0 0 120 90" className={className} aria-hidden>
      <rect x="8" y="18" width="88" height="58" rx="3" fill="#e8e8e8" stroke="#111" strokeWidth="1.6" />
      <rect x="16" y="26" width="50" height="32" fill="#fff" stroke="#111" strokeWidth="1.2" />
      <text x="18" y="68" fontFamily="Patrick Hand, cursive" fontSize="11" fill="#111">
        {label}
      </text>
      <circle cx="78" cy="32" r="3" fill="#111" />
      <line x1="96" y1="22" x2="108" y2="8" stroke="#111" strokeWidth="1.4" />
      <circle cx="108" cy="7" r="2.2" fill="#111" />
    </svg>
  );
}

export function TinyPrime({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 80" className={className} aria-hidden>
      <rect x="18" y="8" width="24" height="16" rx="2" fill="#fff" stroke="#111" strokeWidth="1.4" />
      <rect x="22" y="13" width="16" height="5" fill="#2a2a2a" />
      <path d="M14 26 H46 L48 58 H12 Z" fill="#fff" stroke="#111" strokeWidth="1.4" />
      <line x1="24" y1="58" x2="22" y2="74" stroke="#111" strokeWidth="1.4" />
      <line x1="36" y1="58" x2="38" y2="74" stroke="#111" strokeWidth="1.4" />
      <line x1="14" y1="34" x2="6" y2="28" stroke="#111" strokeWidth="1.4" />
      <line x1="46" y1="34" x2="54" y2="28" stroke="#111" strokeWidth="1.4" />
    </svg>
  );
}

export function UpArrow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 160" className={className} fill="none" aria-hidden>
      <path d="M40 150 C 30 110, 48 80, 38 40" stroke="#111" strokeWidth="2" />
      <path d="M22 52 L38 20 L54 52" stroke="#111" strokeWidth="2" />
    </svg>
  );
}

export function ElectricLines({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" className={`flicker ${className}`} fill="none" aria-hidden>
      <path d="M20 20 L50 48 L38 50 L70 90" stroke="#7ec8f5" strokeWidth="2" />
      <path d="M110 10 L130 40 L118 42 L160 80" stroke="#7ec8f5" strokeWidth="1.8" />
    </svg>
  );
}
