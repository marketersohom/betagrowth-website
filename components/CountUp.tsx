"use client";

import { useEffect, useRef } from "react";
import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";

interface CountUpProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

export default function CountUp({
  end,
  duration = 1.2,
  prefix = "",
  suffix = "",
  decimals = 0,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) =>
    decimals > 0 ? latest.toFixed(decimals) : Math.round(latest).toString()
  );

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(count, end, {
      duration,
      ease: "easeOut",
    });
    return () => controls.stop();
  }, [isInView, end, duration, count]);

  return (
    <span ref={ref}>
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}
