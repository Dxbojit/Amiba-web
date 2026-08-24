"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { mainNav } from "@/data/navigation";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  // Passive scroll listener with hysteresis to eliminate glitching/jittering
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const top = window.scrollY;
          // Hysteresis: activate at 30px, deactivate only below 10px
          setIsScrolled((prev) => {
            if (top > 30 && !prev) return true;
            if (top < 10 && prev) return false;
            return prev;
          });
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Check initial state
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  // Prevent body scroll cleanly when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  // On non-home pages, always have a solid/blurred background for consistency
  const showBackground = !isHome || isScrolled || isMobileOpen;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
          showBackground
            ? "bg-paper/90 backdrop-blur-md border-b border-mist/80 shadow-xs"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative w-28 sm:w-36 h-10 sm:h-12 flex items-center">
              {/* Image logo for dark hero */}
              <Image
                src="/images/logo_transparent.png"
                alt="AMIBA"
                fill
                className={`object-contain object-left transition-opacity duration-300 ${showBackground ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                priority
                loading="eager"
              />
              {/* Text logo for light scrolled navbar */}
              <div className={`absolute inset-0 flex items-center transition-opacity duration-300 ${showBackground ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <span className="text-xl sm:text-2xl font-bold tracking-tight font-[var(--font-display)]">
                  <span className="text-signal-teal">A</span><span className="text-ink">MIBA</span>
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {mainNav.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    isActive
                      ? "text-signal-teal bg-signal-teal/10"
                      : isHome && !isScrolled
                      ? "text-white/80 hover:text-white hover:bg-white/10"
                      : "text-slate hover:text-ink hover:bg-mist/50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/faq"
              className={`text-sm transition-colors ${
                isHome && !isScrolled
                  ? "text-white/80 hover:text-white"
                  : "text-slate hover:text-ink"
              }`}
            >
              FAQ
            </Link>
            <Link
              href="/contact"
              className="btn-capsule btn-teal !py-2.5 !px-6 !text-sm"
            >
              Request a Quote
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className={`lg:hidden p-2.5 -mr-2 rounded-lg transition-colors ${
              isHome && !showBackground
                ? "text-white hover:bg-white/10"
                : "text-ink hover:bg-mist/50"
            }`}
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-paper/98 backdrop-blur-xl lg:hidden flex flex-col pt-20 pb-8 px-6 overflow-y-auto"
            style={{ height: "100dvh" }}
          >
            <div className="flex flex-col items-center justify-center flex-1 gap-6 my-auto">
              {mainNav.map((link, i) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileOpen(false)}
                      className={`text-2xl font-semibold font-[var(--font-display)] ${
                        isActive ? "text-signal-teal" : "text-ink"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: mainNav.length * 0.04 }}
              >
                <Link
                  href="/faq"
                  onClick={() => setIsMobileOpen(false)}
                  className="text-2xl font-semibold font-[var(--font-display)] text-ink"
                >
                  FAQ
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (mainNav.length + 1) * 0.04 }}
                className="mt-4 w-full max-w-xs flex justify-center"
              >
                <Link
                  href="/contact"
                  onClick={() => setIsMobileOpen(false)}
                  className="btn-capsule btn-teal w-full text-center"
                >
                  Request a Quote
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
