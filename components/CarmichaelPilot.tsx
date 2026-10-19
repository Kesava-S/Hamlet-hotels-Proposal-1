import React from "react";
import ScrollReveal from "./ScrollReveal";
import { Rocket } from "lucide-react";

export default function CarmichaelPilot() {
  return (
    <section id="pilot" className="py-12 sm:py-16 px-4 sm:px-6 max-w-4xl mx-auto">
      <ScrollReveal>
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-navy/70 mb-2">
            Recommended Starting Point
          </p>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-navy tracking-tight mb-3">
            Suggested pilot: The Carmichael Hotel, Hull
          </h2>
          <p className="text-sm sm:text-base text-charcoal/80">
            Start small, see results in 30 days.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal delayMs={100}>
        <div className="bg-white rounded-card p-7 sm:p-10 border border-warm-border shadow-card relative overflow-hidden">
          {/* Subtle inner hairline */}
          <div
            className="absolute inset-3 border border-warm-border/40 rounded-lg pointer-events-none"
            aria-hidden="true"
          />

          {/* Icon + label row */}
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-lg bg-navy text-cream flex items-center justify-center shadow-soft shrink-0">
              <Rocket className="w-5 h-5 text-cream" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-charcoal-muted">
              30-day pilot
            </span>
          </div>

          <p className="text-sm sm:text-base text-charcoal/85 leading-relaxed mb-5">
            <strong>Rebuild the Carmichael website:</strong> real room pages and photos, one direct offer, a corporate enquiry form, reviews, Hamlet branding and full tracking.
          </p>

          <div className="bg-navy/[0.04] border border-navy/10 rounded-lg p-4">
            <p className="text-sm sm:text-base text-navy font-semibold leading-relaxed">
              Then use it as the template for every other Hamlet hotel site.
            </p>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
