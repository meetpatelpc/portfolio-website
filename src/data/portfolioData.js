export const profile = {
  name: "Meet Patel",
  initials: "MP",
  title: "Web Developer | BCA Graduate",
  badge: "Open to opportunities",
  email: "patelmeet6115@gmail.com",
  phone: "+91 9904583634",
  phoneHref: "tel:+919904583634",
  location: "Khambhat, Gujarat, India",
  github: "https://github.com/meetpatelpc",
  linkedin: "https://linkedin.com",
  photo: "/images/myphoto.jpg",
  resume: "/resume/Meet_Patel_Resume.pdf",
  intro:
    "BCA graduate (2025) with a strong interest in web development and building responsive, user-focused applications. Skilled in HTML, CSS, JavaScript with hands-on experience through academic and personal projects.",
  about:
    "A Bachelor of Computer Applications (BCA) graduate passionate about front-end and full-stack web development. I enjoy turning ideas into clean, functional websites—from responsive UI design to working with APIs and databases. I am actively seeking an entry-level role where I can contribute, learn from experienced developers, and grow my skills in modern web technologies.",
  highlights: [
    { label: "Location", value: "Khambhat, Gujarat, India" },
    { label: "Education", value: "BCA (2025)" },
    { label: "Focus", value: "Web Development" },
    { label: "Status", value: "Actively job seeking" },
  ],
};

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export const skills = [
  {
    title: "Programming Languages",
    tags: ["C", "C++","C#", "Java", "Python", "JavaScript"],
  },
  {
    title: "Web Development",
    tags: ["HTML5", "CSS3", "React.js", "Bootstrap", "Responsive Design"],
  },
  {
    title: "Database & Backend",
    tags: ["MySQL", "MongoDB", "Node.js", "REST APIs"],
  },
  {
    title: "Tools & Platforms",
    tags: ["Git", "GitHub", "VS Code",  "MS Office"],
  },
  {
    title: "Soft Skills",
    tags: [
      "Communication",
      "Teamwork",
      "Problem Solving",
      "Time Management",
      "Quick Learner",
    ],
  },
];

export const projects = [
  {
    id: "01",
    title: "portfolio-website",
    description:
      "Professional portfolio built with React and Vite featuring dark/light theme toggle, scroll animations, contact form, and responsive layout. Showcases projects, skills, and education.",
    tags: ["React", "Vite", "JavaScript", "CSS"],
    features: ["Dark / Light Mode"],
    links: [
      { label: "Live Demo", href: "#home" },
      {
        label: "GitHub",
        href: "https://github.com/meetpatelpc/portfolio-website",
      },
    ],
  },
  {
    id: "02",
    title: "Event Management System",
    description:
      "A modern event management platform designed to simplify event planning and booking processes. The system allows users to reserve rooms, choose customized event packages, and manage bookings through an intuitive and responsive interface. Built with a focus on user experience, efficiency, and seamless event coordination.",
    tags: ["HTML", "CSS", "JavaScript","PHP", "MySQL","Bootstrap"],
    features: ["Dark / Light Mode","CRUD Operations"],
    links: [
      { label: "GitHub", href: "https://github.com/meetpatelpc" },
    ],
  },
  {
    id: "03",
    title: "Library Management System",
    description:
      "A dynamic library management solution developed to streamline book tracking, user authentication, and transaction management. The system enables efficient handling of book records, issue/return operations, and secure user access while ensuring organized and reliable data management.",
    tags: ["HTML", "CSS", "JavaScript","PHP", "MySQL"],
    features: ["CRUD Operations"],
    links: [
      { label: "GitHub", href: "https://github.com/meetpatelpc" },
    ],
  },
];

export const timeline = [
  {
    date:"2025 — Present",
    title: "MSc(IT) - Master of Science in Information Technology",
    org: "Changa,Gujarat, India",
    detail:"Pursuing advanced studies in information technology with a focus on software development, data management, and emerging technologies. Engaging in research projects and coursework to deepen expertise in IT concepts and applications.",
  },
  {
    date: "2022 — 2025",
    title: "BCA — Bachelor of Computer Applications",
    org: "Vallabh Vidyanagar, Gujarat, India",
    detail:
      "Studied programming, data structures, database management, web technologies, and software development. Completed multiple academic projects in web and application development.",
  },
  {
    date: "2020 — 2022",
    title: "Higher Secondary Certificate (12th)",
    org: "Surat, Gujarat, India",
    detail: "Commerce stream.",
  },
  {
    date: "2020",
    title: "Secondary School Certificate (10th)",
    org: "Surat, Gujarat, India",
    detail: "Completed with focus on commerce subjects.",
  },
];
