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
    tagline: "Building scalable web solutions and high-performance digital experiences",
    location: "Global / Remote",
    email: "boopana@example.com",
    signature: "Boopana M."
  },
  about: {
    title: "About Me",
    chapterNumber: "01",
    paragraphs: [
      "Hi! I'm Boopana, a passionate Software Engineer who specializes in building scalable web applications and high-performance user interfaces.",
      "I focus on writing clean, maintainable code and solving complex real-world problems with robust engineering principles.",
      "Driven by curiosity and continuous learning, I am eager to contribute to forward-thinking engineering teams."
    ],
    quote: "“Software engineering is the discipline of creating reliable, elegant, and impactful systems that stand the test of time.”"
  },
  skills: {
    title: "Technical Skills",
    chapterNumber: "02",
    categories: [
      {
        title: "Programming Languages",
        skills: ["JavaScript", "Python", "Java", "C++"]
      },
      {
        title: "Full-Stack Development",
        skills: ["React", "Node.js", "Express", "MongoDB"]
      },
      {
        title: "Tools & DevOps",
        skills: ["Git", "GitHub", "VS Code", "Docker"]
      },
      {
        title: "Core Competencies",
        skills: ["DSA", "Problem Solving", "System Design", "OOPs"]
      }
    ]
  },
  projects: {
    title: "Featured Projects",
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
        title: "Interactive 3D Graphics Engine",
        category: "Graphics & UI Library",
        description: "High-performance shader-driven micro-interaction framework with realistic physical transformations and rendering optimizations.",
        technologies: ["TypeScript", "WebGL", "CSS 3D", "Canvas API"],
        github: "https://github.com",
        live: "https://example.com"
      }
    ]
  },
  experience: {
    title: "Experience",
    chapterNumber: "04",
    items: [
      {
        id: "exp-1",
        role: "Software Engineering Intern",
        organization: "Tech Solutions Inc.",
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
        organization: "Global Open Source Programs",
        period: "2023 — 2024",
        description: [
          "Contributed performance optimizations and bug fixes to core developer tooling.",
          "Collaborated with global engineering communities through code reviews and documentation."
        ],
        skills: ["Git", "CI/CD", "JavaScript", "Docker"]
      }
    ]
  },
  achievements: {
    title: "Honors & Achievements",
    chapterNumber: "05",
    items: [
      {
        id: "ach-1",
        title: "National Hackathon Winner",
        issuer: "National Tech Conclave",
        year: "2025",
        description: "Secured 1st place among 300+ teams for architecting an intelligent distributed crisis-response management platform."
      },
      {
        id: "ach-2",
        title: "GSSoC Top Contributor",
        issuer: "GirlScript Summer of Code",
        year: "2024",
        description: "Recognized as a top-tier contributor for high-impact code submissions and active open-source peer reviews."
      }
    ]
  },
  openSource: {
    title: "Open Source Contributions",
    chapterNumber: "06",
    items: [
      {
        id: "os-1",
        title: "page-flip-engine",
        repo: "Boopana-M/page-flip-engine",
        stars: 142,
        description: "Lightweight CSS 3D realistic page-turn animation engine with dual-face illumination.",
        link: "https://github.com"
      },
      {
        id: "os-2",
        title: "react-parchment-ui",
        repo: "Boopana-M/react-parchment-ui",
        stars: 98,
        description: "Custom UI component library with bespoke textures and accessibility-focused interactions.",
        link: "https://github.com"
      }
    ]
  },
  resume: {
    title: "Resume & Education",
    chapterNumber: "07",
    summary: "Dedicated software engineer with strong technical foundations in full-stack web development, data structures, algorithms, and system design.",
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
    title: "Get In Touch",
    chapterNumber: "08",
    subtitle: "I am actively looking for software engineering opportunities. Let's connect!",
    email: "boopana@example.com",
    github: "https://github.com/Boopana-M",
    linkedin: "https://linkedin.com",
    location: "Global / Remote"
  }
};
