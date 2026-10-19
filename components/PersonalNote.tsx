import React from "react";
import ScrollReveal from "./ScrollReveal";

export default function PersonalNote() {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 max-w-3xl mx-auto text-center">
      <ScrollReveal>
        <div className="relative py-10 px-6 sm:px-12 rounded-card bg-[#FCFAF5] border border-warm-border shadow-card overflow-hidden">
          {/* Inner hairline border */}
          <div
            className="absolute inset-3 border border-warm-border/50 rounded-lg pointer-events-none"
            aria-hidden="true"
          />

          {/* Hotel note monogram header */}
          <div className="w-8 h-8 rounded-full border border-navy/15 flex items-center justify-center mx-auto mb-5 text-navy/40 font-serif text-sm font-bold select-none">
            ✦
          </div>

          <blockquote className="font-serif italic text-base sm:text-xl text-navy leading-relaxed max-w-2xl mx-auto mb-6">
            &ldquo;Hello. As someone building a career in UK hospitality,
            I&apos;ve followed Hamlet Hotels&apos; growth with real admiration.
            I&apos;d love to help take it further, as part of your team.&rdquo;
          </blockquote>

          <div className="flex flex-col items-center justify-center gap-1">
            <span className="text-xs sm:text-sm font-semibold tracking-wider text-navy uppercase">
              Kesavaram Sundararaj
            </span>
            <span className="text-[11px] text-charcoal-muted font-normal tracking-wide">
              London, October 2026
            </span>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
