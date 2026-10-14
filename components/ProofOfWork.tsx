import React from "react";
import ScrollReveal from "./ScrollReveal";
import { GraduationCap, Award } from "lucide-react";

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
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cream-muted border border-warm-border text-xs font-semibold text-navy mb-3">
            <Award className="w-3.5 h-3.5 text-navy/70" />
            <span>Demonstrated Results</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-navy tracking-tight mb-3">
            Why me: proof of work
          </h2>
          <p className="text-sm sm:text-base text-charcoal/85 max-w-xl mx-auto leading-relaxed">
            My interest in hospitality began with automating guest messages and OTA calendar sync for a small family homestay. Since then:
          </p>
        </div>
      </ScrollReveal>

      {/* 3 Stat Cards with Big Numbers */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map((item, index) => (
          <ScrollReveal key={item.stat} delayMs={index * 100}>
            <div className="h-full bg-white rounded-card p-6 sm:p-7 border border-warm-border shadow-soft hover:shadow-card transition-all duration-200 flex flex-col justify-between">
              <div>
                <div className="font-serif text-3xl sm:text-4xl font-bold text-navy tracking-tight mb-1">
                  {item.stat}
                </div>
                <div className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-charcoal-muted mb-4">
                  {item.subStat}
                </div>
              </div>
              <p className="text-sm text-charcoal/85 leading-relaxed pt-3 border-t border-warm-divider">
                {item.desc}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Degree line */}
      <ScrollReveal delayMs={250}>
        <div className="text-center">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-cream-muted border border-warm-border text-xs sm:text-sm font-medium text-navy">
            <GraduationCap className="w-4 h-4 text-navy/70 shrink-0" />
            <span>MSc Marketing Analytics, Birkbeck, University of London</span>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
