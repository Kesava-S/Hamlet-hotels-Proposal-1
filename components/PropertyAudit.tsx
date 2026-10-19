import React from "react";
import ScrollReveal from "./ScrollReveal";
import { CheckCircle2, Zap } from "lucide-react";

const hotels = [
  {
    name: "Group site",
    location: "Hamlet Hotels Portfolio",
    platform: "WordPress",
    working: [
      "Clear hotel list and booking widget.",
    ],
    opportunities: [
      "No meta description.",
      "Press page empty and only 1 blog post.",
      "'Carlisle' appears in booking dropdown with no hotel page.",
    ],
  },
  {
    name: "Maidstone",
    location: "Kent",
    platform: "WordPress · SynXis · SevenRooms",
    working: [
      "Most complete site with wedding packages and clear prices.",
    ],
    opportunities: [
      "3 promo codes on one page.",
      "What's On shows a past July event.",
      "Blog has template placeholder posts.",
      "No wedding enquiry form.",
    ],
  },
  {
    name: "Hotel 1843",
    location: "Reading",
    platform: "Webflow · SynXis & eviivo",
    working: [
      "Newsletter, WhatsApp chat, and active Meta Pixel.",
    ],
    opportunities: [
      "Two competing booking engines.",
      "39 of 41 images have no alt text.",
      "Hidden template text in the code.",
    ],
  },
  {
    name: "Gainsborough House",
    location: "Kidderminster",
    platform: "SynXis",
    working: [
      "WhatsApp chat, direct booking perks, and events interest form.",
    ],
    opportunities: [
      "Accommodation, Restaurant and Events menu links lead nowhere.",
      "Blog page address is '/new-page-1'.",
      "No mention of Hamlet Hotels.",
    ],
  },
  {
    name: "The Carmichael",
    location: "Hull",
    platform: "Basic template · direct-book.com",
    working: [
      "Simple layout with clear check-in details.",
    ],
    opportunities: [
      "About 250 words in total across the entire site.",
      "Stock photos in the gallery.",
      "Facilities menu leads nowhere.",
      "Two different direct offers.",
      "Corporate page has no rates or enquiry form.",
    ],
  },
  {
    name: "Thurrock",
    location: "Essex",
    platform: "Best Western site",
    working: [
      "Many event pages and email sign-up.",
    ],
    opportunities: [
      "Fully Best Western branded with no mention of Hamlet.",
      "Page title is generic 'Homepage'.",
      "4 links point to a different hotel's website.",
      "Old COVID-19 page still live.",
    ],
  },
];

export default function PropertyAudit() {
  return (
    <section id="property-audit" className="py-12 sm:py-16 px-4 sm:px-6 max-w-5xl mx-auto">
      <ScrollReveal>
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-navy/70 mb-2">
            Property Audit
          </p>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-navy tracking-tight mb-3">
            Hotel-by-hotel snapshot
          </h2>
          <p className="text-sm sm:text-base text-charcoal/80">
            A review of what is working well and key opportunities across each property website.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7">
        {hotels.map((hotel, index) => (
          <ScrollReveal key={hotel.name} delayMs={index * 80}>
            <div className="luxury-card h-full rounded-card p-6 sm:p-7 flex flex-col relative overflow-hidden group">
              {/* Hotel header */}
              <div className="mb-5 pb-4 border-b border-warm-divider">
                <h3 className="font-serif text-xl font-bold text-navy leading-tight mb-1">
                  {hotel.name}
                </h3>
                <p className="text-xs text-charcoal-muted font-medium">{hotel.location}</p>
                <p className="text-[11px] text-charcoal-muted/80 mt-1 font-mono">{hotel.platform}</p>
              </div>

              <div className="flex flex-col gap-4 flex-1">
                {/* Working well */}
                <div>
                  <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-forest mb-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-forest shrink-0" />
                    <span>Working well</span>
                  </div>
                  <ul className="space-y-1.5">
                    {hotel.working.map((item) => (
                      <li key={item} className="text-xs sm:text-sm text-charcoal/85 leading-relaxed pl-1">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Top opportunities */}
                <div>
                  <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-navy/70 mb-2">
                    <Zap className="w-3.5 h-3.5 text-navy/60 shrink-0" />
                    <span>Top opportunities</span>
                  </div>
                  <ul className="space-y-1.5">
                    {hotel.opportunities.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs sm:text-sm text-charcoal/85 leading-relaxed">
                        <span className="w-1 h-1 rounded-full bg-navy/40 shrink-0 mt-[5px]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
