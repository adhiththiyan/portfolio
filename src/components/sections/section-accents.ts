export type AccentKey = "blue" | "emerald" | "orange" | "purple";

/** Light theme: darker hues for WCAG-friendly contrast on pale cards. Dark: soft tints for depth on dark UI. */
export const SECTION_ACCENTS: Record<
  AccentKey,
  {
    label: string;
    glow: string;
    mesh: string;
    bar: string;
    dot: string;
    iconRing: string;
    chipHover: string;
  }
> = {
  blue: {
    label: "text-sky-900 dark:text-sky-300/90",
    glow: "bg-sky-600/[0.14] dark:bg-sky-400/[0.07]",
    mesh:
      "from-sky-600/[0.16] via-transparent to-cyan-700/[0.09] dark:from-sky-500/[0.08] dark:via-transparent dark:to-cyan-500/[0.04]",
    bar: "from-sky-800/75 to-sky-800/0 dark:from-sky-400/50 dark:to-sky-400/0",
    dot: "bg-sky-800 dark:bg-sky-400/60",
    iconRing:
      "border-sky-800/40 bg-sky-800/[0.08] text-sky-900 shadow-[0_0_20px_-10px_rgba(7,89,133,0.28)] dark:border-sky-400/20 dark:bg-sky-400/[0.06] dark:text-sky-300/95 dark:shadow-[0_0_28px_-10px_rgba(56,189,248,0.45)]",
    chipHover:
      "hover:border-sky-800/35 hover:bg-sky-800/[0.09] hover:shadow-[0_0_18px_-8px_rgba(7,89,133,0.18)] dark:hover:border-sky-400/25 dark:hover:bg-sky-500/[0.04] dark:hover:shadow-[0_0_20px_-8px_rgba(56,189,248,0.25)]",
  },
  emerald: {
    label: "text-emerald-900 dark:text-emerald-300/90",
    glow: "bg-emerald-600/[0.13] dark:bg-emerald-400/[0.07]",
    mesh:
      "from-emerald-700/[0.14] via-transparent to-teal-800/[0.08] dark:from-emerald-500/[0.08] dark:via-transparent dark:to-teal-500/[0.04]",
    bar: "from-emerald-900/78 to-emerald-900/0 dark:from-emerald-400/50 dark:to-emerald-400/0",
    dot: "bg-emerald-800 dark:bg-emerald-400/60",
    iconRing:
      "border-emerald-800/40 bg-emerald-800/[0.08] text-emerald-950 shadow-[0_0_20px_-10px_rgba(6,95,70,0.26)] dark:border-emerald-400/20 dark:bg-emerald-400/[0.06] dark:text-emerald-300/95 dark:shadow-[0_0_28px_-10px_rgba(52,211,153,0.4)]",
    chipHover:
      "hover:border-emerald-800/35 hover:bg-emerald-800/[0.09] hover:shadow-[0_0_18px_-8px_rgba(6,95,70,0.16)] dark:hover:border-emerald-400/25 dark:hover:bg-emerald-500/[0.04] dark:hover:shadow-[0_0_20px_-8px_rgba(52,211,153,0.22)]",
  },
  orange: {
    label: "text-amber-950 dark:text-amber-300/90",
    glow: "bg-amber-600/[0.12] dark:bg-amber-400/[0.07]",
    mesh:
      "from-amber-700/[0.14] via-transparent to-orange-800/[0.08] dark:from-amber-500/[0.07] dark:via-transparent dark:to-orange-500/[0.04]",
    bar: "from-amber-900/78 to-amber-900/0 dark:from-amber-400/50 dark:to-amber-400/0",
    dot: "bg-amber-800 dark:bg-amber-400/60",
    iconRing:
      "border-amber-900/38 bg-amber-900/[0.07] text-amber-950 shadow-[0_0_20px_-10px_rgba(146,64,14,0.22)] dark:border-amber-400/20 dark:bg-amber-400/[0.06] dark:text-amber-300/95 dark:shadow-[0_0_28px_-10px_rgba(251,191,36,0.35)]",
    chipHover:
      "hover:border-amber-900/32 hover:bg-amber-900/[0.08] hover:shadow-[0_0_18px_-8px_rgba(146,64,14,0.14)] dark:hover:border-amber-400/25 dark:hover:bg-amber-500/[0.04] dark:hover:shadow-[0_0_20px_-8px_rgba(251,191,36,0.2)]",
  },
  purple: {
    label: "text-violet-950 dark:text-violet-300/90",
    glow: "bg-violet-600/[0.13] dark:bg-violet-400/[0.07]",
    mesh:
      "from-violet-800/[0.14] via-transparent to-fuchsia-900/[0.08] dark:from-violet-500/[0.08] dark:via-transparent dark:to-fuchsia-500/[0.04]",
    bar: "from-violet-900/78 to-violet-900/0 dark:from-violet-400/50 dark:to-violet-400/0",
    dot: "bg-violet-800 dark:bg-violet-400/60",
    iconRing:
      "border-violet-900/40 bg-violet-900/[0.07] text-violet-950 shadow-[0_0_20px_-10px_rgba(91,33,182,0.22)] dark:border-violet-400/20 dark:bg-violet-400/[0.06] dark:text-violet-300/95 dark:shadow-[0_0_28px_-10px_rgba(167,139,250,0.4)]",
    chipHover:
      "hover:border-violet-900/35 hover:bg-violet-900/[0.08] hover:shadow-[0_0_18px_-8px_rgba(91,33,182,0.14)] dark:hover:border-violet-400/25 dark:hover:bg-violet-500/[0.04] dark:hover:shadow-[0_0_20px_-8px_rgba(167,139,250,0.22)]",
  },
};
