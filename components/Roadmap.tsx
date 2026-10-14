import React from "react";
import ScrollReveal from "./ScrollReveal";
import {
  Layers,
  Gauge,
  Star,
  Users,
  Repeat,
  Share2,
} from "lucide-react";

export default function Roadmap() {
  const steps = [
    {
      step: "Step 01",
      theme: "Fix and measure",
      items: [
        "Website clean-up checklist across all hotel sites",
        "Unified group direct booking offer and promo code",
        "Conversion and e-commerce tracking in Google Tag Manager",
        "Comprehensive guest data and platform audit",
      ],
    },
    {
      step: "Step 02",
      theme: "Build the engine",
      items: [
        "Central guest database live and segmented",
        "First automations: post-stay review request sequence",
        "Come back offer automation for past guests",
        "Local hospitality influencer shortlist for each property",
      ],
    },
    {
      step: "Step 03",
      theme: "Grow",
      items: [
        "Local creator campaigns live with tracked codes",
        "Wedding and private event lead nurture journeys (WhatsApp + email)",
        "First comprehensive monthly performance and revenue report",
        "Channel optimisation based on verified direct revenue data",
      ],
    },
  ];

  const metrics = [
    { label: "Direct booking share", icon: Gauge },
    { label: "Review volume", icon: Star },
    { label: "Email list growth", icon: Users },
    { label: "Repeat guest rate", icon: Repeat },
    { label: "Social reach", icon: Share2 },
  ];

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 max-w-5xl mx-auto">
      <ScrollReveal>
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cream-muted border border-warm-border text-xs font-semibold text-navy mb-3">
            <Layers className="w-3.5 h-3.5 text-navy/70" />
            <span>Step-by-Step Plan</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-navy tracking-tight mb-3">
            Step-by-step roadmap
          </h2>
          <p className="text-sm sm:text-base text-charcoal/80">
            A phased progression ensuring foundational fixes deliver immediate clarity before scaling campaigns.
          </p>
        </div>
      </ScrollReveal>

      {/* 3 Steps: Horizontal on desktop, Vertical on mobile */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {steps.map((item, index) => (
          <ScrollReveal key={item.step} delayMs={index * 100}>
            <div className="h-full bg-white rounded-card p-6 border border-warm-border shadow-soft hover:shadow-card transition-all duration-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-navy bg-cream-muted px-2.5 py-1 rounded-md border border-warm-border">
                    {item.step}
                  </span>
                  <span className="text-xs font-bold text-charcoal-light">
                    Phase 0{index + 1}
                  </span>
                </div>

                <h3 className="font-serif text-lg sm:text-xl font-bold text-navy mb-4">
                  {item.theme}
                </h3>

                <ul className="space-y-2.5 text-xs sm:text-sm text-charcoal/85">
                  {item.items.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-navy/60 shrink-0 mt-1.5" />
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* How we will measure success */}
      <ScrollReveal delayMs={200}>
        <div className="bg-cream-muted rounded-card p-6 sm:p-8 border border-warm-border">
          <div className="text-center max-w-xl mx-auto mb-6">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-navy mb-2">
              How we will measure success
            </h3>
            <p className="text-xs sm:text-sm text-charcoal/80">
              Clear performance indicators tracked monthly to verify direct revenue and audience growth.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {metrics.map((metric) => {
              const Icon = metric.icon;
              return (
                <div
                  key={metric.label}
                  className="bg-white rounded-lg p-3.5 border border-warm-border/70 text-center flex flex-col items-center justify-center gap-2 shadow-soft"
                >
                  <div className="w-8 h-8 rounded-full bg-cream-muted flex items-center justify-center text-navy">
                    <Icon className="w-4 h-4 text-navy" />
                  </div>
                  <span className="text-xs font-semibold text-navy leading-tight">
                    {metric.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
