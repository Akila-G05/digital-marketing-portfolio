import React from "react";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="pt-12 border-t border-[#1c1c20]"
      data-purpose="contact-footer"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: CTA Headline */}
        <div className="lg:col-span-4">
          <h3 className="font-display uppercase text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-3">
            Let’s Work
            <br />
            Together <span className="text-brand-red">✦</span>
          </h3>
          <p className="text-xs text-neutral-400 leading-relaxed mb-6 max-w-xs">
            I&apos;m currently open for new growth projects, retainers, and
            marketing consultations. Let&apos;s scale something remarkable
            together.
          </p>
          <a
            className="inline-flex items-center space-x-2 text-[10px] uppercase font-bold tracking-widest bg-brand-red hover:bg-brand-crimson text-white px-4 py-2.5 rounded-full transition-all"
            href="mailto:hello@shehanmarketing.com"
          >
            <span>→</span>
            <span>Available For Freelance</span>
          </a>
        </div>

        {/* Middle Column: Contact Directory */}
        <div className="lg:col-span-4 space-y-3.5">
          {/* Email item */}
          <a
            className="flex items-center space-x-3 text-xs text-neutral-300 hover:text-white transition-colors group"
            href="mailto:hello@shehanmarketing.com"
          >
            <div className="w-8 h-8 rounded-full bg-[#131317] border border-[#222228] flex items-center justify-center shrink-0 group-hover:border-brand-red transition-colors">
              <svg
                className="w-3.5 h-3.5 text-neutral-400 group-hover:text-brand-red transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                />
              </svg>
            </div>
            <span className="tracking-wide">hello@shehanmarketing.com</span>
          </a>

          {/* Website item */}
          <a
            className="flex items-center space-x-3 text-xs text-neutral-300 hover:text-white transition-colors group"
            href="https://www.shehanmaduharshana.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-8 h-8 rounded-full bg-[#131317] border border-[#222228] flex items-center justify-center shrink-0 group-hover:border-brand-red transition-colors">
              <svg
                className="w-3.5 h-3.5 text-neutral-400 group-hover:text-brand-red transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10" strokeWidth="1.8" />
                <path
                  d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"
                  strokeLinecap="round"
                  strokeWidth="1.8"
                />
              </svg>
            </div>
            <span className="tracking-wide">www.shehanmaduharshana.com</span>
          </a>

          {/* Phone item */}
          <a
            className="flex items-center space-x-3 text-xs text-neutral-300 hover:text-white transition-colors group"
            href="tel:+94771234567"
          >
            <div className="w-8 h-8 rounded-full bg-[#131317] border border-[#222228] flex items-center justify-center shrink-0 group-hover:border-brand-red transition-colors">
              <svg
                className="w-3.5 h-3.5 text-neutral-400 group-hover:text-brand-red transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                />
              </svg>
            </div>
            <span className="tracking-wide">+94 77 123 4567</span>
          </a>

          {/* Location item */}
          <div className="flex items-center space-x-3 text-xs text-neutral-300 group">
            <div className="w-8 h-8 rounded-full bg-[#131317] border border-[#222228] flex items-center justify-center shrink-0">
              <svg
                className="w-3.5 h-3.5 text-neutral-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                />
                <circle cx="12" cy="11" r="3" strokeWidth="1.8" />
              </svg>
            </div>
            <span className="tracking-wide">Colombo, Sri Lanka</span>
          </div>
        </div>

        {/* Right Column: Laptop Workspace Mockup */}
        <div className="lg:col-span-4 flex justify-center lg:justify-end">
          <div className="relative flex items-end">
            {/* Matte Mug */}
            <div className="w-10 h-14 bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-950 rounded-b-md rounded-t-sm border border-neutral-700/60 shadow-xl flex items-center justify-center -mr-2 mb-1 z-20">
              <span className="text-[9px] font-serif font-bold text-neutral-500">
                S
              </span>
            </div>
            {/* Laptop Device Container */}
            <div className="relative w-64 sm:w-72 bg-[#09090b] rounded-t-lg border border-neutral-700/80 p-1.5 shadow-2xl z-10">
              {/* Laptop Screen */}
              <div className="bg-black rounded border border-neutral-800 p-2 aspect-[16/10] flex flex-col justify-between overflow-hidden">
                <div className="flex items-center justify-between text-[7px] text-neutral-500">
                  <span className="uppercase tracking-widest text-brand-red font-bold">
                    SHEHAN.GROWTH
                  </span>
                  <div className="flex space-x-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-800" />
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-800" />
                  </div>
                </div>
                <div className="text-left my-auto">
                  <span className="text-[7px] uppercase font-bold text-brand-red tracking-wider block">
                    We Scale
                  </span>
                  <span className="text-[10px] uppercase font-extrabold text-white leading-tight block">
                    High-ROI
                    <br />
                    Performance
                  </span>
                </div>
                <div className="flex justify-between items-center text-[6px] text-neutral-500 border-t border-neutral-900 pt-1">
                  <span>Case Studies</span>
                  <span>Portfolio &apos;24</span>
                </div>
              </div>
              {/* Laptop Base Plate */}
              <div className="h-2 w-[110%] -ml-[5%] bg-neutral-800 rounded-b border-t border-neutral-600/40 mt-1 shadow-md" />
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Sub-footer */}
      <div className="mt-12 pt-6 border-t border-[#17171a] flex flex-col sm:flex-row items-center justify-between text-[11px] text-neutral-500">
        <p>© 2024 Shehan Maduharshana. All rights reserved.</p>
        <div className="flex space-x-6 mt-3 sm:mt-0 uppercase tracking-widest text-[10px]">
          <a className="hover:text-white transition-colors" href="#">
            LinkedIn
          </a>
          <a className="hover:text-white transition-colors" href="#">
            X (Twitter)
          </a>
          <a className="hover:text-white transition-colors" href="#">
            Substack
          </a>
          <a className="hover:text-white transition-colors" href="#">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
