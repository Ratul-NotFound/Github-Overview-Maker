/**
 * ===================================================================
 * GITHUB PROFILE STUDIO - CORE ENGINE & THEME GENERATOR
 * Ultra-Rich, Deeply Distinct Archetypes & Full Customization System
 * ===================================================================
 */

// Application State
const state = {
  username: "alexdev",
  name: "Alex Vance",
  headline: "Full-Stack Cyber Architect // Cloud & Distributed Systems",
  typingLines: [
    "Architecting Scalable High-Performance Systems ⚡",
    "Full-Stack TypeScript, Rust & Go Engineer 🚀",
    "Sub-millisecond Latency Obsessive 🧠"
  ],
  currentArchetype: "cyberpunk",
  projectStyle: "bento",
  graphStyle: "activity",
  projects: JSON.parse(JSON.stringify(APP_DATA.defaultProjects)),
  statusBio: {
    working: "Next-generation cloud orchestrators & microservices",
    learning: "Rust kernel programming & WebGPU shaders",
    askMe: "React, Next.js, Distributed DBs, Rust, Kafka & CI/CD",
    funFact: "Powered by dark roast espresso, mechanical keyboards & lo-fi"
  },
  selectedSkills: [
    "ts", "js", "react", "nextjs", "rust", "go", "python", "fastapi",
    "postgres", "mongodb", "redis", "docker", "kubernetes", "aws", "tailwind", "git"
  ],
  toggles: {
    header: true,
    typing: true,
    projects: true,
    statusBio: true,
    graphs: true,
    stats: true,
    languages: true,
    trophies: true,
    quote: true,
    views: true,
    viralBadge: true
  },
  socials: {
    linkedin: "alex-vance",
    twitter: "alexvance_dev",
    discord: "alexvance",
    portfolio: "https://alexvance.io",
    email: "alex@vance.dev"
  },
  sponsors: {
    buyMeCoffee: "alexvance",
    koFi: ""
  },
  activeTab: "preview",
  activeCategory: "all"
};

// DOM References
const DOM = {
  inputUsername: document.getElementById("inputUsername"),
  inputName: document.getElementById("inputName"),
  inputHeadline: document.getElementById("inputHeadline"),
  typingLine1: document.getElementById("typingLine1"),
  typingLine2: document.getElementById("typingLine2"),
  typingLine3: document.getElementById("typingLine3"),
  archetypeGrid: document.getElementById("archetypeGrid"),
  templateBar: document.getElementById("templateBar"),
  selectProjectStyle: document.getElementById("selectProjectStyle"),
  projectsListContainer: document.getElementById("projectsListContainer"),
  btnAddProject: document.getElementById("btnAddProject"),
  projectCountBadge: document.getElementById("projectCount"),
  selectGraphStyle: document.getElementById("selectGraphStyle"),
  statusWorking: document.getElementById("statusWorking"),
  statusLearning: document.getElementById("statusLearning"),
  statusAskMe: document.getElementById("statusAskMe"),
  statusFunFact: document.getElementById("statusFunFact"),
  techGrid: document.getElementById("techGrid"),
  techCategories: document.getElementById("techCategories"),
  techSearchInput: document.getElementById("techSearchInput"),
  skillCountBadge: document.getElementById("skillCount"),
  toggles: {
    header: document.getElementById("toggleHeader"),
    typing: document.getElementById("toggleTyping"),
    projects: document.getElementById("toggleProjects"),
    statusBio: document.getElementById("toggleStatusBio"),
    graphs: document.getElementById("toggleGraphs"),
    stats: document.getElementById("toggleStats"),
    languages: document.getElementById("toggleLanguages"),
    trophies: document.getElementById("toggleTrophies"),
    quote: document.getElementById("toggleQuote"),
    views: document.getElementById("toggleViews"),
    viralBadge: document.getElementById("toggleViralBadge")
  },
  socialLinkedin: document.getElementById("socialLinkedin"),
  socialTwitter: document.getElementById("socialTwitter"),
  socialDiscord: document.getElementById("socialDiscord"),
  socialPortfolio: document.getElementById("socialPortfolio"),
  socialEmail: document.getElementById("socialEmail"),
  sponsorBuyMeCoffee: document.getElementById("sponsorBuyMeCoffee"),
  sponsorKoFi: document.getElementById("sponsorKoFi"),
  mockupWindow: document.getElementById("mockupWindow"),
  mockupAddressBar: document.getElementById("mockupAddressBar"),
  livePreviewContainer: document.getElementById("livePreviewContainer"),
  markdownCodeContainer: document.getElementById("markdownCodeContainer"),
  rawMarkdownOutput: document.getElementById("rawMarkdownOutput"),
  tabLivePreview: document.getElementById("tabLivePreview"),
  tabMarkdownCode: document.getElementById("tabMarkdownCode"),
  btnCopyMarkdown: document.getElementById("btnCopyMarkdown"),
  btnDownloadReadme: document.getElementById("btnDownloadReadme"),
  btnRandomize: document.getElementById("btnRandomize"),
  btnReset: document.getElementById("btnReset"),
  btnExploreComponents: document.getElementById("btnExploreComponents"),
  componentModal: document.getElementById("componentModal"),
  modalCloseBtn: document.getElementById("modalCloseBtn"),
  modalComponentList: document.getElementById("modalComponentList"),
  toast: document.getElementById("toast"),
  toastMsg: document.getElementById("toastMsg")
};

// -------------------------------------------------------------
// APP INITIALIZATION
// -------------------------------------------------------------
function initApp() {
  renderArchetypeSelectors();
  renderProjectsList();
  renderTechGrid();
  attachEventListeners();
  populateModalCatalog();
  updateStudio();
}

// -------------------------------------------------------------
// RENDER ARCHETYPE SELECTORS
// -------------------------------------------------------------
function renderArchetypeSelectors() {
  // Grid in sidebar
  if (DOM.archetypeGrid) {
    DOM.archetypeGrid.innerHTML = "";
    Object.keys(APP_DATA.archetypes).forEach(key => {
      const arch = APP_DATA.archetypes[key];
      const card = document.createElement("div");
      card.className = `theme-card ${state.currentArchetype === key ? "active" : ""}`;
      card.innerHTML = `
        <div class="theme-color-dot" style="background: ${arch.accent}; box-shadow: 0 0 10px ${arch.accent};"></div>
        <div>
          <div class="theme-card-name">${arch.name}</div>
          <div style="font-size: 0.65rem; color: var(--text-muted); font-weight: 500;">${arch.tag}</div>
        </div>
      `;
      card.addEventListener("click", () => setArchetype(key));
      DOM.archetypeGrid.appendChild(card);
    });
  }

  // Horizontal top bar
  if (DOM.templateBar) {
    DOM.templateBar.innerHTML = `<span class="template-bar-label">⚡ Archetypes:</span>`;
    Object.keys(APP_DATA.archetypes).forEach(key => {
      const arch = APP_DATA.archetypes[key];
      const chip = document.createElement("button");
      chip.className = `template-chip ${state.currentArchetype === key ? "active" : ""}`;
      chip.textContent = arch.name;
      chip.addEventListener("click", () => setArchetype(key));
      DOM.templateBar.appendChild(chip);
    });
  }
}

function setArchetype(key) {
  if (!APP_DATA.archetypes[key]) return;
  state.currentArchetype = key;
  renderArchetypeSelectors();
  updateStudio();
  showToast(`✨ Switched to ${APP_DATA.archetypes[key].name}!`);
}

// -------------------------------------------------------------
// DYNAMIC PROJECTS MANAGER
// -------------------------------------------------------------
function renderProjectsList() {
  if (!DOM.projectsListContainer) return;
  DOM.projectsListContainer.innerHTML = "";
  if (DOM.projectCountBadge) {
    DOM.projectCountBadge.textContent = `${state.projects.length} projects`;
  }

  state.projects.forEach((proj, idx) => {
    const item = document.createElement("div");
    item.className = "project-card-item";
    item.innerHTML = `
      <div class="project-card-item-header">
        <strong style="font-size: 0.8rem; color: var(--accent-cyan);">Project #${idx + 1}</strong>
        <button class="btn-remove" data-index="${idx}">✕ Remove</button>
      </div>
      <div class="form-group">
        <label>Project Name</label>
        <input type="text" class="form-control proj-name" data-index="${idx}" value="${proj.name}" placeholder="e.g. QuantumFlow Engine">
      </div>
      <div class="form-group">
        <label>Repository Name</label>
        <input type="text" class="form-control proj-repo" data-index="${idx}" value="${proj.repo}" placeholder="e.g. quantumflow-engine">
      </div>
      <div class="form-group">
        <label>Description</label>
        <input type="text" class="form-control proj-desc" data-index="${idx}" value="${proj.desc}" placeholder="Concise project overview">
      </div>
      <div class="form-group">
        <label>Tech Stack Tags</label>
        <input type="text" class="form-control proj-tags" data-index="${idx}" value="${proj.tags}" placeholder="e.g. Rust, Kafka, Docker">
      </div>
      <div class="form-group">
        <label>Live Demo / URL</label>
        <input type="text" class="form-control proj-demo" data-index="${idx}" value="${proj.demoUrl || ""}" placeholder="https://...">
      </div>
    `;
    DOM.projectsListContainer.appendChild(item);
  });

  // Attach input listeners
  DOM.projectsListContainer.querySelectorAll(".proj-name").forEach(el => {
    el.addEventListener("input", e => { state.projects[e.target.dataset.index].name = e.target.value; updateStudio(); });
  });
  DOM.projectsListContainer.querySelectorAll(".proj-repo").forEach(el => {
    el.addEventListener("input", e => { state.projects[e.target.dataset.index].repo = e.target.value; updateStudio(); });
  });
  DOM.projectsListContainer.querySelectorAll(".proj-desc").forEach(el => {
    el.addEventListener("input", e => { state.projects[e.target.dataset.index].desc = e.target.value; updateStudio(); });
  });
  DOM.projectsListContainer.querySelectorAll(".proj-tags").forEach(el => {
    el.addEventListener("input", e => { state.projects[e.target.dataset.index].tags = e.target.value; updateStudio(); });
  });
  DOM.projectsListContainer.querySelectorAll(".proj-demo").forEach(el => {
    el.addEventListener("input", e => { state.projects[e.target.dataset.index].demoUrl = e.target.value; updateStudio(); });
  });
  DOM.projectsListContainer.querySelectorAll(".btn-remove").forEach(el => {
    el.addEventListener("click", e => {
      const idx = parseInt(e.target.dataset.index);
      state.projects.splice(idx, 1);
      renderProjectsList();
      updateStudio();
      showToast("🗑️ Project removed");
    });
  });
}

function handleAddProject() {
  state.projects.push({
    name: "NovaMesh Protocol",
    repo: "novamesh-protocol",
    desc: "Decentralized mesh networking layer with zero-knowledge telemetry verification.",
    tags: "Rust, WebAssembly, Libp2p, TypeScript",
    stars: "450",
    status: "Active",
    demoUrl: "https://novamesh.dev"
  });
  renderProjectsList();
  updateStudio();
  showToast("✨ Added new project!");
}

// -------------------------------------------------------------
// TECH STACK PICKER
// -------------------------------------------------------------
function renderTechGrid() {
  if (!DOM.techGrid) return;
  DOM.techGrid.innerHTML = "";
  const query = (DOM.techSearchInput ? DOM.techSearchInput.value : "").toLowerCase().trim();

  const filtered = APP_DATA.techStack.filter(item => {
    const matchCategory = state.activeCategory === "all" || item.category === state.activeCategory;
    const matchSearch = item.name.toLowerCase().includes(query) || item.id.toLowerCase().includes(query);
    return matchCategory && matchSearch;
  });

  filtered.forEach(tech => {
    const isSelected = state.selectedSkills.includes(tech.id);
    const item = document.createElement("div");
    item.className = `tech-item ${isSelected ? "selected" : ""}`;
    item.innerHTML = `
      <img src="https://skillicons.dev/icons?i=${tech.id}" alt="${tech.name}" onerror="this.src='https://cdn.simpleicons.org/${tech.id}'" />
      <span>${tech.name}</span>
    `;
    item.addEventListener("click", () => {
      const idx = state.selectedSkills.indexOf(tech.id);
      if (idx > -1) {
        state.selectedSkills.splice(idx, 1);
      } else {
        state.selectedSkills.push(tech.id);
      }
      item.classList.toggle("selected");
      if (DOM.skillCountBadge) {
        DOM.skillCountBadge.textContent = `${state.selectedSkills.length} selected`;
      }
      updateStudio();
    });
    DOM.techGrid.appendChild(item);
  });

  if (DOM.skillCountBadge) {
    DOM.skillCountBadge.textContent = `${state.selectedSkills.length} selected`;
  }
}

// Debounce Utility for Smooth Real-Time Rendering
let updateTimer = null;
function debouncedUpdateStudio(delay = 180) {
  clearTimeout(updateTimer);
  updateTimer = setTimeout(() => {
    updateStudio();
  }, delay);
}

// -------------------------------------------------------------
// EVENT LISTENERS BINDINGS
// -------------------------------------------------------------
function attachEventListeners() {
  // Identity Inputs (Debounced)
  if (DOM.inputUsername) DOM.inputUsername.addEventListener("input", e => { state.username = e.target.value.trim() || "alexdev"; debouncedUpdateStudio(); });
  if (DOM.inputName) DOM.inputName.addEventListener("input", e => { state.name = e.target.value.trim() || "Alex Vance"; debouncedUpdateStudio(); });
  if (DOM.inputHeadline) DOM.inputHeadline.addEventListener("input", e => { state.headline = e.target.value.trim(); debouncedUpdateStudio(); });

  // Rotating Bios (Debounced)
  const handleTypingChange = () => {
    state.typingLines = [
      DOM.typingLine1 ? DOM.typingLine1.value.trim() : "",
      DOM.typingLine2 ? DOM.typingLine2.value.trim() : "",
      DOM.typingLine3 ? DOM.typingLine3.value.trim() : ""
    ].filter(l => l.length > 0);
    debouncedUpdateStudio();
  };
  if (DOM.typingLine1) DOM.typingLine1.addEventListener("input", handleTypingChange);
  if (DOM.typingLine2) DOM.typingLine2.addEventListener("input", handleTypingChange);
  if (DOM.typingLine3) DOM.typingLine3.addEventListener("input", handleTypingChange);

  // Projects & Graphs (Immediate)
  if (DOM.selectProjectStyle) DOM.selectProjectStyle.addEventListener("change", e => { state.projectStyle = e.target.value; updateStudio(); });
  if (DOM.btnAddProject) DOM.btnAddProject.addEventListener("click", handleAddProject);
  if (DOM.selectGraphStyle) DOM.selectGraphStyle.addEventListener("change", e => { state.graphStyle = e.target.value; updateStudio(); });

  // Status & Bio (Debounced)
  if (DOM.statusWorking) DOM.statusWorking.addEventListener("input", e => { state.statusBio.working = e.target.value; debouncedUpdateStudio(); });
  if (DOM.statusLearning) DOM.statusLearning.addEventListener("input", e => { state.statusBio.learning = e.target.value; debouncedUpdateStudio(); });
  if (DOM.statusAskMe) DOM.statusAskMe.addEventListener("input", e => { state.statusBio.askMe = e.target.value; debouncedUpdateStudio(); });
  if (DOM.statusFunFact) DOM.statusFunFact.addEventListener("input", e => { state.statusBio.funFact = e.target.value; debouncedUpdateStudio(); });

  // Toggles (Immediate)
  Object.keys(DOM.toggles).forEach(key => {
    const el = DOM.toggles[key];
    if (el) {
      el.addEventListener("change", e => {
        state.toggles[key] = e.target.checked;
        updateStudio();
      });
    }
  });

  // Socials (Debounced)
  if (DOM.socialLinkedin) DOM.socialLinkedin.addEventListener("input", e => { state.socials.linkedin = e.target.value.trim(); debouncedUpdateStudio(); });
  if (DOM.socialTwitter) DOM.socialTwitter.addEventListener("input", e => { state.socials.twitter = e.target.value.trim(); debouncedUpdateStudio(); });
  if (DOM.socialDiscord) DOM.socialDiscord.addEventListener("input", e => { state.socials.discord = e.target.value.trim(); debouncedUpdateStudio(); });
  if (DOM.socialPortfolio) DOM.socialPortfolio.addEventListener("input", e => { state.socials.portfolio = e.target.value.trim(); debouncedUpdateStudio(); });
  if (DOM.socialEmail) DOM.socialEmail.addEventListener("input", e => { state.socials.email = e.target.value.trim(); debouncedUpdateStudio(); });

  // Sponsors (Debounced)
  if (DOM.sponsorBuyMeCoffee) DOM.sponsorBuyMeCoffee.addEventListener("input", e => { state.sponsors.buyMeCoffee = e.target.value.trim(); debouncedUpdateStudio(); });
  if (DOM.sponsorKoFi) DOM.sponsorKoFi.addEventListener("input", e => { state.sponsors.koFi = e.target.value.trim(); debouncedUpdateStudio(); });

  // Skill Search & Tabs
  if (DOM.techSearchInput) DOM.techSearchInput.addEventListener("input", renderTechGrid);
  document.querySelectorAll(".category-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".category-tab").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      state.activeCategory = tab.dataset.cat;
      renderTechGrid();
    });
  });

  // Tab View Switcher (Preview vs Code)
  if (DOM.tabLivePreview) {
    DOM.tabLivePreview.addEventListener("click", () => {
      DOM.tabLivePreview.classList.add("active");
      if (DOM.tabMarkdownCode) DOM.tabMarkdownCode.classList.remove("active");
      if (DOM.mockupWindow) DOM.mockupWindow.style.display = "block";
      if (DOM.markdownCodeContainer) DOM.markdownCodeContainer.style.display = "none";
      state.activeTab = "preview";
    });
  }
  if (DOM.tabMarkdownCode) {
    DOM.tabMarkdownCode.addEventListener("click", () => {
      DOM.tabMarkdownCode.classList.add("active");
      if (DOM.tabLivePreview) DOM.tabLivePreview.classList.remove("active");
      if (DOM.mockupWindow) DOM.mockupWindow.style.display = "none";
      if (DOM.markdownCodeContainer) DOM.markdownCodeContainer.style.display = "block";
      state.activeTab = "code";
    });
  }

  // Export Buttons
  if (DOM.btnCopyMarkdown) DOM.btnCopyMarkdown.addEventListener("click", copyMarkdownAction);
  if (DOM.btnDownloadReadme) DOM.btnDownloadReadme.addEventListener("click", downloadReadmeAction);
  if (DOM.btnRandomize) DOM.btnRandomize.addEventListener("click", randomizeAction);
  if (DOM.btnReset) DOM.btnReset.addEventListener("click", resetAction);

  // Modal
  if (DOM.btnExploreComponents) DOM.btnExploreComponents.addEventListener("click", () => DOM.componentModal.classList.add("active"));
  if (DOM.modalCloseBtn) DOM.modalCloseBtn.addEventListener("click", () => DOM.componentModal.classList.remove("active"));
  if (DOM.componentModal) {
    DOM.componentModal.addEventListener("click", e => {
      if (e.target === DOM.componentModal) DOM.componentModal.classList.remove("active");
    });
  }
}

// -------------------------------------------------------------
// HELPER: BUILD PROJECTS SECTION (LAYOUT-AWARE)
// -------------------------------------------------------------
function buildProjectsMarkdown(u, arch, style) {
  if (!state.toggles.projects || state.projects.length === 0) return "";
  let out = "";

  if (style === "table") {
    out += `| 🚀 Project / System | ⚡ Tech & Architecture | 🔗 Links |\n`;
    out += `|:---|:---|:---|\n`;
    state.projects.forEach(p => {
      const demo = p.demoUrl ? `[⚡ Live Demo](${p.demoUrl}) • ` : "";
      const repo = `[💻 Source](https://github.com/${u}/${p.repo || p.name})`;
      out += `| **${p.name}**<br/><sub>${p.desc}</sub> | \`${p.tags}\` | ${demo}${repo} |\n`;
    });
    out += `\n`;
  } else if (style === "pinned") {
    out += `<div align="center">\n`;
    state.projects.forEach(p => {
      out += `  <a href="https://github.com/${u}/${p.repo || p.name}">\n`;
      out += `    <img src="https://github-readme-stats.vercel.app/api/pin/?username=${u}&repo=${p.repo || p.name}&theme=${arch.id === "minimal" ? "dark" : (arch.id === "neofetch" ? "matrix" : "tokyonight")}&hide_border=true" />\n`;
      out += `  </a>\n`;
    });
    out += `</div>\n\n`;
  } else if (style === "minimal") {
    state.projects.forEach((p, i) => {
      const num = String(i + 1).padStart(2, "0");
      const demo = p.demoUrl ? `[demo](${p.demoUrl}) / ` : "";
      const repo = `[code](https://github.com/${u}/${p.repo || p.name})`;
      out += `- **[${num}] ${p.name}** — ${p.desc} *(\`${p.tags}\`)* ➔ ${demo}${repo}\n`;
    });
    out += `\n`;
  } else {
    // Default Bento Matrix
    out += `| 📦 **System & Core Spec** | 🌐 **Deployment & Artifacts** |\n|:---|:---|\n`;
    state.projects.forEach(p => {
      const demoBadge = p.demoUrl ? `<a href="${p.demoUrl}"><img src="https://img.shields.io/badge/Live_App-0070f3?style=flat-square&logo=vercel&logoColor=white" /></a> ` : "";
      const repoBadge = `<a href="https://github.com/${u}/${p.repo || p.name}"><img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white" /></a>`;
      out += `| **${p.name}**<br/><sub>${p.desc}</sub><br/>\`${p.tags}\` | ${demoBadge}${repoBadge} |\n`;
    });
    out += `\n`;
  }

  return out;
}

// -------------------------------------------------------------
// HELPER: BUILD CONTRIBUTION GRAPH
// -------------------------------------------------------------
function buildGraphMarkdown(u, arch, mode) {
  if (!state.toggles.graphs) return "";
  let out = "";

  if (mode === "snake") {
    out += `<div align="center">\n  <picture>\n    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/${u}/${u}/output/github-contribution-grid-snake-dark.svg">\n    <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/${u}/${u}/output/github-contribution-grid-snake.svg">\n    <img alt="Snake eating contribution grid" src="https://raw.githubusercontent.com/${u}/${u}/output/github-contribution-grid-snake.svg">\n  </picture>\n</div>\n\n`;
  } else if (mode === "3d") {
    out += `<div align="center">\n  <img src="https://github-profile-trophy.vercel.app/?username=${u}&theme=${arch.id === "neofetch" ? "matrix" : (arch.id === "kawaii" ? "dracula" : "tokyonight")}&no-frame=true&no-bg=true&margin_w=8" width="100%" />\n</div>\n\n`;
  } else if (mode === "streak") {
    out += `<div align="center">\n  <img src="https://github-readme-streak-stats.herokuapp.com/?user=${u}&theme=${arch.id === "neofetch" ? "matrix" : (arch.id === "minimal" ? "dark" : "tokyonight")}&hide_border=true" height="165" />\n</div>\n\n`;
  } else if (mode === "all") {
    out += `<div align="center">\n  <img src="https://github-readme-activity-graph.vercel.app/graph?username=${u}&theme=react-dark&hide_border=true&area=true" width="100%" />\n</div>\n\n`;
    out += `<div align="center">\n  <img src="https://github-readme-streak-stats.herokuapp.com/?user=${u}&theme=tokyonight&hide_border=true" height="165" />\n</div>\n\n`;
  } else {
    // Default Activity Graph Wave
    out += `<div align="center">\n  <img src="https://github-readme-activity-graph.vercel.app/graph?username=${u}&theme=react-dark&hide_border=true&area=true" width="100%" />\n</div>\n\n`;
  }

  return out;
}

// -------------------------------------------------------------
// 8 DEEP UNIQUE THEME GENERATORS
// -------------------------------------------------------------
function generateMarkdown() {
  const u = state.username || "alexdev";
  const name = state.name || "Alex Vance";
  const headline = state.headline || "Full-Stack Architect";
  const arch = APP_DATA.archetypes[state.currentArchetype] || APP_DATA.archetypes.cyberpunk;
  const skillsStr = state.selectedSkills.join(",");
  const pStyle = state.projectStyle;
  const gStyle = state.graphStyle;

  switch (state.currentArchetype) {

    // =========================================================
    // 1. 💻 TERMINAL SYSADMIN (UNIX / FASTFETCH / DOCKER)
    // =========================================================
    case "neofetch": {
      let md = "";
      if (state.toggles.views) {
        md += `<div align="center">\n  <img src="https://komarev.com/ghpvc/?username=${u}&label=HOST_UPTIME_TELEMETRY&color=00ff66&style=flat-square" />\n</div>\n\n`;
      }

      md += "```bash\n";
      md += `   /\\_/\\        ${u}@archlinux-zen [x86_64]\n`;
      md += `  ( o.o )       -----------------------------------------\n`;
      md += `   > ^ <        OS       : Arch Linux Rolling Release\n`;
      md += `                Host     : ${name}\n`;
      md += `                Role     : ${headline}\n`;
      md += `                Kernel   : 6.10.4-zen // High-Performance\n`;
      md += `                Shell    : zsh 5.9 (x86_64-pc-linux-gnu)\n`;
      md += `                Memory   : 64GB DDR5 // 82% Heap Allocated\n`;
      md += `                Uptime   : 99.99% // Continuous Integration\n`;
      md += `                Fuel     : 100% Dark Roast Espresso\n`;
      md += "```\n\n";

      if (state.toggles.typing && state.typingLines.length > 0) {
        const linesParam = state.typingLines.map(l => encodeURIComponent(l)).join(";");
        md += `<div align="center">\n  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=18&pause=1000&color=00FF66&center=true&vCenter=true&width=750&lines=${linesParam}" alt="Terminal Prompt" />\n</div>\n\n`;
      }

      if (state.toggles.statusBio) {
        md += "```bash\n┌──(root㉿dev)-[~/focus-matrix]\n└─$ cat status.json\n```\n";
        md += "```json\n{\n";
        md += `  "working_on": "${state.statusBio.working}",\n`;
        md += `  "learning"  : "${state.statusBio.learning}",\n`;
        md += `  "ask_me"    : "${state.statusBio.askMe}",\n`;
        md += `  "fun_fact"  : "${state.statusBio.funFact}"\n`;
        md += "}\n```\n\n";
      }

      if (state.selectedSkills.length > 0) {
        md += "```bash\n┌──(root㉿dev)-[~/arsenal]\n└─$ cargo --list-installed-binaries\n```\n";
        md += `<div align="center">\n  <a href="https://skillicons.dev"><img src="https://skillicons.dev/icons?i=${skillsStr}&perline=8" /></a>\n</div>\n\n`;
      }

      if (state.toggles.projects && state.projects.length > 0) {
        md += "```bash\n┌──(root㉿dev)-[~/containers]\n└─$ docker ps --format \"table {{.Names}}\\t{{.Status}}\\t{{.Ports}}\"\n```\n\n";
        md += buildProjectsMarkdown(u, arch, pStyle);
        md += `\n`;
      }

      if (state.toggles.graphs) {
        md += "```bash\n┌──(root㉿dev)-[~/telemetry]\n└─$ btop --stream --sync\n```\n";
        md += buildGraphMarkdown(u, arch, gStyle);
      }

      if (state.toggles.stats) {
        md += `<div align="center">\n  <img src="https://github-readme-stats.vercel.app/api?username=${u}&show_icons=true&theme=matrix&hide_border=true&bg_color=0a0e0b&title_color=00ff66&icon_color=00ff66&text_color=00cc55" height="165" />\n  <img src="https://github-readme-streak-stats.herokuapp.com/?user=${u}&theme=matrix&hide_border=true&background=0a0e0b&ring=00ff66&fire=00ff66&currStreakLabel=00ff66" height="165" />\n</div>\n\n`;
      }

      if (state.toggles.viralBadge) {
        md += `<div align="center">\n  <code>[SYS_OK] Generated by <a href="https://github.com/${u}/Github-overview-components">GitHub Profile Studio</a></code>\n</div>\n`;
      }
      return md;
    }

    // =========================================================
    // 2. 🍱 MODERN BENTO GRID (APPLE / VERCEL UI)
    // =========================================================
    case "bento": {
      let md = "";
      if (state.toggles.header) {
        md += `<div align="center">\n  <img src="https://capsule-render.vercel.app/api?type=slice&color=gradient&customColorList=10,20,30&height=190&section=header&text=${encodeURIComponent(name)}&fontSize=36&fontColor=ffffff&fontAlignY=42&desc=${encodeURIComponent(headline.slice(0, 45))}&descAlignY=65&descSize=14&descColor=38bdf8" width="100%"/>\n</div>\n\n`;
      }

      if (state.toggles.typing && state.typingLines.length > 0) {
        const linesParam = state.typingLines.map(l => encodeURIComponent(l)).join(";");
        md += `<div align="center">\n  <img src="https://readme-typing-svg.demolab.com?font=Space+Grotesk&size=19&pause=1000&color=38BDF8&center=true&vCenter=true&width=750&lines=${linesParam}" alt="Typing SVG" />\n</div>\n\n`;
      }

      md += `| 🚀 **Executive Summary** | 🛠️ **Production Toolchain** |\n|:---|:---|\n`;
      md += `| **Title:** ${headline}<br/>**Status:** 🟢 Available for Strategic Roles<br/>**Focus:** \`${state.statusBio.working}\` | <a href="https://skillicons.dev"><img src="https://skillicons.dev/icons?i=${skillsStr}&perline=4" /></a> |\n\n`;

      if (state.toggles.projects && state.projects.length > 0) {
        md += `### 🍱 Featured Production Systems\n\n`;
        md += buildProjectsMarkdown(u, arch, pStyle);
        md += `\n---\n\n`;
      }

      if (state.toggles.graphs) {
        md += `### 📈 Activity & Contribution Wave\n\n`;
        md += buildGraphMarkdown(u, arch, gStyle);
      }

      if (state.toggles.stats) {
        md += `| 📊 **Real-time Velocity** | ⚡ **Commit Streaks** |\n|:---|:---|\n`;
        md += `| <img src="https://github-readme-stats.vercel.app/api?username=${u}&show_icons=true&theme=radical&hide_border=true&bg_color=0f172a&title_color=38bdf8&icon_color=818cf8&text_color=cbd5e1" width="100%" /> | <img src="https://github-readme-streak-stats.herokuapp.com/?user=${u}&theme=radical&hide_border=true&background=0f172a&ring=38bdf8&fire=818cf8&currStreakLabel=38bdf8" width="100%" /> |\n\n`;
      }

      if (state.toggles.viralBadge) {
        md += `<div align="center">\n  <sub>🍱 Engineered with <a href="https://github.com/${u}/Github-overview-components">GitHub Profile Studio</a></sub>\n</div>\n`;
      }
      return md;
    }

    // =========================================================
    // 3. ⚔️ RPG QUEST MASTER (FANTASY GUILD / CHARACTER SHEET)
    // =========================================================
    case "rpg": {
      let md = "";
      md += `<div align="center">\n  <img src="https://capsule-render.vercel.app/api?type=soft&color=gradient&customColorList=2,6,12&height=200&section=header&text=⚜️%20${encodeURIComponent(name.toUpperCase())}%20⚜️&fontSize=32&fontColor=f59e0b&fontAlignY=42&desc=LEVEL%2099%20ARCHMAGE%20%7C%20${encodeURIComponent(headline.slice(0, 35))}&descAlignY=65&descSize=14&descColor=ec4899" width="100%"/>\n</div>\n\n`;

      md += "```yaml\n";
      md += `⚜️ ADVENTURER'S GUILD // CHARACTER SHEET ⚜️\n`;
      md += `  Player: ${name} (@${u})\n`;
      md += `  Class : Senior Code Sorcerer & Systems Conjurer\n`;
      md += `  HP    : [████████████████████] 9999/9999 (Mental Fortitude)\n`;
      md += `  Mana  : [████████████████░░░░] 8500/9999 (Dark Roast Reserves)\n`;
      md += `  EXP   : 94.8% -> Next Ascendant Architect Tier\n`;
      md += `  Passives: [Clean Architecture +50%] [Sub-ms Latency +40%]\n`;
      md += "```\n\n";

      if (state.toggles.statusBio) {
        md += `### 📜 Guild Directives & Quests\n\n`;
        md += `- ⚔️ **Main Mission:** ${state.statusBio.working}\n`;
        md += `- 📖 **Ancient Tomes:** ${state.statusBio.learning}\n`;
        md += `- 💬 **Sage Council:** ${state.statusBio.askMe}\n\n---\n\n`;
      }

      if (state.selectedSkills.length > 0) {
        md += `### 🧙‍♂️ Spellbook & Relic Inventory\n\n<div align="center">\n  <a href="https://skillicons.dev"><img src="https://skillicons.dev/icons?i=${skillsStr}&perline=8" /></a>\n</div>\n\n---\n\n`;
      }

      if (state.toggles.projects && state.projects.length > 0) {
        md += `### ⚔️ Active Quest Log (Shipped Projects)\n\n`;
        md += buildProjectsMarkdown(u, arch, pStyle);
        md += `\n---\n\n`;
      }

      if (state.toggles.graphs) {
        md += `### 🌌 Astral Leyline Resonance\n\n`;
        md += buildGraphMarkdown(u, arch, gStyle);
      }

      if (state.toggles.stats) {
        md += `### 🏆 Guild Trophies & Battle Records\n\n<div align="center">\n  <img src="https://github-readme-stats.vercel.app/api?username=${u}&show_icons=true&theme=synthwave&hide_border=true&bg_color=100c1a&title_color=f59e0b&icon_color=ec4899&text_color=e2e8f0" height="165" />\n  <img src="https://github-readme-streak-stats.herokuapp.com/?user=${u}&theme=synthwave&hide_border=true&background=100c1a&ring=f59e0b&fire=ec4899&currStreakLabel=f59e0b" height="165" />\n</div>\n\n`;
      }

      if (state.toggles.viralBadge) {
        md += `<div align="center">\n  <sub>⚜️ Forged at the Guild with <a href="https://github.com/${u}/Github-overview-components">GitHub Profile Studio</a></sub>\n</div>\n`;
      }
      return md;
    }

    // =========================================================
    // 4. 👾 RETRO 8-BIT ARCADE (PIXEL ART / CABINET)
    // =========================================================
    case "arcade8bit": {
      let md = "";
      md += `<div align="center">\n  <img src="https://capsule-render.vercel.app/api?type=rect&color=gradient&customColorList=2,5,9&height=160&section=header&text=🕹️%20${encodeURIComponent(name.toUpperCase())}%20🕹️&fontSize=30&fontColor=facc15&fontAlignY=50" width="100%"/>\n</div>\n\n`;

      if (state.toggles.typing && state.typingLines.length > 0) {
        const linesParam = state.typingLines.map(l => encodeURIComponent(l)).join(";");
        md += `<div align="center">\n  <img src="https://readme-typing-svg.demolab.com?font=Press+Start+2P&size=13&pause=1000&color=FACC15&center=true&vCenter=true&width=750&lines=INSERT+COIN+TO+CONTINUE;STAGE%3A+SENIOR+ARCHITECT;${linesParam}" alt="8bit typing" />\n</div>\n\n`;
      }

      md += "```\n";
      md += " +---------------------------------------------------------+\n";
      md += " |               ARCADE HIGH SCORE LEADERBOARD             |\n";
      md += " +---------------------------------------------------------+\n";
      md += ` | [RANK 1] ${name.toUpperCase().padEnd(16)} SCORE: 999,990  [SENIOR_STAGE] |\n`;
      md += " | [RANK 2] GITHUB_BOT      SCORE: 850,000  [AUTO_RUNNER]  |\n";
      md += " | [RANK 3] LINUS_T         SCORE: 740,000  [KERNEL_MASTER]|\n";
      md += " +---------------------------------------------------------+\n";
      md += "```\n\n";

      if (state.selectedSkills.length > 0) {
        md += `### 👾 8-Bit Power-Ups & Inventory\n\n<div align="center">\n  <a href="https://skillicons.dev"><img src="https://skillicons.dev/icons?i=${skillsStr}&perline=8" /></a>\n</div>\n\n`;
      }

      if (state.toggles.projects && state.projects.length > 0) {
        md += `### 🕹️ Cleared Arcade Stages (Projects)\n\n`;
        md += buildProjectsMarkdown(u, arch, pStyle);
        md += `\n---\n\n`;
      }

      if (state.toggles.graphs) {
        md += buildGraphMarkdown(u, arch, gStyle);
      }

      if (state.toggles.stats) {
        md += `<div align="center">\n  <img src="https://github-readme-stats.vercel.app/api?username=${u}&show_icons=true&theme=synthwave&hide_border=true&bg_color=0d0820&title_color=facc15&icon_color=ff007f&text_color=e2e8f0" height="165" />\n  <img src="https://github-readme-streak-stats.herokuapp.com/?user=${u}&theme=synthwave&hide_border=true&background=0d0820&ring=facc15&fire=ff007f&currStreakLabel=facc15" height="165" />\n</div>\n\n`;
      }

      if (state.toggles.viralBadge) {
        md += `<div align="center">\n  <sub>👾 INSERT COIN • Made with <a href="https://github.com/${u}/Github-overview-components">GitHub Profile Studio</a></sub>\n</div>\n`;
      }
      return md;
    }

    // =========================================================
    // 5. 🌸 KAWAII PASTEL SAKURA (COZY ANIME LOFT)
    // =========================================================
    case "kawaii": {
      let md = "";
      md += `<div align="center">\n  <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=34,36,44&height=200&section=header&text=🌸%20${encodeURIComponent(name)}%20🌸&fontSize=34&fontColor=ffffff&fontAlignY=40&desc=(%E3%81%A5%EF%BD%A1%E2%97%94%E2%80%BF%E2%80%BF%E2%97%94%EF%BD%A1)%E3%81%A5%20%E2%9C%A7%20${encodeURIComponent(headline.slice(0, 35))}&descAlignY=65&descSize=14&descColor=f472b6" width="100%"/>\n</div>\n\n`;

      md += `<div align="center">\n  <p>☆━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━☆</p>\n  <p><em>🌸 Welcome to my cozy digital loft! Sip some matcha and explore my builds (◕‿◕✿)</em></p>\n  <p>☆━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━☆</p>\n</div>\n\n`;

      if (state.toggles.typing && state.typingLines.length > 0) {
        const linesParam = state.typingLines.map(l => encodeURIComponent(l)).join(";");
        md += `<div align="center">\n  <img src="https://readme-typing-svg.demolab.com?font=Quicksand&size=19&pause=1000&color=F472B6&center=true&vCenter=true&width=750&lines=Welcome+to+my+cozy+corner+%E2%9C%A8;${linesParam}" alt="Kawaii Typing" />\n</div>\n\n`;
      }

      if (state.toggles.statusBio) {
        md += `### 🍵 Cozy Routine & Tea Station\n\n`;
        md += `- 🌸 **Brewing:** ${state.statusBio.working}\n`;
        md += `- ✨ **Curiosity:** ${state.statusBio.learning}\n`;
        md += `- 🎀 **Say Hi:** ${state.statusBio.askMe}\n\n---\n\n`;
      }

      if (state.selectedSkills.length > 0) {
        md += `### 🧁 Cozy Toolkit & Soft Arsenal\n\n<div align="center">\n  <a href="https://skillicons.dev"><img src="https://skillicons.dev/icons?i=${skillsStr}&perline=8" /></a>\n</div>\n\n---\n\n`;
      }

      if (state.toggles.projects && state.projects.length > 0) {
        md += `### 🌷 Sakura Garden Projects\n\n`;
        md += buildProjectsMarkdown(u, arch, pStyle);
        md += `\n---\n\n`;
      }

      if (state.toggles.graphs) {
        md += buildGraphMarkdown(u, arch, gStyle);
      }

      if (state.toggles.stats) {
        md += `### 🎀 Sweet Statistics & Heartbeats\n\n<div align="center">\n  <img src="https://github-readme-stats.vercel.app/api?username=${u}&show_icons=true&theme=dracula&hide_border=true&bg_color=160e20&title_color=f472b6&icon_color=c084fc&text_color=fbcfe8" height="165" />\n  <img src="https://github-readme-streak-stats.herokuapp.com/?user=${u}&theme=dracula&hide_border=true&background=160e20&ring=f472b6&fire=c084fc&currStreakLabel=f472b6" height="165" />\n</div>\n\n`;
      }

      md += `<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=34,36,44&height=80&section=footer" width="100%"/>\n\n`;
      if (state.toggles.viralBadge) {
        md += `<div align="center">\n  <sub>💖 Crafted with love on <a href="https://github.com/${u}/Github-overview-components">GitHub Profile Studio</a></sub>\n</div>\n`;
      }
      return md;
    }

    // =========================================================
    // 6. 🌌 COSMIC DEEP SPACE (ASTRAL NEBULA ODYSSEY)
    // =========================================================
    case "aurora": {
      let md = "";
      md += `<div align="center">\n  <img src="https://capsule-render.vercel.app/api?type=soft&color=gradient&customColorList=20,24,26,28&height=200&section=header&text=✦%20${encodeURIComponent(name.toUpperCase())}%20✦&fontSize=34&fontColor=e0e7ff&fontAlignY=38&desc=INTERSTELLAR%20COMMANDER%20%7C%20${encodeURIComponent(headline.slice(0, 35))}&descAlignY=62&descSize=14&descColor=38bdf8" width="100%"/>\n</div>\n\n`;

      if (state.toggles.typing && state.typingLines.length > 0) {
        const linesParam = state.typingLines.map(l => encodeURIComponent(l)).join(";");
        md += `<div align="center">\n  <img src="https://readme-typing-svg.demolab.com?font=Space+Grotesk&size=19&pause=1000&color=A855F7&center=true&vCenter=true&width=750&lines=${linesParam}" alt="Typing SVG" />\n</div>\n\n`;
      }

      if (state.toggles.statusBio) {
        md += `### 🪐 Starship Coordinates & Focus\n\n`;
        md += `- 🚀 **Current Warp Sector:** ${state.statusBio.working}\n`;
        md += `- ⭐ **Astral Research:** ${state.statusBio.learning}\n`;
        md += `- 📡 **Comm Frequencies:** ${state.statusBio.askMe}\n\n---\n\n`;
      }

      if (state.selectedSkills.length > 0) {
        md += `### 🌌 Constellation Tech Matrix\n\n<div align="center">\n  <a href="https://skillicons.dev"><img src="https://skillicons.dev/icons?i=${skillsStr}&perline=8" /></a>\n</div>\n\n---\n\n`;
      }

      if (state.toggles.projects && state.projects.length > 0) {
        md += `### 🛰️ Orbital Satellites & Probes (Projects)\n\n`;
        md += buildProjectsMarkdown(u, arch, pStyle);
        md += `\n---\n\n`;
      }

      if (state.toggles.graphs) {
        md += `### 🛰️ Pulsar Telemetry Wave\n\n`;
        md += buildGraphMarkdown(u, arch, gStyle);
      }

      if (state.toggles.stats) {
        md += `<div align="center">\n  <img src="https://github-readme-stats.vercel.app/api?username=${u}&show_icons=true&theme=tokyonight&hide_border=true&bg_color=04020f&title_color=a855f7&icon_color=38bdf8&text_color=e0e7ff" height="165" />\n  <img src="https://github-readme-streak-stats.herokuapp.com/?user=${u}&theme=tokyonight&hide_border=true&background=04020f&ring=a855f7&fire=38bdf8&currStreakLabel=a855f7" height="165" />\n</div>\n\n`;
      }

      md += `<img src="https://capsule-render.vercel.app/api?type=soft&color=gradient&customColorList=20,24,26,28&height=80&section=footer" width="100%"/>\n\n`;
      if (state.toggles.viralBadge) {
        md += `<div align="center">\n  <sub>✦ Starlit with <a href="https://github.com/${u}/Github-overview-components">GitHub Profile Studio</a></sub>\n</div>\n`;
      }
      return md;
    }

    // =========================================================
    // 7. 🖤 SWISS BAUHAUS MINIMAL (ARCHITECTURAL MONOCHROME)
    // =========================================================
    case "minimal": {
      let md = "";
      md += `<h1 align="center">${name.toUpperCase()}</h1>\n`;
      md += `<p align="center"><strong>01 / IDENTITY</strong> — <em>${headline}</em></p>\n\n`;

      const socialPills = [];
      if (state.socials.linkedin) socialPills.push(`[LinkedIn](https://linkedin.com/in/${state.socials.linkedin})`);
      if (state.socials.twitter) socialPills.push(`[Twitter/X](https://x.com/${state.socials.twitter})`);
      if (state.socials.portfolio) socialPills.push(`[Website](${state.socials.portfolio})`);
      if (state.socials.email) socialPills.push(`[Email](mailto:${state.socials.email})`);
      if (socialPills.length > 0) {
        md += `<p align="center">${socialPills.join(" • ")}</p>\n\n<hr style="border: 0; height: 1px; background: #333;" />\n\n`;
      }

      if (state.toggles.statusBio) {
        md += `### 02 / DIRECTIVES\n\n`;
        md += `* **Focus:** ${state.statusBio.working}\n`;
        md += `* **Research:** ${state.statusBio.learning}\n`;
        md += `* **Inquiries:** ${state.statusBio.askMe}\n\n`;
      }

      if (state.selectedSkills.length > 0) {
        md += `### 03 / ARSENAL\n\n`;
        const pills = state.selectedSkills.map(s => `<img src="https://img.shields.io/badge/${s.toUpperCase()}-000000?style=flat-square&logo=${s}&logoColor=white" />`).join(" ");
        md += `<div align="center">\n  ${pills}\n</div>\n\n<br/>\n\n`;
      }

      if (state.toggles.projects && state.projects.length > 0) {
        md += `### 04 / SELECTED WORKS\n\n`;
        md += buildProjectsMarkdown(u, arch, pStyle);
        md += `\n<hr style="border: 0; height: 1px; background: #222;" />\n\n`;
      }

      if (state.toggles.graphs) {
        md += `### 05 / ACTIVITY DYNAMICS\n\n`;
        md += buildGraphMarkdown(u, arch, gStyle);
      }

      if (state.toggles.stats) {
        md += `### 06 / METRICS\n\n`;
        md += `<div align="center">\n  <img src="https://github-readme-stats.vercel.app/api?username=${u}&show_icons=true&theme=dark&hide_border=true&bg_color=000000&title_color=ffffff&icon_color=ffffff&text_color=888888" height="150" />\n  <img src="https://github-readme-streak-stats.herokuapp.com/?user=${u}&theme=dark&hide_border=true&background=000000&ring=ffffff&fire=ffffff&currStreakLabel=ffffff" height="150" />\n</div>\n\n`;
      }

      if (state.toggles.viralBadge) {
        md += `<div align="center">\n  <sub>Built with <a href="https://github.com/${u}/Github-overview-components">GitHub Profile Studio</a></sub>\n</div>\n`;
      }
      return md;
    }

    // =========================================================
    // 8. ⚡ CYBERPUNK HUD (DEFAULT NETRUNNER TELEMETRY)
    // =========================================================
    default: {
      let md = "";
      if (state.toggles.views) {
        md += `<div align="center">\n  <img src="https://komarev.com/ghpvc/?username=${u}&label=CYBER_ACCESS_PORTAL&color=00f0ff&style=for-the-badge" />\n</div>\n\n`;
      }

      if (state.toggles.header) {
        md += `<div align="center">\n  <img src="https://capsule-render.vercel.app/api?type=waving&color=auto&customColorList=1,13,24&height=200&section=header&text=${encodeURIComponent(name.toUpperCase())}&fontSize=34&fontColor=ffffff&fontAlignY=38&desc=NEURAL%20ARCHITECT%20%7C%20${encodeURIComponent(headline.slice(0, 40))}&descAlignY=62&descSize=14&descColor=00f0ff" width="100%"/>\n</div>\n\n`;
      }

      if (state.toggles.typing && state.typingLines.length > 0) {
        const linesParam = state.typingLines.map(l => encodeURIComponent(l)).join(";");
        md += `<div align="center">\n  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=19&pause=1000&color=00F0FF&center=true&vCenter=true&width=750&lines=${linesParam}" alt="Typing SVG" />\n</div>\n\n`;
      }

      const socialBadges = [];
      if (state.socials.linkedin) socialBadges.push(`<a href="https://linkedin.com/in/${state.socials.linkedin}" target="_blank"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" /></a>`);
      if (state.socials.twitter) socialBadges.push(`<a href="https://x.com/${state.socials.twitter}" target="_blank"><img src="https://img.shields.io/badge/Twitter/X-000000?style=for-the-badge&logo=x&logoColor=white" /></a>`);
      if (state.socials.discord) socialBadges.push(`<a href="https://discord.com" target="_blank"><img src="https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white" /></a>`);
      if (socialBadges.length > 0) md += `<p align="center">\n  ${socialBadges.join("\n  ")}\n</p>\n\n---\n\n`;

      if (state.toggles.statusBio) {
        md += `### ⚡ Neural Telemetry & Directives\n\n`;
        md += `- 🛰️ **Active Neural Core:** ${state.statusBio.working}\n`;
        md += `- 🧠 **Matrix Integration:** ${state.statusBio.learning}\n`;
        md += `- ⚡ **Subroutine Queries:** ${state.statusBio.askMe}\n\n---\n\n`;
      }

      if (state.selectedSkills.length > 0) {
        md += `### ⚡ Cyberware Specs & Neural Protocols\n\n<div align="center">\n  <a href="https://skillicons.dev"><img src="https://skillicons.dev/icons?i=${skillsStr}&perline=8" /></a>\n</div>\n\n---\n\n`;
      }

      if (state.toggles.projects && state.projects.length > 0) {
        md += `### 🚀 Active Netrunner Operations\n\n`;
        md += buildProjectsMarkdown(u, arch, pStyle);
        md += `\n---\n\n`;
      }

      if (state.toggles.graphs) {
        md += `### 📊 Real-time Cybernet Telemetry\n\n`;
        md += buildGraphMarkdown(u, arch, gStyle);
      }

      if (state.toggles.stats) {
        md += `<div align="center">\n  <img src="https://github-readme-stats.vercel.app/api?username=${u}&show_icons=true&theme=tokyonight&hide_border=true&bg_color=050811&title_color=00f0ff&icon_color=ff0055&text_color=94a3b8" height="165" />\n  <img src="https://github-readme-streak-stats.herokuapp.com/?user=${u}&theme=tokyonight&hide_border=true&background=050811&ring=00f0ff&fire=ff0055&currStreakLabel=00f0ff" height="165" />\n</div>\n\n`;
      }

      md += `<img src="https://capsule-render.vercel.app/api?type=waving&color=auto&customColorList=1,13,24&height=80&section=footer" width="100%"/>\n\n`;
      if (state.toggles.viralBadge) {
        md += `<div align="center">\n  <sub>⚡ Decorated with <a href="https://github.com/${u}/Github-overview-components">GitHub Profile Studio</a></sub>\n</div>\n`;
      }
      return md;
    }
  }
}

// -------------------------------------------------------------
// MARKDOWN TO HTML RENDERER ENGINE
// -------------------------------------------------------------
function renderMarkdownToHtml(md, arch) {
  if (typeof marked !== "undefined" && typeof marked.parse === "function") {
    try {
      marked.setOptions({
        gfm: true,
        breaks: true,
        headerIds: false,
        mangle: false
      });
      return marked.parse(md);
    } catch (e) {
      console.warn("Marked parser error, falling back:", e);
    }
  }
  return fallbackMarkdownParse(md, arch);
}

function fallbackMarkdownParse(md, arch) {
  let html = md;

  // Preformatted Code Blocks
  html = html.replace(/```(bash|yaml|json|text)?\n([\s\S]*?)```/g, (m, lang, code) => {
    const esc = code.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    return `<pre><code>${esc}</code></pre>`;
  });

  // Headers
  html = html.replace(/^### (.*$)/gim, '<h3 style="color: ' + arch.accent + ';">$1</h3>');
  html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
  html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');

  // Horizontal Rule
  html = html.replace(/---/gim, '<hr style="border: 0; height: 1px; background: ' + arch.accent + '33; margin: 1.8rem 0;" />');

  // Images with link
  html = html.replace(/\[!\[([^\]]*)\]\(([^)]+)\)\]\(([^)]+)\)/g, '<a href="$3" target="_blank"><img src="$2" alt="$1" /></a>');
  // Images
  html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" />');

  // Links
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank">$1</a>');

  // Bold and Italic
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*([^*]+)\*/g, '<em>$1</em>');

  // Inline Code
  html = html.replace(/`([^`]+)`/g, '<code>$1</code>');

  // Unordered Lists
  html = html.replace(/^- (.*$)/gim, '<li>$1</li>');

  // Tables
  if (html.includes("|")) {
    const tableRegex = /\|(.+)\|\n\|[-:| ]+\|\n((?:\|.+\|\n?)+)/g;
    html = html.replace(tableRegex, (match, headerRow, bodyRows) => {
      const headers = headerRow.split("|").filter(c => c.trim().length > 0).map(c => `<th>${c.trim()}</th>`).join("");
      const rows = bodyRows.trim().split("\n").map(row => {
        const cells = row.split("|").filter(c => c.trim().length > 0).map(c => `<td>${c.trim()}</td>`).join("");
        return `<tr>${cells}</tr>`;
      }).join("");
      return `<table><thead><tr>${headers}</tr></thead><tbody>${rows}</tbody></table>`;
    });
  }

  return html;
}

// -------------------------------------------------------------
// UPDATE STUDIO PREVIEWS & RAW CODE
// -------------------------------------------------------------
function updateStudio() {
  const md = generateMarkdown();
  const arch = APP_DATA.archetypes[state.currentArchetype] || APP_DATA.archetypes.cyberpunk;
  const u = state.username || "alexdev";

  // Update raw markdown code container
  if (DOM.rawMarkdownOutput) {
    DOM.rawMarkdownOutput.textContent = md;
  }

  // Update mock address bar
  if (DOM.mockupAddressBar) {
    DOM.mockupAddressBar.innerHTML = `<span>📄 github.com/${u}/README.md</span>`;
  }

  // Render Visual Preview with Theme Colors & Typography
  if (DOM.livePreviewContainer) {
    DOM.livePreviewContainer.style.backgroundColor = arch.bg;
    DOM.livePreviewContainer.style.fontFamily = arch.font;
    DOM.livePreviewContainer.innerHTML = renderMarkdownToHtml(md, arch);
  }
}

// -------------------------------------------------------------
// USER ACTIONS (COPY, DOWNLOAD, RANDOMIZE, RESET)
// -------------------------------------------------------------
function copyMarkdownAction() {
  const md = generateMarkdown();
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(md).then(() => {
      showToast("✨ Markdown copied to clipboard! Ready to paste into README.md");
    }).catch(() => fallbackCopy(md));
  } else {
    fallbackCopy(md);
  }
}

function fallbackCopy(text) {
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.style.position = "fixed";
  ta.style.opacity = "0";
  document.body.appendChild(ta);
  ta.select();
  document.execCommand("copy");
  document.body.removeChild(ta);
  showToast("✨ Markdown copied to clipboard!");
}

function downloadReadmeAction() {
  const md = generateMarkdown();
  const blob = new Blob([md], { type: "text/markdown;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "README.md";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast("💾 README.md downloaded successfully!");
}

function randomizeAction() {
  const keys = Object.keys(APP_DATA.archetypes);
  const randomKey = keys[Math.floor(Math.random() * keys.length)];
  state.currentArchetype = randomKey;

  const shuffled = [...APP_DATA.techStack].sort(() => 0.5 - Math.random());
  state.selectedSkills = shuffled.slice(0, 12).map(s => s.id);

  renderArchetypeSelectors();
  renderTechGrid();
  updateStudio();
  showToast(`🎲 Transformed profile to ${APP_DATA.archetypes[randomKey].name}!`);
}

function resetAction() {
  state.currentArchetype = "cyberpunk";
  state.selectedSkills = ["ts", "js", "react", "nextjs", "rust", "go", "python", "fastapi", "postgres", "mongodb", "redis", "docker", "kubernetes", "aws", "tailwind", "git"];
  state.projects = JSON.parse(JSON.stringify(APP_DATA.defaultProjects));
  renderArchetypeSelectors();
  renderProjectsList();
  renderTechGrid();
  updateStudio();
  showToast("🔄 Reset to default Cyberpunk preset!");
}

// -------------------------------------------------------------
// COMPONENT CATALOG MODAL
// -------------------------------------------------------------
function populateModalCatalog() {
  if (!DOM.modalComponentList) return;
  const snippets = [
    {
      title: "💻 Unix Fastfetch Specs Block",
      desc: "Authentic Terminal ASCII system specs with live host details.",
      code: "```bash\n   /\\_/\\        user@archlinux-zen [x86_64]\n  ( o.o )       -----------------------------------------\n   > ^ <        OS       : Arch Linux Rolling Release\n                Host     : Alex Vance\n                Role     : Full-Stack Architect\n                Uptime   : 99.99% // Continuous Integration\n```"
    },
    {
      title: "⚔️ RPG Guild Registration Card",
      desc: "Level 99 Archmage Character Sheet with HP, Mana, and Quests.",
      code: "```yaml\n⚜️ ADVENTURER'S GUILD // CHARACTER SHEET ⚜️\n  Player: Alex Vance\n  Class : Senior Code Sorcerer\n  HP    : [████████████████████] 9999/9999 (Mental Fortitude)\n  Mana  : [████████████████░░░░] 8500/9999 (Dark Roast)\n```"
    },
    {
      title: "🍱 Bento Grid Shipped Systems Matrix",
      desc: "Modern modular card matrix with live deploy & source badges.",
      code: "| 📦 System & Core Spec | 🌐 Deployment & Artifacts |\n|:---|:---|\n| **QuantumFlow Engine**<br/><sub>Distributed event streaming in Rust</sub> | <a href=\"https://quantumflow.io\"><img src=\"https://img.shields.io/badge/Live_App-0070f3?style=flat-square\" /></a> <a href=\"https://github.com\"><img src=\"https://img.shields.io/badge/GitHub-181717?style=flat-square\" /></a> |"
    },
    {
      title: "👾 Retro 8-Bit Arcade High Score Board",
      desc: "80s Arcade cabinet high score board ranking developers by score.",
      code: "```\n +---------------------------------------------------------+\n |               ARCADE HIGH SCORE LEADERBOARD             |\n +---------------------------------------------------------+\n | [RANK 1] ALEX_VANCE       SCORE: 999,990  [SENIOR_STAGE] |\n +---------------------------------------------------------+\n```"
    }
  ];

  DOM.modalComponentList.innerHTML = "";
  snippets.forEach(item => {
    const card = document.createElement("div");
    card.className = "component-card";
    card.innerHTML = `
      <h3>${item.title}</h3>
      <p>${item.desc}</p>
      <pre><code>${item.code.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</code></pre>
      <button class="btn btn-secondary btn-copy-snippet">📋 Copy Snippet</button>
    `;
    card.querySelector(".btn-copy-snippet").addEventListener("click", () => {
      fallbackCopy(item.code);
    });
    DOM.modalComponentList.appendChild(card);
  });
}

// -------------------------------------------------------------
// TOAST NOTIFICATION
// -------------------------------------------------------------
function showToast(msg) {
  if (!DOM.toast || !DOM.toastMsg) return;
  DOM.toastMsg.textContent = msg;
  DOM.toast.classList.add("show");
  setTimeout(() => {
    DOM.toast.classList.remove("show");
  }, 3200);
}

// Kickoff
document.addEventListener("DOMContentLoaded", initApp);
