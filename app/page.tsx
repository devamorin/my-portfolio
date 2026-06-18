import Image from "next/image";

const projects = [
  {
    icon: "deployed_code",
    title: "Nexus OS Interface",
    description:
      "A high-performance web-based operating system interface designed for remote server management. Features real-time data visualization and a complex windowing system built entirely in the browser.",
    tags: ["React", "TypeScript", "WebGL"],
  },
  {
    icon: "hub",
    title: "FinTech Dashboard",
    description:
      "An enterprise-grade financial analytics dashboard. Implemented complex data grids, interactive charting using D3.js, and secure state management for handling sensitive transactional data.",
    tags: ["Vue 3", "D3.js", "Pinia"],
  },
  {
    icon: "api",
    title: "Design System Core",
    description:
      "Created and maintained a comprehensive open-source React component library used across multiple internal products. Focused on accessibility (WCAG AA), deep customizability, and exhaustive documentation.",
    tags: ["React", "Storybook", "Tailwind"],
  },
];

const skills = [
  {
    title: "Frontend",
    items: [
      "React & Next.js",
      "TypeScript & ES6+",
      "Vue & Nuxt",
      "Tailwind CSS & SASS",
      "WebGL & Three.js",
    ],
  },
  {
    title: "Backend & Data",
    items: [
      "Node.js & Express",
      "PostgreSQL & MongoDB",
      "GraphQL & REST APIs",
      "Redis Caching",
    ],
  },
  {
    title: "Tools & Systems",
    items: [
      "Git & CI/CD Pipelines",
      "Docker & Kubernetes",
      "AWS & Vercel",
      "Figma & Adobe CC",
    ],
  },
];

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
];

const footerLinks = ["GitHub", "LinkedIn", "Twitter", "Email"];

export default function Home() {
  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-container-max items-center px-6 md:px-8">
          <div className="flex flex-1 items-center">
            <a
              className="inline-flex items-center gap-2.5 text-[1.375rem] font-extrabold tracking-[-0.02em] text-on-surface"
              href="#"
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
                className="text-[15px] font-semibold uppercase tracking-[0.12em] leading-none text-on-surface-variant hover:text-primary transition-colors duration-300"
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-1 items-center justify-end">
            <a
              className="hidden md:inline-flex h-10 items-center justify-center px-6 text-[15px] font-semibold uppercase tracking-[0.12em] leading-none border border-white/10 rounded text-on-surface hover:border-primary hover:text-primary transition-all duration-300"
              href="#contact"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      <div className="fixed right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-6 items-center z-40">
        <div className="w-px h-16 bg-white/10 relative">
          <div className="absolute top-0 left-0 w-full h-1/3 bg-primary" />
        </div>
        <div className="flex flex-col gap-4 font-code-sm text-code-sm text-on-surface-variant opacity-50">
          <span>00</span>
          <span>01</span>
          <span>02</span>
          <span>03</span>
        </div>
        <div className="w-px h-16 bg-white/10 mt-2" />
        <div
          className="mt-4 writing-vertical-rl font-code-sm text-code-sm text-on-surface-variant flex items-center gap-2"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          <span className="material-symbols-outlined text-[16px]">
            expand_more
          </span>{" "}
          Scroll Down
        </div>
      </div>

      <main className="flex-grow w-full max-w-container-max mx-auto px-6 md:px-8 pt-32 pb-24 flex flex-col gap-section-gap">
        <section
          className="min-h-[819px] flex flex-col lg:flex-row items-center justify-between gap-12 relative"
          id="home"
        >
          <div className="flex-1 flex flex-col gap-6 z-10">
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface leading-tight">
              Senior Front-End <br className="hidden md:block" />
              Software Engineer
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
              Crafting modern, accessible, and secure web experiences. I build
              elegant interfaces, solve complex design challenges, and bring
              ideas to life through clean, scalable code.
            </p>
            <div className="mt-4 flex items-center gap-6">
              <a
                className="inline-flex items-center gap-2 font-code-sm text-code-sm text-primary hover:text-primary-container transition-colors group"
                href="#projects"
              >
                View Projects
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                  arrow_forward_ios
                </span>
              </a>
            </div>
          </div>
          <div className="flex-1 relative w-full h-[400px] lg:h-[600px] flex justify-center items-center">
            <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full pointer-events-none" />
            <Image
              className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_60px_rgba(221,183,255,0.12)] opacity-95 hover:opacity-100 transition-opacity duration-500"
              src="/hero-workstation.png"
              alt="A highly detailed 3D isometric illustration of a modern software developer workstation floating in a dark void. The scene features glowing computer monitors displaying colorful code syntax, a mechanical keyboard, a purple 3D geometric shape floating nearby. The aesthetic is cyber-modern, sleek, dark mode with neon purple and cyan accents."
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </section>

        <section
          className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start"
          id="about"
        >
          <div className="md:col-span-4">
            <h2 className="font-headline-md text-headline-md text-on-surface flex items-center gap-3">
              <span className="w-8 h-px bg-primary" />
              About Me
            </h2>
          </div>
          <div className="md:col-span-8 flex flex-col gap-6 font-body-lg text-body-lg text-on-surface-variant">
            <p>
              I am an engineer deeply passionate about the intersection of
              design and technology. My core focus is architecting front-end
              systems that are not only performant and scalable but also provide
              exceptional, intuitive user experiences.
            </p>
            <p>
              With a strong foundation in modern JavaScript frameworks and a keen
              eye for visual detail, I bridge the gap between complex backend
              logic and sleek user interfaces. I believe in writing code that is
              as elegant to read as the interfaces it powers.
            </p>
          </div>
        </section>

        <section className="flex flex-col gap-12" id="projects">
          <div className="flex justify-between items-end">
            <h2 className="font-headline-md text-headline-md text-on-surface flex items-center gap-3">
              <span className="w-8 h-px bg-primary" />
              Selected Works
            </h2>
            <a
              className="font-code-sm text-code-sm text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1"
              href="#"
            >
              View Archive{" "}
              <span className="material-symbols-outlined text-[16px]">
                north_east
              </span>
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.title}
                className="glass-panel rounded-xl p-6 flex flex-col gap-6 group hover:border-primary/30 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex justify-between items-start">
                  <span className="material-symbols-outlined text-3xl text-surface-variant group-hover:text-primary transition-colors">
                    {project.icon}
                  </span>
                  <a
                    className="text-on-surface-variant hover:text-primary transition-colors"
                    href="#"
                  >
                    <span className="material-symbols-outlined">
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
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-12 relative" id="skills">
          <div className="absolute right-0 top-0 w-64 h-64 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
          <h2 className="font-headline-md text-headline-md text-on-surface flex items-center gap-3">
            <span className="w-8 h-px bg-primary" />
            Technical Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((group) => (
              <div key={group.title} className="flex flex-col gap-6">
                <h3 className="font-code-sm text-code-sm text-primary uppercase tracking-widest border-b border-white/10 pb-2">
                  {group.title}
                </h3>
                <ul className="flex flex-col gap-4 font-body-lg text-on-surface-variant">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 hover:text-on-surface transition-colors"
                    >
                      <span className="material-symbols-outlined text-[18px] text-surface-variant">
                        check_circle
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer
        className="w-full py-12 px-8 flex flex-col md:flex-row justify-between items-center gap-stack-md bg-surface-dim border-t border-white/5"
        id="contact"
      >
        <div className="font-label-caps text-on-surface">
          © 2024 devamorin — ENGINEERED FOR PERFORMANCE
        </div>
        <div className="flex gap-6">
          {footerLinks.map((link) => (
            <a
              key={link}
              className="font-code-sm text-code-sm text-on-surface-variant hover:text-tertiary transition-colors scale-105 duration-200"
              href="#"
            >
              {link}
            </a>
          ))}
        </div>
      </footer>
    </>
  );
}
