import React from "react";

export default function SelectedProjects() {
  return (
    <section
      id="projects"
      className="py-12 border-t border-[#1c1c20]"
      data-purpose="portfolio-showcase"
    >
      {/* Section Header */}
      <div className="flex items-center justify-between mb-7">
        <h3 className="font-display tracking-wider uppercase text-lg sm:text-xl font-bold text-white flex items-center gap-2">
          <span>Selected Projects</span>
        </h3>
        <a
          className="text-xs uppercase tracking-widest text-neutral-400 hover:text-white flex items-center space-x-2 transition-colors"
          href="#projects"
        >
          <span>View All Projects</span>
          <span className="text-brand-red font-bold text-sm">→</span>
        </a>
      </div>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Project 01: VELOCE BIKES */}
        <article className="group bg-[#0f0f11] border border-[#1f1f23] rounded-lg p-3 hover:border-neutral-700 transition duration-300 flex flex-col justify-between">
          {/* Card Thumbnail Mockup Preview */}
          <div className="relative bg-[#09090b] rounded-md aspect-[16/10] overflow-hidden border border-[#212126] p-4 flex flex-col justify-between">
            <div className="flex justify-between items-center text-[9px] text-neutral-500 uppercase tracking-widest border-b border-neutral-900 pb-1.5">
              <span>Veloce Apparel</span>
              <span>E-Commerce Growth</span>
            </div>
            {/* Mock visual inside card */}
            <div className="py-2">
              <span className="text-[10px] uppercase font-bold tracking-tight text-neutral-300 block">
                Veloce Performance Marketing
              </span>
              <span className="text-[8px] uppercase tracking-widest text-brand-red font-semibold">
                Scaled ROAS to 4.8x via Meta &amp; Google Ads
              </span>
              <div className="mt-3 flex items-center justify-center space-x-3 py-1">
                <div className="border border-neutral-800 bg-[#121215] px-2.5 py-1 rounded text-center">
                  <span className="text-[7px] text-neutral-500 block uppercase">
                    ROAS
                  </span>
                  <span className="text-xs font-bold text-brand-red font-display">
                    4.8x
                  </span>
                </div>
                <div className="border border-neutral-800 bg-[#121215] px-2.5 py-1 rounded text-center">
                  <span className="text-[7px] text-neutral-500 block uppercase">
                    CAC
                  </span>
                  <span className="text-xs font-bold text-white font-display">
                    -42%
                  </span>
                </div>
                <div className="border border-neutral-800 bg-[#121215] px-2.5 py-1 rounded text-center">
                  <span className="text-[7px] text-neutral-500 block uppercase">
                    Revenue
                  </span>
                  <span className="text-xs font-bold text-white font-display">
                    +240%
                  </span>
                </div>
              </div>
            </div>
            <div className="text-[8px] text-neutral-600 flex justify-between items-center">
              <span>Meta &amp; Google Ads Campaign</span>
              <span className="text-brand-red">Case Study •</span>
            </div>
          </div>
          {/* Card Metadata Footer */}
          <div className="flex items-center justify-between pt-3 px-1">
            <div className="flex items-center space-x-2.5">
              <span className="font-display text-lg font-bold text-brand-red">
                01
              </span>
              <div>
                <h4 className="text-xs uppercase font-bold text-white tracking-wide">
                  Veloce Scale-Up
                </h4>
                <p className="text-[10px] uppercase tracking-wider text-neutral-400">
                  Paid Media Campaign
                </p>
              </div>
            </div>
            <span className="text-neutral-500 group-hover:text-white group-hover:translate-x-1 transition-all text-xs">
              →
            </span>
          </div>
        </article>

        {/* Project 02: WOODCRAFT FURNITURE */}
        <article className="group bg-[#0f0f11] border border-[#1f1f23] rounded-lg p-3 hover:border-neutral-700 transition duration-300 flex flex-col justify-between">
          {/* Card Thumbnail Mockup Preview */}
          <div className="relative bg-[#d6cfc7] rounded-md aspect-[16/10] overflow-hidden border border-[#212126] p-4 text-[#1c1b18] flex flex-col justify-between">
            <div className="flex justify-between items-center text-[8px] uppercase tracking-wider text-neutral-700 border-b border-neutral-400/30 pb-1">
              <span className="font-bold">Woodcraft Home</span>
              <span>Search &amp; SEO</span>
            </div>
            {/* Mock Visual */}
            <div className="grid grid-cols-2 items-center gap-2 py-1">
              <div>
                <h5 className="text-[11px] font-serif font-bold leading-tight text-neutral-900">
                  Organic Search Dominance
                </h5>
                <p className="text-[8px] text-neutral-600 mt-1">
                  +320% Organic Traffic &amp; Top 3 Keywords.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-1">
                <span className="font-display text-xl font-extrabold text-neutral-900 leading-none">
                  +320%
                </span>
                <span className="text-[7px] uppercase tracking-wider font-semibold text-neutral-700">
                  Search Traffic
                </span>
              </div>
            </div>
            <div className="text-[8px] text-neutral-700 flex justify-between">
              <span>Inbound &amp; Technical SEO</span>
              <span className="font-semibold underline">View Audit</span>
            </div>
          </div>
          {/* Card Metadata Footer */}
          <div className="flex items-center justify-between pt-3 px-1">
            <div className="flex items-center space-x-2.5">
              <span className="font-display text-lg font-bold text-brand-red">
                02
              </span>
              <div>
                <h4 className="text-xs uppercase font-bold text-white tracking-wide">
                  Woodcraft SEO
                </h4>
                <p className="text-[10px] uppercase tracking-wider text-neutral-400">
                  Inbound Marketing
                </p>
              </div>
            </div>
            <span className="text-neutral-500 group-hover:text-white group-hover:translate-x-1 transition-all text-xs">
              →
            </span>
          </div>
        </article>

        {/* Project 03: URBANIC FASHION MAGAZINE */}
        <article className="group bg-[#0f0f11] border border-[#1f1f23] rounded-lg p-3 hover:border-neutral-700 transition duration-300 flex flex-col justify-between">
          {/* Card Thumbnail Mockup Preview */}
          <div className="relative bg-[#101014] rounded-md aspect-[16/10] overflow-hidden border border-[#212126] p-4 flex flex-col justify-between">
            <div className="flex justify-between items-center text-[8px] uppercase tracking-widest text-neutral-400 border-b border-neutral-800 pb-1">
              <span>Urbanic Beauty</span>
              <span>Omnichannel</span>
            </div>
            {/* Mock Visual */}
            <div className="flex items-center justify-between py-1">
              <div>
                <span className="text-[9px] uppercase tracking-wider text-brand-red font-semibold">
                  Social &amp; Viral
                </span>
                <h5 className="text-xs uppercase font-extrabold tracking-tight text-white leading-tight mt-0.5">
                  Viral Social &amp;
                  <br />
                  Influencer Launch
                </h5>
              </div>
              <div className="w-12 h-14 bg-gradient-to-tr from-brand-red to-rose-900 rounded-sm flex flex-col items-center justify-center text-white/80 shadow-md text-center p-1">
                <span className="text-[11px] font-bold text-white leading-none">
                  18M
                </span>
                <span className="text-[6px] uppercase tracking-wider text-red-200 mt-0.5">
                  Impr.
                </span>
              </div>
            </div>
            <div className="text-[8px] text-neutral-500 flex justify-between">
              <span>Generated 18M+ Impr &amp; 65k Leads</span>
              <span className="text-neutral-300">Read report →</span>
            </div>
          </div>
          {/* Card Metadata Footer */}
          <div className="flex items-center justify-between pt-3 px-1">
            <div className="flex items-center space-x-2.5">
              <span className="font-display text-lg font-bold text-brand-red">
                03
              </span>
              <div>
                <h4 className="text-xs uppercase font-bold text-white tracking-wide">
                  Urbanic Beauty
                </h4>
                <p className="text-[10px] uppercase tracking-wider text-neutral-400">
                  Social &amp; Viral Growth
                </p>
              </div>
            </div>
            <span className="text-neutral-500 group-hover:text-white group-hover:translate-x-1 transition-all text-xs">
              →
            </span>
          </div>
        </article>
      </div>
    </section>
  );
}
