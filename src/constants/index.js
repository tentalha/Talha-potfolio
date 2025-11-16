
import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  project3,
  mysql,
  express,
  aws,
  mui,
  
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
} from '../assets'


// Import Tekisky separately
import tekisky from "../assets/company/tekisky.png";
import vosyn from "../assets/company/vosyn.png";
import devminds from "../assets/company/devminds.png";
export const navLinks = [


  {
    id: "about",
    title: "About",
    
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "UI / UX Design",
    icon: creator,
  },
  {
    title: "Ecommerce Solutions",
    icon: web,
  },
  {
    title: "Desktop Apps Development",
    icon: mobile,
  },
  {
    title: "CRM & ERP Development",
    icon: backend,
  },
  {
    title: "MERN Stack Development",
    icon: web,
  },
  {
    title: "MEAN Stack Development",
    icon: web,
  },
];

const technologies = [
  { name: "UI/UX", icon: figma },
  { name: "JavaScript", icon: javascript },
  { name: "React", icon: reactjs },
  { name: "Vue", icon: reactjs },
  { name: "Angular", icon: reactjs },
  { name: "MongoDB", icon: mongodb },
  { name: "SQL / MySQL", icon: mysql },
  { name: "Node / Nest / Express", icon: nodejs },
  { name: "API Integrations", icon: framer },
  { name: "Git", icon: git },
  { name: "AWS", icon: aws },
];

const experiences = [
  {
    title: "Senior Software Engineer",
    company_name: "Devminds Studio",
    icon: devminds,
    iconBg: "#383E56",
    date: "Nov 2025 - Present",
    points: [
      "Negotiated technical scope and timelines with clients to align project deliverables with business objectives.",
      "Provided technical consultation during pre-sales discussions to address client concerns and requirements.",
      "Prepared detailed project proposals and technical documentation for client pitches.",
      "Participated in client discovery calls to understand business requirements and propose tailored solutions.",
      "Designed and optimized PostgreSQL database schemas, implementing complex queries and indexing strategies for improved performance.",
      "Deployed and managed containerized applications on AWS using services like ECS, EC2, Lambda, and RDS.",
    ],
  },
  {
    title: "Technical Team Lead",
    company_name: "ićod.ai",
    icon: tekisky,
    iconBg: "#383E56",
    date: "Jul 2024 - Present",
    points: [
      "Developed and designed the complete backend microservices architecture of ićod.ai from scratch and managed the infrastructure on AWS.",
      "Led the development team.",
      "Worked closely with the product team to prioritize features.",
      "Developed the AI agent responsible for generating code.",
    ],
  },
  {
    title: "Software Development Engineer",
    company_name: "Big Entities",
    icon: vosyn,
    iconBg: "#383E56",
    date: "Jul 2024 - Oct 2025",
    points: [
      "Developed full-stack applications using Node.js and NestJS.",
      "Worked on microservices architecture and API integrations.",
      "Implemented scalable solutions with cloud services.",
    ],
  },
  {
    title: "Associate Software Engineer",
    company_name: "Edraak Systems",
    iconBg: "#383E56",
    date: "Jul 2022 - Jul 2024",
    points: [
      "Built web applications using React.js and Node.js.",
      "Collaborated with cross-functional teams to deliver high-quality products.",
      "Implemented responsive designs and optimized application performance.",
    ],
  },
  {
    title: "Frontend Engineer",
    company_name: "Infodart",
    iconBg: "#383E56",
    date: "Nov 2022 - Jan 2024",
    points: [
      "Developed user interfaces using React.js and modern frontend technologies.",
      "Worked on responsive web designs and cross-browser compatibility.",
      "Collaborated with backend developers to integrate APIs.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Talha proved me wrong.",
    name: "MD Mustaqeem",
    designation: "Ecommerce",
    company: "QuickMart",
    image: nodejs,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Talha does.",
    name: "Abdul Raheman",
    designation: "Ecommerce Business",
    company: "justbuyz",
    image: secondTestimonial,
  },
  {
    testimonial:
      "After Talha optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "James Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: thirdTestimonial,
  },
];

const projects = [
  {
    name: "Visa-Mex",
    description:
      "Visa-Mex is a modern full-stack visa application management system designed to streamline the visa process for users and administrators. Applicants can submit various visa types online while admins efficiently manage applications, documents, and user data.",
    tags: [
      { name: "react", color: "pink-text-gradient" },
      { name: "tailwind", color: "blue-text-gradient" },
      { name: "node", color: "green-text-gradient" },
      { name: "express", color: "yellow-text-gradient" },
      { name: "mongodb", color: "orange-text-gradient" },
      { name: "jwt", color: "purple-text-gradient" },
      { name: "cloudinary", color: "blue-text-gradient" },
      { name: "google-vision-api", color: "red-text-gradient" },
      { name: "aws", color: "green-text-gradient" },
    ],
    image: "/visamex.jpg",
    source_code_link: "http://ec2-56-228-15-84.eu-north-1.compute.amazonaws.com",
  },
  {
    name: "BidCaribbean",
    description:
      "BidCaribbean (Lux Cars) is a full-stack real-time vehicle auction platform built for the Bahamas and Turks and Caicos Islands. It enables live bidding on both imported and locally verified cars, integrating thousands of listings via a third-party API while ensuring secure and verified auctions.",
    tags: [
      { name: "react", color: "pink-text-gradient" },
      { name: "tailwind", color: "blue-text-gradient" },
      { name: "node", color: "green-text-gradient" },
      { name: "express", color: "yellow-text-gradient" },
      { name: "postgresql", color: "orange-text-gradient" },
      { name: "context-api", color: "purple-text-gradient" },
      { name: "pusherjs", color: "red-text-gradient" },
    ],
    image: "/bidcarbian.jpg",
    source_code_link: "https://lux-cars-production.vercel.app/",
  }
,  
{
  name: "RFID SMRT POS",
  description:
    "RFID SMRT POS is a full-stack inventory and sales management system powered by RFID technology. It streamlines point-of-sale operations with secure RFID-based authentication, real-time inventory tracking, role-based access control, and detailed sales reporting, designed to optimize retail and business workflows.",
  tags: [
    { name: "react", color: "pink-text-gradient" },
    { name: "tailwind", color: "blue-text-gradient" },
    { name: "node", color: "green-text-gradient" },
    { name: "express", color: "yellow-text-gradient" },
    { name: "mongodb", color: "orange-text-gradient" },
    { name: "jwt", color: "purple-text-gradient" },
    { name: "rfid", color: "red-text-gradient" },
    { name: "arduino", color: "blue-text-gradient" },
    { name: "railway", color: "green-text-gradient" },
  ],
  image: "/rfid.png",
  source_code_link: "https://visusctrl.com/login",
},

{
  name: "Noshly",
  description:
    "Noshly is a modern web platform that empowers independent chefs to showcase their culinary skills, host pop-up dining events, and connect directly with local communities. It reimagines hospitality by providing flexible opportunities for chefs and unique dining experiences for food lovers.",
  tags: [
    { name: "react", color: "pink-text-gradient" },
    { name: "next", color: "blue-text-gradient" },
    { name: "node", color: "green-text-gradient" },
    { name: "rest-api", color: "yellow-text-gradient" },
    { name: "responsive-ui", color: "orange-text-gradient" },
    { name: "community", color: "purple-text-gradient" },
  ],
  image: "/noshly.jpg",
  source_code_link: "#",
},
{
  name: "Knnect.ai",
  description:
    "Knnect.ai is an AI-powered learning platform featuring virtual tutors that provide personalized, 24/7 support. It adapts to each learner’s pace and goals, offering tailored explanations, hints, and feedback through advanced retrieval techniques for highly accurate, context-aware assistance.",
  tags: [
    { name: "rag", color: "blue-text-gradient" },
    { name: "kag", color: "green-text-gradient" },
    { name: "llm", color: "purple-text-gradient" },
    { name: "vector-database", color: "orange-text-gradient" },
    { name: "ai", color: "pink-text-gradient" },
    { name: "web-platform", color: "yellow-text-gradient" },
  ],
  image: "/knnects.jpg",
  source_code_link: "https://knnect.ai",
},
{
  name: "InfoDart",
  description:
    "InfoDart is a real-time data visualization platform designed to detect and display anomalies in streaming data. It provides intuitive dashboards and visual insights to help users quickly identify irregularities and make informed decisions.",
  tags: [
    { name: "react", color: "pink-text-gradient" },
    { name: "node", color: "green-text-gradient" },
    { name: "mongodb", color: "orange-text-gradient" },
    { name: "real-time", color: "blue-text-gradient" },
    { name: "data-visualization", color: "purple-text-gradient" },
  ],
  image: "/infodart.jpg",
  source_code_link: "#",
},
{
  name: "Reets",
  description:
    "Reets is a real-time machine health monitoring dashboard that visualizes critical metrics such as velocity, vibration, and frequency. It provides interactive graphs, automated alerts, and reliable data streaming to support predictive maintenance and minimize downtime.",
  tags: [
    { name: "react", color: "pink-text-gradient" },
    { name: "express", color: "yellow-text-gradient" },
    { name: "mysql", color: "green-text-gradient" },
    { name: "websocket", color: "blue-text-gradient" },
    { name: "rabbitmq", color: "orange-text-gradient" },
    { name: "real-time", color: "purple-text-gradient" },
  ],
  image: "/reets.jpg",
  source_code_link: "#",
}





 , {
    name: "DFPO Portal",
    description:
      "The Digital Franchise Post Offices (DFPO) portal modernizes Pakistan Post with branded interfaces, digitized operations, and improved service delivery.",
    tags: [
      { name: "php/node", color: "blue-text-gradient" },
      { name: "mysql", color: "green-text-gradient" },
      { name: "react", color: "pink-text-gradient" },
    ],
    image: "/DPFO.jpg",
    source_code_link: "#",
  },
  {
    name: "Quwat",
    description:
      "A financial wellbeing network focused on financial inclusion and empowerment with secure portals and analytics.",
    tags: [
      { name: "php", color: "blue-text-gradient" },
      { name: "mysql", color: "green-text-gradient" },
      { name: "angular", color: "pink-text-gradient" },
    ],
    image: "/Quwat.jpg",
    source_code_link: "#",
  },
  {
    name: "BSP",
    description:
      "Automated Reporting System (ARS) enabling RegTech/SupTech reporting with digital pipelines and dashboards.",
    tags: [
      { name: ".net", color: "blue-text-gradient" },
      { name: "java", color: "green-text-gradient" },
      { name: "angular", color: "pink-text-gradient" },
    ],
    image: "/BPS.jpg",
    source_code_link: "#",
  },
  {
    name: "Asset Monitor",
    description:
      "Comprehensive portal including distributors, contractors, sales team, supply chain, inventory and attendance modules.",
    tags: [
      { name: ".net", color: "blue-text-gradient" },
      { name: "mysql", color: "green-text-gradient" },
      { name: "angular", color: "pink-text-gradient" },
    ],
    image: "/AssetsMonitor.jpg",
    source_code_link: "#",
  },
  {
    name: "PMIS",
    description:
      "Web/Mobile portal for comprehensive party management across major organizational aspects.",
    tags: [
      { name: "php", color: "blue-text-gradient" },
      { name: ".net", color: "green-text-gradient" },
      { name: "mysql", color: "pink-text-gradient" },
    ],
    image: "/PIMS.jpg",
    source_code_link: "#",
  },
];

export { services, technologies, experiences, testimonials, projects };
