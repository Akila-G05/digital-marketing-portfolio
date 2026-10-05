import React from "react";

export default function EditorialInsights() {
  return (
    <section
      id="articles"
      className="py-12 border-t border-[#1c1c20]"
      data-purpose="editorial-insights"
    >
      {/* Section Header */}
      <div className="flex items-center justify-between mb-7">
        <h3 className="font-display tracking-wider uppercase text-lg sm:text-xl font-bold text-white flex items-center gap-2">
          <span>Latest Insights &amp; Articles</span>
          <span className="text-brand-red text-xs">✦</span>
        </h3>
        <a
          className="text-xs uppercase tracking-widest text-neutral-400 hover:text-white flex items-center space-x-2 transition-colors"
          href="#articles"
        >
          <span>Read All Articles</span>
          <span className="text-brand-red font-bold text-sm">→</span>
        </a>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Article 01 */}
        <article className="group bg-[#0f0f11] border border-[#1f1f23] rounded-2xl p-6 hover:border-brand-red/60 transition duration-300 flex flex-col justify-between cursor-pointer">
          <div>
            <div className="flex items-center justify-between gap-2 mb-4">
              <span className="text-[9px] font-bold uppercase tracking-widest text-brand-red bg-[#161619] border border-[#222228] px-2.5 py-1 rounded-full">
                Paid Media &amp; ROAS
              </span>
              <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">
                Oct 2024 · 5 Min Read
              </span>
            </div>
            <h4 className="text-base font-bold text-white tracking-wide leading-snug group-hover:text-brand-red transition-colors mb-3">
              Scaling Meta Ads in 2024: How We Maintained a 4.8x ROAS Post-iOS17
            </h4>
            <p className="text-xs text-neutral-400 leading-relaxed font-normal">
              A deep dive into creative testing frameworks, broad targeting
              algorithms, and conversion API setups that outperform standard
              campaign setups.
            </p>
          </div>
          <div className="flex items-center justify-between pt-6 mt-6 border-t border-[#1c1c20]">
            <span className="font-display text-lg font-bold text-brand-red">
              01
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400 group-hover:text-white flex items-center space-x-1.5 transition-colors">
              <span>Read Article</span>
              <span className="text-brand-red font-bold group-hover:translate-x-1 transition-transform">
                ↗
              </span>
            </span>
          </div>
        </article>

        {/* Article 02 */}
        <article className="group bg-[#0f0f11] border border-[#1f1f23] rounded-2xl p-6 hover:border-brand-red/60 transition duration-300 flex flex-col justify-between cursor-pointer">
          <div>
            <div className="flex items-center justify-between gap-2 mb-4">
              <span className="text-[9px] font-bold uppercase tracking-widest text-brand-red bg-[#161619] border border-[#222228] px-2.5 py-1 rounded-full">
                SEO &amp; Organic
              </span>
              <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">
                Sep 2024 · 7 Min Read
              </span>
            </div>
            <h4 className="text-base font-bold text-white tracking-wide leading-snug group-hover:text-brand-red transition-colors mb-3">
              The Zero-Click Search Era: Dominating AI Overviews and
              Programmatic Search
            </h4>
            <p className="text-xs text-neutral-400 leading-relaxed font-normal">
              How modern growth teams pivot from keyword stuffing to
              high-authority semantic entity networks that capture high-intent
              buyers.
            </p>
          </div>
          <div className="flex items-center justify-between pt-6 mt-6 border-t border-[#1c1c20]">
            <span className="font-display text-lg font-bold text-brand-red">
              02
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400 group-hover:text-white flex items-center space-x-1.5 transition-colors">
              <span>Read Article</span>
              <span className="text-brand-red font-bold group-hover:translate-x-1 transition-transform">
                ↗
              </span>
            </span>
          </div>
        </article>

        {/* Article 03 */}
        <article className="group bg-[#0f0f11] border border-[#1f1f23] rounded-2xl p-6 hover:border-brand-red/60 transition duration-300 flex flex-col justify-between cursor-pointer">
          <div>
            <div className="flex items-center justify-between gap-2 mb-4">
              <span className="text-[9px] font-bold uppercase tracking-widest text-brand-red bg-[#161619] border border-[#222228] px-2.5 py-1 rounded-full">
                Conversion Rate Optimization
              </span>
              <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">
                Aug 2024 · 4 Min Read
              </span>
            </div>
            <h4 className="text-base font-bold text-white tracking-wide leading-snug group-hover:text-brand-red transition-colors mb-3">
              CRO Playbook: 6 High-Impact Checkout Tweaks That Cut Drop-off by
              34%
            </h4>
            <p className="text-xs text-neutral-400 leading-relaxed font-normal">
              Tactical friction audits, social proof placement, and one-click
              payment dynamics analyzed across 50,000 live checkout sessions.
            </p>
          </div>
          <div className="flex items-center justify-between pt-6 mt-6 border-t border-[#1c1c20]">
            <span className="font-display text-lg font-bold text-brand-red">
              03
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400 group-hover:text-white flex items-center space-x-1.5 transition-colors">
              <span>Read Article</span>
              <span className="text-brand-red font-bold group-hover:translate-x-1 transition-transform">
                ↗
              </span>
            </span>
          </div>
        </article>
      </div>
    </section>
  );
}
