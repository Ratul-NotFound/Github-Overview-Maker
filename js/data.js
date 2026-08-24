/* =====================================================
   GITHUB PROFILE STUDIO — DATA LAYER
   8 Radically Distinct Archetypes + Full Tech Stack
   ===================================================== */

const APP_DATA = {

  archetypes: {

    cyberpunk: {
      id: "cyberpunk",
      name: "⚡ Cyberpunk Glow",
      tag: "Neon Cyan & Dark HUD",
      font: "'Fira Code', monospace",
      bg: "#050811",
      accent: "#00f0ff",
      accent2: "#ff0055",
      gradientPreview: "linear-gradient(135deg, #050811 0%, #0a1628 50%, #050811 100%)",
      borderGlow: "rgba(0,240,255,0.5)"
    },

    neofetch: {
      id: "neofetch",
      name: "💻 Terminal CLI",
      tag: "Fastfetch & Unix Shell",
      font: "'Fira Code', monospace",
      bg: "#0a0e0b",
      accent: "#00ff66",
      accent2: "#00ccff",
      gradientPreview: "linear-gradient(135deg, #0a0e0b 0%, #0d1a0e 50%, #0a0e0b 100%)",
      borderGlow: "rgba(0,255,102,0.5)"
    },

    bento: {
      id: "bento",
      name: "🍱 Modern Bento",
      tag: "Clean Grid & Cards",
      font: "'Plus Jakarta Sans', sans-serif",
      bg: "#000000",
      accent: "#38bdf8",
      accent2: "#818cf8",
      gradientPreview: "linear-gradient(135deg, #000000 0%, #0a0a14 50%, #000000 100%)",
      borderGlow: "rgba(56,189,248,0.5)"
    },

    rpg: {
      id: "rpg",
      name: "⚔️ RPG Quest",
      tag: "Character Sheet & Stats",
      font: "'Plus Jakarta Sans', sans-serif",
      bg: "#100c1a",
      accent: "#f59e0b",
      accent2: "#ec4899",
      gradientPreview: "linear-gradient(135deg, #100c1a 0%, #1a1028 50%, #100c1a 100%)",
      borderGlow: "rgba(245,158,11,0.5)"
    },

    arcade8bit: {
      id: "arcade8bit",
      name: "👾 8-Bit Arcade",
      tag: "Retro Pixel & High Score",
      font: "'Press Start 2P', monospace",
      bg: "#0d0820",
      accent: "#facc15",
      accent2: "#ff007f",
      gradientPreview: "linear-gradient(135deg, #0d0820 0%, #180e35 50%, #0d0820 100%)",
      borderGlow: "rgba(250,204,21,0.5)"
    },

    kawaii: {
      id: "kawaii",
      name: "🌸 Kawaii Sakura",
      tag: "Cozy Pastel & Cute Diary",
      font: "'Plus Jakarta Sans', sans-serif",
      bg: "#160e20",
      accent: "#f472b6",
      accent2: "#c084fc",
      gradientPreview: "linear-gradient(135deg, #160e20 0%, #211130 50%, #160e20 100%)",
      borderGlow: "rgba(244,114,182,0.5)"
    },

    aurora: {
      id: "aurora",
      name: "🌌 Deep Space",
      tag: "Cosmic Nebula & Blue Sky",
      font: "'Space Grotesk', sans-serif",
      bg: "#04020f",
      accent: "#a855f7",
      accent2: "#38bdf8",
      gradientPreview: "linear-gradient(135deg, #04020f 0%, #0c0621 50%, #04020f 100%)",
      borderGlow: "rgba(168,85,247,0.5)"
    },

    minimal: {
      id: "minimal",
      name: "🖤 Minimal Mono",
      tag: "Clean Typography & B&W",
      font: "'Plus Jakarta Sans', sans-serif",
      bg: "#000000",
      accent: "#ffffff",
      accent2: "#52525b",
      gradientPreview: "linear-gradient(135deg, #000000 0%, #111111 50%, #000000 100%)",
      borderGlow: "rgba(255,255,255,0.4)"
    },

    synthwave: {
      id: "synthwave",
      name: "🌴 Synthwave 80s",
      tag: "Outrun Sunset & Neon",
      font: "'Space Grotesk', sans-serif",
      bg: "#0e0720",
      accent: "#ff2a85",
      accent2: "#ff9e00",
      gradientPreview: "linear-gradient(135deg, #0e0720 0%, #200b3b 50%, #0e0720 100%)",
      borderGlow: "rgba(255,42,133,0.5)"
    },

    nordic: {
      id: "nordic",
      name: "❄️ Nordic Calm",
      tag: "Arctic Blue & Minimal",
      font: "'Plus Jakarta Sans', sans-serif",
      bg: "#1a1e28",
      accent: "#88c0d0",
      accent2: "#81a1c1",
      gradientPreview: "linear-gradient(135deg, #1a1e28 0%, #242b38 50%, #1a1e28 100%)",
      borderGlow: "rgba(136,192,208,0.5)"
    },

    dracula: {
      id: "dracula",
      name: "🧛 Dracula Dark",
      tag: "High-Contrast Palette",
      font: "'Fira Code', monospace",
      bg: "#181a20",
      accent: "#ff79c6",
      accent2: "#50fa7b",
      gradientPreview: "linear-gradient(135deg, #181a20 0%, #282a36 50%, #181a20 100%)",
      borderGlow: "rgba(255,121,198,0.5)"
    },

    matrix: {
      id: "matrix",
      name: "🟢 Matrix Code",
      tag: "Green CRT & Hacker Terminal",
      font: "'Fira Code', monospace",
      bg: "#030a04",
      accent: "#00ff66",
      accent2: "#10b981",
      gradientPreview: "linear-gradient(135deg, #030a04 0%, #051a08 50%, #030a04 100%)",
      borderGlow: "rgba(0,255,102,0.5)"
    },

    solarpunk: {
      id: "solarpunk",
      name: "🌱 Eco Botanical",
      tag: "Fresh Green & Solar Gold",
      font: "'Plus Jakarta Sans', sans-serif",
      bg: "#081611",
      accent: "#10b981",
      accent2: "#f59e0b",
      gradientPreview: "linear-gradient(135deg, #081611 0%, #0f291e 50%, #081611 100%)",
      borderGlow: "rgba(16,185,129,0.5)"
    },

    gruvbox: {
      id: "gruvbox",
      name: "🪵 Gruvbox Retro",
      tag: "Warm Earth & Vim Theme",
      font: "'Fira Code', monospace",
      bg: "#1d2021",
      accent: "#fe8019",
      accent2: "#fabd2f",
      gradientPreview: "linear-gradient(135deg, #1d2021 0%, #282828 50%, #1d2021 100%)",
      borderGlow: "rgba(254,128,25,0.5)"
    }

  },

  defaultProjects: [
    {
      name: "DevPulse",
      repo: "devpulse",
      desc: "Real-time GitHub statistics, commit streak analytics, and developer productivity dashboard.",
      tags: "TypeScript, React, Next.js, TailwindCSS",
      stars: "1.4k",
      status: "Active",
      demoUrl: "https://devpulse.io"
    },
    {
      name: "QuickAPI",
      repo: "quick-api",
      desc: "Production-ready backend API starter kit with authentication, rate limiting, and caching.",
      tags: "Node.js, Express, PostgreSQL, Redis, Docker",
      stars: "850",
      status: "Shipped",
      demoUrl: "https://quickapi.dev"
    },
    {
      name: "TaskFlow",
      repo: "taskflow",
      desc: "Minimalist Kanban project manager with drag-and-drop workflow and offline support.",
      tags: "React, Zustand, Web APIs, Vite",
      stars: "620",
      status: "Active",
      demoUrl: "https://taskflow.app"
    },
    {
      name: "CLI Finder",
      repo: "cli-finder",
      desc: "Fast terminal search tool and file navigator with fuzzy matching built in Go.",
      tags: "Go, Cobra, Unix, Terminal",
      stars: "490",
      status: "Shipped",
      demoUrl: "https://github.com/alexdev/cli-finder"
    }
  ],

  techStack: [
    // Languages
    { id: "ts", name: "TypeScript", category: "languages" },
    { id: "js", name: "JavaScript", category: "languages" },
    { id: "python", name: "Python", category: "languages" },
    { id: "rust", name: "Rust", category: "languages" },
    { id: "go", name: "Go", category: "languages" },
    { id: "c", name: "C", category: "languages" },
    { id: "cpp", name: "C++", category: "languages" },
    { id: "cs", name: "C#", category: "languages" },
    { id: "java", name: "Java", category: "languages" },
    { id: "kotlin", name: "Kotlin", category: "languages" },
    { id: "swift", name: "Swift", category: "languages" },
    { id: "php", name: "PHP", category: "languages" },
    { id: "ruby", name: "Ruby", category: "languages" },
    { id: "dart", name: "Dart", category: "languages" },
    { id: "lua", name: "Lua", category: "languages" },
    { id: "scala", name: "Scala", category: "languages" },
    { id: "r", name: "R", category: "languages" },
    { id: "elixir", name: "Elixir", category: "languages" },
    { id: "haskell", name: "Haskell", category: "languages" },
    // Frontend
    { id: "react", name: "React", category: "frontend" },
    { id: "nextjs", name: "Next.js", category: "frontend" },
    { id: "vue", name: "Vue.js", category: "frontend" },
    { id: "nuxtjs", name: "Nuxt", category: "frontend" },
    { id: "svelte", name: "Svelte", category: "frontend" },
    { id: "angular", name: "Angular", category: "frontend" },
    { id: "tailwind", name: "TailwindCSS", category: "frontend" },
    { id: "bootstrap", name: "Bootstrap", category: "frontend" },
    { id: "sass", name: "Sass", category: "frontend" },
    { id: "html", name: "HTML5", category: "frontend" },
    { id: "css", name: "CSS3", category: "frontend" },
    { id: "threejs", name: "Three.js", category: "frontend" },
    { id: "redux", name: "Redux", category: "frontend" },
    { id: "webpack", name: "Webpack", category: "frontend" },
    { id: "vite", name: "Vite", category: "frontend" },
    // Backend
    { id: "nodejs", name: "Node.js", category: "backend" },
    { id: "express", name: "Express", category: "backend" },
    { id: "fastapi", name: "FastAPI", category: "backend" },
    { id: "django", name: "Django", category: "backend" },
    { id: "flask", name: "Flask", category: "backend" },
    { id: "nestjs", name: "NestJS", category: "backend" },
    { id: "spring", name: "Spring", category: "backend" },
    { id: "graphql", name: "GraphQL", category: "backend" },
    { id: "dotnet", name: ".NET", category: "backend" },
    { id: "laravel", name: "Laravel", category: "backend" },
    // Database
    { id: "postgres", name: "PostgreSQL", category: "database" },
    { id: "mongodb", name: "MongoDB", category: "database" },
    { id: "mysql", name: "MySQL", category: "database" },
    { id: "sqlite", name: "SQLite", category: "database" },
    { id: "redis", name: "Redis", category: "database" },
    { id: "supabase", name: "Supabase", category: "database" },
    { id: "firebase", name: "Firebase", category: "database" },
    { id: "prisma", name: "Prisma", category: "database" },
    { id: "dynamodb", name: "DynamoDB", category: "database" },
    // DevOps
    { id: "docker", name: "Docker", category: "devops" },
    { id: "kubernetes", name: "Kubernetes", category: "devops" },
    { id: "aws", name: "AWS", category: "devops" },
    { id: "gcp", name: "GCP", category: "devops" },
    { id: "azure", name: "Azure", category: "devops" },
    { id: "vercel", name: "Vercel", category: "devops" },
    { id: "cloudflare", name: "Cloudflare", category: "devops" },
    { id: "linux", name: "Linux", category: "devops" },
    { id: "bash", name: "Bash", category: "devops" },
    { id: "nginx", name: "Nginx", category: "devops" },
    { id: "terraform", name: "Terraform", category: "devops" },
    // Tools & Mobile
    { id: "git", name: "Git", category: "tools" },
    { id: "github", name: "GitHub", category: "tools" },
    { id: "gitlab", name: "GitLab", category: "tools" },
    { id: "vscode", name: "VS Code", category: "tools" },
    { id: "figma", name: "Figma", category: "tools" },
    { id: "postman", name: "Postman", category: "tools" },
    { id: "flutter", name: "Flutter", category: "tools" },
    { id: "unity", name: "Unity", category: "tools" },
    { id: "blender", name: "Blender", category: "tools" }
  ]
};
