/* =====================================================
   GITHUB PROFILE STUDIO — DATA LAYER
   8 Radically Distinct Archetypes + Full Tech Stack
   ===================================================== */

const APP_DATA = {

  archetypes: {

    cyberpunk: {
      id: "cyberpunk",
      name: "⚡ Cyberpunk Netrunner",
      tag: "Neon / Neural HUD",
      font: "'Fira Code', monospace",
      bg: "#050811",
      accent: "#00f0ff",
      accent2: "#ff0055",
      gradientPreview: "linear-gradient(135deg, #050811 0%, #0a1628 50%, #050811 100%)",
      borderGlow: "rgba(0,240,255,0.5)"
    },

    neofetch: {
      id: "neofetch",
      name: "💻 Terminal SysAdmin",
      tag: "Unix / Fastfetch",
      font: "'Fira Code', monospace",
      bg: "#0a0e0b",
      accent: "#00ff66",
      accent2: "#00ccff",
      gradientPreview: "linear-gradient(135deg, #0a0e0b 0%, #0d1a0e 50%, #0a0e0b 100%)",
      borderGlow: "rgba(0,255,102,0.5)"
    },

    bento: {
      id: "bento",
      name: "🍱 Modern Bento Grid",
      tag: "Apple / Vercel",
      font: "'Plus Jakarta Sans', sans-serif",
      bg: "#000000",
      accent: "#38bdf8",
      accent2: "#818cf8",
      gradientPreview: "linear-gradient(135deg, #000000 0%, #0a0a14 50%, #000000 100%)",
      borderGlow: "rgba(56,189,248,0.5)"
    },

    rpg: {
      id: "rpg",
      name: "⚔️ RPG Quest Master",
      tag: "Fantasy / Guild",
      font: "'Plus Jakarta Sans', sans-serif",
      bg: "#100c1a",
      accent: "#f59e0b",
      accent2: "#ec4899",
      gradientPreview: "linear-gradient(135deg, #100c1a 0%, #1a1028 50%, #100c1a 100%)",
      borderGlow: "rgba(245,158,11,0.5)"
    },

    arcade8bit: {
      id: "arcade8bit",
      name: "👾 Retro 8-Bit Arcade",
      tag: "Pixel / Cabinet",
      font: "'Press Start 2P', monospace",
      bg: "#0d0820",
      accent: "#facc15",
      accent2: "#ff007f",
      gradientPreview: "linear-gradient(135deg, #0d0820 0%, #180e35 50%, #0d0820 100%)",
      borderGlow: "rgba(250,204,21,0.5)"
    },

    kawaii: {
      id: "kawaii",
      name: "🌸 Kawaii Pastel Sakura",
      tag: "Cozy / Anime Loft",
      font: "'Plus Jakarta Sans', sans-serif",
      bg: "#160e20",
      accent: "#f472b6",
      accent2: "#c084fc",
      gradientPreview: "linear-gradient(135deg, #160e20 0%, #211130 50%, #160e20 100%)",
      borderGlow: "rgba(244,114,182,0.5)"
    },

    aurora: {
      id: "aurora",
      name: "🌌 Cosmic Deep Space",
      tag: "Nebula / Astral",
      font: "'Space Grotesk', sans-serif",
      bg: "#04020f",
      accent: "#a855f7",
      accent2: "#38bdf8",
      gradientPreview: "linear-gradient(135deg, #04020f 0%, #0c0621 50%, #04020f 100%)",
      borderGlow: "rgba(168,85,247,0.5)"
    },

    minimal: {
      id: "minimal",
      name: "🖤 Swiss Bauhaus",
      tag: "Architect / Mono",
      font: "'Plus Jakarta Sans', sans-serif",
      bg: "#000000",
      accent: "#ffffff",
      accent2: "#52525b",
      gradientPreview: "linear-gradient(135deg, #000000 0%, #111111 50%, #000000 100%)",
      borderGlow: "rgba(255,255,255,0.4)"
    }

  },

  defaultProjects: [
    {
      name: "QuantumFlow Engine",
      repo: "quantumflow-engine",
      desc: "Distributed event streaming & real-time analytics in Rust with sub-millisecond latency.",
      tags: "Rust, Kafka, Docker, gRPC, Redis",
      stars: "1.4k",
      status: "Active",
      demoUrl: "https://quantumflow.io"
    },
    {
      name: "NeuralCanvas Studio",
      repo: "neuralcanvas-studio",
      desc: "Generative AI canvas editor for vector design powered by WebGPU and Diffusion models.",
      tags: "TypeScript, React, Next.js, Python, WebGPU",
      stars: "850",
      status: "Shipped",
      demoUrl: "https://neuralcanvas.dev"
    },
    {
      name: "HyperDB Cloud",
      repo: "hyperdb-cloud",
      desc: "Serverless vector search & embedded document store with instant edge synchronization.",
      tags: "Go, PostgreSQL, Redis, Kubernetes, AWS",
      stars: "620",
      status: "Beta",
      demoUrl: "https://hyperdb.cloud"
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
