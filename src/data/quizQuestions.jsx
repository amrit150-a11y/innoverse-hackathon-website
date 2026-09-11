const quizQuestions = [
  // Engineers' Day & Sir M. Visvesvaraya (Questions 1–4)
  {
    id: 1,
    question: "On what date is National Engineers' Day celebrated in India every year?",
    options: ["August 15", "September 15", "November 14", "January 26"],
    answer: "September 15"
  },
  {
    id: 2,
    question: "Whose birth anniversary does National Engineers' Day in India commemorate?",
    options: ["Dr. A.P.J. Abdul Kalam", "Sir M. Visvesvaraya", "Homi J. Bhabha", "C.V. Raman"],
    answer: "Sir M. Visvesvaraya"
  },
  {
    id: 3,
    question: "Which major dam in Mysore was designed and supervised by Sir M. Visvesvaraya?",
    options: ["Bhadra Dam", "Hirakud Dam", "Krishnaraja Sagara (KRS) Dam", "Bhakra Nangal Dam"],
    answer: "Krishnaraja Sagara (KRS) Dam"
  },
  {
    id: 4,
    question: "What prestigious civilian award was conferred upon Sir M. Visvesvaraya in 1955?",
    options: ["Padma Shri", "Padma Bhushan", "Bharat Ratna", "Param Vir Chakra"],
    answer: "Bharat Ratna"
  },

  // Part A: Beginner Tools (5–7)
  {
    id: 5,
    question: "Which lightweight code editor developed by Microsoft is widely used by students and developers?",
    options: ["Notepad++", "VS Code", "Sublime Text", "Eclipse"],
    answer: "VS Code"
  },
  {
    id: 6,
    question: "What core command-line utility tracks history and code version changes locally?",
    options: ["Git", "Docker", "npm", "Postman"],
    answer: "Git"
  },
  {
    id: 7,
    question: "Name the cloud-based hosting platform where developers store and share Git repositories.",
    options: ["Google Drive", "GitHub", "Dropbox", "Vercel"],
    answer: "GitHub"
  },

  // Part B: Build & Debug Tools (8–14)
  {
    id: 8,
    question: "Which built-in browser panel allows you to inspect elements, edit CSS live, and view console logs?",
    options: ["Chrome DevTools", "Postman", "Figma", "Docker Dashboard"],
    answer: "Chrome DevTools"
  },
  {
    id: 9,
    question: "What tool is primarily used by developers to test and debug backend REST APIs without a frontend?",
    options: ["Canva", "Postman", "VS Code", "Git"],
    answer: "Postman"
  },
  {
    id: 10,
    question: "Before writing code, which design and prototyping tool is commonly used to plan user interfaces?",
    options: ["Figma", "npm", "Vercel", "GitHub"],
    answer: "Figma"
  },
  {
    id: 11,
    question: "Why should engineering students learn to use a visual layout tool like Canva?",
    options: [
      "To compile C++ code",
      "To build professional presentations, project reports, and pitch materials",
      "To manage database queries",
      "To deploy backend servers"
    ],
    answer: "To build professional presentations, project reports, and pitch materials"
  },
  {
    id: 12,
    question: "What command-line package manager is used to install libraries for JavaScript/Node.js projects?",
    options: ["pip", "npm", "docker", "git"],
    answer: "npm"
  },
  {
    id: 13,
    question: "What package manager is standard for installing external libraries and packages in Python projects?",
    options: ["npm", "pip", "composer", "gem"],
    answer: "pip"
  },
  {
    id: 14,
    question: "Why is learning version control (Git) early essential for team college projects?",
    options: [
      "It makes your laptop run faster",
      "It prevents code loss and allows safe collaboration without overwriting teammates' work",
      "It automatically designs your UI",
      "It replaces the need for an internet connection"
    ],
    answer: "It prevents code loss and allows safe collaboration without overwriting teammates' work"
  },

  // Part C: Intermediate & Future Tech (15–20)
  {
    id: 15,
    question: "What containerization tool solves the 'it worked on my machine' deployment issue?",
    options: ["Docker", "Figma", "Postman", "Canva"],
    answer: "Docker"
  },
  {
    id: 16,
    question: "Which popular cloud platform allows instant frontend deployment and hosting directly from GitHub?",
    options: ["Vercel", "Postman", "DevTools", "npm"],
    answer: "Vercel"
  },
  {
    id: 17,
    question: "What does the acronym RAG stand for in modern AI application architecture?",
    options: [
      "Randomized Algorithm Generator",
      "Retrieval-Augmented Generation",
      "Rapid Application Growth",
      "Remote API Gateway"
    ],
    answer: "Retrieval-Augmented Generation"
  },
  {
    id: 18,
    question: "How does an AI Agent differ fundamentally from a standard static text-chat model?",
    options: [
      "It can only answer in code",
      "It can autonomously plan steps, make decisions, and execute tools to complete a goal",
      "It runs entirely offline without internet",
      "It does not use a language model"
    ],
    answer: "It can autonomously plan steps, make decisions, and execute tools to complete a goal"
  },
  {
    id: 19,
    question: "What framework is widely used for chaining language models with external tools, vector stores, and APIs?",
    options: ["LangChain / LangGraph", "Postman", "DevTools", "Figma"],
    answer: "LangChain / LangGraph"
  },
  {
    id: 20,
    question: "What does MCP stand for in the context of connecting AI models securely to data sources and development tools?",
    options: [
      "Master Control Program",
      "Model Context Protocol",
      "Multi-Cloud Platform",
      "Machine Code Processor"
    ],
    answer: "Model Context Protocol"
  }
];

export default quizQuestions;