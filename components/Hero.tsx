import React from "react";
import { WHATSAPP_LINK } from "@/lib/constants";
import { ArrowDown, MessageCircle, Building2, Layers, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-6 pb-12 sm:pt-14 sm:pb-20 px-4 sm:px-6 max-w-4xl mx-auto text-center flex flex-col items-center justify-center min-h-[92vh] sm:min-h-0">
      {/* Small Date Tag */}
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cream-muted border border-warm-border text-[11px] sm:text-xs font-medium text-charcoal-muted mb-4 sm:mb-6">
        <span className="w-1.5 h-1.5 rounded-full bg-navy/60" aria-hidden="true" />
        <span>Prepared October 2026</span>
      </div>

      {/* Eyebrow */}
      <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-navy/80 mb-2 sm:mb-3">
        Prepared for Prasanna Kirubakaran, CEO, Hamlet Hotels
      </p>

      {/* Main Headline */}
      <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-navy leading-[1.12] tracking-tight max-w-3xl mb-4 sm:mb-6">
        More direct bookings and returning guests across Hamlet Hotels
      </h1>

      {/* Subline */}
      <p className="text-sm sm:text-lg text-charcoal/85 max-w-2xl leading-relaxed mb-6 sm:mb-8 font-normal">
        I studied your 5 hotel websites, booking setup and social channels. Here are 4 clear opportunities and a 90-day plan to act on them.
      </p>

      {/* 3 Small Stat Chips */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-7 sm:mb-9 max-w-xl">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-warm-border shadow-soft text-xs sm:text-sm text-navy font-medium">
          <Building2 className="w-3.5 h-3.5 text-navy/70" />
          <span>6 hotels on SynXis + GDS</span>
        </div>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-warm-border shadow-soft text-xs sm:text-sm text-navy font-medium">
          <Layers className="w-3.5 h-3.5 text-navy/70" />
          <span>4 different booking engines</span>
        </div>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-warm-border shadow-soft text-xs sm:text-sm text-navy font-medium">
          <Mail className="w-3.5 h-3.5 text-navy/70" />
          <span>1 of 5 hotels collecting guest emails</span>
        </div>
      </div>

      {/* CTA Button and Secondary Link */}
      <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-card text-base font-semibold text-navy bg-gold hover:bg-gold-hover transition-all duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 active:scale-[0.99]"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Let&apos;s chat</span>
        </a>

        <a
          href="#strengths"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-charcoal-muted hover:text-navy transition-colors py-2 px-3"
        >
          <span>See the findings</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
