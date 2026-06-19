"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";

export type Project = {
  logo: string;
  logoAlt: string;
  squareLogo?: boolean;
  title: string;
  description: string;
  tags: string[];
  href: string;
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const cardVariantsReduced: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function ProjectCard({ project }: { project: Project }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      variants={reduceMotion ? cardVariantsReduced : cardVariants}
      whileHover={reduceMotion ? undefined : { y: -6, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className="glass-panel rounded-xl p-6 flex flex-col gap-6 group hover:border-primary/30 hover:shadow-[0_0_30px_rgba(221,183,255,0.12)] transition-[border-color,box-shadow] duration-300 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="flex justify-between items-center">
        <div className="h-10 w-[140px] flex items-center shrink-0">
          {project.squareLogo ? (
            <Image
              src={project.logo}
              alt={project.logoAlt}
              width={32}
              height={32}
              className="h-8 w-8 shrink-0 rounded-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <Image
              src={project.logo}
              alt={project.logoAlt}
              width={140}
              height={40}
              className="h-8 w-auto max-w-[140px] object-contain object-left transition-transform duration-300 group-hover:scale-105"
            />
          )}
        </div>
        <a
          className="text-on-surface-variant hover:text-primary transition-colors"
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${project.title}`}
        >
          <span className="material-symbols-outlined transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            open_in_new
          </span>
        </a>
      </div>
      <div className="flex flex-col gap-2 flex-grow">
        <h3 className="font-headline-md text-xl font-semibold text-on-surface group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="font-body-lg text-sm text-on-surface-variant line-clamp-3">
          {project.description}
        </p>
      </div>
      <div className="flex flex-wrap gap-2 mt-auto pt-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="font-code-sm text-[11px] text-primary bg-primary/10 border border-primary/20 px-2 py-1 rounded"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
