// ─────────────────────────────────────────────────────────────
// SITE CONTENT
// Fields marked "TODO" are placeholders — replace with real
// details before shipping. Everything else reflects your
// actual background, sourced from your resume, LeetCode profile,
// and published paper.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Abhishek Puri",
  role: "Software Programmer",
  tagline: "Backend-leaning software engineer building reliable systems in fintech.",
  location: "Noida, Delhi NCR, India",
  yearsExperience: "1+",
  email: "iabhishek023@gmail.com",
  phone: "+91 9315014084",
  github: "https://github.com/iabhishek023",
  linkedin: "https://www.linkedin.com/in/abhishek-puri-29bba4256/",
  leetcode: "https://leetcode.com/u/ABHIshek_023/",
  resumeUrl: "/resume.pdf",
  availability: "Open to opportunities",
};

export const about = {
  summary: [
    "I'm a software programmer at LendingPlate (Unifinz Capital India), where I build and maintain secure RESTful APIs on a live fintech lending platform — Java, JPA, and MySQL on the backend, with query optimization work that's cut average execution time by ~15–18%.",
    "My work spans production feature delivery, financial reporting accuracy (validation logic that improved accuracy by ~20–25%), and applied security — I've addressed VAPT findings including file-upload sanitization and host-header vulnerabilities. I also worked on a Voicebot integration that cut customer response time by 70% for the operations team.",
    "Outside of work, I build full-stack side projects, co-authored a peer-reviewed paper on ML-based crop selection (Springer, ICRTC 2025), and hold a B.Tech in Computer Science from ABES Engineering College (AKTU), graduating with an 8.0 CGPA.",
  ],
  highlights: [
    { label: "Current role", value: "Software Programmer @ LendingPlate" },
    { label: "Experience", value: "1+ years, fintech lending platform" },
    { label: "Education", value: "B.Tech CSE, ABES Engineering College (AKTU) — 8.0 CGPA" },
    { label: "Focus", value: "Backend systems, REST APIs, applied security (VAPT)" },
  ],
};

export const skills = {
  Languages: ["Java", "Python", "JavaScript", "C#", "HTML", "CSS", "XAML"],
  Backend: ["Spring Boot", "REST APIs", "JDBC", ".NET Framework"],
  Frontend: ["React.js", "Tailwind CSS"],
  Databases: ["MySQL", "SSMS", "Firebase"],
  Cloud: ["Firebase Hosting", "Appwrite"],
  Tools: ["Git", "GitHub", "Postman", "VS Code", "IntelliJ IDEA"],
  Testing: ["Manual QA / test design", "VAPT security review"],
  "Concepts": ["OOP", "Data Structures & Algorithms", "DBMS", "System Design", "Computer Networks"],
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    company: "LendingPlate (Unifinz Capital India)",
    role: "Software Programmer",
    period: "June 2025 — Present",
    location: "Noida, India",
    points: [
      "Developed and maintained 10+ secure RESTful APIs using Java, JPA, and MySQL, reducing average query execution time by ~15–18% through SQL indexing and query restructuring",
      "Boosted financial reporting accuracy by ~20–25% by implementing validation logic and robust error-handling, eliminating manual reconciliation bottlenecks",
      "Addressed critical VAPT findings by sanitizing file uploads and resolving host-header vulnerabilities, leading to a substantial reduction in security risk",
      "Streamlined the customer communication pipeline through Voicebot integration, cutting response and follow-up time by 70% for the operations team",
    ],
  },
  {
    company: "Optimus Information",
    role: "Software Development Intern",
    period: "February 2025 — May 2025",
    location: "India",
    points: [
      "Implemented and optimized 15+ SQL queries for data retrieval and reporting, improving query performance by 20% and reducing average processing time by 3–5 seconds",
      "Deployed 3–5 RESTful APIs for seamless data communication between services, reducing data retrieval time by 25% and improving system reliability by 15%",
      "Constructed responsive UIs using XAML and C# with MVVM architecture, achieving cross-platform deployment and reducing development time by 30%",
    ],
  },
];

export type Project = {
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  github?: string;
  demo?: string;
  paper?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    name: "StreamWise",
    tagline: "Intelligent movie finder with AI-driven recommendations",
    description:
      "Fully responsive web app built with React.js and Tailwind CSS, with state management optimized to cut page load time by 40% across all device types. Firebase Authentication secures 100% of user sessions. Uses the TMDB API for real-time movie data and the OpenAI GPT API for personalized recommendations — a combination that boosted user retention by 35%.",
    stack: ["React.js", "Tailwind CSS", "Spring Boot", "Firebase Auth", "TMDB API", "OpenAI GPT API"],
    github: "https://github.com/iabhishek023/streamwise-backend",
    demo: "https://streamwise-nine.vercel.app",
    featured: true,
  },
  {
    name: "Gateway API — Microservices Platform",
    tagline: "API gateway fronting a multi-service quiz application",
    description:
      "A single-entry-point API gateway (Java, Spring Cloud) that routes client requests across a set of independent microservices, handling authentication, load balancing, rate limiting, logging, and request/response transformation so each service stays decoupled from the others. Fronts a service registry for discovery plus dedicated quiz and question services.",
    stack: ["Java", "Spring Boot", "Spring Cloud Gateway", "Microservices", "Service Discovery"],
    github: "https://github.com/iabhishek023/Gateway-API",
    demo: undefined,
    featured: true,
  },
  {
    name: "Intelligent Crop Selection Using Machine Learning",
    tagline: "Peer-reviewed research — Springer, ICRTC 2025",
    description:
      "Co-authored research introducing an ML-based approach to crop selection for sustainable agriculture. By analyzing soil properties, climate data, and market trends, the system recommends crops to maximize yield and profitability. Random Forest and ANN models achieved 95% predictive accuracy in testing. Published in Lecture Notes in Networks and Systems (LNNS, vol. 1906).",
    stack: ["Python", "Random Forest", "Artificial Neural Networks", "scikit-learn"],
    github: undefined,
    demo: undefined,
    paper: "https://link.springer.com/chapter/10.1007/978-3-032-20994-8_24",
    featured: false,
  },
  {
    name: "AmbuSaver",
    tagline: "Efficient online platform for swift ambulance bookings",
    description:
      "Full-stack ambulance dispatch platform that cuts average emergency booking time by 60% versus traditional phone-based coordination. Real-time availability tracking across 10+ hospitals gives 100% resource accountability and 3x faster ambulance allocation. Interface redesigned across 3 distinct roles — patient, driver, and admin — to improve accessibility to emergency medical services.",
    stack: ["React.js", "Node.js/Express", "Tailwind CSS"],
    github: "https://github.com/iabhishek023/AMBUSAVERR",
    demo: undefined,
    featured: false,
  },
  {
    name: "The Food Delivery App",
    tagline: "Restaurant browsing and ordering experience",
    description:
      "Standalone food delivery interface that renders live restaurant and menu data and lets customers browse and select items to order. Built with React and React Router for client-side navigation, Redux Toolkit for cart/order state, and Tailwind CSS for styling, with CORS handling for cross-origin API requests.",
    stack: ["React.js", "React Router", "Redux Toolkit", "Tailwind CSS"],
    github: "https://github.com/iabhishek023/The-Food-Delivery-App",
    demo: undefined,
    featured: false,
  },
  {
    name: "Voice Bot Integration",
    tagline: "A look-alike rebuild of the LendingPlate voicebot work",
    description:
      "Personal rebuild exploring the same problem as the production Voicebot integration at LendingPlate: an automated voice assistant that calls customers to help them pay their EMIs on time, reducing manual follow-up work for the operations team.",
    stack: ["Python"],
    github: "https://github.com/iabhishek023/Voice_Bot_Integration",
    demo: undefined,
    featured: false,
  },
];

export const achievements = [
  {
    label: "LeetCode",
    value: "600+ problems solved (Java)",
  },
  {
    label: "Production integration",
    value: "Voicebot shipped to LendingPlate — cut response time 70%",
  },
  {
    label: "Published research",
    value: "\"Intelligent Crop Selection Using ML\" — Springer, ICRTC 2025",
  },
  {
    label: "Hackathon",
    value: "Led a 4-member team at Hack24 — shipped an emergency service app in 24hrs, placed among top teams",
  },
  {
    label: "Community",
    value: "Organized Tech Pravah — 500+ students across 3 workshops/seminars",
  },
  {
    label: "Certifications",
    value: "HackerRank Problem Solving Certificate, HackerRank Java Skill Certification",
  },
];

export const socials = [
  { label: "GitHub", href: profile.github },
  { label: "LinkedIn", href: profile.linkedin },
  { label: "LeetCode", href: profile.leetcode },
  { label: "Email", href: `mailto:${profile.email}` },
];
