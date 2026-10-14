import React from "react";
import ScrollReveal from "./ScrollReveal";
import { CheckCircle, Sliders, Database, Bot, Users } from "lucide-react";

export default function PlanPillars() {
  const pillars = [
    {
      number: "01",
      icon: Sliders,
      title: "Direct booking engine",
      description: "One unified group offer, one consistent promo code, and full conversion tracking from initial click to completed booking.",
      highlights: [
        "Single 'Book Direct' promotion across all hotel websites",
        "Unified promo code replacing fragmented property codes",
        "End-to-end conversion tracking in Google Tag Manager",
      ],
    },
    {
      number: "02",
      icon: Database,
      title: "Marketing database",
      description: "One clean guest database combining all booking engines and Wi-Fi data, segmented and analysed on a monthly cycle.",
      highlights: [
        "Consolidate SynXis, eviivo and Stampede guest records",
        "Segment by leisure, business, weddings, events and dining",
        "Monthly audit of list growth, unsubscriptions and repeat rates",
      ],
    },
    {
      number: "03",
      icon: Bot,
      title: "Marketing automation",
      description: "Timely pre-arrival emails, automated post-stay review requests, automated come back offers, and rapid wedding or event lead follow-ups.",
      highlights: [
        "Pre-arrival stay briefings and automated upsells",
        "Post-stay review requests to protect direct reputation",
        "WhatsApp and email nurture for wedding and private event leads",
      ],
    },
    {
      number: "04",
      icon: Users,
      title: "Influencer and affiliate growth",
      description: "Targeted local creators selected specifically for each hotel location, equipped with unique tracked codes and monthly ROI reporting.",
      highlights: [
        "Dedicated local creators for Kent, Reading, Hull and Essex",
        "Unique voucher codes with direct margin attribution",
        "Structured monthly creator calendar and performance reports",
      ],
    },
  ];

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 max-w-5xl mx-auto">
      <ScrollReveal>
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cream-muted border border-warm-border text-xs font-semibold text-navy mb-3">
            <span>Execution Strategy</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-navy tracking-tight mb-3">
            The plan: what I will build and run
          </h2>
          <p className="text-sm sm:text-base text-charcoal/80">
            Four operational pillars designed to eliminate booking friction, retain guests, and lower commission fees.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {pillars.map((pillar, index) => {
          const Icon = pillar.icon;
          return (
            <ScrollReveal key={pillar.number} delayMs={index * 90}>
              <div className="h-full bg-white rounded-card p-6 sm:p-7 border border-warm-border shadow-soft hover:shadow-card transition-all duration-200 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif text-2xl sm:text-3xl font-bold text-navy/40">
                      {pillar.number}
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-cream-muted border border-warm-border flex items-center justify-center text-navy">
                      <Icon className="w-4 h-4 text-navy" />
                    </div>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-navy mb-2">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-charcoal/85 leading-relaxed mb-5">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-warm-divider space-y-2">
                  {pillar.highlights.map((item) => (
                    <div key={item} className="flex items-start gap-2 text-xs text-charcoal">
                      <CheckCircle className="w-3.5 h-3.5 text-navy/60 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
