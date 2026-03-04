export type LmsModule = {
  title: string;
  description: string;
  lessons: number;
  duration: string;
};

export type LmsTemplate = {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  modules: LmsModule[];
};

export const lmsTemplates: LmsTemplate[] = [
  {
    id: "full-stack",
    title: "Full-Stack Developer Onboarding",
    description:
      "Specifically designed for Full-Stack Developers. The modules within serve as a guide and should be modified as per your technology & processes.",
    icon: "https://ui-avatars.com/api/?name=FS&background=6366f1&color=fff&size=128",
    color: "indigo",
    modules: [
      {
        title: "Company & Culture Overview",
        description: "Mission, values, team structure, and communication tools.",
        lessons: 4,
        duration: "1h 30m",
      },
      {
        title: "Development Environment Setup",
        description: "IDE, repos, CI/CD pipeline, local dev environment.",
        lessons: 6,
        duration: "2h",
      },
      {
        title: "Frontend Architecture",
        description: "Component library, state management, styling conventions.",
        lessons: 8,
        duration: "3h",
      },
      {
        title: "Backend & API Layer",
        description: "API design, database models, authentication, microservices.",
        lessons: 8,
        duration: "3h",
      },
      {
        title: "Testing & Deployment",
        description: "Unit tests, integration tests, staging, and production workflows.",
        lessons: 5,
        duration: "2h",
      },
      {
        title: "Cloud Labs: Hands-On Projects",
        description: "Live sandbox environments to practice real-world scenarios.",
        lessons: 3,
        duration: "4h",
      },
    ],
  },
  {
    id: "mobile-dev",
    title: "Mobile Developer Onboarding",
    description:
      "Specifically designed for Mobile Developers. The modules within serve as a guide and should be modified as per your technology & processes.",
    icon: "https://ui-avatars.com/api/?name=MD&background=ec4899&color=fff&size=128",
    color: "pink",
    modules: [
      {
        title: "Company & Culture Overview",
        description: "Mission, values, team structure, and communication tools.",
        lessons: 4,
        duration: "1h 30m",
      },
      {
        title: "Mobile Dev Environment",
        description: "Xcode, Android Studio, emulators, device testing setup.",
        lessons: 5,
        duration: "2h",
      },
      {
        title: "App Architecture & Navigation",
        description: "Project structure, navigation patterns, state management.",
        lessons: 7,
        duration: "2h 30m",
      },
      {
        title: "Native APIs & Integrations",
        description: "Push notifications, camera, location, payments.",
        lessons: 6,
        duration: "2h",
      },
      {
        title: "App Store & Distribution",
        description: "Build pipelines, code signing, TestFlight, Play Console.",
        lessons: 4,
        duration: "1h 30m",
      },
      {
        title: "Cloud Labs: Mobile Projects",
        description: "Live sandbox environments to build and test mobile features.",
        lessons: 3,
        duration: "4h",
      },
    ],
  },
  {
    id: "devops",
    title: "DevOps Onboarding",
    description:
      "Specifically designed for DevOps engineers. The modules within serve as a guide and should be modified as per your technology & processes.",
    icon: "https://ui-avatars.com/api/?name=DO&background=14b8a6&color=fff&size=128",
    color: "teal",
    modules: [
      {
        title: "Company & Culture Overview",
        description: "Mission, values, team structure, and communication tools.",
        lessons: 4,
        duration: "1h 30m",
      },
      {
        title: "Infrastructure Overview",
        description: "Cloud providers, networking, DNS, load balancers.",
        lessons: 6,
        duration: "2h 30m",
      },
      {
        title: "CI/CD Pipelines",
        description: "Build systems, deployment strategies, rollback procedures.",
        lessons: 7,
        duration: "3h",
      },
      {
        title: "Monitoring & Observability",
        description: "Logging, metrics, alerting, incident response runbooks.",
        lessons: 5,
        duration: "2h",
      },
      {
        title: "Security & Compliance",
        description: "Access control, secrets management, audit trails.",
        lessons: 4,
        duration: "1h 30m",
      },
      {
        title: "Cloud Labs: Infrastructure Projects",
        description: "Live sandbox environments to provision and manage infrastructure.",
        lessons: 3,
        duration: "4h",
      },
    ],
  },
  {
    id: "eng-manager",
    title: "Engineering Manager Onboarding",
    description:
      "Specifically designed for Engineering Managers. The modules within serve as a guide and should be modified as per your technology & processes.",
    icon: "https://ui-avatars.com/api/?name=EM&background=f97316&color=fff&size=128",
    color: "orange",
    modules: [
      {
        title: "Company & Culture Overview",
        description: "Mission, values, org chart, leadership principles.",
        lessons: 5,
        duration: "2h",
      },
      {
        title: "Team & Process Overview",
        description: "Sprint cadence, retros, 1:1 templates, team health.",
        lessons: 6,
        duration: "2h",
      },
      {
        title: "Technical Architecture",
        description: "System overview, tech debt, architectural decision records.",
        lessons: 5,
        duration: "2h",
      },
      {
        title: "People Management",
        description: "Hiring, performance reviews, growth frameworks, feedback.",
        lessons: 6,
        duration: "2h 30m",
      },
      {
        title: "Delivery & Roadmap",
        description: "Planning, estimation, stakeholder communication, OKRs.",
        lessons: 4,
        duration: "1h 30m",
      },
    ],
  },
  {
    id: "standard",
    title: "Standard Onboarding Plan",
    description:
      "A general-purpose onboarding template. Customize the content of this template to fit any role or department.",
    icon: "https://ui-avatars.com/api/?name=SO&background=64748b&color=fff&size=128",
    color: "slate",
    modules: [
      {
        title: "Welcome & Orientation",
        description: "Company overview, mission, culture, and key contacts.",
        lessons: 3,
        duration: "1h",
      },
      {
        title: "Tools & Access",
        description: "Setting up accounts, tools, and communication channels.",
        lessons: 4,
        duration: "1h 30m",
      },
      {
        title: "Role-Specific Training",
        description: "Core skills and knowledge for your specific role.",
        lessons: 6,
        duration: "3h",
      },
      {
        title: "Processes & Workflows",
        description: "How work gets done — from request to delivery.",
        lessons: 4,
        duration: "1h 30m",
      },
      {
        title: "Assessment & Review",
        description: "Knowledge checks and 30/60/90 day review milestones.",
        lessons: 3,
        duration: "1h",
      },
    ],
  },
];
