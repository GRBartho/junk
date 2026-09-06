/**
 * site.ts
 * -----------------------------------------------------------------------------
 * All the copy and data that fills the portfolio, in one editable place.
 *
 * The page in App.tsx is intentionally "dumb" – it just wires these objects
 * into the section components. To update the portfolio (new project, new job,
 * different bio) you only touch this file.
 *
 * The résumé/skills numbers below are placeholders carried over from the Figma
 * design – swap them for real content.
 */

import heroImage from "../assets/hero-retro.jpg";
import projectImage from "../assets/project-gmhut.png";
import type { Project } from "../components/ProjectCard/ProjectCard.types";
import type { Job } from "../components/JobCard/JobCard.types";
import type { Skill } from "../components/SkillMatrix/SkillMatrix.types";

/** Identity / contact details reused across the header, hero, contact and footer. */
export const profile = {
  brand: "Gabriel.Bartholomay",
  email: "gabrielbartholomay@gmail.com",
  githubUrl: "https://github.com/GRBartho",
  linkedinUrl: "https://www.linkedin.com/in/gabriel-bartholomay-a29347231/",
} as const;

/** Hero section content. */
export const hero = {
  eyebrow: "Available for work",
  headingBefore: "Building digital ",
  headingHighlight: "experiences",
  headingAfter: " that matter.",
  bio: "I’m Gabriel Bartholomay, a Computer Science senior at SVSU and Full-Stack Engineer building fast, accessible web apps with React, TypeScript, Node.js, and Python.",
  primaryCta: { label: "View Projects", href: "#projects" },
  secondaryCta: { label: "Get In Touch", href: "#contact" },
  imageSrc: heroImage,
  imageAlt:
    "A desk arrayed with retro computers, a Commodore, a Game Boy and cassette tapes, lit in pink and blue",
} as const;

/** Projects for the "Selected works" grid. */
export const projects: Project[] = [
  {
    title: "GM Hut",
    description:
      "Tabletop RPG campaign management tool for players and GMs. Build your world, track your party, and manage your campaigns with ease.",
    tags: ["React", "Node.js", "PostgreSQL"],
    imageSrc: projectImage,
    imageAlt: "Fantasy key art of an adventurer party — GM Hut",
    liveUrl: "https://gmhut.dev",
    repoUrl: profile.githubUrl,
  },
];

/** Technical Arsenal section: capability checklist + proficiency chart. */
export const expertise = {
  eyebrow: "Expertise",

  title: "Technical Skills",

  subtitle:
    "My experience spans frontend and backend development, database design, UI/UX, and full-stack application development. I focus on building responsive, maintainable, and user-centered software using modern development tools and practices.",

  capabilities: [
    "Full-Stack Development",
    "Responsive Web Design",
    "UI/UX Design",
    "Database Development",
  ],

  skills: [
    { label: "React", value: 90 },
    { label: "TypeScript", value: 88 },
    { label: "JavaScript", value: 90 },
    { label: "Python", value: 82 },
    { label: "C#", value: 80 },
    { label: "Java", value: 78 },
    { label: "SQL / PostgreSQL", value: 85 },
    { label: "UI/UX Design", value: 85 },
  ] satisfies Skill[],
} as const;

/** Work Experience section. */
export const jobs: Job[] = [
  {
    title: "Graduate Assistant — International Admissions",
    status: "Part-time",
    period: "2026 - Present",
    highlights: [
      "Provide technical and operational support for Slate CRM within International Admissions",
      "Help design, document, and improve admissions workflows and processes within Slate",
      "Assist with troubleshooting, portal support, communications, and other CRM-related needs",
    ],
  },

  {
    title: "Student Assistant — Office of International Programs",
    status: "Part-time",
    period: "2025 - 2026",
    highlights: [
      "Supported international student services through record management, scheduling, and administrative operations",
      "Managed professional communications and assisted students with questions, resources, and university processes",
      "Contributed to international student programming, orientation, and campus events",
    ],
  },

  {
    title: "UI/UX Designer & Front-End Developer — Suitable",
    status: "Contract",
    period: "2024 - 2025",
    highlights: [
      "Designed and implemented responsive website pages, menus, and user-facing features",
      "Built reusable React components while integrating new interfaces with existing systems",
      "Combined UI/UX design and front-end development to improve usability and visual consistency",
    ],
  },

  {
    title: "Back-End Developer Intern — Compass UOL",
    status: "Internship",
    period: "2023",
    highlights: [
      "Developed back-end applications using Java, Spring Boot, PostgreSQL, and MongoDB",
      "Worked with Git, Kanban, cybersecurity practices, and collaborative development workflows",
      "Coordinated tasks within an intern development team while completing project-based training",
    ],
  },

  {
    title: "Front-End Developer — Suitable",
    status: "Full-time",
    period: "2022 - 2023",
    highlights: [
      "Developed and maintained a restaurant management platform using React, TypeScript, and Django",
      "Led front-end development of the company's official website and implemented responsive interfaces",
      "Worked across the stack with PostgreSQL, Python, HTML, CSS, and agile development practices",
    ],
  },
];

/** Closing call-to-action. */
export const contact = {
  title: "Let’s build something amazing together",
  subtitle:
    "Currently open to new opportunities and interesting collaborations",
} as const;
