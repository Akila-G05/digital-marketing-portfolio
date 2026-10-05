import React from "react";

export default function Header() {
  return (
    <header
      className="flex flex-wrap items-center justify-between gap-y-2 py-4 border-b border-[#1c1c20]"
      data-purpose="site-header"
    >
      <div className="flex items-center space-x-2">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse" />
        <span className="text-[11px] tracking-[0.22em] font-semibold uppercase text-brand-red">
          Digital Marketer
        </span>
        <span className="text-[11px] tracking-[0.22em] font-medium uppercase text-neutral-400">
          / Growth Strategist
        </span>
      </div>
      <a
        href="#contact"
        className="flex items-center space-x-2 text-[11px] font-medium tracking-[0.2em] uppercase text-neutral-300 hover:text-white transition-colors cursor-pointer"
      >
        <span>Available for Freelance</span>
        <span className="text-brand-red text-xs">✦</span>
      </a>
    </header>
  );
}
