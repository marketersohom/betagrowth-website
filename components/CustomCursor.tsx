"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type CursorMode = "idle" | "hover" | "cta";

export default function CustomCursor() {
  const [mode, setMode] = useState<CursorMode>("idle");
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const ringX = useSpring(mouseX, { damping: 20, stiffness: 150, mass: 0.8 });
  const ringY = useSpring(mouseY, { damping: 20, stiffness: 150, mass: 0.8 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const enterFor = (next: CursorMode) => () => setMode(next);
    const handleLeave = () => setMode("idle");

    window.addEventListener("mousemove", handleMove);

    const bind = () => {
      const ctaTargets = document.querySelectorAll("[data-cursor='cta']");
      ctaTargets.forEach((el) => {
        el.addEventListener("mouseenter", enterFor("cta"));
        el.addEventListener("mouseleave", handleLeave);
      });
      const hoverTargets = document.querySelectorAll(
        "a:not([data-cursor='cta']), button:not([data-cursor='cta']), [role='button']:not([data-cursor='cta']), input, textarea, select, label, [data-cursor='hover']"
      );
      hoverTargets.forEach((el) => {
        el.addEventListener("mouseenter", enterFor("hover"));
        el.addEventListener("mouseleave", handleLeave);
      });
    };
    bind();

    const observer = new MutationObserver(() => bind());
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", handleMove);
      observer.disconnect();
    };
  }, [mouseX, mouseY, isVisible]);

  // Size + opacity per mode. CTA = small, tight 14px ring. Hover = 44px. Idle = 32px.
  const ringSize = mode === "cta" ? 14 : mode === "hover" ? 44 : 32;
  const ringOpacity = !isVisible ? 0 : mode === "cta" ? 1 : mode === "hover" ? 0.8 : 0.4;
  const dotSize = mode === "cta" ? 0 : mode === "hover" ? 10 : 6;

  return (
    <>
      {/* Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible && dotSize > 0 ? 1 : 0,
        }}
        animate={{
          width: dotSize,
          height: dotSize,
          backgroundColor: "#c9a84c",
        }}
        transition={{ duration: 0.15 }}
      />

      {/* Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9997] rounded-full border border-gold"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          borderColor: "#c9a84c",
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          width: ringSize,
          height: ringSize,
          opacity: ringOpacity,
        }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
}
