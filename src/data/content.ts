import {
  Database,
  Flame,
  Github,
  Linkedin,
  Twitter,
  Wrench,
} from "lucide-react";

export default {
  site_name: "Mohammadreza Amani",
  footer_note: `© ${new Date().getFullYear()} Portfolio. All rights reserved.`,
  default_project_image:
    "https://projectsly.com/images/blog/best-project-design.png?v=1686553999071005322",
  default_blog_image:
    "https://www-static.cdn-one.com/cmsimages/en_what-is-a-blog-1.png",
  default_user_image: "https://avatars.githubusercontent.com/u/55929607?v=4",
  about: {
    name: "Mohammadreza Amani",
    title: "Software Engineer & AI Specialist",
    bio: "Software Engineer with expertise in backend development, AI models (LLMs & Computer Vision), and scalable web applications.",
    image: "https://avatars.githubusercontent.com/u/64687226",
    social: [
      {
        name: "github",
        url: "https://github.com/MohammadrezaAmani",
        icon: Github,
      },
      {
        name: "linkedin",
        url: "https://www.linkedin.com/in/mohammadreza-amani/",
        icon: Linkedin,
      },
      {
        name: "twitter",
        url: "https://twitter.com/johndoe",
        icon: Twitter,
      },
    ],
    skills: [
      {
        icon: Wrench,
        category: "Programming Languages",
        technologies: [
          "Python",
          "JavaScript",
          "TypeScript",
          "Go",
          "Rust",
          "C++",
          "Bash",
        ],
      },
      {
        icon: Flame,
        category: "Technologies & Frameworks",
        technologies: [
          "FastAPI",
          "Django",
          "Node.js (Express, NestJS)",
          "Gin (Go)",
          "React",
          "Next.js",
          "TailwindCSS",
          "Docker",
          "Kubernetes",
          "RabbitMQ",
          "Celery",
          "OpenAI API",
          "LangChain",
          "TensorFlow",
          "PyTorch",
          "Elasticsearch",
          "ETL Pipelines",
          "Microservices Architecture",
        ],
      },
      {
        icon: Database,
        category: "Databases",
        technologies: ["PostgreSQL", "Redis", "MongoDB", "MinIO", "OpenSearch"],
      },
    ],
    interests: [
      "Hiking",
      "Swimming",
      "Music",
      "Long anime series",
      "Food & Cooking",
      "Mobina",
      "Traveling",
      "Dogs",
    ],
  },
  experience: [
    {
      id: 1,
      company: "Hojan Company",
      position: "Team Lead & Senior AI Engineer",
      period: "2024 – Present",
      description:
        "Leading AI-driven projects, including RAG-based document processing and AI-powered chatbots for investment analysis.",
      achievements: [
        "Developed 'Hojan Biz', an AI system similar to ChatGPT with document processing.",
        "Designed AI chatbots for investment forecasting and market analysis.",
        "Built AI-driven BI systems and multiple ETL pipelines.",
      ],
    },
    {
      id: 2,
      company: "Yektanet (Short-term Contract)",
      position: "Software Engineer",
      period: "2024",
      description:
        "Developed fraud detection systems for digital advertising using Django and ML.",
      achievements: [
        "Built and deployed a machine learning-based fraud detection pipeline.",
      ],
    },
    {
      id: 3,
      company: "Private Company",
      position: "Senior Backend Developer",
      period: "2023 – 2024",
      description:
        "Led backend development for an educational platform serving international organizations.",
      achievements: [
        "Designed and deployed large-scale ETL pipelines.",
        "Developed scalable API architecture using Django and FastAPI.",
      ],
    },
    {
      id: 4,
      company: "AruShop (Remote)",
      position: "Full Stack Developer",
      period: "2019 – 2023",
      description:
        "Built and maintained a full-stack e-commerce platform using Django and Next.js.",
      achievements: ["Managed platform operations for three years."],
    },
  ],
  education: [
    {
      id: 1,
      institution: "Polytechnic University, Tehran",
      degree: "Bachelor of Science, Computer Science",
      period: "2020",
      description: "Focused on backend development and cloud computing.",
    },
  ],
  projects: [
    {
      id: 1,
      title: "Hojan Biz",
      description:
        "AI-powered system similar to ChatGPT with RAG-based document processing, deployed for governmental institutions.",
      tags: ["AI", "RAG", "Django", "FastAPI"],
      image: null,
      link: "https://github.com/MohammadrezaAmani/hojan-biz",
    },
    {
      id: 2,
      title: "InvestmentAI",
      description:
        "AI chatbot for investment recommendations, ROI predictions, and market analysis, deployed in Isfahan and expanding to Dubai.",
      tags: ["AI", "Machine Learning", "Finance"],
      image:
        "https://www.investopedia.com/thmb/GMKaRhdGn5dOSqVS-F-q_VtTGek=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/investment-ec4b8aab8c50432a9fd6707ed1c2749a.jpg",
      link: "https://github.com/MohammadrezaAmani/investment-ai",
    },
    {
      id: 3,
      title: "Smart-Search",
      description: "Advanced search system using Elasticsearch and FastAPI.",
      tags: ["Elasticsearch", "FastAPI", "AI"],
      image: null,
      link: "https://github.com/MohammadrezaAmani/smart-search",
    },
    {
      id: 4,
      title: "Tangerine Bot",
      description:
        "AI-powered Telegram bot integrated with Hugging Face models.",
      tags: ["AI", "NLP", "Telegram Bot"],
      image: null,
      link: "https://github.com/MohammadrezaAmani/tangerine-bot",
    },
    {
      id: 5,
      title: "Squirrel",
      description: "Persian web crawler for structured data extraction.",
      tags: ["Web Scraping", "Automation", "Data Mining"],
      image: null,
      link: "https://github.com/MohammadrezaAmani/squirrel",
    },
  ],
  blog: [
    {
      id: 1,
      title: "RAG-Based AI Systems in Production",
      date: "2024-04-10",
      content:
        "# RAG-Based AI Systems in Production\n\nHow Retrieval-Augmented Generation (RAG) is transforming AI applications...",
      tags: ["AI", "Machine Learning", "LLMs"],
      image:
        "https://images.unsplash.com/photo-1665686377065-08ba896d16fd?w=800&h=400&fit=crop&q=80",
    },
    {
      id: 2,
      title: "Scaling AI Applications with Kubernetes",
      date: "2024-03-20",
      content:
        "# Scaling AI Applications with Kubernetes\n\nBest practices for deploying and scaling AI applications...",
      tags: ["Kubernetes", "DevOps", "AI"],
      image:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=400&fit=crop&q=80",
    },
  ],
  faq: [],
};
