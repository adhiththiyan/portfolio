export type AccentKey = "blue" | "emerald" | "orange" | "purple";

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
    label: "text-sky-300/90",
    glow: "bg-sky-400/[0.07]",
    mesh: "from-sky-500/[0.08] via-transparent to-cyan-500/[0.04]",
    bar: "from-sky-400/50 to-sky-400/0",
    dot: "bg-sky-400/60",
    iconRing:
      "border-sky-400/20 bg-sky-400/[0.06] text-sky-300/95 shadow-[0_0_28px_-10px_rgba(56,189,248,0.45)]",
    chipHover:
      "hover:border-sky-400/25 hover:bg-sky-500/[0.04] hover:shadow-[0_0_20px_-8px_rgba(56,189,248,0.25)]",
  },
  emerald: {
    label: "text-emerald-300/90",
    glow: "bg-emerald-400/[0.07]",
    mesh: "from-emerald-500/[0.08] via-transparent to-teal-500/[0.04]",
    bar: "from-emerald-400/50 to-emerald-400/0",
    dot: "bg-emerald-400/60",
    iconRing:
      "border-emerald-400/20 bg-emerald-400/[0.06] text-emerald-300/95 shadow-[0_0_28px_-10px_rgba(52,211,153,0.4)]",
    chipHover:
      "hover:border-emerald-400/25 hover:bg-emerald-500/[0.04] hover:shadow-[0_0_20px_-8px_rgba(52,211,153,0.22)]",
  },
  orange: {
    label: "text-amber-300/90",
    glow: "bg-amber-400/[0.07]",
    mesh: "from-amber-500/[0.07] via-transparent to-orange-500/[0.04]",
    bar: "from-amber-400/50 to-amber-400/0",
    dot: "bg-amber-400/60",
    iconRing:
      "border-amber-400/20 bg-amber-400/[0.06] text-amber-300/95 shadow-[0_0_28px_-10px_rgba(251,191,36,0.35)]",
    chipHover:
      "hover:border-amber-400/25 hover:bg-amber-500/[0.04] hover:shadow-[0_0_20px_-8px_rgba(251,191,36,0.2)]",
  },
  purple: {
    label: "text-violet-300/90",
    glow: "bg-violet-400/[0.07]",
    mesh: "from-violet-500/[0.08] via-transparent to-fuchsia-500/[0.04]",
    bar: "from-violet-400/50 to-violet-400/0",
    dot: "bg-violet-400/60",
    iconRing:
      "border-violet-400/20 bg-violet-400/[0.06] text-violet-300/95 shadow-[0_0_28px_-10px_rgba(167,139,250,0.4)]",
    chipHover:
      "hover:border-violet-400/25 hover:bg-violet-500/[0.04] hover:shadow-[0_0_20px_-8px_rgba(167,139,250,0.22)]",
  },
};
