"use client";

import { useState } from "react";

export function CopyButton({
  text,
  label = "COPY",
  className = "",
}: {
  text: string;
  label?: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  async function onCopy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      onClick={onCopy}
      className={`btn-drawn px-4 py-1.5 font-hand text-lg ${className}`}
    >
      {copied ? "COPIED" : label}
    </button>
  );
}
