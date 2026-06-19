"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";

const variants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function HeroProfile() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={reduceMotion ? { hidden: { opacity: 0 }, visible: { opacity: 1 } } : variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="flex-1 relative w-full h-[380px] sm:h-[440px] lg:h-[600px] flex justify-center items-center pb-8"
    >
      <div className="absolute left-1/2 top-1/2 h-[260px] w-[260px] sm:h-[320px] sm:w-[320px] lg:h-[440px] lg:w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[90px] pointer-events-none" />
      <div className="absolute right-[18%] top-[22%] h-28 w-28 sm:h-40 sm:w-40 rounded-full bg-tertiary/10 blur-[80px] pointer-events-none" />
      <div className="absolute left-[20%] bottom-[20%] h-24 w-24 sm:h-32 sm:w-32 rounded-full bg-primary-container/15 blur-[70px] pointer-events-none" />

      <Image
        src="/hero-workstation.png"
        alt=""
        aria-hidden
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-contain opacity-[0.18] blur-[2px] scale-110 pointer-events-none select-none"
      />

      <div className="animate-float relative z-10">
        <div className="absolute -top-3 -left-3 h-5 w-5 sm:h-7 sm:w-7 border-t-2 border-l-2 border-primary/50 rounded-tl-md" />
        <div className="absolute -bottom-3 -right-3 h-5 w-5 sm:h-7 sm:w-7 border-b-2 border-r-2 border-primary/50 rounded-br-md" />

        <div className="rounded-2xl bg-gradient-to-br from-primary/40 via-tertiary/20 to-transparent p-[1.5px] shadow-[0_0_60px_rgba(221,183,255,0.18)]">
          <div className="relative w-[220px] sm:w-[260px] md:w-[300px] lg:w-[360px] aspect-[4/5] rounded-2xl overflow-hidden glass-panel">
            <Image
              src="/profile/christian-paul-amorin.png"
              alt="Christian Paul A. Amorin"
              fill
              priority
              sizes="360px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-20 whitespace-nowrap rounded-full border border-white/10 bg-surface-container/90 px-4 py-1.5 backdrop-blur-md shadow-lg">
          <span className="font-code-sm text-[12px] text-on-surface-variant flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-tertiary" />
            Open to OJT
          </span>
        </div>
      </div>
    </motion.div>
  );
}
