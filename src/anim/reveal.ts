// src/anim/reveal.ts
export const revealContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.25, delayChildren: 0.10 } },
};

export const revealItem = {
  hidden: { opacity: 0, y: 20, pointerEvents: "none" },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", mass: 0.8, damping: 20, stiffness: 80 },
    transitionEnd: { pointerEvents: "auto" },
  },
};

export const revealFromRight = {
    hidden: { opacity: 0, x: 28 },
    show: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", mass: 0.2, damping: 18, stiffness: 80 },
    },
  };
