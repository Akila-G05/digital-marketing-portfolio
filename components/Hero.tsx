import React from "react";

export default function Hero() {
  return (
    <section className="relative pt-4 lg:pt-6 pb-0 overflow-hidden" data-purpose="hero-banner">
      {/* Desktop Background Big Red Typographic Layer */}
      <div className="hidden lg:flex relative w-full select-none pointer-events-none justify-center items-start pt-2">
        <h1 className="display-portfolio text-brand-red font-extrabold text-[12vw] tracking-tighter opacity-95 text-center leading-none">
          MARKETER
        </h1>
      </div>

      {/* Hero Grid Content with Overlapping Portrait */}
      <div className="relative mt-2 lg:-mt-[9.5vw] z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 xl:gap-8 items-end">
        {/* Left Column: Introduction & Bio */}
        <div className="lg:col-span-4 pb-2 lg:pb-10 xl:pb-12 z-20 flex flex-col items-center lg:items-start justify-end text-center lg:text-left">
          {/* Cursive Intro */}
          <div className="script-text text-brand-red text-xl sm:text-2xl xl:text-3xl font-medium tracking-wide mb-1">
            Hello, I&apos;m
          </div>
          {/* Name */}
          <h2 className="font-display uppercase text-3xl sm:text-4xl lg:text-[2.5rem] xl:text-[3.25rem] font-extrabold leading-[0.92] tracking-tight text-white mb-3 xl:mb-4">
            SHEHAN
            <br />
            MADUHARSHANA
          </h2>
          {/* Subtitle / Title */}
          <p className="text-brand-red font-semibold text-xs sm:text-xs xl:text-sm tracking-wider uppercase mb-3">
            Digital Marketer &amp; Growth Specialist
          </p>
          {/* Bio */}
          <p className="text-neutral-400 text-xs xl:text-[13px] leading-relaxed max-w-sm lg:max-w-[280px] xl:max-w-sm mb-5 font-normal mx-auto lg:mx-0">
            I plan and execute high-ROI digital marketing campaigns that drive
            measurable growth. Passionate about data-driven performance, paid
            media, organic reach, and conversion rate optimization that scales
            brands.
          </p>
          {/* Availability Tag */}
          <div className="inline-flex items-center space-x-2 border border-[#2b2b31] bg-[#111114]/90 rounded-full px-3.5 py-1.5 w-max mx-auto lg:mx-0">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse" />
            <span className="text-[10px] tracking-widest uppercase text-neutral-300 font-medium">
              Available Worldwide
            </span>
          </div>
        </div>

        {/* Center Column: Designer Portrait Persona */}
        <div className="lg:col-span-5 flex justify-center items-end relative z-10 pt-4 lg:pt-5">
          {/* Mobile Big Red Typographic Layer Behind Portrait */}
          <div className="lg:hidden absolute top-2 inset-x-0 flex justify-center pointer-events-none select-none z-0">
            <span className="display-portfolio text-brand-red font-extrabold text-[19vw] sm:text-[17vw] tracking-tighter opacity-90 text-center leading-none">
              MARKETER
            </span>
          </div>

          <div className="relative w-full max-w-[260px] sm:max-w-[320px] lg:max-w-[380px] xl:max-w-[430px] mx-auto flex items-end justify-center">
            {/* Portrait cut-out image */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Shehan Maduharshana Digital Marketer"
              className="relative z-10 w-full h-auto max-h-[420px] sm:max-h-[500px] lg:max-h-[580px] xl:max-h-[640px] object-contain object-bottom drop-shadow-2xl block align-bottom"
              src="/assets/shehan2.png"
            />
          </div>
        </div>

        {/* Right Column: Micro-quote card & Experience Metrics */}
        <div className="lg:col-span-3 pb-8 lg:pb-10 xl:pb-12 z-20 flex flex-col items-center lg:items-start justify-between h-full space-y-6 xl:space-y-8">
          {/* Floating mini callout pill */}
          <div className="self-center lg:self-end bg-[#141418]/90 border border-neutral-800/80 rounded-xl p-3 xl:p-3.5 max-w-[220px] lg:max-w-[190px] xl:max-w-[210px] shadow-lg mx-auto lg:mx-0">
            <div className="flex items-start space-x-2">
              <span className="text-brand-red text-xs mt-0.5">✦</span>
              <p className="text-[10px] xl:text-[11px] leading-snug text-neutral-300 font-medium">
                Turning ideas into powerful digital experiences.
              </p>
            </div>
          </div>

          {/* Numeric Stats Counter List */}
          <div className="flex flex-row flex-wrap justify-center items-center gap-6 sm:gap-8 lg:flex-col lg:space-y-3.5 xl:space-y-4 pt-2 lg:pt-4 lg:self-end w-full">
            {/* Stat Item 1 */}
            <div className="flex flex-col sm:flex-row items-center lg:items-baseline space-y-1 sm:space-y-0 sm:space-x-2.5 xl:space-x-3 text-center lg:text-left">
              <span className="font-display text-3xl sm:text-4xl xl:text-5xl font-extrabold text-brand-red leading-none">
                5+
              </span>
              <span className="text-[10px] xl:text-[11px] tracking-wider uppercase font-semibold text-neutral-300 leading-tight">
                Years
                <br className="hidden sm:inline" /> Experience
              </span>
            </div>
            {/* Stat Item 2 */}
            <div className="flex flex-col sm:flex-row items-center lg:items-baseline space-y-1 sm:space-y-0 sm:space-x-2.5 xl:space-x-3 text-center lg:text-left">
              <span className="font-display text-3xl sm:text-4xl xl:text-5xl font-extrabold text-brand-red leading-none">
                120+
              </span>
              <span className="text-[10px] xl:text-[11px] tracking-wider uppercase font-semibold text-neutral-300 leading-tight">
                Campaigns
                <br className="hidden sm:inline" /> Launched
              </span>
            </div>
            {/* Stat Item 3 */}
            <div className="flex flex-col sm:flex-row items-center lg:items-baseline space-y-1 sm:space-y-0 sm:space-x-2.5 xl:space-x-3 text-center lg:text-left">
              <span className="font-display text-3xl sm:text-4xl xl:text-5xl font-extrabold text-brand-red leading-none">
                $4.5M+
              </span>
              <span className="text-[10px] xl:text-[11px] tracking-wider uppercase font-semibold text-neutral-300 leading-tight">
                Revenue
                <br className="hidden sm:inline" /> Generated
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
