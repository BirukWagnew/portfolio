/**
 * Single source of truth for every piece of personal content on the site.
 * UI components never hard-code copy — edit this file to update the portfolio.
 */

export interface Skill {
  name: string;
  /** Short note shown on hover (tooling, context, or level of exposure). */
  note?: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  iconName: 'Cloud' | 'Terminal' | 'Code2' | 'Network';
  blurb: string;
  skills: Skill[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  category: 'Cloud & DevOps' | 'Full-Stack' | 'Mobile & AI';
  image: string;
  imageAlt: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  highlights: string[];
  /** Set for work that is not shipped yet, rendered as a subtle badge. */
  status?: 'In progress' | 'Planned';
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  location?: string;
  description: string[];
  type: 'Internship' | 'Leadership' | 'Volunteering' | 'Projects';
}

export interface EducationItem {
  degree: string;
  institution: string;
  graduationYear: string;
  highlights: string[];
}

export const PERSONAL_INFO = {
  name: 'Biruk Wagnew',
  role: 'Information Technology Graduate',
  headline: 'Cloud & DevOps Engineer · Full-Stack Developer',
  tagline:
    'I build and automate the infrastructure that modern applications run on — containers, pipelines and cloud services — and the applications themselves.',
  intro:
    'IT graduate moving into professional cloud and DevOps engineering, with a full-stack development and networking foundation behind it.',
  location: 'Addis Ababa, Ethiopia',
  email: 'birukwagnew445@gmail.com',
  phone: '+251 94 217 7690',
  /** Drop a PDF at public/biruk-wagnew-cv.pdf to make this download real. */
  resumeUrl: '/biruk-wagnew-cv.pdf',
  availability: 'Open to Cloud, DevOps & Full-Stack roles',
  socials: {
    github: 'https://github.com/BirukWagnew',
    linkedin: 'https://et.linkedin.com/in/birukwagnew',
  },
};

/** Nodes rendered by the 3D hero scene — cloud → docker → k8s → ci/cd → apps. */
export const PIPELINE_NODES = [
  { label: 'Cloud', position: [-3.1, 0.9, 0] as [number, number, number] },
  { label: 'Docker', position: [-1.55, -0.7, 0.7] as [number, number, number] },
  { label: 'Kubernetes', position: [0, 0.85, -0.5] as [number, number, number] },
  { label: 'CI/CD', position: [1.6, -0.75, 0.6] as [number, number, number] },
  { label: 'Apps', position: [3.1, 0.75, 0] as [number, number, number] },
];

export const ABOUT_HIGHLIGHTS: { title: string; body: string; iconName: string }[] = [
  {
    iconName: 'GraduationCap',
    title: 'BSc in Information Technology',
    body: 'Wollo University, 2026. Coursework across networking, systems administration, software engineering and databases.',
  },
  {
    iconName: 'Cloud',
    title: 'Cloud & DevOps focus',
    body: 'Hands-on with GCP and AWS, Linux, Docker, Kubernetes and CI/CD pipelines that build, test and deploy automatically.',
  },
  {
    iconName: 'Code2',
    title: 'Development background',
    body: 'MERN-stack applications end to end — React front-ends, Node/Express APIs and MongoDB data models — plus Flutter on mobile.',
  },
  {
    iconName: 'Network',
    title: 'Networking experience',
    body: 'Fixed-network internship at Ethio Telecom: TCP/IP, network configuration, Cisco Packet Tracer and PON/FTTx fundamentals.',
  },
  {
    iconName: 'Users',
    title: 'Leadership & teamwork',
    body: 'Hult Prize campus and operations lead, EVASUE fellowship volunteer — coordinating teams, events and delivery timelines.',
  },
  {
    iconName: 'Sparkles',
    title: 'Continuous learning',
    body: 'A steady habit of shipping small infrastructure and product projects to turn new tooling into practical experience.',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'cloud',
    name: 'Cloud',
    iconName: 'Cloud',
    blurb: 'Provisioning and running workloads on managed cloud platforms.',
    skills: [
      { name: 'Google Cloud Platform', note: 'Compute, storage, IAM, Cloud Run' },
      { name: 'AWS', note: 'EC2, S3, IAM fundamentals' },
    ],
  },
  {
    id: 'devops',
    name: 'DevOps',
    iconName: 'Terminal',
    blurb: 'Automating the path from a commit to a running service.',
    skills: [
      { name: 'Linux', note: 'Administration, shell scripting' },
      { name: 'Git & GitHub', note: 'Branching workflows, reviews' },
      { name: 'Docker', note: 'Images, Compose, multi-stage builds' },
      { name: 'Kubernetes', note: 'Deployments, services, config' },
      { name: 'CI/CD', note: 'GitHub Actions pipelines' },
      { name: 'Networking', note: 'Routing, DNS, load balancing' },
    ],
  },
  {
    id: 'development',
    name: 'Development',
    iconName: 'Code2',
    blurb: 'Building the applications that sit on top of the platform.',
    skills: [
      { name: 'JavaScript', note: 'ES6+, TypeScript' },
      { name: 'React', note: 'Hooks, component architecture' },
      { name: 'Node.js', note: 'Services and tooling' },
      { name: 'Express', note: 'REST APIs, auth' },
      { name: 'MongoDB', note: 'Schema design, aggregation' },
      { name: 'Flutter', note: 'Cross-platform mobile' },
    ],
  },
  {
    id: 'networking',
    name: 'Networking',
    iconName: 'Network',
    blurb: 'Fundamentals from telecom fieldwork and university labs.',
    skills: [
      { name: 'TCP/IP', note: 'Addressing, subnetting, troubleshooting' },
      { name: 'Network configuration', note: 'Switches, routers, VLANs' },
      { name: 'Cisco Packet Tracer', note: 'Topology design and simulation' },
      { name: 'PON / FTTx', note: 'Fiber access network fundamentals' },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'ahadu-elearning',
    title: 'Ahadu E-Learning',
    description:
      'MERN online learning platform with courses, assessments and student progress tracking.',
    longDescription:
      'A full-stack learning platform where instructors publish courses and students work through lessons and quizzes. Built with a React front-end, an Express/MongoDB API and role-based access for students, instructors and administrators.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    category: 'Full-Stack',
    image: '/projects/ahadu_elearning.png',
    imageAlt: 'Ahadu E-Learning platform course dashboard',
    githubUrl: 'https://github.com/BirukWagnew/Ahadulearning',
    featured: true,
    highlights: [
      'Role-based access for students, instructors and admins',
      'Course, lesson and quiz management with progress tracking',
      'REST API with JWT authentication and MongoDB data models',
    ],
  },
  {
    id: 'evasue-fellowship',
    title: 'KIOT EVASUE Fellowship Website',
    description:
      'Web platform for the Wollo University KIOT EVASUE fellowship — activities, announcements and member information.',
    longDescription:
      'A website built for the fellowship at Wollo University KIOT to publish activities and announcements, share resources and keep member information organised in one place instead of scattered across chat groups.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    category: 'Full-Stack',
    image: '/projects/fellowship_mgmt.jpg',
    imageAlt: 'EVASUE fellowship website home page',
    githubUrl: 'https://github.com/BirukWagnew',
    featured: true,
    highlights: [
      'Announcement and activity publishing for fellowship members',
      'Structured member and resource information',
      'Responsive layout designed for mobile-first usage',
    ],
  },
  {
    id: 'containerised-cicd',
    title: 'Containerised App Delivery Pipeline',
    description:
      'Dockerised web application shipped to the cloud through an automated GitHub Actions pipeline.',
    longDescription:
      'A practice infrastructure project that packages a web application into a container image, runs lint, test and build stages on every push, and deploys the resulting image to a managed cloud runtime.',
    tags: ['Docker', 'GitHub Actions', 'GCP', 'Linux'],
    category: 'Cloud & DevOps',
    image: '/projects/cloud_file_upload.jpg',
    imageAlt: 'Cloud deployment pipeline project preview',
    githubUrl: 'https://github.com/BirukWagnew',
    featured: true,
    status: 'In progress',
    highlights: [
      'Multi-stage Dockerfile producing a small runtime image',
      'GitHub Actions workflow for lint, test, build and deploy',
      'Environment configuration and secrets kept out of the image',
    ],
  },
  {
    id: 'k8s-microservices',
    title: 'Kubernetes Microservices Lab',
    description:
      'Multi-service application deployed on Kubernetes with declarative manifests and rolling updates.',
    longDescription:
      'A learning lab that runs several services on a Kubernetes cluster using declarative manifests: deployments, services, config maps and ingress, with rolling updates and health probes.',
    tags: ['Kubernetes', 'Docker', 'Linux', 'CI/CD'],
    category: 'Cloud & DevOps',
    image: '/projects/ai_portfolio.jpg',
    imageAlt: 'Kubernetes microservices lab project preview',
    githubUrl: 'https://github.com/BirukWagnew',
    featured: false,
    status: 'Planned',
    highlights: [
      'Declarative deployments, services and ingress',
      'Health probes and rolling update strategy',
      'Config and secret separation per environment',
    ],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'ethio-telecom',
    role: 'Fixed Network Engineering Intern',
    organization: 'Ethio Telecom',
    period: '2025',
    location: 'Ethiopia',
    type: 'Internship',
    description: [
      'Worked alongside engineers on fixed broadband infrastructure, including PON/FTTx access networks and fiber routing.',
      'Assisted with network configuration and diagnostics, reading logs to trace connectivity and routing issues.',
      'Documented node and link details used for maintenance and expansion planning.',
    ],
  },
  {
    id: 'hult-operations',
    role: 'Operations Lead',
    organization: 'Hult Prize Ethiopia',
    period: '2024 — 2025',
    location: 'Ethiopia',
    type: 'Leadership',
    description: [
      'Coordinated logistics for national entrepreneurship events bringing together university teams across the country.',
      'Worked with judges, campus leads and volunteers to keep pitch events running to schedule.',
      'Managed communication channels and the digital workflow behind registrations.',
    ],
  },
  {
    id: 'hult-campus',
    role: 'Campus Director',
    organization: 'Hult Prize at Wollo University',
    period: '2023 — 2024',
    location: 'Kombolcha, Ethiopia',
    type: 'Leadership',
    description: [
      'Ran the campus edition of the challenge end to end, from recruitment through to the final pitch.',
      'Organised workshops and mentoring sessions for student teams.',
      'Built and led a volunteer organising team.',
    ],
  },
  {
    id: 'evasue',
    role: 'Volunteer & Web Contributor',
    organization: 'EVASUE — Wollo University KIOT',
    period: '2023 — 2025',
    location: 'Kombolcha, Ethiopia',
    type: 'Volunteering',
    description: [
      'Built and maintained the fellowship website used for announcements and activities.',
      'Supported events and coordinated with student teams on communication and content.',
    ],
  },
  {
    id: 'self-directed',
    role: 'Cloud & DevOps Projects',
    organization: 'Self-directed',
    period: '2024 — Present',
    type: 'Projects',
    description: [
      'Containerised applications with Docker and deployed them to GCP and AWS services.',
      'Built CI/CD pipelines with GitHub Actions covering lint, test, build and deploy stages.',
      'Practised Kubernetes deployments, Linux administration and infrastructure troubleshooting.',
    ],
  },
];

export const EDUCATION: EducationItem = {
  degree: 'BSc in Information Technology',
  institution: 'Wollo University',
  graduationYear: '2026',
  highlights: [
    'Networking, systems administration, software engineering and database coursework',
    'Capstone work on modern web platforms and cloud deployment',
  ],
};

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];
