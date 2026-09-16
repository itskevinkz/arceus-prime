type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export function DrawnButton({ href, children, className = "" }: Props) {
  return (
    <a
      href={href}
      className={`btn-drawn inline-block px-5 py-2 font-hand text-xl md:text-2xl tracking-wide ${className}`}
    >
      {children}
    </a>
  );
}
