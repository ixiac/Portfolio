/**
 * Types
 */
import type {
  ExperienceType,
  LinksType,
  ProjectType,
  ServiceType,
  StatsType,
  TestimonialsType,
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
  Globe,
  Home,
  Instagram,
  Layers,
  Linkedin,
  Mail,
  MessageCircle,
  Palette,
  Rocket,
  Settings,
  Smartphone,
  Twitter,
  User,
  Youtube,
} from "lucide-react";

const navLinks: LinksType[] = [
  { label: "Home", link: "#hero", icon: Home },
  {
    label: "Projects",
    link: "#projects",
    icon: Briefcase,
  },
  { label: "About", link: "#about", icon: User },
  {
    label: "Services",
    link: "#services",
    icon: Settings,
  },
  { label: "Resume", link: "#resume", icon: FileText },
  {
    label: "Reviews",
    link: "#testimonials",
    icon: MessageCircle,
  },
  { label: "Contact", link: "#contact", icon: Mail },
];

const socialLinks: LinksType[] = [
  {
    icon: Facebook,
    label: "Facebook",
    link: "/#",
  },
  {
    icon: Mail,
    label: "Gmail",
    link: "/#",
  },
  {
    icon: Github,
    label: "GitHub",
    link: "https://github.com/ixiac",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    link: "/#",
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
    imgSrc: "/tools/figma.svg",
  },
  {
    label: "HTML5",
    imgSrc: "/tools/html5.svg",
  },
  {
    label: "CSS3",
    imgSrc: "/tools/css3.svg",
  },
  {
    label: "Tailwind CSS",
    imgSrc: "/tools/tailwindcss.svg",
  },
  {
    label: "Bootstrap",
    imgSrc: "/tools/bootstrap.svg",
  },
  {
    label: "React",
    imgSrc: "/tools/react.svg",
  },
  {
    label: "JavaScript",
    imgSrc: "/tools/javascript.svg",
  },
  {
    label: "Node.js",
    imgSrc: "/tools/nodejs.svg",
  },
  {
    label: "PHP",
    imgSrc: "/tools/php.svg",
  },
  {
    label: "Laravel",
    imgSrc: "/tools/laravel.svg",
  },
  {
    label: "MySQL",
    imgSrc: "/tools/mysql.svg",
  },
  {
    label: "Firebase",
    imgSrc: "/tools/firebase.svg",
  },
  {
    label: "PostgreSQL",
    imgSrc: "/tools/postgre.svg",
  },
];

const services: ServiceType[] = [
  {
    title: "Brand Identity",
    desc: "I craft modern visual identities that help brands stand out through strong typography, colors, and minimal design.",
    projects: "32 Projects",
    icon: <Palette className="h-6 w-6 text-green-400" />,
  },
  {
    title: "UI/UX Design",
    desc: "Designing clean, intuitive, and user-friendly interfaces that improve user experience and boost conversions.",
    projects: "47 Projects",
    icon: <Layers className="h-6 w-6 text-green-400" />,
  },
  {
    title: "Web Development",
    desc: "Building high-performance, SEO-friendly websites using Next.js, Tailwind, and modern web technologies.",
    projects: "58 Projects",
    icon: <Globe className="h-6 w-6 text-green-400" />,
  },
  {
    title: "Mobile App Design",
    desc: "Creating pixel-perfect app interfaces optimized for both iOS and Android devices with smooth usability.",
    projects: "21 Projects",
    icon: <Smartphone className="h-6 w-6 text-green-400" />,
  },
  {
    title: "Product Launch Strategy",
    desc: "Helping startups prepare their digital products for launch with design systems, marketing pages, and assets.",
    projects: "15 Projects",
    icon: <Rocket className="h-6 w-6 text-green-400" />,
  },
];

const statsData: StatsType[] = [
  {
    number: "30+",
    label: "Happy Clients",
  },
  {
    number: "05+",
    label: "Years Of Experience",
  },
  {
    number: "50+",
    label: "Projects Done",
  },
];

const testimonials: TestimonialsType[] = [
  {
    name: "Alex Tomato",
    role: "Brand Manager at Instant Design",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Working with David was an absolute pleasure. His attention to detail, creative insights, and ability to translate complex ideas into stunning visuals truly set him apart. He consistently went above and beyond to ensure the project exceeded expectations.",
    link: "#",
  },
  {
    name: "Sara Bloom",
    role: "Founder at Bloom Agency",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "David brought my brand vision to life better than I could have imagined. He is not only professional and highly skilled but also incredibly responsive and collaborative. Every aspect of the project was handled with precision and creativity.",
    link: "#",
  },
  {
    name: "John Park",
    role: "CEO at PixelFlow",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    text: "From UI/UX design to front-end implementation, David handled every detail flawlessly. His problem-solving skills, innovative approach, and dedication made the entire process smooth and enjoyable. I would highly recommend him for any design-driven project.",
    link: "#",
  },
];

export {
  socialLinks,
  projectsData,
  education,
  experience,
  tools,
  services,
  navLinks,
  statsData,
  testimonials,
};
