import React from "react";
import ScrollReveal from "./ScrollReveal";
import { Globe, TrendingUp, ShieldCheck } from "lucide-react";

export default function Strengths() {
  const strengths = [
    {
      icon: Globe,
      title: "Strong distribution",
      desc: "SynXis CRS with listings on Amadeus, Sabre, Galileo and Worldspan for 6 properties.",
    },
    {
      icon: TrendingUp,
      title: "Fast growth",
      desc: "From Maidstone in 2022 to the Best Western Thurrock acquisition in 2026.",
    },
    {
      icon: ShieldCheck,
      title: "Clear owner model",
      desc: "Guaranteed income for owners, with Hamlet running operations.",
    },
  ];

  return (
    <section id="strengths" className="py-12 sm:py-16 px-4 sm:px-6 max-w-5xl mx-auto">
      <ScrollReveal>
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-navy tracking-tight mb-3">
            What you have built well
          </h2>
          <p className="text-sm sm:text-base text-charcoal/80">
            Hamlet Hotels has built strong commercial foundations in just four years across prime UK locations.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
        {strengths.map((item, index) => {
          const Icon = item.icon;
          return (
            <ScrollReveal key={item.title} delayMs={index * 100}>
              <div className="h-full bg-white rounded-card p-6 border border-forest-border/70 shadow-soft relative overflow-hidden transition-all duration-200 hover:shadow-card hover:border-forest">
                <div className="w-10 h-10 rounded-lg bg-forest-light flex items-center justify-center text-forest mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-navy mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-charcoal/85 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
