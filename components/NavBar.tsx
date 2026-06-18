"use client";

import { scrollToHash } from "@/lib/scroll";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
];

export default function NavBar() {
  const handleClick =
    (href: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      scrollToHash(href);
      history.replaceState(null, "", href === "#home" ? " " : href);
    };

  return (
    <nav className="fixed inset-x-0 top-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-container-max items-center px-6 md:px-8">
        <div className="flex flex-1 items-center">
          <a
            className="inline-flex items-center gap-2.5 text-[1.375rem] font-extrabold tracking-[-0.02em] text-on-surface transition-transform duration-300 hover:scale-[1.02]"
            href="#home"
            onClick={handleClick("#home")}
          >
            <span
              className="material-symbols-outlined text-primary !text-[1.5rem] !leading-none"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              terminal
            </span>
            <span className="leading-none">devamorin</span>
          </a>
        </div>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              className="nav-underline text-[15px] font-semibold uppercase tracking-[0.12em] leading-none text-on-surface-variant hover:text-primary transition-colors duration-300"
              href={link.href}
              onClick={handleClick(link.href)}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex flex-1 items-center justify-end">
          <a
            className="hidden md:inline-flex h-10 items-center justify-center px-6 text-[15px] font-semibold uppercase tracking-[0.12em] leading-none border border-white/10 rounded text-on-surface hover:border-primary hover:text-primary hover:-translate-y-0.5 transition-all duration-300"
            href="#contact"
            onClick={handleClick("#contact")}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
