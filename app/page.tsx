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
import SectionDivider from "@/components/SectionDivider";

export default function Home() {
  return (
    <main className="min-h-screen bg-cream text-charcoal relative selection:bg-navy selection:text-cream">
      {/* Sticky top bar on scroll */}
      <StickyTopBar />

      {/* 1. Hero (above the fold) */}
      <Hero />

      <SectionDivider />

      {/* 2. What you've built well (strengths first) */}
      <Strengths />

      <SectionDivider />

      {/* 3. Findings: 4 opportunities (PAS cards) */}
      <Opportunities />

      <SectionDivider />

      {/* 4. The plan: what I will build and run */}
      <PlanPillars />

      <SectionDivider />

      {/* 5. Step-by-step roadmap */}
      <Roadmap />

      <SectionDivider />

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
