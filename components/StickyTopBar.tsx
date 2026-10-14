"use client";

import React, { useEffect, useState } from "react";
import { CALENDLY_LINK } from "@/lib/constants";

export default function StickyTopBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 140) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <aside
      aria-label="Quick booking navigation bar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b border-gold/30 bg-[#FAF8F3]/95 backdrop-blur-md shadow-sm ${
        scrolled
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 py-2 sm:py-2.5 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 truncate">
          <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" aria-hidden="true" />
          <p className="text-xs sm:text-sm font-medium text-navy truncate">
            Prepared for <span className="font-semibold">Prasanna Kirubakaran</span>, Hamlet Hotels
          </p>
        </div>

        <a
          href={CALENDLY_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 inline-flex items-center justify-center px-3 sm:px-4 py-1.5 rounded-md text-xs sm:text-sm font-semibold text-navy bg-gold hover:bg-gold-hover transition-colors duration-150 shadow-sm focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"
        >
          Book a call
        </a>
      </div>
    </aside>
  );
}
