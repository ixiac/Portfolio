/**
 * Types
 */
import type {
  ExperienceType,
  LinksType,
  ProjectType,
  ToolsType,
} from "@/types/index.ts";

/**
 * Assets
 */
import {
  Briefcase,
  Facebook,
  FileText,
  Github,
  Home,
  Linkedin,
  Mail,
  User,
} from "lucide-react";

const navLinks: LinksType[] = [
  { label: "Home", link: "#hero", icon: Home },
  { label: "About", link: "#about", icon: User },
  {
    label: "Projects",
    link: "#projects",
    icon: Briefcase,
  },
  { label: "Resume", link: "#resume", icon: FileText },
  { label: "Contact", link: "#contact", icon: Mail },
];

const socialLinks: LinksType[] = [
  {
    icon: Facebook,
    label: "Facebook",
    link: "https://www.facebook.com/bien.qm/",
  },
  {
    icon: Mail,
    label: "Gmail",
    link: "mailto:bienmarlon.qm@gmail.com",
  },
  {
    icon: Github,
    label: "GitHub",
    link: "https://github.com/ixiac",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/bien-marlon-maranan",
  },
];

const projectsData: ProjectType[] = [
  {
    imgSrc: "/Projects/KKCA.png",
    title: "Full-stack Web Application",
    tags: ["PHP", "Laravel", "Bootstrap", "MySQL"],
    descTitle: "Full-stack Event Management System",
    desc: "Built as an appointment and event management platform for KKCA and BPC, designed to simplify scheduling, organize events, and connect school and church communities.",
    projectLink: "https://kkcabpc.events/",
  },
  {
    imgSrc: "/Projects/Clique AI.png",
    title: "UI/UX Design",
    tags: ["Figma", "Prototyping"],
    descTitle: "UI/UX Design",
    desc: "A modern UI/UX design project that focuses on creating intuitive and visually appealing user interfaces for web and mobile applications.",
    projectLink: "https://github.com/ixiac",
  },
  {
    imgSrc: "/Projects/Nanod's.png",
    title: "Mobile Application",
    tags: ["Dart", "Flutter"],
    descTitle: "Mobile Kiosk App",
    desc: "A self-service mobile kiosk app built for a specific restaurant to enhance customer experience, reduce wait times, and improve order efficiency.",
    projectLink: "https://github.com/ixiac",
  },
  {
    imgSrc: "/Projects/ABCaptains.png",
    title: "Full stack music app",
    tags: ["PHP", "MySQL", "Bootstrap"],
    descTitle: "Inventory Management System",
    desc: "A web application developed for barangay associations to manage inventories, record transactions, and generate reports, enhancing operational workflow and data accuracy.",
    projectLink: "https://abcaptains.com/",
  },
];

const education: ExperienceType[] = [
  {
    year: "2021 – 2025",
    title: "College",
    institute: "Batangas State University",
    desc: "Graduated in College of Informatics and Computing Sciences - Information Technology.",
  },
  {
    year: "2019 – 2021",
    title: "Senior High School",
    institute: "University of Batangas",
    desc: "Graduated in TVL- Information & Communications Technology (ICT) Strand.",
  },
  {
    year: "2015 – 2019",
    title: "Junior High School",
    institute: "University of Batangas",
    desc: "Where I developed interests in IT and programming.",
  },
];

const experience: ExperienceType[] = [
  {
    year: "Aug 2025 - Present",
    title: "Freelance Developer",
    institute: "Freelance/Remote Work",
    desc: "Built and maintained full-stack web, mobile, and system applications with data-driven insights to improve system performance, usability, and overall efficiency for clients.",
  },
  {
    year: "Feb - May 2025",
    title: "IT Intern (Developer)",
    institute: "Batangas State University",
    desc: "Team Lead Intern – Assisted in developing a University Portal and Graduate Tracer, handling front- and back-end tasks using PHP Laravel, PostgreSQL, Bootstrap, and Vue.js.",
  },
];

const tools: ToolsType[] = [
  {
    label: "Figma",
    iconName: "figma",
  },
  {
    label: "HTML5",
    iconName: "html5",
  },
  {
    label: "CSS3",
    iconName: "css3",
  },
  {
    label: "Tailwind CSS",
    iconName: "tailwindcss",
  },
  {
    label: "Bootstrap",
    iconName: "bootstrap5",
  },
  {
    label: "React",
    iconName: "react",
  },
  {
    label: "TypeScript",
    iconName: "typescript",
  },
  {
    label: "JavaScript",
    iconName: "js",
  },
  {
    label: "Node.js",
    iconName: "nodejs",
  },
  {
    label: "PHP",
    iconName: "php",
  },
  {
    label: "Laravel",
    iconName: "laravel",
  },
  {
    label: "Dart",
    iconName: "dart",
  },
  {
    label: "Flutter",
    iconName: "flutter",
  },
  {
    label: "MySQL",
    iconName: "mysql",
  },
  {
    label: "Firebase",
    iconName: "firebase",
  },
  {
    label: "PostgreSQL",
    iconName: "postgresql",
  },
];

export { socialLinks, projectsData, education, experience, tools, navLinks };
