import { AIIcon } from "@/components/icons/ai";
import { WebIcon } from "@/components/icons/web";
import { DevopsIcon } from "@/components/icons/devops";
import { DatabaseIcon } from "@/components/icons/database";
import { CodeIcon } from "@/components/icons/code";
import { MobileIcon } from "@/components/icons/mobile";

import { DiJsBadge, DiMysql, DiReact } from "react-icons/di";
import { SiTypescript, SiNextdotjs } from "react-icons/si";
import { TbBrandNodejs, TbBrandCpp } from "react-icons/tb";
import { FaDocker } from "react-icons/fa";
import { BiLogoTailwindCss } from "react-icons/bi";
import { IoLogoFirebase } from "react-icons/io5";
import { DiMongodb } from "react-icons/di";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

import cppBlogConfig from "@/config/cpp-blogs";
import { DSABlogConfigsType } from "@/types";
import jsBlogConfig from "@/config/javascript-blogs";
import { Project } from "@/app/page";

export const blogCategories = [
  {
    category: "Data Structure and Algorithm",
    icon: <CodeIcon className="h-10" />,
    href: "/blogs/dsa",
  },
  {
    category: "Web Development",
    icon: <WebIcon className="h-10" />,
    href: "/blogs/web-development",
  },
  {
    category: "App Development",
    icon: <MobileIcon className="h-10" />,
    href: "/blogs/app-development",
  },
  {
    category: "Artificial Intelligence",
    icon: <AIIcon className="h-10" />,
    href: "/blogs/ai",
  },
  {
    category: "Database",
    icon: <DatabaseIcon className="h-10" />,
    href: "/blogs/database",
  },
  {
    category: "DevOps",
    icon: <DevopsIcon className="h-10" />,
    href: "/blogs/devops",
  },
] as const;

export const mySkills = [
  {
    title: "C++",
    icon: (
      <TbBrandCpp className="h-8 w-8 group-hover:scale-110 text-blue-500" />
    ),
  },

  {
    title: "Javascript",
    icon: (
      <DiJsBadge className="h-8 w-8 group-hover:scale-110 text-yellow-500" />
    ),
  },

  {
    title: "Typescript",
    icon: (
      <SiTypescript className="h-8 w-8 group-hover:scale-110 text-blue-500" />
    ),
  },

  {
    title: "Node Js",
    icon: (
      <TbBrandNodejs className="h-8 w-8 group-hover:scale-110 text-green-500" />
    ),
  },

  {
    title: "React Js",
    icon: <DiReact className="h-8 w-8 group-hover:scale-110 text-blue-500" />,
  },

  {
    title: "Next Js",
    icon: <SiNextdotjs className="h-8 w-8 group-hover:scale-110" />,
  },

  {
    title: "Docker",
    icon: <FaDocker className="h-8 w-8 group-hover:scale-110 text-blue-500" />,
  },

  {
    title: "MongoDb",
    icon: (
      <DiMongodb className="h-8 w-8 group-hover:scale-110 text-green-500" />
    ),
  },

  {
    title: "Firebase",
    icon: (
      <IoLogoFirebase className="h-8 w-8 group-hover:scale-110 text-orange-500" />
    ),
  },

  {
    title: "MySql",
    icon: <DiMysql className="h-8 w-8 group-hover:scale-110 text-blue-500" />,
  },

  {
    title: "Tailwindcss",
    icon: (
      <BiLogoTailwindCss className="h-8 w-8 group-hover:scale-110 text-blue-500" />
    ),
  },

  {
    title: "Git",
    icon: <FaGitAlt className="h-8 w-8 group-hover:scale-110 text-pink-500" />,
  },

  {
    title: "GitHub",
    icon: <FaGithub className="h-8 w-8 group-hover:scale-110" />,
  },
] as const;

export const languages = ["cpp", "js", "py"] as const;

export const dsaBlogConfig: DSABlogConfigsType = {
  cpp: cppBlogConfig,
  js: jsBlogConfig,
} as const;

const projects: Project[] = [
  {
    tag: "Jul 2024",
    src: "/assets/blsheet.png",
    title: "BL Sheet | Project Management Service",
    description:
      "Built a full-stack project management tool using React, Node.js, and TypeScript for task creation, assignment, and issue tracking. Designed a real-time dashboard with role-based access to track tasks and team progress. Collaborated with Rushi Mungse to improve and iterate on features.",
    status: "done",
    borderGradient: true,
    leftButton: {
      title: "Live Demo",
      href: "https://www.blsheet.com/",
    },
    rightButton: {
      title: "GitHub",
      href: "#",
    },
  },
  {
    tag: "Aug 2024",
    src: "/assets/codemitra.png",
    title: "Code Mitra | Online Course Hub",
    description:
      "Created an interactive platform where students can explore and enroll in various courses, while instructors can build and publish course content. Developed student progress tracking features and instructor tools for course creation and content management.",
    status: "done",
    borderGradient: true,
    leftButton: {
      title: "Live Demo",
      href: "https://codemitra-yt.vercel.app/",
    },
    rightButton: {
      title: "GitHub",
      href: "#",
    },
  },
  {
    tag: "Oct 2024",
    src: "/assets/ecommerce.png",
    title: "E-Shop | E-commerce Website with Advanced Search",
    description:
      "Built a responsive e-commerce platform with features like advanced product search, category filtering, user authentication, and dynamic cart management. Implemented fuzzy search and real-time filtering for a seamless shopping experience.",
    status: "done",
    borderGradient: true,
    leftButton: {
      title: "Website",
      href: "https://ecommerce-frontend-ebon-one.vercel.app/",
    },
    rightButton: {
      title: "GitHub",
      href: "#",
    },
  },
  {
    tag: "Nov 2024",
    src: "/assets/truedoc.png",
    title: "TrueDoc | AI Document Verification Service (Collaboration)",
    description:
      "Built a responsive frontend using React and Tailwind CSS for uploading and displaying ID verification results. Leveraged YOLOv11 with RoboFlow to detect various ID cards, including Aadhaar, PAN, and Driver's Licenses.",
    status: "done",
    borderGradient: true,
    leftButton: {
      title: "Live Demo",
      href: "https://true-doc-nine.vercel.app/",
    },
    rightButton: {
      title: "GitHub",
      href: "#",
    },
  },
  {
    tag: "Feb 2025",
    src: "/assets/dclub.png",
    title: "D-Club | Partner Finding Website for Clubs",
    description:
      "Developed a platform that helps clubs find and connect with partner organizations for events and collaborations. Features include club profiles, search and match algorithms, messaging, and event planning tools.",
    status: "done",
    borderGradient: true,
    leftButton: {
      title: "Website",
      href: "https://d-clubs.vercel.app/",
    },
    rightButton: {
      title: "GitHub",
      href: "https://github.com/krishmungase/D-club-backend",
    },
  },
  {
    tag: "Feb 2025",
    src: "/assets/Foodo.png",
    title: "Foodo | Admin Dashboard for Food Delivery App",
    description:
      "Developed a full-featured admin dashboard for managing restaurants, menus, orders, and delivery status. Integrated role-based access for admins and delivery agents. Designed with React and Tailwind CSS for responsive performance.",
    status: "done",
    borderGradient: true,
    leftButton: {
      title: "Website",
      href: "https://mernspace-admin-ui.vercel.app/auth/login",
    },
    rightButton: {
      title: "GitHub",
      href: "http://github.com/krishmungase/mernspace-admin-ui",
    },
  },
  {
    tag: "Jun 2025",
    src: "/assets/work-orbit.png",
    title: "FreeHub | Freelancing Platform for Clients & Developers",
    description:
      "Developed a full-stack freelancing platform where clients can post jobs and freelancers can bid, manage proposals, and complete projects. Implemented role-based access, real-time notifications, and a secure payment workflow.",
    status: "done",
    borderGradient: true,
    leftButton: {
      title: "Website",
      href: "https://work-orbit.netlify.app/",
    },
    rightButton: {
      title: "GitHub",
      href: "#",
    },
  },
  {
    tag: "Apr 2025",
    src: "/assets/docs.png",
    title: "Docs App",
    description:
      "A modern and responsive documentation app built with Next.js and Tailwind CSS. It's a clone of Google Docs with advanced features like real-time collaborative editing and integrated chat for seamless communication.",
    status: "inProgress",
    borderGradient: true,
    leftButton: {
      title: "Website",
      href: "https://docs-g.netlify.app/",
    },
    rightButton: {
      title: "GitHub",
      href: "https://github.com/krishmungase/Google-Doc",
    },
  },
  {
    tag: "Jun 2025",
    src: "/assets/lets-crack.png",
    title: "codify | Real-Time Interview & Collaboration Platform",
    description:
      "Building a focused platform where interviewers can post mock interviews and candidates can join live sessions for real-time coding practice with voice chat, hints, sticky notes, and replay for review. Features secure room joining, clean UI, and an engaging preparation environment.",
    status: "pending",
    borderGradient: true,
    leftButton: {
      title: "Live Demo",
      href: "https://app-codify.vercel.app/",
    },
    rightButton: {
      title: "GitHub",
      href: "https://github.com/krishmungase/app-codify-server",
    },
  },
];

export default projects;
