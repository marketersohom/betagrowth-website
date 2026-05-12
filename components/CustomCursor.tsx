"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Scoped custom cursor: appears ONLY when hovering an element marked
// data-cursor="cta". Default OS cursor everywhere else.
// Hidden on touch devices.
export default function CustomCursor() {
  const [isTouch, setIsTouch] = useState(false);
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    setIsTouch("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  useEffect(() => {
    if (isTouch) return;

    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target?.closest('[data-cursor="cta"]')) {
        setIsHovering(true);
      }
    };
    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      // Only flip off when leaving the CTA boundary (not when moving between children)
      const related = e.relatedTarget as HTMLElement | null;
      if (
        target?.closest('[data-cursor="cta"]') &&
        !related?.closest?.('[data-cursor="cta"]')
      ) {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, [isTouch]);

  if (isTouch || !isHovering) return null;

  return (
    <motion.div
      animate={{
        x: position.x - 8,
        y: position.y - 8,
        scale: isClicking ? 0.75 : 1,
      }}
      transition={{
        type: "tween",
        duration: 0.1,
        ease: "easeOut",
      }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: 16,
        height: 16,
        borderRadius: "50%",
        border: "1.5px solid #c9a84c",
        pointerEvents: "none",
        zIndex: 9999,
        mixBlendMode: "difference",
      }}
    />
  );
}
