export const PERSONAL = {
  name: "Akshat Dahiya",
  role: "AI/ML Engineer & Full Stack Developer",
  tagline: "Building intelligent systems at the intersection of design, data, and code.",
  email: "dahiyakashat10@gmail.com",
  phone: "+91 7015708113",
  location: "Sonipat, Haryana, India",
  university: "Manipal University Jaipur",
  degree: "B.Tech in Computer Science Engineering (AI & ML)",
  graduationYear: "2028",
  status: "Open to internships & collaborations",
};

export const SUMMARY =
  "Motivated 3rd-year Computer Science student specializing in AI & Machine Learning, with a strong foundation in Python, C, and modern web development. Passionate about building real-world, data-driven solutions and exploring the frontiers of generative AI. Currently sharpening skills through IBM-certified programs, hands-on ML projects, and a rigorous self-directed learning path in distributed systems and product engineering.";

export const MISSION =
  "To engineer intelligent products that feel inevitable — where great design, thoughtful data, and robust infrastructure meet. I believe the best software is invisible: it anticipates, adapts, and empowers.";

export const UNIQUE = [
  {
    icon: "Brain",
    title: "AI-First Mindset",
    description: "Trained through IBM programs in ML, Python for Data Science, and Generative AI — I approach problems through a lens of intelligent automation.",
  },
  {
    icon: "Code2",
    title: "Full-Stack Range",
    description: "Comfortable across the stack — from low-level C and DSA to modern HTML/CSS/JS and UI/UX — giving me a 360° view of product engineering.",
  },
  {
    icon: "TrendingUp",
    title: "Self-Directed Learner",
    description: "7+ industry certifications from IBM, Coursera, and Johns Hopkins. I build my own curriculum and ship projects alongside coursework.",
  },
  {
    icon: "Lightbulb",
    title: "Product Thinking",
    description: "I don't just write code — I think about the user, the business problem, and the measurable impact before touching a keyboard.",
  },
];

export const SKILLS = {
  Programming: [
    { name: "Python", level: 85 },
    { name: "C", level: 70 },
  ],
  "Web Development": [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 75 },
  ],
  "Core CS": [
    { name: "Data Structures & Algorithms", level: 78 },
    { name: "DBMS", level: 80 },
    { name: "Operating Systems", level: 72 },
  ],
  "AI & ML": [
    { name: "Machine Learning", level: 80 },
    { name: "Prompt Engineering", level: 82 },
    { name: "Data Analytics", level: 78 },
  ],
  Tools: [
    { name: "Git", level: 80 },
    { name: "GitHub", level: 85 },
    { name: "VS Code", level: 95 },
  ],
};

export const PROJECTS = [
  {
    title: "Movie Recommendation System",
    subtitle: "ML · Content-Based Filtering · Python",
    year: "2024",
    problem:
      "Users are overwhelmed by choice in the streaming era. With thousands of titles available, discovery becomes noise — leading to decision fatigue and poor engagement.",
    solution:
      "Designed and implemented a content-based movie recommendation engine that learns from user preferences and surfaces highly relevant titles using cosine similarity over movie metadata.",
    architecture: [
      "Data Pipeline: Curated a structured movie dataset with genres, keywords, and cast",
      "Feature Extraction: TF-IDF vectorization on metadata fields",
      "Similarity Engine: Cosine similarity matrix over item vectors",
      "Inference Layer: Top-N recommendations ranked by user profile overlap",
    ],
    tech: ["Python", "Machine Learning", "Pandas", "NumPy", "Scikit-learn", "Mathematical Modeling"],
    features: [
      "Content-based filtering algorithm",
      "Cosine similarity scoring",
      "Personalized recommendation output",
      "Data-driven insights pipeline",
    ],
    challenges:
      "Cold-start problem for new users and data sparsity in metadata. Mitigated through careful feature engineering and robust fallback strategies.",
    results:
      "Delivered a working end-to-end recommendation prototype that demonstrates the full ML lifecycle — from data prep to model inference — and forms the foundation for a scalable streaming recommendation service.",
  },
];

export const CERTIFICATIONS = [
  {
    title: "Introduction to Large Language Model",
    issuer: "Google cloud",
    year: "2024",
    category: "AI & ML",
    link: "/certificates/llm.pdf", // 👈 ADD THIS
  },
  {
    title: "Generative AI: Prompt Engineering Basics",
    issuer: "IBM",
    year: "2024",
    level: "Intermediate",
    category: "AI & ML",
    link:"/certificates/Generative Ai.pdf",
  },
  {
    title: "Python Essentials",
    issuer: "Cisco",
    year: "2024",
    level: "Intermediate",
    category: "AI & ML",
    link:"/certificates/PythonEssentials2Update20260604-31-o4ozop.pdf",
  },
  {
    title: "Introduction to Responsible Ai",
    issuer: "Google Cloud",
    year: "2024",
    category: "Ai",
    link:"/certificates/Responsibleai.pdf",
  },
  {
    title: "SQL: A Practical Introduction to Querying Databases",
    issuer: "IBM · Coursera",
    year: "2024",
    level: "Foundational",
    category: "Data",
    link:"/certificates/SQL certificate.pdf",
  },
  {
    title: "HTML, CSS, and JavaScript for Web Developers",
    issuer: "Johns Hopkins University · Coursera",
    year: "2024",
    level: "Foundational",
    category: "Web",
    link:"/certificates/WhatsApp Image 2025-06-30 at 14.36.38_01a26983.pdf",
  },
  {
    title: "Microsoft Copilot",
    issuer: "Microsoft",
    year: "2024",
    level: "Medium",
    category: "Ai",
    link:"/certificates/Microsoft copilot.pdf",
  },
];

export const EDUCATION = [
  {
    institution: "Manipal University Jaipur",
    degree: "B.Tech in Computer Science Engineering (AI & ML)",
    period: "2024 – 2028",
    highlights: [
      "Specialization in Artificial Intelligence & Machine Learning",
      "Core coursework: DSA, DBMS, Operating Systems",
      "Focus on applied ML, Python, and data-driven engineering",
    ],
    futureGoals:
      "Pursue a research internship in NLP or computer vision, contribute to open-source ML libraries, and build production-grade AI systems before graduation.",
  },
];

export const LEARNING_JOURNEY = [
  {
    date: "2024",
    title: "Foundation & Certification Sprint",
    description:
      "Completed 7 industry certifications across AI/ML, data analytics, and web development from IBM, Coursera, and Johns Hopkins University.",
    tags: ["IBM", "Coursera", "Self-Learning"],
  },
  {
    date: "2024",
    title: "First ML Project Shipped",
    description:
      "Built a complete Movie Recommendation System with content-based filtering and cosine similarity — moving from theory to a working inference pipeline.",
    tags: ["Python", "ML", "Project"],
  },
  {
    date: "2024",
    title: "IIT Kharagpur Collaboration",
    description:
      "Participated in 'Break into Data Analytics' workshop by Coding Ninjas 10X Club in collaboration with IIT Kharagpur, gaining exposure to industry analytics workflows.",
    tags: ["Analytics", "Workshop", "IIT-KGP"],
  },
  {
    date: "2025",
    title: "Generative AI Exploration",
    description:
      "Dived deep into prompt engineering, LLM fundamentals, and applied AI — building the foundation for advanced AI-first product thinking.",
    tags: ["GenAI", "Prompt Engineering", "LLMs"],
  },
  {
    date: "2025",
    title: "Full-Stack Expansion",
    description:
      "Extending into modern web stack, component architecture, and system design — aiming to ship full products, not just models.",
    tags: ["Web", "System Design", "Growth"],
  },
];

export const TECH_STACK = [
  "Python", "C", "JavaScript", "HTML5", "CSS3",
  "Machine Learning", "Prompt Engineering", "Data Analytics",
  "SQL", "Pandas", "NumPy", "Git", "GitHub", "VS Code",
  "React", "Next.js", "TypeScript", "Node.js", "PostgreSQL",
  "Tailwind CSS", "Framer Motion", "Figma", "Excel",
];

export const TESTIMONIALS = [
  {
    name: "Prof. (Placeholder)",
    role: "Faculty, Manipal University Jaipur",
    quote: "Akshat combines rare curiosity with disciplined execution. His self-directed certifications and projects demonstrate maturity beyond his year.",
    avatar: "👨🏫",
  },
  {
    name: "Peer Collaborator (Placeholder)",
    role: "Project Team Lead",
    quote: "He's the person you want on a difficult problem — thorough, calm, and genuinely excited to learn. He brings energy and structure to any team.",
    avatar: "",
  },
  {
    name: "Mentor (Placeholder)",
    role: "Industry Advisor",
    quote: "One of those students who treats learning like a craft. His portfolio, certifications, and project work already reflect professional standards.",
    avatar: "",
  },
];

export const BLOG_POSTS = [
  {
    title: "Why Content-Based Filtering Still Matters in the Age of LLMs",
    category: "Machine Learning",
    date: "Coming Soon",
    readTime: "8 min",
  },
  {
    title: "Prompt Engineering: A Mental Model for Working with LLMs",
    category: "AI",
    date: "Coming Soon",
    readTime: "6 min",
  },
  {
    title: "From Certifications to Code: My Self-Learning Playbook",
    category: "Career",
    date: "Coming Soon",
    readTime: "5 min",
  },
];

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];
