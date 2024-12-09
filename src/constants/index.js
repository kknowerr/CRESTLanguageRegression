import { facebook, instagram, linkedin, github, API } from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
    type: "logo",
    logo: "assets/logo.png"
  },
  {
    id: "InputForm",
    title: "Input Form",
  },
  {
    id: "Output",
    title: "Output",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const projects = [
  {
    id: "project-1",
    title: "API Integration",
    content: "Integrated a third-party API to display user info in a WordPress site.",
    image: API,
  },
  {
    id: "project-2",
    title: "Database Simplifier",
    content: "Developed a Python script to merge multiple databases into one and identify duplicate entries.",
    image: API,
  },
  {
    id: "project-3",
    title: "Brand Design",
    content: "Redesigned a company's brand identity including logo, website, and marketing materials.",
    image: API,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "GPA",
    value: "4.2",
  },
  {
    id: "stats-2",
    title: "Experience",
    value: "2 years",
  },
  {
    id: "stats-3",
    title: "Projects Completed",
    value: "10+",
  },
];

export const footerLinks = [
  {
    title: "Portfolio",
    links: ["https://www.linkedin.com/",
      {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/jacob-trevino-0081a3233/",
      },
      {
        name: "GitHub",
        link: "https://github.com/l0sttt",
      },
      {
        name: "Resume",
        link: "https://drive.google.com/your_resume_link_here", // Update this with your resume link
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/your_instagram_handle", // Update this with your Instagram link
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/your_facebook_handle", // Update this with your Facebook link
  },
  {
    id: "social-media-3",
    icon: github,
    link: "https://github.com/l0sttt",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/in/jacob-trevino-0081a3233/",
  },
];
