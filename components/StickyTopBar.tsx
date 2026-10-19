"use client";

import React, { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";

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
      aria-label="Quick contact navigation bar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b border-gold/40 bg-[#FAF8F3]/95 backdrop-blur-md shadow-sm ${
        scrolled
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 py-2 sm:py-2.5 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 truncate">
          <div className="w-5 h-5 rounded-full border border-navy/20 bg-white flex items-center justify-center shrink-0">
            <span className="font-serif font-bold text-[10px] text-navy">H</span>
          </div>
          <p className="text-xs sm:text-sm font-medium text-navy truncate">
            Prepared for the Hamlet Hotels leadership team
          </p>
        </div>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="gold-cta-btn shrink-0 inline-flex items-center justify-center gap-1.5 px-3.5 sm:px-4 py-1.5 rounded-md text-xs sm:text-sm font-bold text-navy-dark focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"
        >
          <MessageCircle className="w-3.5 h-3.5 text-navy-dark" />
          <span>Let&apos;s chat</span>
        </a>
      </div>
    </aside>
  );
}
