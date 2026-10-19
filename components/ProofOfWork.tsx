import React from "react";
import ScrollReveal from "./ScrollReveal";
import { GraduationCap } from "lucide-react";

export default function ProofOfWork() {
  const stats = [
    {
      stat: "648",
      subStat: "conversions at $10.77 each",
      desc: "Led a 5-person Google Ads team for a US non-profit.",
    },
    {
      stat: "10+",
      subStat: "hours a week saved",
      desc: "Delivered a multi-branch restaurant platform combining finance, rota, stock and delivery app data (Uber Eats, Just Eat, Deliveroo).",
    },
    {
      stat: "7-person",
      subStat: "team led",
      desc: "At an early-stage AI automation startup for hospitality businesses.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 max-w-5xl mx-auto">
      <ScrollReveal>
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-navy/70 mb-2">
            Section 05 · Track Record
          </p>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-navy tracking-tight leading-snug sm:leading-tight mb-3 sm:mb-4">
            Why me: proof of work
          </h2>
          <p className="text-sm sm:text-base text-charcoal/85 max-w-xl mx-auto leading-relaxed font-normal">
            My interest in hospitality began with automating guest messages and OTA calendar sync for a small family homestay. Since then:
          </p>
        </div>
      </ScrollReveal>

      {/* 3 Stat Cards with Big Bold Serif Numbers */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 mb-10">
        {stats.map((item, index) => (
          <ScrollReveal key={item.stat} delayMs={index * 100}>
            <div className="luxury-card h-full rounded-card p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group">
              <div>
                <div className="font-serif text-4xl sm:text-5xl font-bold text-navy tracking-tight mb-1.5 group-hover:scale-[1.02] transition-transform origin-left">
                  {item.stat}
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-charcoal-muted mb-4 pb-3 border-b border-warm-divider">
                  {item.subStat}
                </div>
              </div>
              <p className="text-sm text-charcoal/85 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Academic Credential Line */}
      <ScrollReveal delayMs={250}>
        <div className="text-center">
          <div className="inline-flex items-center justify-center gap-2.5 px-5 py-2.5 rounded-full bg-white border border-warm-border shadow-soft text-xs sm:text-sm font-medium text-navy">
            <GraduationCap className="w-4 h-4 text-navy/70 shrink-0" />
            <span>MSc Marketing Analytics, Birkbeck, University of London</span>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
