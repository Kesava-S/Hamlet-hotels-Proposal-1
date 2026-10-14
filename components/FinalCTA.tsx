import React from "react";
import ScrollReveal from "./ScrollReveal";
import { WHATSAPP_LINK, PROPOSAL_DETAILS } from "@/lib/constants";
import { MessageCircle, Mail, Phone, ExternalLink } from "lucide-react";

export default function FinalCTA() {
  const { sender } = PROPOSAL_DETAILS;

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 max-w-4xl mx-auto text-center">
      <ScrollReveal>
        <div className="bg-navy text-cream rounded-card p-8 sm:p-12 shadow-elevated relative overflow-hidden">
          {/* Subtle background glow/border accent */}
          <div
            className="absolute inset-0 border border-white/10 rounded-card pointer-events-none"
            aria-hidden="true"
          />

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Let&apos;s talk for 20 minutes
          </h2>

          <p className="text-sm sm:text-lg text-cream/80 max-w-xl mx-auto leading-relaxed mb-8">
            I&apos;ll walk you through these findings and how we could start in the first week.
          </p>

          {/* Big Gold Button */}
          <div className="mb-10">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-card text-base sm:text-lg font-bold text-navy bg-gold hover:bg-gold-hover transition-all duration-200 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-navy active:scale-[0.99]"
            >
              <MessageCircle className="w-5 h-5 text-navy" />
              <span>Let&apos;s chat</span>
            </a>
          </div>

          {/* Contact Line */}
          <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-y-2 gap-x-4 sm:gap-x-6 text-xs sm:text-sm text-cream/70">
            <span className="font-medium text-cream">{sender.name}</span>
            <span className="text-white/30 hidden sm:inline" aria-hidden="true">·</span>
            <a
              href={sender.phoneHref}
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-cream/80" />
              <span>{sender.phone}</span>
            </a>
            <span className="text-white/30 hidden sm:inline" aria-hidden="true">·</span>
            <a
              href={sender.emailHref}
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-cream/80" />
              <span>{sender.email}</span>
            </a>
            <span className="text-white/30 hidden sm:inline" aria-hidden="true">·</span>
            <a
              href={sender.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-white transition-colors underline underline-offset-4 decoration-white/30 hover:decoration-white"
            >
              <span>LinkedIn</span>
              <ExternalLink className="w-3 h-3 text-cream/80" />
            </a>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
