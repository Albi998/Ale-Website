import type { Variants } from "framer-motion";

export const revealContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

export const revealItem: Variants = {
  hidden: { opacity: 0, y: 20, pointerEvents: "none" },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", mass: 0.5, damping: 18, stiffness: 120 } as const,
    transitionEnd: { pointerEvents: "auto" },
  },
};

export const revealFromRight: Variants = {
  hidden: { opacity: 0, x: 24 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", mass: 0.5, damping: 18, stiffness: 120 } as const,
  },
};
