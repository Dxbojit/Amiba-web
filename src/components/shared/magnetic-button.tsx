"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { useReducedMotion } from "@/lib/use-reduced-motion";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  type?: "button" | "submit" | "reset";
}

export function MagneticButton({
  children,
  className = "",
  onClick,
  href,
  type = "button",
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (prefersReducedMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (e.clientX - centerX) * 0.15;
    const deltaY = (e.clientY - centerY) * 0.15;
    x.set(Math.max(-8, Math.min(8, deltaX)));
    y.set(Math.max(-8, Math.min(8, deltaY)));
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const motionProps = prefersReducedMotion
    ? {}
    : {
        style: { x: springX, y: springY },
        whileTap: { scale: 0.96 },
      };

  if (href) {
    return (
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        {...motionProps}
      >
        <a href={href} className={`btn-capsule ${className}`}>
          {children}
        </a>
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...motionProps}
    >
      <button type={type} onClick={onClick} className={`btn-capsule ${className}`}>
        {children}
      </button>
    </motion.div>
  );
}
