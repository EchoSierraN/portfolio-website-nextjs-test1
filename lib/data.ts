import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import inventoryManagement1 from "@/public/inventoryManagement1.png"
import flowiusManage2 from "@/public/flowiusManage2.png"
import flowiusPay5 from "@/public/flowiusPay5.jpg"
import theRainyDayShelf1 from "@/public/theRainyDayShelf1.png"
import brainFlow1 from "@/public/brainFlow1.png"
import { MdGamepad } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";
import { MdOutlineMonitor } from "react-icons/md";
import { LuMonitor } from "react-icons/lu";
import { url } from "inspector";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Lead Front End Developer",
    location: "3BL Enterprises",
    description:
      "Lead developer for Flowius Manage and Flowius Pay web apps.",
    icon: React.createElement(MdOutlineMonitor),
    date: "2022 - 2024",
    url: "",
  },
  {
    title: "Lead Android App Developer",
    location: "3BL Enterprises",
    description:
      "Lead developer for Flowius Manage, Flowius Pay and Flowius Survey Android apps.",
    icon: React.createElement(FaMobileAlt),
    date: "2022 - 2024",
    url: "",
  },
  {
    title: "Graduated from Gebeya Academy",
    location: "Gebeya Inc.",
    description:
      "I graduated after having completed the Android Development Track, and worked on two capstone projects",
    icon: React.createElement(LuGraduationCap),
    date: "2020-2021",
  },
  {
    title: "Unity Game UI Developer / Programmer",
    location: "Chewata Awaqi",
    description:
      "Served as the solo developer of Mela, an interactive storytelling game where the choices you make will impact the ending.",
    icon: React.createElement(MdGamepad),
    date: "2019 - 2020",
    url: "",
  },

  // {
  //   title: "Front-End Developer",
  //   location: "Orlando, FL",
  //   description:
  //     "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
  //   icon: React.createElement(CgWorkAlt),
  //   date: "2019 - 2021",
  // },
  // {
  //   title: "Full-Stack Developer",
  //   location: "Houston, TX",
  //   description:
  //     "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
  //   icon: React.createElement(FaReact),
  //   date: "2021 - present",
  // },
] as const;

export const projectsData = [
  {
    title: "StockMaster",
    description:
      "A scalable and production-ready management system with insights on managed data.",
    tags: ["Next.js", "Material UI", "Express.js", "Postgres", "Prisma", "AWS Amplify", "EC2", "RDS", "S3"],
    imageUrl: inventoryManagement1,
    url: "https://master.d2fmnoelvy8cdc.amplifyapp.com/",
  },
  {
    title: "The Rainy Day Shelf",
    description:
      "A store front for digital assets.",
    tags: ["Next.js", "PostgreSQL", "ShadCN", "Tailwind", "Prisma"],
    imageUrl: theRainyDayShelf1,
    url: "",
  },
  {
    title: "BrainFlow",
    description:
      "An AI powered chatbot that helps you contextually recall recorded information from the heaps of data it's fed.",
    tags: ["Next.js", "TypeScript", "ShadCN", "Tailwind", "ClerK", "MongoDB", "Prisma"],
    imageUrl: brainFlow1,
    url: "",
  },
  {
    title: "Flowius Manage",
    description:
      "A proprietary management app for 3BL Enterprises. Users can monitor and manage project activities, inventory, and special cases.",
    tags: ["React", "TypeScript", "Firebase", "Kotlin", "Android SDK", "Mapbox"],
    imageUrl: flowiusManage2,
    url: "",
  },
  {
    title: "Flowius Pay",
    description:
      "A proprietary management app for 3BL Enterprises. Users can record, monitor and interpret customer payment information.",
    tags: ["React", "JavaScript", "Firebase", "Kotlin", "Android SDK", "Mapbox"],
    imageUrl: flowiusPay5,
    url: "",
  },
] as const;

export const skillsData = [
  "Kotlin",
  "Android SDK",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Framer Motion",
] as const;
