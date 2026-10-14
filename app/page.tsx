import React from "react";
import StickyTopBar from "@/components/StickyTopBar";
import Hero from "@/components/Hero";
import Strengths from "@/components/Strengths";
import Opportunities from "@/components/Opportunities";
import PlanPillars from "@/components/PlanPillars";
import Roadmap from "@/components/Roadmap";
import ProofOfWork from "@/components/ProofOfWork";
import PersonalNote from "@/components/PersonalNote";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-cream text-charcoal relative selection:bg-navy selection:text-cream">
      {/* Sticky top bar on scroll */}
      <StickyTopBar />

      {/* 1. Hero (above the fold) */}
      <Hero />

      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6">
        <div className="border-t border-warm-border/80" />
      </div>

      {/* 2. What you've built well (strengths first) */}
      <Strengths />

      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6">
        <div className="border-t border-warm-border/80" />
      </div>

      {/* 3. Findings: 4 opportunities (PAS cards) */}
      <Opportunities />

      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6">
        <div className="border-t border-warm-border/80" />
      </div>

      {/* 4. The plan: what I will build and run */}
      <PlanPillars />

      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6">
        <div className="border-t border-warm-border/80" />
      </div>

      {/* 5. 90-day roadmap */}
      <Roadmap />

      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6">
        <div className="border-t border-warm-border/80" />
      </div>

      {/* 6. Why me: proof of work */}
      <ProofOfWork />

      {/* 7. Personal note */}
      <PersonalNote />

      {/* 8. Final CTA */}
      <FinalCTA />

      {/* 9. Footer */}
      <Footer />
    </main>
  );
}
