export interface SkillCategory {
  name: string;
  iconName: string;
  skills: { name: string; level?: string; highlight?: boolean }[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  category: 'Cloud & DevOps' | 'Full-Stack' | 'AI & Mobile' | 'All';
  image: string;
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  highlights: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  location?: string;
  description: string[];
  type: 'Work' | 'Leadership' | 'Internship' | 'Learning';
}

export interface EducationItem {
  degree: string;
  institution: string;
  graduationYear: string;
  highlights: string[];
}

export const PERSONAL_INFO = {
  name: "Biruk Wagnew",
  title: "Cloud Engineer | Full-Stack Developer | Information Technology Graduate",
  tagline: "Building scalable cloud solutions and modern web applications that solve real-world problems.",
  summary: "I am an Information Technology graduate with a passion for Cloud Computing, DevOps, Full-Stack Development, and Artificial Intelligence. I enjoy building scalable, user-friendly applications while continuously learning modern technologies and best practices. My goal is to contribute to innovative teams and create impactful digital solutions.",
  location: "Addis Ababa, Ethiopia",
  email: "birukwagnew445@gmail.com",
  phone: "+251 94 217 7690",
  website: "https://birukwagnew.dev",
  resumeUrl: "#resume", // PDF Download placeholder / action
  callToAction: "I'm currently seeking opportunities in Cloud Engineering, DevOps, and Full-Stack Development. Let's build something amazing together.",
  socials: {
    github: "https://github.com/BirukWagnew",
    linkedin: "https://et.linkedin.com/in/birukwagnew",
    twitter: "https://x.com/BirukWagnew",
    medium: "https://medium.com/@BirukWagnew",
    devto: "https://dev.to/BirukWagnew"
  }
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Cloud Computing",
    iconName: "Cloud",
    skills: [
      { name: "Google Cloud Platform (GCP)", highlight: true },
      { name: "Amazon Web Services (AWS)", highlight: true },
      { name: "Docker", highlight: true },
      { name: "Kubernetes", highlight: true }
    ]
  },
  {
    name: "DevOps & Infrastructure",
    iconName: "Terminal",
    skills: [
      { name: "Git", highlight: true },
      { name: "GitHub Actions / CI/CD", highlight: true },
      { name: "Linux Administration", highlight: true },
      { name: "Bash Scripting", highlight: true }
    ]
  },
  {
    name: "Frontend Development",
    iconName: "Layout",
    skills: [
      { name: "React", highlight: true },
      { name: "TypeScript", highlight: true },
      { name: "JavaScript (ES6+)", highlight: true },
      { name: "HTML5 / CSS3", highlight: false },
      { name: "Tailwind CSS", highlight: true }
    ]
  },
  {
    name: "Backend Development",
    iconName: "Server",
    skills: [
      { name: "Node.js", highlight: true },
      { name: "Express.js", highlight: true },
      { name: "RESTful APIs", highlight: true }
    ]
  },
  {
    name: "Mobile Development",
    iconName: "Smartphone",
    skills: [
      { name: "Flutter", highlight: true },
      { name: "Dart", highlight: false }
    ]
  },
  {
    name: "Database Systems",
    iconName: "Database",
    skills: [
      { name: "MongoDB", highlight: true },
      { name: "PostgreSQL", highlight: true },
      { name: "MySQL", highlight: false }
    ]
  },
  {
    name: "Programming Languages",
    iconName: "Code2",
    skills: [
      { name: "TypeScript", highlight: true },
      { name: "Python", highlight: true },
      { name: "Java", highlight: true },
      { name: "JavaScript", highlight: true }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "ahadu-elearning",
    title: "Ahadu E-Learning Platform",
    description: "A feature-rich web platform empowering students and educators with interactive courses and assessment tools.",
    longDescription: "Designed and built scalable back-end microservices and interactive front-end components for online learning, quiz engines, and real-time student progress tracking.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    category: "Full-Stack",
    image: "/projects/ahadu_elearning.png",
    githubUrl: "https://github.com/BirukWagnew/Ahadulearning",
    liveUrl: "https://ahadu-elearning.demo",
    featured: true,
    highlights: ["Real-time progress analytics", "Role-based access control", "Responsive video & quiz player"]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Cloud Engineering Learner",
    organization: "Cloud & DevOps Intensive Program",
    period: "2025 - Present",
    location: "Addis Ababa, Ethiopia",
    type: "Learning",
    description: [
      "Architected hands-on Google Cloud Platform (GCP) and AWS cloud infrastructure projects.",
      "Implemented CI/CD pipelines with GitHub Actions for automated linting, testing, and container deployment.",
      "Containerized microservices using Docker and orchestrated multi-container applications with Kubernetes."
    ]
  },
  {
    id: "exp-2",
    role: "Full-Stack Developer",
    organization: "Freelance & Independent Projects",
    period: "2024 - Present",
    location: "Addis Ababa, Ethiopia",
    type: "Work",
    description: [
      "Built production-ready web applications using React, TypeScript, Node.js, and MongoDB/PostgreSQL.",
      "Designed sleek modern UI/UX with Tailwind CSS adhering to accessibility and SEO standards.",
      "Developed backend RESTful APIs with secure JWT authentication and optimized database queries."
    ]
  },
  {
    id: "exp-3",
    role: "Hult Prize Ethiopia Operations Lead",
    organization: "Hult Prize Ethiopia",
    period: "2024 - 2025",
    location: "Ethiopia",
    type: "Leadership",
    description: [
      "Led operational logistics for national entrepreneurship competitions engaging university innovators across Ethiopia.",
      "Coordinated cross-functional teams, judges, and student leads to host seamless pitch events.",
      "Managed digital communication channels and event workflow automation."
    ]
  },
  {
    id: "exp-4",
    role: "Hult Prize Campus Director",
    organization: "Hult Prize at Wollo University",
    period: "2023 - 2024",
    location: "Dessie / Kombolcha, Ethiopia",
    type: "Leadership",
    description: [
      "Directed campus-wide social entrepreneurship challenge inspiring student startups to solve global SDGs.",
      "Organized workshops, mentorship sessions, and final campus pitch competitions.",
      "Recognized for outstanding leadership and community mobilization."
    ]
  },
  {
    id: "exp-5",
    role: "Fixed Network Engineering Intern",
    organization: "Ethio Telecom",
    period: "2025",
    location: "Addis Ababa, Ethiopia",
    type: "Internship",
    description: [
      "Gained practical experience in fixed telecom network architecture, fiber optics routing, and broadband infrastructure.",
      "Analyzed network diagnostic logs and assisted senior engineers in troubleshooting routing configurations.",
      "Documented technical specifications for network node expansions."
    ]
  }
];

export const EDUCATION: EducationItem = {
  degree: "Bachelor of Science in Information Technology (BSIT)",
  institution: "Wollo University",
  graduationYear: "Graduated in 2026",
  highlights: [
    "Comprehensive coursework in Cloud Computing, Network Engineering, Software Engineering, and Database Management Systems.",
    "Active participant in tech clubs, open-source initiatives, and campus leadership roles.",
    "Capstone Project focused on modern web platforms and distributed cloud systems."
  ]
};
