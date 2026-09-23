export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'individual' | 'team';
  description: string;
  technologies: string[];
  github?: string;
  live?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  type: string;
  description: string[];
  skills: string[];
}

export interface EducationItem {
  degree: string;
  institution?: string;
  period: string;
  cgpa: string;
  coursework: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  subtitle?: string;
  year: string;
  description: string;
  proofUrl?: string;
}

export interface OpenSourceItem {
  org: string;
  repo: string;
  role: string;
  stats: string;
  description: string;
  link: string;
}

export interface ProblemSolvingItem {
  platform: string;
  solved: string;
  highlight: string;
  url: string;
}

export interface PortfolioData {
  person: {
    name: string;
    role: string;
    tagline: string;
    photo: string;
    email: string;
    github: string;
    linkedin: string;
    resumeUrl: string;
    signature: string;
  };
  home: {
    chapterNumber: string;
    title: string;
  };
  about: {
    chapterNumber: string;
    title: string;
    paragraphs: string[];
  };
  education: {
    chapterNumber: string;
    title: string;
    item: EducationItem;
  };
  skills: {
    chapterNumber: string;
    title: string;
    categories: { title: string; skills: string[] }[];
  };
  experience: {
    chapterNumber: string;
    title: string;
    items: ExperienceItem[];
  };
  projects: {
    chapterNumber: string;
    title: string;
    items: ProjectItem[];
  };
  achievements: {
    chapterNumber: string;
    title: string;
    items: AchievementItem[];
  };
  openSource: {
    chapterNumber: string;
    title: string;
    item: OpenSourceItem;
  };
  problemSolving: {
    chapterNumber: string;
    title: string;
    platforms: ProblemSolvingItem[];
  };
  research: {
    chapterNumber: string;
    title: string;
    status: string;
    statement: string;
  };
  codingStats: {
    chapterNumber: string;
    title: string;
    githubUsername: string;
    totalProblemsSolved: string;
    platformsCount: number;
  };
  resume: {
    chapterNumber: string;
    title: string;
    message: string;
    fileName: string;
    downloadUrl: string;
  };
  contact: {
    chapterNumber: string;
    title: string;
    invitation: string;
    message: string;
    email: string;
    github: string;
    linkedin: string;
  };
}

export const portfolio: PortfolioData = {
  person: {
    name: "Boopana M",
    role: "Software Engineer | Full Stack Developer | AI Enthusiast",
    tagline: "Building intelligent systems, solving problems, and turning ideas into impactful products.",
    photo: "/boopana-photo.png",
    email: "boopana608@gmail.com",
    github: "https://github.com/Boopana-M",
    linkedin: "https://linkedin.com/in/boopana-m",
    resumeUrl: "#",
    signature: "Boopana M."
  },
  home: {
    chapterNumber: "01",
    title: "Home"
  },
  about: {
    chapterNumber: "02",
    title: "About Me",
    paragraphs: [
      "I'm Boopana, a Computer and Communication Engineering student passionate about software engineering, AI, and problem solving.",
      "I enjoy building full-stack applications, exploring Agentic AI and RAG systems, and solving algorithmic problems.",
      "My experience spans web development, AI-powered applications, open-source contribution, and competitive programming.",
      "I'm currently focused on growing as a software engineer and building products that combine strong engineering with practical impact."
    ]
  },
  education: {
    chapterNumber: "03",
    title: "Education",
    item: {
      degree: "B.E. Computer and Communication Engineering",
      period: "2024 – 2028",
      cgpa: "8.51 / 10.0",
      coursework: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming",
        "Database Management Systems",
        "Computer Networks",
        "Operating Systems",
        "System Design"
      ]
    }
  },
  skills: {
    chapterNumber: "04",
    title: "Skills",
    categories: [
      {
        title: "Languages",
        skills: ["C", "C++", "Java", "Python"]
      },
      {
        title: "Web Development",
        skills: ["React.js", "Spring Boot", "Node.js", "Express.js", "HTML", "CSS", "REST APIs", "JWT", "Responsive Design"]
      },
      {
        title: "AI / ML",
        skills: ["NLP", "LLMs", "RAG", "Agentic AI", "MCP Servers"]
      },
      {
        title: "Databases",
        skills: ["MySQL", "MongoDB", "PostgreSQL"]
      },
      {
        title: "Core CS",
        skills: ["DSA", "OOP", "DBMS", "Computer Networks", "Operating Systems", "System Design"]
      },
      {
        title: "Tools & Platforms",
        skills: ["Git", "GitHub", "VS Code", "Postman", "Figma", "Jupyter Notebook", "Firebase", "Back4App"]
      }
    ]
  },
  experience: {
    chapterNumber: "05",
    title: "Experience",
    items: [
      {
        id: "exp-1",
        role: "Agentic AI Intern",
        organization: "AlgoTutor",
        period: "June 2026",
        type: "Internship",
        description: [
          "Engineered Agentic AI and RAG pipelines for knowledge retrieval and question answering using LangChain, FAISS, ChromaDB, Ollama, OpenAI, and embedding models.",
          "Implemented MCP-based tool integrations, prompt engineering, LoRA/PEFT concepts, and multi-agent workflows connecting LLMs with external services."
        ],
        skills: ["LangChain", "RAG", "ChromaDB", "MCP", "Ollama"]
      },
      {
        id: "exp-2",
        role: "Open Source Contributor",
        organization: "Learning Unlimited",
        period: "March 2026",
        type: "Open Source",
        description: [
          "Contributed 4 merged pull requests to the ESP-Website repository, delivering bug fixes and feature enhancements reviewed and accepted by project maintainers."
        ],
        skills: ["Git", "GitHub", "React", "Bug Fixes"]
      },
      {
        id: "exp-3",
        role: "MERN Full Stack Intern",
        organization: "RAMPeX Technologies",
        period: "December 2025",
        type: "Internship",
        description: [
          "Developed 3 full-stack applications using React, Node.js, Express, and MongoDB with REST APIs, JWT authentication, and state management.",
          "Designed reusable CRUD API architecture for MongoDB to improve maintainability across application modules."
        ],
        skills: ["React", "Node.js", "Express", "MongoDB", "JWT"]
      }
    ]
  },
  projects: {
    chapterNumber: "06",
    title: "Projects",
    items: [
      {
        id: "proj-1",
        title: "ISL Avatar",
        subtitle: "Real-Time Sign Language Translator — Ongoing",
        category: "individual",
        description: "A Chrome extension that translates spoken YouTube content into Indian Sign Language using NLP gloss generation, MediaPipe pose extraction, and 3-tier fallback.",
        technologies: ["Python", "FastAPI", "Ollama", "MediaPipe", "Three.js/VRM", "JavaScript", "Manifest V3", "NLTK", "SQLite"],
        github: "https://github.com/Boopana-M",
        live: "https://github.com/Boopana-M"
      },
      {
        id: "proj-2",
        title: "Guardian Paws",
        subtitle: "Women’s Safety Platform",
        category: "team",
        description: "Safety platform featuring real-time GPS tracking, automated safety check-ins, fail-safe emergency alerts with Twilio SMS, Firebase Realtime Database & Google Maps.",
        technologies: ["Flutter", "React", "TypeScript", "Back4App", "Firebase", "Twilio", "Google Maps API"],
        github: "https://github.com/Boopana-M",
        live: "https://github.com/Boopana-M"
      },
      {
        id: "proj-3",
        title: "College Library Book Recommender Agent",
        subtitle: "AI-Powered Search & Recommendation",
        category: "individual",
        description: "Hybrid AI recommendation system combining semantic vector search and keyword matching to produce personalized Top-5 book recommendations with explainable results.",
        technologies: ["Python", "SentenceTransformers", "Scikit-Learn", "Groq API", "Llama 3.3 70B", "TF-IDF", "Pandas", "NumPy"],
        github: "https://github.com/Boopana-M",
        live: "https://github.com/Boopana-M"
      },
      {
        id: "proj-4",
        title: "Faculty OS",
        subtitle: "Multi-Agent Workflow Platform",
        category: "team",
        description: "Multi-agent system with 10 collaborative agents automating faculty workflows from daily lecture tasks through institutional reporting with LangGraph.",
        technologies: ["TypeScript", "Tailwind CSS", "FastAPI", "PostgreSQL", "LangGraph", "Claude API", "ChromaDB"],
        github: "https://github.com/Boopana-M",
        live: "https://github.com/Boopana-M"
      }
    ]
  },
  achievements: {
    chapterNumber: "07",
    title: "Achievements",
    items: [
      {
        id: "ach-1",
        title: "Google Big Code Challenge 2026",
        year: "2026",
        description: "Shortlisted for Round 2 among 1,500+ national participants in algorithmic problem-solving.",
        proofUrl: "https://github.com/Boopana-M"
      },
      {
        id: "ach-2",
        title: "CodeLee Programming Competition 2025",
        year: "2025",
        description: "Winner & 2nd Runner-Up across 2 consecutive editions, placing in the top 3 among 500+ participants.",
        proofUrl: "https://github.com/Boopana-M"
      },
      {
        id: "ach-3",
        title: "Createathon Web Design Competition 2024",
        year: "2024",
        description: "Winner of a time-constrained web design competition.",
        proofUrl: "https://github.com/Boopana-M"
      }
    ]
  },
  openSource: {
    chapterNumber: "08",
    title: "Open Source",
    item: {
      org: "Learning Unlimited",
      repo: "ESP-Website",
      role: "Open Source Contributor",
      stats: "4 Merged PRs · 2026",
      description: "Contributed 4 pull requests merged into the ESP-Website repository, delivering bug fixes and feature enhancements reviewed and accepted by project maintainers.",
      link: "https://github.com/Boopana-M"
    }
  },
  problemSolving: {
    chapterNumber: "09",
    title: "Problem Solving",
    platforms: [
      {
        platform: "SkillRack",
        solved: "950+ Problems",
        highlight: "Rank: 27544 · Bronze Medals",
        url: "https://www.skillrack.com/"
      },
      {
        platform: "LeetCode",
        solved: "440+ Problems",
        highlight: "Max Rating: 1580",
        url: "https://leetcode.com/"
      },
      {
        platform: "CodeChef",
        solved: "170+ Problems",
        highlight: "Competitive Problem Solving",
        url: "https://www.codechef.com/"
      },
      {
        platform: "Coding Ninjas",
        solved: "65+ Problems",
        highlight: "Data Structures & Algorithms",
        url: "https://www.naukri.com/code360"
      }
    ]
  },
  research: {
    chapterNumber: "10",
    title: "Research & Conference Submissions",
    status: "Exploring Opportunities",
    statement: "Currently exploring research opportunities in AI, Agentic Systems, and intelligent applications."
  },
  codingStats: {
    chapterNumber: "11",
    title: "GitHub / Coding Stats",
    githubUsername: "Boopana-M",
    totalProblemsSolved: "1,625+",
    platformsCount: 4
  },
  resume: {
    chapterNumber: "12",
    title: "Resume",
    message: "Want the complete picture? Download my resume to explore my experience, projects, skills, and achievements.",
    fileName: "Boopana_M_Resume.pdf",
    downloadUrl: "/Boopana_M_Resume.pdf"
  },
  contact: {
    chapterNumber: "13",
    title: "Contact",
    invitation: "Let's build something together.",
    message: "I'm always open to interesting projects, software engineering opportunities, collaborations, and conversations around technology.",
    email: "boopana608@gmail.com",
    github: "https://github.com/Boopana-M",
    linkedin: "https://linkedin.com/in/boopana-m"
  }
};
