"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X, ArrowRight } from "lucide-react";

export function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Optional: check localStorage if user previously dismissed
    const dismissed = localStorage.getItem("hiringBannerDismissed");
    if (dismissed) {
      setIsVisible(false);
    }
  }, []);

  if (!isMounted || !isVisible) return null;

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem("hiringBannerDismissed", "true");
  };

  return (
    <div className="w-full bg-signal-teal text-white px-4 py-2 sm:py-2.5 relative z-[60] flex items-center justify-center">
      <div className="flex items-center justify-center text-xs sm:text-sm font-medium w-full max-w-7xl mx-auto px-8">
        <span className="hidden sm:inline mr-1">🚀 We're growing!</span>
        <span>We are hiring Medical Representatives.</span>
        <Link 
          href="/careers/medical-representative" 
          className="ml-2 sm:ml-3 inline-flex items-center gap-1 bg-white/20 hover:bg-white/30 transition-colors px-2.5 py-1 rounded-full text-white whitespace-nowrap"
        >
          View Details
          <ArrowRight size={14} />
        </Link>
      </div>
      <button 
        onClick={handleDismiss}
        className="absolute right-4 p-1 rounded-md hover:bg-white/20 transition-colors"
        aria-label="Dismiss announcement"
      >
        <X size={16} />
      </button>
    </div>
  );
}
