import React from "react";

export default function SectionDivider() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 my-3 sm:my-4 flex items-center justify-center gap-3 select-none" aria-hidden="true">
      <div className="h-px bg-gradient-to-r from-transparent via-warm-border to-warm-border/60 flex-1 max-w-xs" />
      <span className="text-[10px] text-navy/25 font-serif tracking-widest">✦</span>
      <div className="h-px bg-gradient-to-l from-transparent via-warm-border to-warm-border/60 flex-1 max-w-xs" />
    </div>
  );
}
