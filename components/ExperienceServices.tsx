import React from "react";

export default function ExperienceServices() {
  return (
    <section
      className="py-12 border-t border-[#1c1c20]"
      data-purpose="experience-and-process"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10">
        {/* Column 1: Education & Skills (5 Cols) */}
        <div className="md:col-span-5 flex flex-col justify-between">
          <div>
            <h3 className="font-display uppercase tracking-wider text-base sm:text-lg font-bold text-white mb-6">
              Education &amp; Skills
            </h3>

            {/* Education Block */}
            <div className="mb-8">
              <span className="text-[11px] tracking-widest uppercase font-semibold text-brand-red block mb-3">
                Education &amp; Certifications
              </span>
              {/* Education Item 1 */}
              <div className="flex justify-between items-start border-b border-[#1c1c20] pb-3 mb-3">
                <div>
                  <h4 className="text-xs font-semibold text-neutral-100">
                    B.Sc. in Marketing &amp; Business Analytics
                  </h4>
                  <p className="text-[11px] text-neutral-400">
                    University of Colombo
                  </p>
                </div>
                <span className="text-[10px] font-mono text-neutral-400 whitespace-nowrap">
                  2018 — 2022
                </span>
              </div>
              {/* Education Item 2 */}
              <div className="flex justify-between items-start border-b border-[#1c1c20] pb-3">
                <div>
                  <h4 className="text-xs font-semibold text-neutral-100">
                    Meta Certified Media Buying Professional
                  </h4>
                  <p className="text-[11px] text-neutral-400">
                    Google Ads &amp; Analytics Certified
                  </p>
                </div>
                <span className="text-[10px] font-mono text-neutral-400 whitespace-nowrap">
                  2023
                </span>
              </div>
            </div>

            {/* Skills Tag Cloud */}
            <div>
              <span className="text-[11px] tracking-widest uppercase font-semibold text-brand-red block mb-3">
                Skills
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  "Performance Marketing",
                  "Google Ads",
                  "Meta Ads",
                  "SEO Strategy",
                  "Data Analytics",
                  "Email Marketing",
                  "Conversion Optimization (CRO)",
                  "Content Marketing",
                  "HubSpot / CRM",
                  "TikTok Ads",
                  "A/B Testing",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="text-[10px] tracking-wider uppercase font-medium bg-[#111115] border border-[#222228] px-2.5 py-1 rounded text-neutral-300 hover:border-brand-red/60 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Column 2: Services Timeline (4 Cols) */}
        <div className="md:col-span-4">
          <h3 className="font-display uppercase tracking-wider text-base sm:text-lg font-bold text-white mb-6">
            Services
          </h3>
          <div className="relative pl-2 space-y-5">
            {/* Continuous Timeline Line */}
            <div className="absolute top-4 left-[2.35rem] bottom-4 w-[1px] bg-neutral-800 z-0" />

            {/* Service 01 */}
            <div className="relative z-10 flex items-start space-x-3.5 group">
              <span className="font-display text-xs font-bold text-brand-red pt-1.5 w-4">
                01
              </span>
              <div className="w-7 h-7 rounded-full bg-[#121215] border border-[#292930] flex items-center justify-center shrink-0 group-hover:border-brand-red transition-colors">
                <svg
                  className="w-3 h-3 text-neutral-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="10" strokeWidth="2" />
                  <circle cx="12" cy="12" r="6" strokeWidth="2" />
                  <circle cx="12" cy="12" r="2" fill="currentColor" />
                </svg>
              </div>
              <div className="pt-0.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-red block">
                  Performance &amp; Paid Advertising
                </span>
                <p className="text-[11px] text-neutral-400 leading-snug">
                  High-converting campaigns across Meta, Google Ads, TikTok, and
                  LinkedIn optimized for maximum ROAS.
                </p>
              </div>
            </div>

            {/* Service 02 */}
            <div className="relative z-10 flex items-start space-x-3.5 group">
              <span className="font-display text-xs font-bold text-brand-red pt-1.5 w-4">
                02
              </span>
              <div className="w-7 h-7 rounded-full bg-[#121215] border border-[#292930] flex items-center justify-center shrink-0 group-hover:border-brand-red transition-colors">
                <svg
                  className="w-3 h-3 text-neutral-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <circle cx="11" cy="11" r="8" strokeWidth="2" />
                  <path
                    d="M21 21l-4.35-4.35"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="pt-0.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-red block">
                  Search Engine Optimization (SEO)
                </span>
                <p className="text-[11px] text-neutral-400 leading-snug">
                  Full-funnel technical and content SEO strategies to capture
                  high-intent organic search demand.
                </p>
              </div>
            </div>

            {/* Service 03 */}
            <div className="relative z-10 flex items-start space-x-3.5 group">
              <span className="font-display text-xs font-bold text-brand-red pt-1.5 w-4">
                03
              </span>
              <div className="w-7 h-7 rounded-full bg-[#121215] border border-[#292930] flex items-center justify-center shrink-0 group-hover:border-brand-red transition-colors">
                <svg
                  className="w-3 h-3 text-neutral-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <polyline
                    points="23 6 13.5 15.5 8.5 10.5 1 18"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <polyline
                    points="17 6 23 6 23 12"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="pt-0.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-red block">
                  Conversion Rate Optimization (CRO)
                </span>
                <p className="text-[11px] text-neutral-400 leading-snug">
                  Landing page experimentation, customer journey audits, and A/B
                  testing that turn visitors into revenue.
                </p>
              </div>
            </div>

            {/* Service 04 */}
            <div className="relative z-10 flex items-start space-x-3.5 group">
              <span className="font-display text-xs font-bold text-brand-red pt-1.5 w-4">
                04
              </span>
              <div className="w-7 h-7 rounded-full bg-[#121215] border border-[#292930] flex items-center justify-center shrink-0 group-hover:border-brand-red transition-colors">
                <svg
                  className="w-3 h-3 text-neutral-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                    strokeWidth="2"
                  />
                  <polyline points="22,6 12,13 2,6" strokeWidth="2" />
                </svg>
              </div>
              <div className="pt-0.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-red block">
                  Email &amp; Lifecycle Marketing
                </span>
                <p className="text-[11px] text-neutral-400 leading-snug">
                  Automated retention flows, customer segmentation, and
                  personalized drip sequences that maximize LTV.
                </p>
              </div>
            </div>

            {/* Service 05 */}
            <div className="relative z-10 flex items-start space-x-3.5 group">
              <span className="font-display text-xs font-bold text-brand-red pt-1.5 w-4">
                05
              </span>
              <div className="w-7 h-7 rounded-full bg-[#121215] border border-[#292930] flex items-center justify-center shrink-0 group-hover:border-brand-red transition-colors">
                <svg
                  className="w-3 h-3 text-neutral-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <line
                    x1="18"
                    y1="20"
                    x2="18"
                    y2="10"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <line
                    x1="12"
                    y1="20"
                    x2="12"
                    y2="4"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <line
                    x1="6"
                    y1="20"
                    x2="6"
                    y2="14"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="pt-0.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-red block">
                  Growth Strategy &amp; Analytics
                </span>
                <p className="text-[11px] text-neutral-400 leading-snug">
                  End-to-end attribution modeling, KPI dashboards, and
                  data-backed scale roadmaps.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Column 3: Red Quote Card (3 Cols) */}
        <div className="md:col-span-3">
          <div className="bg-gradient-to-b from-[#870d13] to-[#5a080c] rounded-xl p-6 h-full flex flex-col justify-between text-white relative shadow-2xl border border-red-800/40">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="font-serif text-5xl leading-none text-red-300/40 font-bold select-none">
                  “
                </div>
                <div className="flex space-x-1 text-xs text-amber-300">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </div>
              </div>
              <p className="text-xs sm:text-[13px] font-normal text-red-50 leading-relaxed tracking-wide">
                “Shehan transformed our digital acquisition funnel. Under his
                strategy, our customer acquisition cost dropped by 42% while
                monthly revenue tripled within four months.”
              </p>
            </div>
            <div className="pt-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-red-950/80 border border-red-700/60 flex items-center justify-center shrink-0 font-bold text-xs text-red-200 tracking-wider shadow-inner">
                  SJ
                </div>
                <div>
                  <h5 className="text-xs font-bold text-white tracking-wide uppercase">
                    Sarah Jenkins
                  </h5>
                  <p className="text-[10px] text-red-200/80 font-medium">
                    Head of Growth at Veloce
                  </p>
                </div>
              </div>
              <div className="border-t border-red-700/50 pt-3">
                <p className="text-[9px] font-bold uppercase tracking-widest text-red-200 flex items-center justify-between">
                  <span>Verified Client Review</span>
                  <span className="text-xs text-white">✦</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
