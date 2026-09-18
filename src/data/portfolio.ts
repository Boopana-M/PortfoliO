export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  github?: string;
  live?: string;
  date?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  description: string[];
  skills: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  description: string;
}

export interface OpenSourceItem {
  id: string;
  title: string;
  repo: string;
  stars?: number;
  description: string;
  link: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface PortfolioData {
  person: {
    name: string;
    title: string;
    tagline: string;
    location: string;
    email: string;
    signature: string;
  };
  about: {
    title: string;
    chapterNumber: string;
    paragraphs: string[];
    quote: string;
  };
  skills: {
    title: string;
    chapterNumber: string;
    categories: SkillCategory[];
  };
  projects: {
    title: string;
    chapterNumber: string;
    items: ProjectItem[];
  };
  experience: {
    title: string;
    chapterNumber: string;
    items: ExperienceItem[];
  };
  achievements: {
    title: string;
    chapterNumber: string;
    items: AchievementItem[];
  };
  openSource: {
    title: string;
    chapterNumber: string;
    items: OpenSourceItem[];
  };
  resume: {
    title: string;
    chapterNumber: string;
    summary: string;
    education: {
      degree: string;
      institution: string;
      period: string;
    }[];
    downloadUrl: string;
  };
  contact: {
    title: string;
    chapterNumber: string;
    subtitle: string;
    email: string;
    github: string;
    linkedin: string;
    location: string;
  };
}

export const portfolio: PortfolioData = {
  person: {
    name: "Boopana M",
    title: "SOFTWARE ENGINEER",
    tagline: "Turning ideas into impactful digital experiences",
    location: "Global / Remote",
    email: "boopana@example.com",
    signature: "Boopana M."
  },
  about: {
    title: "About Me",
    chapterNumber: "01",
    paragraphs: [
      "Hi! I'm Boopana, a passionate Software Engineer who loves turning ideas into impactful digital experiences.",
      "I enjoy building clean, efficient and meaningful solutions that solve real-world problems.",
      "I'm a lifelong learner, problem solver and a builder at heart."
    ],
    quote: "“The craft of software is indistinguishable from real magic when executed with mastery and heart.”"
  },
  skills: {
    title: "Skills",
    chapterNumber: "02",
    categories: [
      {
        title: "Languages",
        skills: ["JavaScript", "Python", "Java", "C++"]
      },
      {
        title: "Web Development",
        skills: ["React", "Node.js", "Express", "MongoDB"]
      },
      {
        title: "Tools & Technologies",
        skills: ["Git", "GitHub", "VS Code", "Docker"]
      },
      {
        title: "Other Skills",
        skills: ["DSA", "Problem Solving", "System Design", "OOPs"]
      }
    ]
  },
  projects: {
    title: "Notable Incantations",
    chapterNumber: "03",
    items: [
      {
        id: "debugra",
        title: "Debugra Codebase Portal",
        category: "Full Stack / AI Platform",
        description: "An advanced collaborative code execution and AI-assisted debugging platform supporting multi-language runtime sandboxes.",
        technologies: ["React", "Express", "Wandbox API", "Firebase", "Groq AI"],
        github: "https://github.com",
        live: "https://example.com"
      },
      {
        id: "chronicle",
        title: "Aetherial Visual Engine",
        category: "Graphics & UI Library",
        description: "High-performance shader-driven micro-interaction framework with realistic physical sheet deformation and particles.",
        technologies: ["TypeScript", "WebGL", "CSS 3D", "Canvas API"],
        github: "https://github.com",
        live: "https://example.com"
      }
    ]
  },
  experience: {
    title: "Chronicles & Quests",
    chapterNumber: "04",
    items: [
      {
        id: "exp-1",
        role: "Software Engineering Scholar",
        organization: "Tech Guild Arcana",
        period: "2024 — Present",
        description: [
          "Engineered high-throughput REST APIs and microservice endpoints.",
          "Implemented state-of-the-art interactive frontends with silky 60fps animations."
        ],
        skills: ["React", "TypeScript", "Node.js", "PostgreSQL"]
      },
      {
        id: "exp-2",
        role: "Open Source Contributor",
        organization: "Global Open Source Fellowships",
        period: "2023 — 2024",
        description: [
          "Contributed optimizations and security patches to core ecosystem tooling.",
          "Mentored aspiring developers through technical documentation and reviews."
        ],
        skills: ["Git", "CI/CD", "JavaScript", "Docker"]
      }
    ]
  },
  achievements: {
    title: "Honors & Trophies",
    chapterNumber: "05",
    items: [
      {
        id: "ach-1",
        title: "Grand Hackathon Champion",
        issuer: "National Tech Conclave",
        year: "2025",
        description: "Ranked 1st among 300+ teams for architecting an intelligent distributed crisis-response system."
      },
      {
        id: "ach-2",
        title: "GSSoC Top Contributor",
        issuer: "GirlScript Summer of Code",
        year: "2024",
        description: "Recognized as a premier contributor for outstanding code submissions and peer reviews."
      }
    ]
  },
  openSource: {
    title: "Open Source Artifacts",
    chapterNumber: "06",
    items: [
      {
        id: "os-1",
        title: "wizard-page-engine",
        repo: "Boopana-M/wizard-page-engine",
        stars: 142,
        description: "Lightweight CSS 3D realistic turning engine with dual-face illumination.",
        link: "https://github.com"
      },
      {
        id: "os-2",
        title: "react-parchment-ui",
        repo: "Boopana-M/react-parchment-ui",
        stars: 98,
        description: "Manuscript components, antique seals, and parchment textures for React.",
        link: "https://github.com"
      }
    ]
  },
  resume: {
    title: "Curriculum Vitae",
    chapterNumber: "07",
    summary: "Dedicated software engineer with demonstrable expertise across modern web infrastructure, distributed systems, and refined UI craftsmanship.",
    education: [
      {
        degree: "Bachelor of Technology in Computer Science",
        institution: "Premier Institute of Technology",
        period: "2022 — 2026"
      }
    ],
    downloadUrl: "#"
  },
  contact: {
    title: "Dispatch An Owl",
    chapterNumber: "08",
    subtitle: "Send a dispatch across the ether for collaborations, quests, or discussions.",
    email: "boopana@example.com",
    github: "https://github.com/Boopana-M",
    linkedin: "https://linkedin.com",
    location: "Global / Remote"
  }
};
