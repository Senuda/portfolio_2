import project_1 from "./assets/project_1.png";
import project_2 from "./assets/project_2.png";
import project_3 from "./assets/project_3.png";

export const personalInfo = {
  name: "Senuda Thinal Silva",
  title: "Front-End Developer",
  description:
    "Passionate about crafting clean, responsive, and user-friendly web interfaces. Currently expanding into full-stack development while specializing in front-end excellence.",
  email: "senuda10@gmail.com",
  social: {
    github: "https://github.com/senuda",
    linkedin:
      "https://www.linkedin.com/in/senuda-thinal-971373196/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    email: "mailto:sanda0717227634@gmail.com",
  },
};

export const aboutMe = {
  intro:
    "I'm a passionate Software Engineering undergraduate at SLIIT Academy with a deep love for front-end development. I thrive on transforming creative ideas into polished, functional web experiences that users genuinely enjoy interacting with.",
  sections: [
    {
      title: "Technical Foundation",
      content:
        "My technical toolkit includes Java, HTML, CSS, JavaScript, WordPress, and SQL, with a strong emphasis on building responsive, accessible user interfaces. I believe great design isn't just about aesthetics—it's about creating seamless experiences that work flawlessly across all devices.",
    },
    {
      title: "Professional Experience",
      content:
        "During my 8-month internship, I contributed to multiple website projects with a primary focus on front-end development. This hands-on experience taught me the importance of clean code, collaborative teamwork, and industry best practices. I learned to balance creativity with functionality while meeting real-world project deadlines.",
    },
    {
      title: "Growth Mindset",
      content:
        "While front-end development is my strength, I'm actively expanding my expertise in databases and backend technologies to become a more versatile developer. I'm eager to work on diverse projects, learn from experienced professionals, and discover where I can make the most meaningful impact.",
    },
    {
      title: "What Drives Me",
      content:
        "I may be early in my career journey, but I compensate with dedication, adaptability, and an insatiable appetite for learning. My goal is to evolve into a well-rounded developer who contributes to impactful projects and creates digital solutions that truly matter.",
    },
  ],
};

export const timeline = [
  {
    year: "2024",
    role: "Software Engineering Student",
    description:
      "Pursuing Software Engineering degree at SLIIT Academy while working as a part-time developer, focusing on expanding full-stack development skills and database knowledge.",
  },
  {
    year: "2023",
    role: "Front-End Development Internship",
    description:
      "8-month internship program where I contributed to multiple website projects, focusing on building functional user interfaces and applying industry best practices in collaborative team environments.",
  },
  {
    year: "2022",
    role: "Beginning Development Journey",
    description:
      "Started learning web development fundamentals including HTML, CSS, JavaScript, and WordPress. Built foundational knowledge in Java and SQL databases.",
  },
];

export const projects = [
  {
    id: 1,
    title: "Great Aussie caravans",
    description:
      "A dynamic website built with WordPress for purchasing caravans, motorhomes, and hybrid vehicles. The platform showcases vehicles with professional-style diagrams and high-quality images, giving customers a clear view of specifications and designs. It also features custom-built options that allow buyers to personalize their vehicles according to their preferences, making the purchase process more interactive and user-friendly.",
    myrole:
      "👉 My role: I focused mainly on the frontend development, designing the user interface, vehicle display pages, and integrating the custom options layout to ensure a seamless browsing and purchasing experience.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    image: project_3,

    liveUrl: "https://greataussiecaravans.com.au/",
  },
  {
    id: 2,
    title: "Import authority",
    description:
      "A database-driven website built with WordPress, MySQL, and HTML to record and manage vehicle descriptions, buyers, sellers, and related details. It includes search, reporting, and authentication features.",
    myrole: "👉 My role: Frontend development (UI design & user experience).",
    technologies: ["React", "TypeScript", "Firebase", "Framer Motion"],
    image: project_1,
    liveUrl: "https://importauthority.com.au/",
  },
  {
    id: 3,
    title: "Novel telecom",
    description:
      "A telecom network solution website developed with WordPress, MySQL, and HTML to showcase services such as Telephone, Internet, IP Phone, NBN Data, NBN Voice, NBN Bundles, and AI-powered solutions. It also features a 'Read More' option for detailed service descriptions. Content management system for creative professionals to  showcase their work with customizable themes and SEO optimization.",
    myrole: "👉 My role: Frontend development (service pages & layout design).",
    technologies: ["Next.js", "PostgreSQL", "Prisma", "TailwindCSS"],
    image: project_2,

    liveUrl: "https://noveltelecom.com.au/",
  },
];

export const skills = [
  {
    name: "WordPress",
    level: 95,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
    color: "#21759B",
  },
  {
    name: "MySQL",
    level: 85,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    color: "#4479A1",
  },
  {
    name: "HTML",
    level: 95,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    color: "#E34F26",
  },
];
