import React from "react";
import ScrollReveal from "./ScrollReveal";

export default function PersonalNote() {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 max-w-3xl mx-auto text-center">
      <ScrollReveal>
        <div className="relative py-8 px-6 sm:px-10 rounded-card bg-cream-muted/70 border border-warm-border">
          {/* Subtle decorative quote accent */}
          <div className="font-serif text-4xl text-navy/20 leading-none mb-3 select-none" aria-hidden="true">
            &ldquo;
          </div>

          <p className="font-serif italic text-base sm:text-xl text-navy leading-relaxed max-w-2xl mx-auto">
            Vanakkam Prasanna. As a fellow Tamil building a career in UK hospitality,
            I&apos;ve followed Hamlet Hotels&apos; growth with real admiration.
            I&apos;d love to help take it further, as part of your team.
          </p>

          <div className="mt-4 text-xs font-semibold uppercase tracking-wider text-charcoal-muted">
            Kesavaram Sundararaj
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
