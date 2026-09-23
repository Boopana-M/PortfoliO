export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'individual' | 'team';
  description: string;
  detailedHighlights?: string[];
  achievements?: string[];
  architectureHighlights?: string;
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
  summary?: string;
  description: string[];
  detailedHighlights?: string[];
  achievements?: string[];
  skills: string[];
  organizationType?: string;
  location?: string;
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
  award: string;
  year: string;
  description: string;
  iconName?: string;
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
        skills: ["Java", "C++", "C", "Python"]
      },
      {
        title: "Java Full Stack Development",
        skills: ["Java", "Spring Boot", "Spring MVC", "REST APIs", "JPA", "Hibernate", "JDBC", "React.js", "HTML", "CSS", "JavaScript"]
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
        skills: ["Data Structures & Algorithms", "OOP", "DBMS", "Computer Networks", "Operating Systems", "System Design"]
      },
      {
        title: "Developer Tools",
        skills: ["Git", "GitHub", "VS Code", "IntelliJ IDEA", "Postman", "Figma", "Jupyter Notebook"]
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
        organizationType: "AI & Tech Education",
        period: "June 2026",
        location: "Remote",
        type: "Internship",
        summary: "Engineered Agentic AI & RAG pipelines for contextual knowledge retrieval with LangChain, FAISS, and Model Context Protocol (MCP).",
        description: [
          "Engineered Agentic AI and RAG pipelines for knowledge retrieval and question answering using LangChain, FAISS, ChromaDB, Ollama, OpenAI, and embedding models.",
          "Implemented MCP-based tool integrations, prompt engineering, LoRA/PEFT concepts, and multi-agent workflows connecting LLMs with external services."
        ],
        detailedHighlights: [
          "Architected end-to-end Retrieval-Augmented Generation (RAG) pipelines leveraging FAISS and ChromaDB vector stores to index multi-modal technical documentation.",
          "Constructed autonomous Model Context Protocol (MCP) servers enabling LLMs to safely invoke external development tools, database querying, and runtime diagnostic scripts.",
          "Orchestrated multi-agent conversational workflows with LangGraph and Ollama local models, drastically reducing hallucination rates in technical Q&A workflows.",
          "Explored Parameter-Efficient Fine-Tuning (PEFT/LoRA) for adapting open-source instruction-tuned models to specialized coding benchmarks."
        ],
        achievements: [
          "Integrated 5+ MCP tools for automated file manipulation and external API querying",
          "Reduced vector query latency by 35% through optimal chunking and embeddings caching",
          "Engineered multi-agent routing architecture for specialized problem domains"
        ],
        skills: ["LangChain", "RAG", "ChromaDB", "MCP", "Ollama", "FAISS", "Prompt Engineering"]
      },
      {
        id: "exp-2",
        role: "MERN Full Stack Intern",
        organization: "RAMPeX Technologies",
        organizationType: "Enterprise Software Consultancy",
        period: "December 2025",
        location: "Remote",
        type: "Internship",
        summary: "Developed 3 full-stack MERN applications featuring secure JWT authentication, MongoDB schemas, and RESTful API endpoints.",
        description: [
          "Developed 3 full-stack applications using React, Node.js, Express, and MongoDB with REST APIs, JWT authentication, and state management.",
          "Designed reusable CRUD API architecture for MongoDB to improve maintainability across application modules."
        ],
        detailedHighlights: [
          "Engineered 3 full-stack production web applications from ground up utilizing React.js, Node.js, Express, and MongoDB.",
          "Architected secure authentication workflows featuring JSON Web Tokens (JWT), password hashing (bcrypt), and role-based access control (RBAC).",
          "Designed highly reusable CRUD REST API controllers and optimized Mongoose database schemas with indexing.",
          "Implemented responsive client-side state management, interactive data tables, and input sanitization to ensure application resilience."
        ],
        achievements: [
          "Successfully deployed 3 full-stack web applications with robust API backends",
          "Created modular CRUD controller templates reducing backend boilerplate code by 40%",
          "Implemented comprehensive JWT token refresh and error-handling middleware"
        ],
        skills: ["React", "Node.js", "Express", "MongoDB", "JWT", "REST APIs", "Mongoose"]
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
        subtitle: "Real-Time Indian Sign Language Translator Chrome Extension",
        category: "individual",
        description: "A Chrome extension that translates spoken YouTube content into Indian Sign Language using NLP gloss generation, MediaPipe pose extraction, and 3-tier fallback.",
        architectureHighlights: "Chrome Manifest V3 extension with Web Speech API audio capture, FastAPI microservice backend, MediaPipe skeletal tracking, and Three.js 3D avatar rendering.",
        detailedHighlights: [
          "Developed an asynchronous Chrome Manifest V3 extension capturing live YouTube audio streams and translating English speech to Indian Sign Language (ISL) grammar gloss.",
          "Implemented an NLP gloss parser with NLTK and Ollama LLM to rearrange English Subject-Verb-Object into ISL Subject-Object-Verb syntactic structure.",
          "Engineered an interactive 3D humanoid avatar using Three.js and VRM model animation, translating mapped phoneme gestures in real time.",
          "Designed a robust 3-tier fallback system (Prerecorded Video -> 3D Skeletal Animation -> Fingerspelling) guaranteeing 100% gesture coverage."
        ],
        achievements: [
          "Real-time video caption translation with sub-500ms pipeline latency",
          "100% vocabulary coverage through 3-tier gesture animation fallback engine",
          "Engineered lightweight client-side Three.js renderer running at smooth 60 FPS"
        ],
        technologies: ["Python", "FastAPI", "Ollama", "MediaPipe", "Three.js", "VRM", "JavaScript", "Manifest V3", "NLTK", "SQLite"],
        github: "https://github.com/Boopana-M",
        live: "https://github.com/Boopana-M"
      },
      {
        id: "proj-2",
        title: "Guardian Paws",
        subtitle: "Women’s Emergency Safety & Geospatial Response Platform",
        category: "team",
        description: "Safety platform featuring real-time GPS tracking, automated safety check-ins, fail-safe emergency alerts with Twilio SMS, Firebase Realtime Database & Google Maps.",
        architectureHighlights: "Cross-platform mobile application connected with Firebase Realtime Database, Google Maps Geocoding & Twilio Emergency SMS dispatch API.",
        detailedHighlights: [
          "Engineered a mission-critical safety platform featuring real-time high-precision GPS tracking and live geofenced route monitoring.",
          "Built an automated SOS panic dispatch system that triggers multi-channel emergency SMS alerts and live coordinate tracking via Twilio API.",
          "Constructed a responsive emergency guardian portal using React and TypeScript for real-time telemetry observation.",
          "Architected offline-first cached emergency protocols with local SQLite fallback during network outages."
        ],
        achievements: [
          "Instant sub-second SMS alert broadcast to designated emergency contacts",
          "Real-time live location tracking accuracy within 5-meter radius",
          "Built full multi-platform synchronization across Flutter mobile & React web"
        ],
        technologies: ["Flutter", "React", "TypeScript", "Firebase", "Twilio API", "Google Maps API", "REST APIs"],
        github: "https://github.com/Boopana-M",
        live: "https://github.com/Boopana-M"
      },
      {
        id: "proj-3",
        title: "Library Recommender Agent",
        subtitle: "AI-Powered Semantic Search & Book Recommendation Engine",
        category: "individual",
        description: "Hybrid AI recommendation system combining semantic vector search and keyword matching to produce personalized Top-5 book recommendations with explainable results.",
        architectureHighlights: "Hybrid Search pipeline marrying SentenceTransformers dense vector embeddings with TF-IDF BM25 sparse keyword ranking, synthesized by Groq Llama 3.3 70B.",
        detailedHighlights: [
          "Engineered a hybrid recommendation engine combining dense semantic vector embeddings (SentenceTransformers) with sparse TF-IDF keyword indexing.",
          "Integrated Groq API with Llama 3.3 70B to synthesize personalized book summaries and explainable reasoning for why each title was recommended.",
          "Optimized cosine similarity matrix calculations across 10,000+ academic volumes with Scikit-Learn and NumPy vectorization.",
          "Constructed an interactive query UI allowing students to describe complex research topics in natural language."
        ],
        achievements: [
          "94% semantic relevance score across multi-disciplinary academic book queries",
          "Reduced search vector similarity query time to under 80ms using precomputed embeddings",
          "Generated instant natural language explanations for all recommended titles"
        ],
        technologies: ["Python", "SentenceTransformers", "Scikit-Learn", "Groq API", "Llama 3.3 70B", "TF-IDF", "Pandas", "NumPy"],
        github: "https://github.com/Boopana-M",
        live: "https://github.com/Boopana-M"
      },
      {
        id: "proj-4",
        title: "Faculty OS",
        subtitle: "10-Agent Collaborative Academic Workflow Automation Platform",
        category: "team",
        description: "Multi-agent system with 10 collaborative agents automating faculty workflows from daily lecture tasks through institutional reporting with LangGraph.",
        architectureHighlights: "Multi-Agent System built with LangGraph, Claude 3.5 API, ChromaDB vector store, FastAPI async microservices, and PostgreSQL database.",
        detailedHighlights: [
          "Architected a stateful multi-agent system comprising 10 specialized AI agents handling lecture planning, grading assistance, syllabus tracking, and institutional reports.",
          "Employed LangGraph state graphs with conditional routing to coordinate synchronous and asynchronous agent delegation.",
          "Constructed a ChromaDB vector store for departmental curriculum syllabi and university regulations.",
          "Engineered role-based authentication and intuitive dashboard interfaces with React, TypeScript, and Tailwind CSS."
        ],
        achievements: [
          "Automated ~65% of repetitive administrative reporting and course planning workflows",
          "Built multi-agent state persistence across long-running academic evaluation cycles",
          "Implemented comprehensive role-based access control and audit logging"
        ],
        technologies: ["TypeScript", "React", "FastAPI", "PostgreSQL", "LangGraph", "Claude API", "ChromaDB", "Tailwind CSS"],
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
        award: "Shortlisted for Round 2",
        year: "2026",
        description: "Shortlisted for Round 2 of the Google Big Code Challenge 2026 among 1,500+ national participants in algorithmic problem-solving.",
        iconName: "Code",
        proofUrl: "https://github.com/Boopana-M"
      },
      {
        id: "ach-2",
        title: "Odoo Hackathon 2026",
        award: "Finalist",
        year: "2026",
        description: "Selected as a finalist for the Odoo Hackathon 2026 and advanced to the final round.",
        iconName: "Zap",
        proofUrl: "https://github.com/Boopana-M"
      },
      {
        id: "ach-3",
        title: "CodeLee Programming Competition",
        award: "3× Consecutive Winner",
        year: "2023 - 2025",
        description: "Won the CodeLee Programming Competition for 3 consecutive years during college, demonstrating consistent competitive programming and problem-solving performance.",
        iconName: "Trophy",
        proofUrl: "https://github.com/Boopana-M"
      },
      {
        id: "ach-4",
        title: "Createathon Web Design Competition 2024",
        award: "Winner",
        year: "2024",
        description: "Won the Createathon Web Design Competition by building and presenting a web product in a time-constrained competition environment.",
        iconName: "Palette",
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
