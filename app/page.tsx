import NavBar from "@/components/NavBar";
import ProjectCard, { type Project } from "@/components/ProjectCard";
import HeroProfile from "@/components/HeroProfile";
import TechIcon from "@/components/TechIcon";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";

const projects: Project[] = [
  {
    logo: "/projects/peermatch-logo.png",
    logoAlt: "PeerMatch logo",
    title: "PeerMatch",
    description:
      "Academic course project. A deployed full-stack peer-to-peer task marketplace for CIT-U students, featuring @cit.edu signup, role-based dashboards for clients, freelancers, and admins, real-time messaging, and production hosting on Vercel, Render, and Supabase.",
    tags: ["Next.js", "Express", "Supabase"],
    href: "https://peermatch-app.site",
  },
  {
    logo: "/projects/dpt-one-logo.png",
    logoAlt: "DPT ONE logo",
    squareLogo: true,
    title: "DPT ONE",
    description:
      "Built and shipped a full-stack e-commerce platform with 21 verified routes for a Cebu streetwear retail brand, covering the storefront, checkout, orders, profile, and admin dashboard, with Supabase-backed auth, cart, order management, and COD plus QR Ph payment flows.",
    tags: ["Next.js", "Supabase", "TypeScript"],
    href: "https://dptone.vercel.app",
  },
  {
    logo: "/projects/tablebite-logo.png",
    logoAlt: "TableBite logo",
    title: "TableBite",
    description:
      "Deployed a full-stack dine-in QR ordering system to production on Vercel with MySQL. Customers scan a table QR to browse the menu, cart, and checkout, while staff manage orders through an admin dashboard at tablebite.vercel.app.",
    tags: ["Next.js", "MySQL", "TypeScript"],
    href: "https://tablebite.vercel.app/admin/login",
  },
];

const skills = [
  {
    title: "Frontend",
    items: [
      { slug: "nextjs", label: "Next.js" },
      { slug: "react", label: "React" },
      { slug: "typescript", label: "TypeScript" },
      { slug: "tailwindcss", label: "Tailwind CSS" },
      { slug: "radixui", label: "shadcn/ui & Radix UI" },
      { slug: "responsive", label: "Responsive Web Design" },
    ],
  },
  {
    title: "Backend & Data",
    items: [
      { slug: "nodejs", label: "Node.js" },
      { slug: "express", label: "Express" },
      { slug: "postgresql", label: "PostgreSQL" },
      { slug: "supabase", label: "Supabase" },
      { slug: "mysql", label: "MySQL" },
      { slug: "socketio", label: "Socket.IO" },
    ],
  },
  {
    title: "Tools & Systems",
    items: [
      { slug: "git", label: "Git" },
      { slug: "github", label: "GitHub" },
      { slug: "vercel", label: "Vercel" },
      { slug: "render", label: "Render" },
      { slug: "vscode", label: "Visual Studio Code" },
      { slug: "playwright", label: "Playwright" },
    ],
  },
];

const email = "christianpaulamorin28@gmail.com";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/devamorin" },
];

export default function Home() {
  return (
    <>
      <NavBar />

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

      <main className="flex-grow w-full max-w-container-max mx-auto px-6 md:px-8 pt-28 sm:pt-32 pb-20 sm:pb-24 flex flex-col gap-16 sm:gap-20 md:gap-24 lg:gap-section-gap">
        <section
          className="min-h-0 py-8 sm:py-12 lg:min-h-[819px] lg:py-0 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 relative"
          id="home"
        >
          <RevealGroup className="flex-1 flex flex-col gap-6 z-10">
            <RevealItem>
              <p className="font-body-lg text-lg sm:text-xl md:text-2xl font-semibold tracking-[0.01em] text-primary">
                Christian Paul A. Amorin
              </p>
            </RevealItem>
            <RevealItem>
              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface leading-tight">
                Aspiring Full-Stack <br className="hidden md:block" />
                Developer
              </h1>
            </RevealItem>
            <RevealItem>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
                Computer Engineering student at Cebu Institute of Technology,
                University. I build and deploy full-stack web applications, from
                campus marketplaces and e-commerce platforms to QR-based ordering
                systems, and bring hands-on embedded systems experience from
                Arduino and sensor-driven hardware projects.
              </p>
            </RevealItem>
            <RevealItem>
              <div className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-4">
                <a
                  className="inline-flex items-center gap-2 font-code-sm text-code-sm text-primary hover:text-primary-container transition-colors group"
                  href="#projects"
                >
                  View Projects
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                    arrow_forward_ios
                  </span>
                </a>
                <a
                  className="inline-flex items-center gap-2 font-code-sm text-code-sm text-on-surface-variant hover:text-primary transition-colors max-w-full"
                  href={`mailto:${email}`}
                  aria-label="Email Christian Paul A. Amorin"
                >
                  <span className="material-symbols-outlined text-base">
                    mail
                  </span>
                  <span className="sm:hidden">Email</span>
                  <span className="hidden sm:inline break-all">{email}</span>
                </a>
              </div>
            </RevealItem>
          </RevealGroup>
          <HeroProfile />
        </section>

        <section
          className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start"
          id="about"
        >
          <Reveal direction="left" className="md:col-span-4">
            <h2 className="font-headline-md text-headline-md text-on-surface flex items-center gap-3 pt-2">
              <span className="w-8 h-px bg-primary" />
              About Me
            </h2>
          </Reveal>
          <RevealGroup className="md:col-span-8 flex flex-col gap-6 font-body-lg text-body-lg text-on-surface-variant">
            <RevealItem>
              <p>
                I am a Computer Engineering student at Cebu Institute of
                Technology, University (CIT-U), pursuing practical experience
                through On-the-Job Training and team-based software projects. My
                work spans the full stack: Next.js and React on the front end,
                Node.js and Express or API routes on the back end, and
                PostgreSQL or MySQL for persistence.
              </p>
            </RevealItem>
            <RevealItem>
              <p>
                Beyond web development, I have built embedded systems including
                an Arduino line-following robot and a smart car parking monitor
                using IR sensors and digital logic. I graduated Senior High with
                academic excellence (Silver Award, 96% GPA, STEM strand) and am
                fluent in English and Filipino, with a stable remote setup and
                flexible availability.
              </p>
            </RevealItem>
          </RevealGroup>
        </section>

        <section className="flex flex-col gap-12" id="projects">
          <Reveal
            direction="up"
            className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-end"
          >
            <h2 className="font-headline-md text-headline-md text-on-surface flex items-center gap-3 pt-2">
              <span className="w-8 h-px bg-primary" />
              Selected Works
            </h2>
            <a
              className="font-code-sm text-code-sm text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1 group"
              href="https://github.com/devamorin"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Archive{" "}
              <span className="material-symbols-outlined text-[16px] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                north_east
              </span>
            </a>
          </Reveal>
          <RevealGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </RevealGroup>
        </section>

        <section className="flex flex-col gap-12 relative" id="skills">
          <div className="absolute right-0 top-0 w-64 h-64 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
          <Reveal direction="left">
            <h2 className="font-headline-md text-headline-md text-on-surface flex items-center gap-3 pt-2">
              <span className="w-8 h-px bg-primary" />
              Technical Capabilities
            </h2>
          </Reveal>
          <RevealGroup className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((group) => (
              <RevealItem key={group.title}>
                <div className="flex flex-col gap-6">
                  <h3 className="font-code-sm text-code-sm text-primary uppercase tracking-widest border-b border-white/10 pb-2">
                    {group.title}
                  </h3>
                  <ul className="flex flex-col gap-4 font-body-lg text-on-surface-variant">
                    {group.items.map((item) => (
                      <li
                        key={item.slug}
                        className="flex items-center gap-3 group/skill hover:text-on-surface transition-colors"
                      >
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-white/5 border border-white/10 group-hover/skill:border-primary/30 transition-[border-color,transform] duration-300 group-hover/skill:scale-110">
                          <TechIcon slug={item.slug} size={18} />
                        </span>
                        {item.label}
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </section>
      </main>

      <footer
        className="w-full py-12 px-6 md:px-8 bg-surface-dim border-t border-white/5"
        id="contact"
      >
        <div className="max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-label-caps text-[11px] sm:text-label-caps text-on-surface text-center md:text-left">
            © 2026 devamorin · COMPUTER ENGINEERING · CIT-U
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <a
              className="font-code-sm text-code-sm text-on-surface hover:text-tertiary transition-colors flex items-center gap-2 max-w-full"
              href={`mailto:${email}`}
              aria-label="Email Christian Paul A. Amorin"
            >
              <span className="material-symbols-outlined text-base shrink-0">
                mail
              </span>
              <span className="break-all">{email}</span>
            </a>
            <div className="flex gap-6">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  className="font-code-sm text-code-sm text-on-surface-variant hover:text-tertiary hover:-translate-y-0.5 transition-all duration-200"
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
