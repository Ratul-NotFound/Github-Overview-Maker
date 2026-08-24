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
  mockDisplayName: document.getElementById("mockDisplayName"),
  mockHandle: document.getElementById("mockHandle"),
  mockHeadline: document.getElementById("mockHeadline"),
  readmeFileName: document.getElementById("readmeFileName"),
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

  // Sidebar Accordion Expand/Collapse Listeners
  document.querySelectorAll(".accordion-header").forEach(header => {
    header.addEventListener("click", () => {
      const card = header.closest(".accordion-card");
      if (card) card.classList.toggle("open");
    });
  });

  // Quick Accordion Controls (Expand All / Collapse All)
  const btnExpandAll = document.getElementById("btnExpandAll");
  const btnCollapseAll = document.getElementById("btnCollapseAll");
  if (btnExpandAll) {
    btnExpandAll.addEventListener("click", () => {
      document.querySelectorAll(".accordion-card").forEach(c => c.classList.add("open"));
      showToast("📂 Expanded all customizer modules");
    });
  }
  if (btnCollapseAll) {
    btnCollapseAll.addEventListener("click", () => {
      document.querySelectorAll(".accordion-card").forEach(c => c.classList.remove("open"));
      showToast("📁 Collapsed all modules");
    });
  }

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

// -----------------------------------// NEW_GENERATOR_SECTION_START
function generateMarkdown() {
  const u = state.username || "alexdev";
  const name = state.name || "Alex Vance";
  const headline = state.headline || "Full-Stack Architect";
  const arch = APP_DATA.archetypes[state.currentArchetype] || APP_DATA.archetypes.cyberpunk;
  const skillsStr = state.selectedSkills.join(",");
  const pStyle = state.projectStyle;
  const gStyle = state.graphStyle;

  function buildSocialBadges(style) {
    const b = [];
    if (state.socials.linkedin)  b.push(`<a href="https://linkedin.com/in/${state.socials.linkedin}"><img src="https://img.shields.io/badge/LinkedIn-%230077B5.svg?style=${style}&logo=linkedin&logoColor=white"/></a>`);
    if (state.socials.twitter)   b.push(`<a href="https://x.com/${state.socials.twitter}"><img src="https://img.shields.io/badge/X-black.svg?style=${style}&logo=X&logoColor=white"/></a>`);
    if (state.socials.discord)   b.push(`<a href="https://discord.gg"><img src="https://img.shields.io/badge/Discord-%235865F2.svg?style=${style}&logo=discord&logoColor=white"/></a>`);
    if (state.socials.portfolio) b.push(`<a href="${state.socials.portfolio}"><img src="https://img.shields.io/badge/Portfolio-000000?style=${style}&logo=vercel&logoColor=white"/></a>`);
    if (state.socials.email)     b.push(`<a href="mailto:${state.socials.email}"><img src="https://img.shields.io/badge/Email-D14836?style=${style}&logo=gmail&logoColor=white"/></a>`);
    return b;
  }

  switch (state.currentArchetype) {

    case "neofetch": {
      let md = "";
      if (state.toggles.views) {
        md += `<div align="center">\n  <img src="https://komarev.com/ghpvc/?username=${u}&label=PROFILE+SESSIONS&color=00ff66&style=flat-square" alt="Profile Views"/>\n</div>\n\n`;
      }
      md += "```ansi\n";
      md += `   /\\_/\\        ${u}@archlinux-zen [x86_64]\n`;
      md += `  ( o.o )       ─────────────────────────────────────────\n`;
      md += `   > ^ <        OS       : Arch Linux 6.10 Rolling\n`;
      md += `                Host     : ${name}\n`;
      md += `                Role     : ${headline}\n`;
      md += `                Kernel   : zen-6.10.4 // Performance\n`;
      md += `                Shell    : zsh 5.9 + oh-my-zsh\n`;
      md += `                Memory   : 64GB DDR5 @6400MHz\n`;
      md += `                Uptime   : 99.99% Continuous Delivery\n`;
      md += `                Fuel     : Cold Brew Concentrate ☕\n`;
      md += "```\n\n";

      if (state.toggles.typing && state.typingLines.length > 0) {
        const lp = state.typingLines.map(l => encodeURIComponent(l)).join(";");
        md += `<div align="center">\n  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=18&duration=3000&pause=1000&color=00FF66&center=true&vCenter=true&multiline=false&width=750&height=45&lines=${lp}" alt="Typing SVG"/>\n</div>\n\n`;
      }

      const sb = buildSocialBadges("flat-square");
      if (sb.length > 0) {
        md += `<div align="center">\n  ${sb.join(" &nbsp; ")}\n</div>\n\n`;
      }
      md += `---\n\n`;

      if (state.toggles.statusBio) {
        md += "```bash\n";
        md += `┌──(root㉿dev)-[~/focus-matrix]\n└─$ cat current_session.json\n`;
        md += "```\n";
        md += "```json\n{\n";
        md += `  "status"      : "🟢 Active & Shipping",\n`;
        md += `  "working_on"  : "${state.statusBio.working}",\n`;
        md += `  "learning"    : "${state.statusBio.learning}",\n`;
        md += `  "ask_me_about": "${state.statusBio.askMe}",\n`;
        md += `  "fun_fact"    : "${state.statusBio.funFact}"\n`;
        md += `}\n\`\`\`\n\n`;
        md += `---\n\n`;
      }

      if (state.selectedSkills.length > 0) {
        md += "```bash\n";
        md += `┌──(root㉿dev)-[~/arsenal]\n└─$ pkg query --installed --verbose\n`;
        md += "```\n\n";
        md += `<div align="center">\n  <a href="https://skillicons.dev">\n    <img src="https://skillicons.dev/icons?i=${skillsStr}&perline=10" />\n  </a>\n</div>\n\n`;
        md += `---\n\n`;
      }

      if (state.toggles.projects && state.projects.length > 0) {
        md += "```bash\n";
        md += `┌──(root㉿dev)-[~/containers]\n└─$ docker ps --all --format "table {{.Names}}\\t{{.Image}}\\t{{.Status}}"\n`;
        md += "```\n\n";
        md += buildProjectsMarkdown(u, arch, pStyle);
        md += `\n---\n\n`;
      }

      if (state.toggles.graphs) {
        md += "```bash\n";
        md += `┌──(root㉿dev)-[~/telemetry]\n└─$ btop --stream --git-activity\n`;
        md += "```\n\n";
        md += buildGraphMarkdown(u, arch, gStyle);
        md += `\n`;
      }

      if (state.toggles.stats) {
        md += `<div align="center">\n`;
        md += `  <img src="https://github-readme-stats.vercel.app/api?username=${u}&show_icons=true&theme=merko&hide_border=true&bg_color=0a0e0b&title_color=00ff66&icon_color=00cc55&text_color=22c55e&rank_icon=github" height="160" />\n`;
        md += `  &nbsp;\n`;
        md += `  <img src="https://github-readme-streak-stats.herokuapp.com/?user=${u}&theme=merko&hide_border=true&background=0a0e0b&ring=00ff66&fire=00dd55&currStreakLabel=00ff66&sideLabels=00cc55" height="160" />\n`;
        md += `</div>\n\n`;
        md += `<div align="center">\n  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=${u}&layout=compact&theme=merko&hide_border=true&bg_color=0a0e0b&title_color=00ff66&text_color=22c55e&langs_count=8" height="140" />\n</div>\n\n`;
      }

      if (state.toggles.viralBadge) {
        md += `<div align="center">\n  <code>[ SYS_OK ] &nbsp; Crafted with <a href="https://github.com/Ratul-NotFound/Github-Overview-Maker">GitHub Profile Studio</a> &nbsp; [ EOF ]</code>\n</div>\n`;
      }
      return md;
    }

    case "bento": {
      let md = "";
      if (state.toggles.header) {
        md += `<div align="center">\n  <img src="https://capsule-render.vercel.app/api?type=slice&color=gradient&customColorList=10,20,30&height=180&section=header&text=${encodeURIComponent(name)}&fontSize=38&fontColor=ffffff&fontAlignY=45&desc=${encodeURIComponent(headline.slice(0,50))}&descAlignY=68&descSize=15&descColor=38bdf8&animation=fadeIn" width="100%"/>\n</div>\n\n`;
      }

      if (state.toggles.views) {
        md += `<div align="center">\n  <img src="https://komarev.com/ghpvc/?username=${u}&label=Profile+Views&color=38bdf8&style=flat-square" />\n  &nbsp;&nbsp;\n  <img src="https://img.shields.io/badge/Status-Open%20to%20Work-22c55e?style=flat-square&logo=checkmarx&logoColor=white" />\n  &nbsp;&nbsp;\n  <img src="https://img.shields.io/badge/Based%20in-Remote%20%F0%9F%8C%8D-6366f1?style=flat-square" />\n</div>\n\n`;
      }

      if (state.toggles.typing && state.typingLines.length > 0) {
        const lp = state.typingLines.map(l => encodeURIComponent(l)).join(";");
        md += `<div align="center">\n  <img src="https://readme-typing-svg.demolab.com?font=Inter&weight=600&size=20&duration=3500&pause=800&color=38BDF8&center=true&vCenter=true&width=750&height=48&lines=${lp}" alt="Typing SVG"/>\n</div>\n\n`;
      }

      const sbBento = buildSocialBadges("for-the-badge");
      if (sbBento.length > 0) {
        md += `<div align="center">\n  ${sbBento.join(" &nbsp; ")}\n</div>\n\n`;
      }
      md += `---\n\n`;

      if (state.toggles.statusBio) {
        md += `## 🚀 About Me\n\n`;
        md += `| &nbsp; | &nbsp; |\n|:---|:---|\n`;
        md += `| 🎯 **Currently Building** | ${state.statusBio.working} |\n`;
        md += `| 📚 **Deep Diving Into** | ${state.statusBio.learning} |\n`;
        md += `| 💬 **Ask Me About** | ${state.statusBio.askMe} |\n`;
        md += `| ⚡ **Fun Fact** | ${state.statusBio.funFact} |\n`;
        md += `| 🟢 **Availability** | Open to strategic collaborations |\n\n`;
        md += `---\n\n`;
      }

      if (state.selectedSkills.length > 0) {
        md += `## 🛠️ Tech Stack & Toolchain\n\n`;
        md += `<div align="center">\n  <a href="https://skillicons.dev">\n    <img src="https://skillicons.dev/icons?i=${skillsStr}&perline=10" />\n  </a>\n</div>\n\n`;
        md += `---\n\n`;
      }

      if (state.toggles.projects && state.projects.length > 0) {
        md += `## 📦 Featured Projects\n\n`;
        md += buildProjectsMarkdown(u, arch, pStyle);
        md += `\n---\n\n`;
      }

      if (state.toggles.graphs) {
        md += `## 📈 Contribution Activity\n\n`;
        md += buildGraphMarkdown(u, arch, gStyle);
        md += `\n`;
      }

      if (state.toggles.stats) {
        md += `## 📊 GitHub Statistics\n\n`;
        md += `<div align="center">\n`;
        md += `  <img src="https://github-readme-stats.vercel.app/api?username=${u}&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0f172a&title_color=38bdf8&icon_color=818cf8&text_color=cbd5e1&rank_icon=github&include_all_commits=true" height="165" />\n`;
        md += `  &nbsp;\n`;
        md += `  <img src="https://github-readme-streak-stats.herokuapp.com/?user=${u}&theme=tokyonight&hide_border=true&background=0f172a&ring=38bdf8&fire=818cf8&currStreakLabel=38bdf8&sideLabels=cbd5e1" height="165" />\n`;
        md += `</div>\n\n`;
        md += `<div align="center">\n  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=${u}&layout=compact&theme=tokyonight&hide_border=true&bg_color=0f172a&title_color=38bdf8&text_color=cbd5e1&langs_count=8" height="140" />\n</div>\n\n`;
        md += `---\n\n`;
      }

      if (state.toggles.viralBadge) {
        md += `<div align="center">\n  <sub>🍱 Engineered with <a href="https://github.com/Ratul-NotFound/Github-Overview-Maker">GitHub Profile Studio</a></sub>\n</div>\n`;
      }
      return md;
    }

    case "rpg": {
      let md = "";
      md += `<div align="center">\n  <img src="https://capsule-render.vercel.app/api?type=soft&color=gradient&customColorList=2,6,12&height=200&section=header&text=%E2%9A%9C%EF%B8%8F+${encodeURIComponent(name.toUpperCase())}+%E2%9A%9C%EF%B8%8F&fontSize=32&fontColor=fbbf24&fontAlignY=42&desc=LEVEL+99+ARCHMAGE+%7C+${encodeURIComponent(headline.slice(0,35))}&descAlignY=65&descSize=14&descColor=ec4899&animation=fadeIn" width="100%"/>\n</div>\n\n`;

      if (state.toggles.typing && state.typingLines.length > 0) {
        const lp = state.typingLines.map(l => encodeURIComponent(l)).join(";");
        md += `<div align="center">\n  <img src="https://readme-typing-svg.demolab.com?font=Cinzel&size=18&duration=3000&pause=1200&color=FBBF24&center=true&vCenter=true&width=750&height=48&lines=${lp}" alt="RPG Typing"/>\n</div>\n\n`;
      }

      const sbRpg = buildSocialBadges("for-the-badge");
      if (sbRpg.length > 0) {
        md += `<div align="center">\n  ${sbRpg.join(" &nbsp; ")}\n</div>\n\n`;
      }
      md += `---\n\n`;

      md += "```yaml\n";
      md += `╔══════════════════════════════════════════════════╗\n`;
      md += `║       ⚜️  ADVENTURER'S GUILD REGISTRY  ⚜️        ║\n`;
      md += `╠══════════════════════════════════════════════════╣\n`;
      md += `║  PLAYER   : ${name.padEnd(36)} ║\n`;
      md += `║  USERNAME : @${u.padEnd(35)} ║\n`;
      md += `║  CLASS    : Senior Code Sorcerer & Infra Wizard  ║\n`;
      md += `║  GUILD    : Open Source Brotherhood              ║\n`;
      md += `╠══════════════════════════════════════════════════╣\n`;
      md += `║  HP    ████████████████████ 9999/9999  [ MAX ]   ║\n`;
      md += `║  MANA  ████████████████░░░░ 8500/9999  [ HI  ]   ║\n`;
      md += `║  EXP   ████████████████████ SENIOR [ S-RANK ]    ║\n`;
      md += `╠══════════════════════════════════════════════════╣\n`;
      md += `║  PASSIVE I   : Clean Architecture Mastery  +50% ║\n`;
      md += `║  PASSIVE II  : Sub-ms Latency Aura         +40% ║\n`;
      md += `║  PASSIVE III : Infinite Coffee Endurance   +999  ║\n`;
      md += `╚══════════════════════════════════════════════════╝\n`;
      md += "```\n\n";
      md += `---\n\n`;

      if (state.toggles.statusBio) {
        md += `## 📜 Active Guild Directives\n\n`;
        md += `| Quest Type | Mission |\n|:---:|:---|\n`;
        md += `| ⚔️ **Main Quest** | ${state.statusBio.working} |\n`;
        md += `| 📖 **Ancient Tome Study** | ${state.statusBio.learning} |\n`;
        md += `| 💬 **Sage's Council** | ${state.statusBio.askMe} |\n`;
        md += `| ⚡ **Secret Scroll** | ${state.statusBio.funFact} |\n\n`;
        md += `---\n\n`;
      }

      if (state.selectedSkills.length > 0) {
        md += `## 🧙‍♂️ Spellbook & Relic Inventory\n\n`;
        md += `<div align="center">\n  <a href="https://skillicons.dev">\n    <img src="https://skillicons.dev/icons?i=${skillsStr}&perline=10" />\n  </a>\n</div>\n\n`;
        md += `---\n\n`;
      }

      if (state.toggles.projects && state.projects.length > 0) {
        md += `## ⚔️ Completed Quest Log\n\n`;
        md += buildProjectsMarkdown(u, arch, pStyle);
        md += `\n---\n\n`;
      }

      if (state.toggles.graphs) {
        md += `## 🌌 Astral Leyline Resonance\n\n`;
        md += buildGraphMarkdown(u, arch, gStyle);
        md += `\n`;
      }

      if (state.toggles.stats) {
        md += `## 🏆 Guild Trophies & Battle Records\n\n`;
        md += `<div align="center">\n  <img src="https://github-profile-trophy.vercel.app/?username=${u}&theme=onedark&no-frame=true&no-bg=true&margin-w=8&column=7" width="100%" />\n</div>\n\n`;
        md += `<div align="center">\n`;
        md += `  <img src="https://github-readme-stats.vercel.app/api?username=${u}&show_icons=true&theme=synthwave&hide_border=true&bg_color=100c1a&title_color=fbbf24&icon_color=ec4899&text_color=e2e8f0&rank_icon=github" height="160" />\n`;
        md += `  &nbsp;\n`;
        md += `  <img src="https://github-readme-streak-stats.herokuapp.com/?user=${u}&theme=synthwave&hide_border=true&background=100c1a&ring=fbbf24&fire=ec4899&currStreakLabel=fbbf24&sideLabels=e2e8f0" height="160" />\n`;
        md += `</div>\n\n`;
        md += `<div align="center">\n  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=${u}&layout=compact&theme=synthwave&hide_border=true&bg_color=100c1a&title_color=fbbf24&text_color=e2e8f0&langs_count=8" height="140" />\n</div>\n\n`;
      }

      md += `<div align="center">\n  <img src="https://capsule-render.vercel.app/api?type=soft&color=gradient&customColorList=2,6,12&height=80&section=footer" width="100%"/>\n</div>\n\n`;
      if (state.toggles.viralBadge) {
        md += `<div align="center">\n  <sub>⚜️ Forged at the Guild with <a href="https://github.com/Ratul-NotFound/Github-Overview-Maker">GitHub Profile Studio</a></sub>\n</div>\n`;
      }
      return md;
    }

    case "arcade8bit": {
      let md = "";
      md += `<div align="center">\n  <img src="https://capsule-render.vercel.app/api?type=rect&color=gradient&customColorList=2,5,9&height=160&section=header&text=%F0%9F%95%B9%EF%B8%8F+${encodeURIComponent(name.toUpperCase())}+%F0%9F%95%B9%EF%B8%8F&fontSize=30&fontColor=facc15&fontAlignY=50" width="100%"/>\n</div>\n\n`;

      if (state.toggles.typing && state.typingLines.length > 0) {
        const lp = state.typingLines.map(l => encodeURIComponent(l)).join(";");
        md += `<div align="center">\n  <img src="https://readme-typing-svg.demolab.com?font=Press+Start+2P&size=13&duration=3000&pause=1200&color=FACC15&center=true&vCenter=true&width=750&height=55&lines=INSERT+COIN+TO+CONTINUE...;${lp}" alt="8bit typing"/>\n</div>\n\n`;
      }

      const sbArcade = buildSocialBadges("flat-square");
      if (sbArcade.length > 0) {
        md += `<div align="center">\n  ${sbArcade.join(" &nbsp; ")}\n</div>\n\n`;
      }
      md += `---\n\n`;

      md += "```\n";
      md += `┌─────────────────────────────────────────────────────────────┐\n`;
      md += `│                🕹️  ARCADE HIGH SCORE BOARD  🕹️               │\n`;
      md += `│─────────────────────────────────────────────────────────────│\n`;
      md += `│  RANK  │  PLAYER                     │  SCORE    │  TIER    │\n`;
      md += `│─────────────────────────────────────────────────────────────│\n`;
      md += `│  #1    │  ${name.toUpperCase().slice(0,25).padEnd(25)}  │  999,999  │  ★ LEGEND │\n`;
      md += `│  #2    │  GITHUB_COPILOT              │  850,000  │  ★ PRO   │\n`;
      md += `│  #3    │  LINUS_TORVALDS              │  740,000  │  ★ MSTR  │\n`;
      md += `│─────────────────────────────────────────────────────────────│\n`;
      md += `│            ► PRESS START TO JOIN THE LEADERBOARD ◄          │\n`;
      md += `└─────────────────────────────────────────────────────────────┘\n`;
      md += "```\n\n";
      md += `---\n\n`;

      if (state.toggles.statusBio) {
        md += `## 🎮 Player Status\n\n`;
        md += "```\n";
        md += `  ┌──────────────────────────────────────────────┐\n`;
        md += `  │  CURRENT MISSION  : ${state.statusBio.working.slice(0,24).padEnd(24)}  │\n`;
        md += `  │  SKILL TRAINING   : ${state.statusBio.learning.slice(0,24).padEnd(24)}  │\n`;
        md += `  │  PLAYER HOTLINE   : ${state.statusBio.askMe.slice(0,24).padEnd(24)}  │\n`;
        md += `  │  CHEAT CODE       : ${state.statusBio.funFact.slice(0,24).padEnd(24)}  │\n`;
        md += `  └──────────────────────────────────────────────┘\n`;
        md += "```\n\n";
        md += `---\n\n`;
      }

      if (state.selectedSkills.length > 0) {
        md += `## 👾 Power-Ups & Equipped Items\n\n`;
        md += `<div align="center">\n  <a href="https://skillicons.dev">\n    <img src="https://skillicons.dev/icons?i=${skillsStr}&perline=10" />\n  </a>\n</div>\n\n`;
        md += `---\n\n`;
      }

      if (state.toggles.projects && state.projects.length > 0) {
        md += `## 🕹️ Cleared Stages (Shipped Projects)\n\n`;
        md += buildProjectsMarkdown(u, arch, pStyle);
        md += `\n---\n\n`;
      }

      if (state.toggles.graphs) {
        md += `## 📊 Pixel Activity Stream\n\n`;
        md += buildGraphMarkdown(u, arch, gStyle);
        md += `\n`;
      }

      if (state.toggles.stats) {
        md += `<div align="center">\n  <img src="https://github-profile-trophy.vercel.app/?username=${u}&theme=radical&no-frame=true&no-bg=true&margin-w=8&column=7" width="100%" />\n</div>\n\n`;
        md += `<div align="center">\n`;
        md += `  <img src="https://github-readme-stats.vercel.app/api?username=${u}&show_icons=true&theme=radical&hide_border=true&bg_color=0d0820&title_color=facc15&icon_color=ff007f&text_color=e2e8f0&rank_icon=github" height="160" />\n`;
        md += `  &nbsp;\n`;
        md += `  <img src="https://github-readme-streak-stats.herokuapp.com/?user=${u}&theme=radical&hide_border=true&background=0d0820&ring=facc15&fire=ff007f&currStreakLabel=facc15&sideLabels=e2e8f0" height="160" />\n`;
        md += `</div>\n\n`;
        md += `<div align="center">\n  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=${u}&layout=compact&theme=radical&hide_border=true&bg_color=0d0820&title_color=facc15&text_color=e2e8f0&langs_count=8" height="140" />\n</div>\n\n`;
      }

      if (state.toggles.viralBadge) {
        md += `<div align="center">\n  <sub>👾 INSERT COIN • Made with <a href="https://github.com/Ratul-NotFound/Github-Overview-Maker">GitHub Profile Studio</a></sub>\n</div>\n`;
      }
      return md;
    }

    case "kawaii": {
      let md = "";
      md += `<div align="center">\n  <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=34,36,44&height=200&section=header&text=%F0%9F%8C%B8+${encodeURIComponent(name)}+%F0%9F%8C%B8&fontSize=34&fontColor=ffffff&fontAlignY=40&desc=(%E3%81%A5%EF%BD%A1%E2%97%94%E2%80%BF%E2%80%BF%E2%97%94%EF%BD%A1)%E3%81%A5+%E2%9C%A7+${encodeURIComponent(headline.slice(0,30))}&descAlignY=65&descSize=14&descColor=f9a8d4&animation=twinkling" width="100%"/>\n</div>\n\n`;
      md += `<div align="center">\n\n✿ ─── ─── ─── ─── ─── ─── ─── ─── ─── ✿\n\n*🌸 Welcome to my cozy digital garden! I build with heart ♡*\n\n✿ ─── ─── ─── ─── ─── ─── ─── ─── ─── ✿\n\n</div>\n\n`;

      if (state.toggles.typing && state.typingLines.length > 0) {
        const lp = state.typingLines.map(l => encodeURIComponent(l)).join(";");
        md += `<div align="center">\n  <img src="https://readme-typing-svg.demolab.com?font=Quicksand&weight=600&size=20&duration=3000&pause=1000&color=F472B6&center=true&vCenter=true&width=750&height=48&lines=Welcome+to+my+cozy+corner+%E2%9C%A8;${lp}" alt="Kawaii Typing"/>\n</div>\n\n`;
      }

      const sbKawaii = buildSocialBadges("for-the-badge");
      if (sbKawaii.length > 0) {
        md += `<div align="center">\n  ${sbKawaii.join(" &nbsp; ")}\n</div>\n\n`;
      }
      md += `---\n\n`;

      if (state.toggles.statusBio) {
        md += `## 🍵 Cozy Corner\n\n`;
        md += `> *${state.statusBio.funFact}* ✨\n\n`;
        md += `| ✿ | |\n|:---:|:---|\n`;
        md += `| 🌸 **Brewing** | ${state.statusBio.working} |\n`;
        md += `| 📖 **Reading** | ${state.statusBio.learning} |\n`;
        md += `| 💌 **Say Hi!** | ${state.statusBio.askMe} |\n\n`;
        md += `---\n\n`;
      }

      if (state.selectedSkills.length > 0) {
        md += `## 🧁 Cozy Toolkit\n\n`;
        md += `<div align="center">\n  <a href="https://skillicons.dev">\n    <img src="https://skillicons.dev/icons?i=${skillsStr}&perline=10" />\n  </a>\n</div>\n\n`;
        md += `---\n\n`;
      }

      if (state.toggles.projects && state.projects.length > 0) {
        md += `## 🌷 Sakura Garden Projects\n\n`;
        md += buildProjectsMarkdown(u, arch, pStyle);
        md += `\n---\n\n`;
      }

      if (state.toggles.graphs) {
        md += `## 🌸 Contribution Blossoms\n\n`;
        md += buildGraphMarkdown(u, arch, gStyle);
        md += `\n`;
      }

      if (state.toggles.stats) {
        md += `## 🎀 Sweet Statistics\n\n`;
        md += `<div align="center">\n`;
        md += `  <img src="https://github-readme-stats.vercel.app/api?username=${u}&show_icons=true&theme=dracula&hide_border=true&bg_color=160e20&title_color=f472b6&icon_color=c084fc&text_color=fbcfe8&rank_icon=github" height="160" />\n`;
        md += `  &nbsp;\n`;
        md += `  <img src="https://github-readme-streak-stats.herokuapp.com/?user=${u}&theme=dracula&hide_border=true&background=160e20&ring=f472b6&fire=c084fc&currStreakLabel=f472b6&sideLabels=fbcfe8" height="160" />\n`;
        md += `</div>\n\n`;
        md += `<div align="center">\n  <img src="https://github-profile-trophy.vercel.app/?username=${u}&theme=dracula&no-frame=true&no-bg=true&margin-w=8&column=7" width="100%" />\n</div>\n\n`;
        md += `<div align="center">\n  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=${u}&layout=compact&theme=dracula&hide_border=true&bg_color=160e20&title_color=f472b6&text_color=fbcfe8&langs_count=8" height="140" />\n</div>\n\n`;
      }

      md += `<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=34,36,44&height=80&section=footer" width="100%"/>\n\n`;
      if (state.toggles.viralBadge) {
        md += `<div align="center">\n  <sub>💖 Crafted with love using <a href="https://github.com/Ratul-NotFound/Github-Overview-Maker">GitHub Profile Studio</a></sub>\n</div>\n`;
      }
      return md;
    }

    case "aurora": {
      let md = "";
      md += `<div align="center">\n  <img src="https://capsule-render.vercel.app/api?type=soft&color=gradient&customColorList=20,24,26,28&height=200&section=header&text=%E2%9C%A6+${encodeURIComponent(name.toUpperCase())}+%E2%9C%A6&fontSize=36&fontColor=e0e7ff&fontAlignY=40&desc=INTERSTELLAR+COMMANDER+%7C+${encodeURIComponent(headline.slice(0,35))}&descAlignY=64&descSize=14&descColor=818cf8&animation=fadeIn" width="100%"/>\n</div>\n\n`;

      if (state.toggles.views) {
        md += `<div align="center">\n  <img src="https://komarev.com/ghpvc/?username=${u}&label=STARSHIP+VISITS&color=818cf8&style=flat-square" />\n  &nbsp;&nbsp;\n  <img src="https://img.shields.io/badge/Status-Exploring%20the%20Cosmos-4f46e5?style=flat-square" />\n</div>\n\n`;
      }

      if (state.toggles.typing && state.typingLines.length > 0) {
        const lp = state.typingLines.map(l => encodeURIComponent(l)).join(";");
        md += `<div align="center">\n  <img src="https://readme-typing-svg.demolab.com?font=Space+Grotesk&weight=600&size=20&duration=3500&pause=1000&color=818CF8&center=true&vCenter=true&width=750&height=48&lines=${lp}" alt="Cosmic Typing"/>\n</div>\n\n`;
      }

      const sbAurora = buildSocialBadges("for-the-badge");
      if (sbAurora.length > 0) {
        md += `<div align="center">\n  ${sbAurora.join(" &nbsp; ")}\n</div>\n\n`;
      }
      md += `---\n\n`;

      if (state.toggles.statusBio) {
        md += `## 🪐 Starship Mission Log\n\n`;
        md += "```\n";
        md += `  ╔══════════════════════════════════════════════════╗\n`;
        md += `  ║  STARDATE: ${new Date().toISOString().split('T')[0]}         SECTOR: ACTIVE ║\n`;
        md += `  ╠══════════════════════════════════════════════════╣\n`;
        md += `  ║  WARP SECTOR  : ${state.statusBio.working.slice(0,31).padEnd(31)}  ║\n`;
        md += `  ║  ASTRAL STUDY : ${state.statusBio.learning.slice(0,31).padEnd(31)}  ║\n`;
        md += `  ║  COMM CHANNEL : ${state.statusBio.askMe.slice(0,31).padEnd(31)}  ║\n`;
        md += `  ║  SHIP FUEL    : ${state.statusBio.funFact.slice(0,31).padEnd(31)}  ║\n`;
        md += `  ╚══════════════════════════════════════════════════╝\n`;
        md += "```\n\n";
        md += `---\n\n`;
      }

      if (state.selectedSkills.length > 0) {
        md += `## 🌌 Constellation Tech Matrix\n\n`;
        md += `<div align="center">\n  <a href="https://skillicons.dev">\n    <img src="https://skillicons.dev/icons?i=${skillsStr}&perline=10" />\n  </a>\n</div>\n\n`;
        md += `---\n\n`;
      }

      if (state.toggles.projects && state.projects.length > 0) {
        md += `## 🛰️ Orbital Missions & Satellites\n\n`;
        md += buildProjectsMarkdown(u, arch, pStyle);
        md += `\n---\n\n`;
      }

      if (state.toggles.graphs) {
        md += `## 🌠 Pulsar Activity Wave\n\n`;
        md += buildGraphMarkdown(u, arch, gStyle);
        md += `\n`;
      }

      if (state.toggles.stats) {
        md += `## 🔭 Deep Space Telemetry\n\n`;
        md += `<div align="center">\n  <img src="https://github-profile-trophy.vercel.app/?username=${u}&theme=onedark&no-frame=true&no-bg=true&margin-w=8&column=7" width="100%" />\n</div>\n\n`;
        md += `<div align="center">\n`;
        md += `  <img src="https://github-readme-stats.vercel.app/api?username=${u}&show_icons=true&theme=tokyonight&hide_border=true&bg_color=04020f&title_color=818cf8&icon_color=38bdf8&text_color=e0e7ff&rank_icon=github" height="160" />\n`;
        md += `  &nbsp;\n`;
        md += `  <img src="https://github-readme-streak-stats.herokuapp.com/?user=${u}&theme=tokyonight&hide_border=true&background=04020f&ring=818cf8&fire=38bdf8&currStreakLabel=818cf8&sideLabels=e0e7ff" height="160" />\n`;
        md += `</div>\n\n`;
        md += `<div align="center">\n  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=${u}&layout=compact&theme=tokyonight&hide_border=true&bg_color=04020f&title_color=818cf8&text_color=e0e7ff&langs_count=8" height="140" />\n</div>\n\n`;
      }

      md += `<img src="https://capsule-render.vercel.app/api?type=soft&color=gradient&customColorList=20,24,26,28&height=80&section=footer" width="100%"/>\n\n`;
      if (state.toggles.viralBadge) {
        md += `<div align="center">\n  <sub>✦ Launched into orbit with <a href="https://github.com/Ratul-NotFound/Github-Overview-Maker">GitHub Profile Studio</a></sub>\n</div>\n`;
      }
      return md;
    }

    case "minimal": {
      let md = "";
      md += `<h1 align="center">${name.toUpperCase()}</h1>\n`;
      md += `<p align="center"><strong>${headline}</strong></p>\n\n`;

      if (state.toggles.views) {
        md += `<p align="center">\n  <img src="https://komarev.com/ghpvc/?username=${u}&label=Profile+Views&color=000000&style=flat-square" />\n  &nbsp;\n  <img src="https://img.shields.io/badge/Status-Open%20to%20Work-000000?style=flat-square" />\n</p>\n\n`;
      }

      if (state.toggles.typing && state.typingLines.length > 0) {
        const lp = state.typingLines.map(l => encodeURIComponent(l)).join(";");
        md += `<p align="center">\n  <img src="https://readme-typing-svg.demolab.com?font=IBM+Plex+Mono&size=16&duration=3000&pause=1000&color=000000&center=true&vCenter=true&width=750&height=40&lines=${lp}" alt="Minimal Typing"/>\n</p>\n\n`;
      }

      const pillsMinimal = [];
      if (state.socials.linkedin)  pillsMinimal.push(`[LinkedIn](https://linkedin.com/in/${state.socials.linkedin})`);
      if (state.socials.twitter)   pillsMinimal.push(`[X / Twitter](https://x.com/${state.socials.twitter})`);
      if (state.socials.portfolio) pillsMinimal.push(`[Website](${state.socials.portfolio})`);
      if (state.socials.email)     pillsMinimal.push(`[Email](mailto:${state.socials.email})`);
      if (pillsMinimal.length > 0) {
        md += `<p align="center">${pillsMinimal.join(" &nbsp;·&nbsp; ")}</p>\n\n`;
      }
      md += `---\n\n`;

      if (state.toggles.statusBio) {
        md += `### 01 / FOCUS\n\n`;
        md += `- **Currently:** ${state.statusBio.working}\n`;
        md += `- **Researching:** ${state.statusBio.learning}\n`;
        md += `- **Inquiries:** ${state.statusBio.askMe}\n`;
        md += `- **Note:** ${state.statusBio.funFact}\n\n`;
        md += `---\n\n`;
      }

      if (state.selectedSkills.length > 0) {
        md += `### 02 / TOOLSET\n\n`;
        md += `<div align="center">\n  <a href="https://skillicons.dev">\n    <img src="https://skillicons.dev/icons?i=${skillsStr}&perline=10" />\n  </a>\n</div>\n\n`;
        md += `---\n\n`;
      }

      if (state.toggles.projects && state.projects.length > 0) {
        md += `### 03 / SELECTED WORKS\n\n`;
        md += buildProjectsMarkdown(u, arch, pStyle);
        md += `\n---\n\n`;
      }

      if (state.toggles.graphs) {
        md += `### 04 / ACTIVITY\n\n`;
        md += buildGraphMarkdown(u, arch, gStyle);
        md += `\n`;
      }

      if (state.toggles.stats) {
        md += `### 05 / METRICS\n\n`;
        md += `<div align="center">\n`;
        md += `  <img src="https://github-readme-stats.vercel.app/api?username=${u}&show_icons=true&theme=default&hide_border=true&bg_color=ffffff&title_color=000000&icon_color=000000&text_color=555555&rank_icon=github" height="155" />\n`;
        md += `  &nbsp;\n`;
        md += `  <img src="https://github-readme-streak-stats.herokuapp.com/?user=${u}&theme=default&hide_border=true&background=ffffff&ring=000000&fire=333333&currStreakLabel=000000&sideLabels=555555" height="155" />\n`;
        md += `</div>\n\n`;
        md += `<div align="center">\n  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=${u}&layout=compact&theme=default&hide_border=true&bg_color=ffffff&title_color=000000&text_color=555555&langs_count=8" height="140" />\n</div>\n\n`;
        md += `---\n\n`;
      }

      if (state.toggles.viralBadge) {
        md += `<p align="center"><sub>Built with <a href="https://github.com/Ratul-NotFound/Github-Overview-Maker">GitHub Profile Studio</a></sub></p>\n`;
      }
      return md;
    }

    default: {
      let md = "";
      if (state.toggles.views) {
        md += `<div align="center">\n  <img src="https://komarev.com/ghpvc/?username=${u}&label=CYBER+ACCESS+PORTAL&color=00f0ff&style=for-the-badge" alt="Profile Views" />\n</div>\n\n`;
      }

      if (state.toggles.header) {
        md += `<div align="center">\n  <img src="https://capsule-render.vercel.app/api?type=waving&color=auto&customColorList=1,13,24&height=220&section=header&text=${encodeURIComponent(name.toUpperCase())}&fontSize=36&fontColor=ffffff&fontAlignY=38&desc=NEURAL+ARCHITECT+%7C+${encodeURIComponent(headline.slice(0,40))}&descAlignY=62&descSize=15&descColor=00f0ff&animation=fadeIn" width="100%"/>\n</div>\n\n`;
      }

      if (state.toggles.typing && state.typingLines.length > 0) {
        const lp = state.typingLines.map(l => encodeURIComponent(l)).join(";");
        md += `<div align="center">\n  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=20&duration=3000&pause=1000&color=00F0FF&center=true&vCenter=true&width=750&height=48&lines=${lp}" alt="Typing SVG"/>\n</div>\n\n`;
      }

      const sbCyber = buildSocialBadges("for-the-badge");
      if (sbCyber.length > 0) {
        md += `<div align="center">\n  ${sbCyber.join(" &nbsp; ")}\n</div>\n\n`;
      }
      md += `---\n\n`;

      if (state.toggles.statusBio) {
        md += `## ⚡ Neural Telemetry & Directives\n\n`;
        md += `| Signal | Feed |\n|:---:|:---|\n`;
        md += `| 🛰️ **Active Neural Core** | ${state.statusBio.working} |\n`;
        md += `| 🧠 **Matrix Integration** | ${state.statusBio.learning} |\n`;
        md += `| ⚡ **Subroutine Queries** | ${state.statusBio.askMe} |\n`;
        md += `| 🔮 **System Override** | ${state.statusBio.funFact} |\n\n`;
        md += `---\n\n`;
      }

      if (state.selectedSkills.length > 0) {
        md += `## ⚡ Cyberware Specs & Neural Protocols\n\n`;
        md += `<div align="center">\n  <a href="https://skillicons.dev">\n    <img src="https://skillicons.dev/icons?i=${skillsStr}&perline=10" />\n  </a>\n</div>\n\n`;
        md += `---\n\n`;
      }

      if (state.toggles.projects && state.projects.length > 0) {
        md += `## 🚀 Active Netrunner Operations\n\n`;
        md += buildProjectsMarkdown(u, arch, pStyle);
        md += `\n---\n\n`;
      }

      if (state.toggles.graphs) {
        md += `## 📊 Real-time Cybernet Telemetry\n\n`;
        md += buildGraphMarkdown(u, arch, gStyle);
        md += `\n`;
      }

      if (state.toggles.stats) {
        md += `## 🖥️ System Performance Metrics\n\n`;
        md += `<div align="center">\n  <img src="https://github-profile-trophy.vercel.app/?username=${u}&theme=radical&no-frame=true&no-bg=true&margin-w=8&column=7" width="100%" />\n</div>\n\n`;
        md += `<div align="center">\n`;
        md += `  <img src="https://github-readme-stats.vercel.app/api?username=${u}&show_icons=true&theme=tokyonight&hide_border=true&bg_color=050811&title_color=00f0ff&icon_color=ff0055&text_color=94a3b8&rank_icon=github&include_all_commits=true" height="165" />\n`;
        md += `  &nbsp;\n`;
        md += `  <img src="https://github-readme-streak-stats.herokuapp.com/?user=${u}&theme=tokyonight&hide_border=true&background=050811&ring=00f0ff&fire=ff0055&currStreakLabel=00f0ff&sideLabels=94a3b8" height="165" />\n`;
        md += `</div>\n\n`;
        md += `<div align="center">\n  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=${u}&layout=compact&theme=tokyonight&hide_border=true&bg_color=050811&title_color=00f0ff&text_color=94a3b8&langs_count=8" height="140" />\n</div>\n\n`;
        md += `---\n\n`;
      }

      md += `<img src="https://capsule-render.vercel.app/api?type=waving&color=auto&customColorList=1,13,24&height=80&section=footer" width="100%"/>\n\n`;
      if (state.toggles.viralBadge) {
        md += `<div align="center">\n  <sub>⚡ Neural interface powered by <a href="https://github.com/Ratul-NotFound/Github-Overview-Maker">GitHub Profile Studio</a></sub>\n</div>\n`;
      }
      return md;
    }
  }
}
// NEW_GENERATOR_SECTION_END

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
  const name = state.name || "Alex Vance";
  const headline = state.headline || "Full-Stack Cyber Architect // Cloud & Distributed Systems";

  // Update raw markdown code container
  if (DOM.rawMarkdownOutput) {
    DOM.rawMarkdownOutput.textContent = md;
  }

  // Update mock address bar & realistic GitHub profile header
  if (DOM.mockupAddressBar) {
    DOM.mockupAddressBar.innerHTML = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg><span>github.com/${u}/README.md</span>`;
  }
  if (DOM.mockDisplayName) DOM.mockDisplayName.textContent = name;
  if (DOM.mockHandle) DOM.mockHandle.textContent = `@${u}`;
  if (DOM.mockHeadline) DOM.mockHeadline.textContent = headline;
  if (DOM.readmeFileName) DOM.readmeFileName.textContent = `${u} / README.md`;

  // Update Accordion Summary Badges
  const summaryIdentity = document.getElementById("summaryIdentity");
  if (summaryIdentity) summaryIdentity.textContent = u;

  const summaryArchetype = document.getElementById("summaryArchetype");
  if (summaryArchetype) {
    const archName = arch.name.replace(/[^a-zA-Z0-9 ]/g, "").trim();
    summaryArchetype.textContent = archName;
  }

  const avatarLetters = document.querySelectorAll(".avatar-letter");
  avatarLetters.forEach(el => {
    el.textContent = (name.charAt(0) || u.charAt(0) || "A").toUpperCase();
  });

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
  const copyBtn = DOM.btnCopyMarkdown;
  const originalHtml = copyBtn ? copyBtn.innerHTML : "";

  const handleSuccess = () => {
    if (copyBtn) {
      copyBtn.innerHTML = `<span>✓</span> Copied!`;
      copyBtn.style.borderColor = "var(--accent-emerald)";
      copyBtn.style.color = "var(--accent-emerald)";
      setTimeout(() => {
        copyBtn.innerHTML = originalHtml;
        copyBtn.style.borderColor = "";
        copyBtn.style.color = "";
      }, 2200);
    }
    showToast("✨ Markdown copied to clipboard! Paste into your profile README.md");
  };

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(md).then(handleSuccess).catch(() => {
      fallbackCopy(md);
      handleSuccess();
    });
  } else {
    fallbackCopy(md);
    handleSuccess();
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
