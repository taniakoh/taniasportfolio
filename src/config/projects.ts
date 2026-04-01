import type { IconType } from "react-icons";
import SachLogo from "@/assets/sachlogo.png";
import { BsTranslate } from "react-icons/bs";
import upsutd from "@/assets/upsutd.png";
import lumify from "@/assets/lumify.png";
import lumifylogo from "@/assets/lumifylogo.png";
import { SiKaggle } from "react-icons/si";
import TshLogo from "@/assets/tshlogo.png";
import { IoIosPhonePortrait } from "react-icons/io";
import tinyfishLogo from "@/assets/tinyfish_ai_logo.jpeg";
export interface Project {
  title: string;
  description: string;
  logo: string | IconType| null;
  logoAlt: string;
  logoBg?: string;
  href?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    title: "Duby — Workforce Management Application",
    description: "Full-stack platform with an AI/ML optimisation algorithm that reduced manual rostering time by over 3 hours per cycle.",
    logo: SachLogo,
    logoAlt: "St Andrew's Community Hospital",
    href: "/wip",
  },
  {
    title: "Code-Switching Data Translation Pipeline",
    description: "Open-source multilingual code-switching data translation pipeline to support natural language inference (NLI) research",
    logo: BsTranslate,
    logoAlt: "Code-Switching Data Translation Pipeline",
    href: "https://github.com/taniakoh/code-switching-agent",
    
  },
  {
    title: "LevelUpNow! Hackathon (3rd Place Winner)",
    description: "Phygital (physical + digital) gaming platform designed to enhance audience engagement at live events hosted at SCAPE. Built during the Level Up Now! Hackathon 2026, a youth-focused innovation sprint tackling real-world challenges in the gaming industry.",
    logo: null,
    logoAlt: "Level Up Now Hackathon project",
    href: "https://www.scape-pulse.space/",
  },
  {
    title: "OpenVoyage — AI Travel Booking",
    description: "AI-native travel planning and booking prototype built for the TinyFish SG Hackathon 2026. Uses OpenAI for intent parsing and TinyFish for agentic web scouting to prep a cinematic mission-control booking flow.",
    logo: tinyfishLogo,
    logoAlt: "TinyFish AI",
    href: "https://open-voyage.vercel.app",
  },
  {
    title: "Automated Training Management Application",
    description: "Autonomous HR monitoring dashboard implemented with unit testing",
    logo: TshLogo,
    logoAlt: "TSH Group Singapore",
    href: "https://github.com/ashley-koh/tsh-dashboard",
  },
{
    title: "Hate Speech Detection — ML Pipeline",
    description: "Stacked ensemble model (CatBoost, LogReg, Decision Tree) using TF-IDF and Dask. Ranked 9th/36 on Kaggle with an F1-score of 0.71293.",
    logo: SiKaggle, // Note: passing the component directly
    logoAlt: "Hate Speech Detection ML Project",
    href: "https://github.com/taniakoh/hate-speech-classification-ml",
  },
  {
    title: "UPSUTD — Upcycling Marketplace",
    description: "Android mobile app built in Java with Firebase backend and AI-powered image analysis for automatic product categorization.",
    logo: IoIosPhonePortrait, 
    logoAlt: "UPSUTD Android App",
    href: "/wip",
  },
  {
    title: "Lorax' Luscious Hair",
    description: "Application Concept mockup for Loreal Brandstorm 2024.",
    logo: null, 
    logoAlt: "Lorax' Luscious Hair",
    href: "https://youtu.be/U3bvE6dR2rQ",
  },
  {
    title: "Lumify - Smart Urban Oasis",
    description: "Multi-disciplinary IoT project building a smart light-up chair system with interactive LED screens to solve infrastructure issues at Changi Business Park",
    logo: lumifylogo,
    logoBg: "#E0E0E0",
    logoAlt: "Lumify",
    href: "https://youtu.be/ugBGHmYfUWc",
  },
];
