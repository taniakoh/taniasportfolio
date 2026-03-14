import TesselyLogo from "@/assets/Tessely.svg";
import InfineonLogo from "@/assets/Infineon-Logo.svg";
import NannyMoonLogo from "@/assets/nannymoon.png";
import mendisphereLogo from "@/assets/mendispherelogo.png";

export interface Experience {
  role: string;
  company: string;
  description: string;
  date: string;
  logo: string;
  logoAlt: string;
  logoDesktopHeight?: string; // defaults to "40px" if omitted
  href?: string;
}

export const experiences: Experience[] = [
  {
    role: "Full Stack Software Developer Intern",
    company: "Tessely AI",
    description:
      "Engineered full-stack web components for the Tessely B2B SaaS platform using React, TypeScript, Tailwind CSS, FastAPI, and Supabase, transforming process-mining data into interactive dashboard visuals for enterprise clients",
    date: "Oct 2026 - May 2026",
    logo: TesselyLogo,
    logoAlt: "Tessely",
    href: "https://tessely-app.vercel.app",
  },
  {
    role: "Full Stack Software Developer Intern",
    company: "Infineon Technologies",
    description:
      "Built full-stack CRM features and a UI test automation pipeline for Infineon's global sales operations, collaborating cross-functionally in an Agile Scrum team using C#, Python, Playwright, and Azure DevOps",
    date: "August 2024 - December 2024",
    logo: InfineonLogo,
    logoAlt: "Infineon",
    logoDesktopHeight: "24px",
    href: "/wip",
  },
  {
    role: "Software Engineering Intern (Automation & Integration)",
    company: "Nanny Moon",
    description:
      "Built and deployed custom WordPress features and automated integration pipelines connecting frontend workflows with CRM systems via APIs, boosting customer lead conversion by 30%",
    date: "May 2023 - January 2024",
    logo: NannyMoonLogo,
    logoAlt: "Nanny Moon",
    href: "/wip",
  },
  {
    role: "UX Engineer Volunteer",
    company: "Mendisphere, better.sg",
    description:
      "Designed and developed interfaces using Figma, React.js, Material UI, and TypeScript, integrating Firebase backend services to streamline grant and resource access for nonprofit mental health organisations",
    date: "October 2025 - March 2026",
    logo: mendisphereLogo,
    logoAlt: "Mendisphere",
    logoDesktopHeight: "16px",
    href: "https://github.com/bettersg/Mendisphere",
  },
];
