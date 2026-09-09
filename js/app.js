/**
 * ===================================================================
 * GITHUB PROFILE STUDIO - CORE ENGINE & THEME GENERATOR
 * Ultra-Rich, Deeply Distinct Archetypes & Unified Architecture
 * ===================================================================
 */

// Default Presets for Clean Reset & Initialization
const DEFAULT_STATE = {
  username: "alexdev",
  name: "Alex Vance",
  headline: "Full-Stack Developer • Open Source Builder",
  typingLines: [
    "Building modern, scalable web applications ⚡",
    "Full-Stack TypeScript, React & Node.js Developer 🚀",
    "Open-source contributor & lifelong learner 💡"
  ],
  currentArchetype: "cyberpunk",
  projectStyle: "bento",
  graphStyle: "activity",
  statusBio: {
    working: "Open-source developer tools and scalable web applications",
    learning: "Rust, TypeScript internals & cloud-native architecture",
    askMe: "React, Next.js, Node.js, API design & web performance",
    funFact: "I code best with good coffee and lo-fi music ☕"
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

// Application State
const state = {
  ...JSON.parse(JSON.stringify(DEFAULT_STATE)),
  projects: JSON.parse(JSON.stringify(APP_DATA.defaultProjects)),
  themeMode: localStorage.getItem("studio_theme") || "light"
};

// DOM References Cache
const DOM = {
  inputUsername: document.getElementById("inputUsername"),
  inputDisplayName: document.getElementById("inputDisplayName"),
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
    views: document.getElementById("toggleViews"),
    viralBadge: document.getElementById("toggleViralBadge")
  },
  socialLinkedin: document.getElementById("socialLinkedin"),
  socialTwitter: document.getElementById("socialTwitter"),
  socialDiscord: document.getElementById("socialDiscord"),
  socialPortfolio: document.getElementById("socialPortfolio"),
  socialEmail: document.getElementById("socialEmail"),
  sponsorBuyMeCoffee: document.getElementById("sponsorBuyMeCoffee"),
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
  btnThemeToggle: document.getElementById("btnThemeToggle"),
  themeToggleIcon: document.getElementById("themeToggleIcon"),
  themeToggleLabel: document.getElementById("themeToggleLabel"),
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
// SANITIZATION & URL FORMATTING UTILITIES
// -------------------------------------------------------------
function sanitizeHandle(val) {
  if (!val) return "";
  let clean = val.trim();
  clean = clean.replace(/^@+/, "");
  clean = clean.replace(/^https?:\/\/(www\.)?(linkedin\.com\/in\/|x\.com\/|twitter\.com\/|buymeacoffee\.com\/)/i, "");
  clean = clean.replace(/\/+$/, "");
  return clean;
}

function sanitizeUrl(val) {
  if (!val) return "";
  let clean = val.trim();
  if (!/^https?:\/\//i.test(clean)) {
    clean = "https://" + clean;
  }
  return clean;
}

function sanitizeEmail(val) {
  if (!val) return "";
  return val.trim().replace(/^mailto:/i, "");
}

// -------------------------------------------------------------
// BIDIRECTIONAL FORM & STATE SYNC
// -------------------------------------------------------------
function syncStateToDom() {
  if (DOM.inputUsername) DOM.inputUsername.value = state.username || "";
  if (DOM.inputDisplayName) DOM.inputDisplayName.value = state.name || "";
  if (DOM.inputHeadline) DOM.inputHeadline.value = state.headline || "";

  if (DOM.typingLine1) DOM.typingLine1.value = state.typingLines[0] !== undefined ? state.typingLines[0] : "";
  if (DOM.typingLine2) DOM.typingLine2.value = state.typingLines[1] !== undefined ? state.typingLines[1] : "";
  if (DOM.typingLine3) DOM.typingLine3.value = state.typingLines[2] !== undefined ? state.typingLines[2] : "";

  if (DOM.selectProjectStyle) DOM.selectProjectStyle.value = state.projectStyle || "bento";
  if (DOM.selectGraphStyle) DOM.selectGraphStyle.value = state.graphStyle || "activity";

  if (DOM.statusWorking) DOM.statusWorking.value = state.statusBio.working || "";
  if (DOM.statusLearning) DOM.statusLearning.value = state.statusBio.learning || "";
  if (DOM.statusAskMe) DOM.statusAskMe.value = state.statusBio.askMe || "";
  if (DOM.statusFunFact) DOM.statusFunFact.value = state.statusBio.funFact || "";

  Object.keys(DOM.toggles).forEach(k => {
    if (DOM.toggles[k] && typeof state.toggles[k] === "boolean") {
      DOM.toggles[k].checked = state.toggles[k];
    }
  });

  if (DOM.socialLinkedin) DOM.socialLinkedin.value = state.socials.linkedin || "";
  if (DOM.socialTwitter) DOM.socialTwitter.value = state.socials.twitter || "";
  if (DOM.socialDiscord) DOM.socialDiscord.value = state.socials.discord || "";
  if (DOM.socialPortfolio) DOM.socialPortfolio.value = state.socials.portfolio || "";
  if (DOM.socialEmail) DOM.socialEmail.value = state.socials.email || "";
  if (DOM.sponsorBuyMeCoffee) DOM.sponsorBuyMeCoffee.value = state.sponsors.buyMeCoffee || "";
}

// -------------------------------------------------------------
// THEME SWITCHER (LIGHT / DARK)
// -------------------------------------------------------------
function applyThemeMode(mode) {
  state.themeMode = mode;
  document.documentElement.setAttribute("data-theme", mode);
  localStorage.setItem("studio_theme", mode);
  if (DOM.themeToggleIcon && DOM.themeToggleLabel) {
    if (mode === "light") {
      DOM.themeToggleIcon.textContent = "☀️";
      DOM.themeToggleLabel.textContent = "Light";
      if (DOM.btnThemeToggle) DOM.btnThemeToggle.title = "Current: Light Theme (Click to switch to Dark Theme)";
    } else {
      DOM.themeToggleIcon.textContent = "🌙";
      DOM.themeToggleLabel.textContent = "Dark";
      if (DOM.btnThemeToggle) DOM.btnThemeToggle.title = "Current: Dark Theme (Click to switch to Light Theme)";
    }
  }
}

function toggleThemeMode() {
  const nextMode = state.themeMode === "light" ? "dark" : "light";
  applyThemeMode(nextMode);
  updateStudio();
  showToast(nextMode === "light" ? "☀️ Switched to Light Theme" : "🌙 Switched to Dark Theme");
}

// -------------------------------------------------------------
// DYNAMIC ADJUSTABLE SIDEBAR (DRAGGABLE RESIZER)
// -------------------------------------------------------------
function setupSidebarResizer() {
  const resizer = document.getElementById("sidebarResizer");
  const workstation = document.getElementById("studioWorkstation");
  const sidebar = document.getElementById("sidebarPanel");
  if (!resizer || !workstation || !sidebar) return;

  const setWidth = (w) => {
    document.documentElement.style.setProperty("--sidebar-width", `${w}px`);
    workstation.style.setProperty("--sidebar-width", `${w}px`);
    sidebar.style.width = `${w}px`;
  };

  const savedWidth = localStorage.getItem("studio_sidebar_width");
  if (savedWidth && window.innerWidth >= 992) {
    const w = parseInt(savedWidth, 10);
    if (!isNaN(w) && w >= 320 && w <= window.innerWidth - 380) {
      setWidth(w);
    }
  }

  let isDragging = false;

  const startDrag = (e) => {
    if (window.innerWidth < 992) return;
    isDragging = true;
    document.body.classList.add("is-resizing");
    workstation.classList.add("is-resizing");
    resizer.classList.add("active");
    if (e.cancelable) e.preventDefault();
  };

  const onDrag = (e) => {
    if (!isDragging) return;
    const clientX = e.type.startsWith("touch") ? e.touches[0].clientX : e.clientX;
    const minWidth = 340;
    const maxWidth = Math.max(380, window.innerWidth - 420);
    const newWidth = Math.min(Math.max(clientX, minWidth), maxWidth);
    setWidth(newWidth);
  };

  const stopDrag = () => {
    if (!isDragging) return;
    isDragging = false;
    document.body.classList.remove("is-resizing");
    workstation.classList.remove("is-resizing");
    resizer.classList.remove("active");

    const currentW = parseInt(sidebar.style.width || "480", 10);
    if (currentW) {
      localStorage.setItem("studio_sidebar_width", currentW);
    }
  };

  resizer.addEventListener("mousedown", startDrag);
  resizer.addEventListener("touchstart", startDrag, { passive: false });

  document.addEventListener("mousemove", onDrag);
  document.addEventListener("touchmove", onDrag, { passive: false });

  document.addEventListener("mouseup", stopDrag);
  document.addEventListener("touchend", stopDrag);

  resizer.addEventListener("dblclick", () => {
    setWidth(480);
    localStorage.setItem("studio_sidebar_width", 480);
    showToast("Sidebar width reset to default (480px)");
  });
}

// -------------------------------------------------------------
// APP INITIALIZATION
// -------------------------------------------------------------
function initApp() {
  applyThemeMode(state.themeMode);
  syncStateToDom();
  renderArchetypeSelectors();
  renderProjectsList();
  renderTechGrid();
  attachEventListeners();
  populateModalCatalog();
  setupSidebarResizer();
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

  // Quick theme selector chip strip in body canvas header
  if (DOM.templateBar) {
    DOM.templateBar.innerHTML = "";
    Object.keys(APP_DATA.archetypes).forEach(key => {
      const arch = APP_DATA.archetypes[key];
      const chip = document.createElement("button");
      chip.className = `canvas-theme-chip ${state.currentArchetype === key ? "active" : ""}`;
      const label = arch.name.split(" ").slice(0, 2).join(" ");
      chip.innerHTML = `
        <span class="chip-color-dot" style="background: ${arch.accent};"></span>
        <span>${label}</span>
      `;
      chip.title = `Switch to ${arch.name} (${arch.tag})`;
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
  showToast(`Switched to ${APP_DATA.archetypes[key].name}`);
}

// -------------------------------------------------------------
// DYNAMIC PROJECTS MANAGER
// -------------------------------------------------------------
function renderProjectsList() {
  if (!DOM.projectsListContainer) return;
  DOM.projectsListContainer.innerHTML = "";
  if (DOM.projectCountBadge) {
    const count = state.projects.length;
    DOM.projectCountBadge.textContent = `${count} project${count === 1 ? "" : "s"}`;
  }

  state.projects.forEach((proj, idx) => {
    const item = document.createElement("div");
    item.className = "project-card-item";
    item.innerHTML = `
      <div class="project-card-item-header">
        <strong style="font-size: 0.8rem; color: var(--accent-cyan);">Project #${idx + 1}</strong>
        <button class="btn-remove" data-index="${idx}">✕ Remove</button>
      </div>
      <div class="form-field">
        <label>Project Name</label>
        <input type="text" class="studio-input proj-name" data-index="${idx}" value="${proj.name || ""}" placeholder="e.g. QuantumFlow Engine">
      </div>
      <div class="form-field">
        <label>Repository Name</label>
        <input type="text" class="studio-input proj-repo" data-index="${idx}" value="${proj.repo || ""}" placeholder="e.g. quantumflow-engine">
      </div>
      <div class="form-field">
        <label>Description</label>
        <input type="text" class="studio-input proj-desc" data-index="${idx}" value="${proj.desc || ""}" placeholder="Concise project overview">
      </div>
      <div class="form-field">
        <label>Tech Stack Tags</label>
        <input type="text" class="studio-input proj-tags" data-index="${idx}" value="${proj.tags || ""}" placeholder="e.g. Rust, Kafka, Docker">
      </div>
      <div class="form-field">
        <label>Live Demo / URL</label>
        <input type="text" class="studio-input proj-demo" data-index="${idx}" value="${proj.demoUrl || ""}" placeholder="https://...">
      </div>
    `;
    DOM.projectsListContainer.appendChild(item);
  });

  // Attach input listeners
  DOM.projectsListContainer.querySelectorAll(".proj-name").forEach(el => {
    el.addEventListener("input", e => { state.projects[e.target.dataset.index].name = e.target.value; debouncedUpdateStudio(); });
  });
  DOM.projectsListContainer.querySelectorAll(".proj-repo").forEach(el => {
    el.addEventListener("input", e => { state.projects[e.target.dataset.index].repo = e.target.value; debouncedUpdateStudio(); });
  });
  DOM.projectsListContainer.querySelectorAll(".proj-desc").forEach(el => {
    el.addEventListener("input", e => { state.projects[e.target.dataset.index].desc = e.target.value; debouncedUpdateStudio(); });
  });
  DOM.projectsListContainer.querySelectorAll(".proj-tags").forEach(el => {
    el.addEventListener("input", e => { state.projects[e.target.dataset.index].tags = e.target.value; debouncedUpdateStudio(); });
  });
  DOM.projectsListContainer.querySelectorAll(".proj-demo").forEach(el => {
    el.addEventListener("input", e => { state.projects[e.target.dataset.index].demoUrl = e.target.value; debouncedUpdateStudio(); });
  });
  DOM.projectsListContainer.querySelectorAll(".btn-remove").forEach(el => {
    el.addEventListener("click", e => {
      const idx = parseInt(e.target.dataset.index, 10);
      state.projects.splice(idx, 1);
      renderProjectsList();
      updateStudio();
      showToast("🗑️ Project removed");
    });
  });
}

function handleAddProject() {
  const newIdx = state.projects.length + 1;
  state.projects.push({
    name: `NovaProject ${newIdx}`,
    repo: `nova-project-${newIdx}`,
    desc: "Scalable cloud-native architecture with modern developer experience and zero latency.",
    tags: "TypeScript, React, Node.js, Docker",
    stars: "120",
    status: "Active",
    demoUrl: "https://github.com"
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
    const matchCategory = state.activeCategory === "all" ||
      item.category === state.activeCategory ||
      (state.activeCategory === "cloud" && item.category === "devops") ||
      (state.activeCategory === "devops" && item.category === "devops");
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
  if (DOM.inputDisplayName) DOM.inputDisplayName.addEventListener("input", e => { state.name = e.target.value.trim() || "Alex Vance"; debouncedUpdateStudio(); });
  if (DOM.inputHeadline) DOM.inputHeadline.addEventListener("input", e => { state.headline = e.target.value.trim(); debouncedUpdateStudio(); });

  // Rotating Bios (Debounced without shifting indices)
  const handleTypingChange = () => {
    state.typingLines = [
      DOM.typingLine1 ? DOM.typingLine1.value : "",
      DOM.typingLine2 ? DOM.typingLine2.value : "",
      DOM.typingLine3 ? DOM.typingLine3.value : ""
    ];
    debouncedUpdateStudio();
  };
  if (DOM.typingLine1) DOM.typingLine1.addEventListener("input", handleTypingChange);
  if (DOM.typingLine2) DOM.typingLine2.addEventListener("input", handleTypingChange);
  if (DOM.typingLine3) DOM.typingLine3.addEventListener("input", handleTypingChange);

  // Projects & Graphs
  if (DOM.selectProjectStyle) DOM.selectProjectStyle.addEventListener("change", e => { state.projectStyle = e.target.value; updateStudio(); });
  if (DOM.btnAddProject) DOM.btnAddProject.addEventListener("click", handleAddProject);
  if (DOM.selectGraphStyle) DOM.selectGraphStyle.addEventListener("change", e => { state.graphStyle = e.target.value; updateStudio(); });

  // Status & Bio (Debounced)
  if (DOM.statusWorking) DOM.statusWorking.addEventListener("input", e => { state.statusBio.working = e.target.value; debouncedUpdateStudio(); });
  if (DOM.statusLearning) DOM.statusLearning.addEventListener("input", e => { state.statusBio.learning = e.target.value; debouncedUpdateStudio(); });
  if (DOM.statusAskMe) DOM.statusAskMe.addEventListener("input", e => { state.statusBio.askMe = e.target.value; debouncedUpdateStudio(); });
  if (DOM.statusFunFact) DOM.statusFunFact.addEventListener("input", e => { state.statusBio.funFact = e.target.value; debouncedUpdateStudio(); });

  // Section Toggles
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
  if (DOM.socialLinkedin) DOM.socialLinkedin.addEventListener("input", e => { state.socials.linkedin = sanitizeHandle(e.target.value); debouncedUpdateStudio(); });
  if (DOM.socialTwitter) DOM.socialTwitter.addEventListener("input", e => { state.socials.twitter = sanitizeHandle(e.target.value); debouncedUpdateStudio(); });
  if (DOM.socialDiscord) DOM.socialDiscord.addEventListener("input", e => { state.socials.discord = e.target.value.trim(); debouncedUpdateStudio(); });
  if (DOM.socialPortfolio) DOM.socialPortfolio.addEventListener("input", e => { state.socials.portfolio = e.target.value.trim(); debouncedUpdateStudio(); });
  if (DOM.socialEmail) DOM.socialEmail.addEventListener("input", e => { state.socials.email = sanitizeEmail(e.target.value); debouncedUpdateStudio(); });

  // Sponsors (Debounced)
  if (DOM.sponsorBuyMeCoffee) DOM.sponsorBuyMeCoffee.addEventListener("input", e => { state.sponsors.buyMeCoffee = sanitizeHandle(e.target.value); debouncedUpdateStudio(); });

  // Skill Search & Category Chips
  if (DOM.techSearchInput) DOM.techSearchInput.addEventListener("input", renderTechGrid);
  document.querySelectorAll(".skill-chip, .category-tab").forEach(chip => {
    chip.addEventListener("click", () => {
      document.querySelectorAll(".skill-chip, .category-tab").forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      state.activeCategory = chip.dataset.cat || "all";
      renderTechGrid();
    });
  });

  // Sidebar Module Filter Pills (Jump / Filter)
  document.querySelectorAll(".module-filter-pill").forEach(pill => {
    pill.addEventListener("click", () => {
      document.querySelectorAll(".module-filter-pill").forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      const targetId = pill.dataset.filter;
      if (targetId === "all") {
        document.querySelectorAll(".accordion-card").forEach(c => c.style.display = "");
      } else {
        document.querySelectorAll(".accordion-card").forEach(c => c.style.display = "");
        const targetCard = document.getElementById(targetId);
        if (targetCard) {
          targetCard.classList.add("open");
          targetCard.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
      }
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
      document.querySelectorAll(".accordion-card").forEach(c => {
        c.style.display = "";
        c.classList.add("open");
      });
      showToast("📂 Expanded all customizer modules");
    });
  }
  if (btnCollapseAll) {
    btnCollapseAll.addEventListener("click", () => {
      document.querySelectorAll(".accordion-card").forEach(c => c.classList.remove("open"));
      showToast("📁 Collapsed all modules");
    });
  }

  // Mobile Tab View Switcher (< 992px)
  const mobileTabEditor = document.getElementById("mobileTabEditor");
  const mobileTabPreview = document.getElementById("mobileTabPreview");
  const studioWorkstation = document.getElementById("studioWorkstation");

  if (mobileTabEditor && mobileTabPreview && studioWorkstation) {
    mobileTabEditor.addEventListener("click", () => {
      mobileTabEditor.classList.add("active");
      mobileTabPreview.classList.remove("active");
      studioWorkstation.classList.remove("show-preview");
    });
    mobileTabPreview.addEventListener("click", () => {
      mobileTabPreview.classList.add("active");
      mobileTabEditor.classList.remove("active");
      studioWorkstation.classList.add("show-preview");
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

  // Theme Toggle Button
  if (DOM.btnThemeToggle) DOM.btnThemeToggle.addEventListener("click", toggleThemeMode);

  // Export Buttons
  if (DOM.btnCopyMarkdown) DOM.btnCopyMarkdown.addEventListener("click", copyMarkdownAction);
  if (DOM.btnDownloadReadme) DOM.btnDownloadReadme.addEventListener("click", downloadReadmeAction);
  if (DOM.btnRandomize) DOM.btnRandomize.addEventListener("click", randomizeAction);
  if (DOM.btnReset) DOM.btnReset.addEventListener("click", resetAction);

  // Snippets Modal
  if (DOM.btnExploreComponents) DOM.btnExploreComponents.addEventListener("click", () => DOM.componentModal.classList.add("active"));
  if (DOM.modalCloseBtn) DOM.modalCloseBtn.addEventListener("click", () => DOM.componentModal.classList.remove("active"));
  if (DOM.componentModal) {
    DOM.componentModal.addEventListener("click", e => {
      if (e.target === DOM.componentModal) DOM.componentModal.classList.remove("active");
    });
  }
}

// =============================================================
// UNIFIED & MODULAR ARCHETYPE GENERATOR ENGINE
// =============================================================

function getWidgetTheme(arch) {
  const isLight = state.themeMode === "light";
  if (isLight) {
    return {
      statsTheme: "default",
      statsBg: "ffffff",
      statsTitle: "0969da",
      statsText: "1f2328",
      statsIcon: "0969da",
      statsBorder: "d0d7de",
      streakTheme: "default",
      streakBg: "ffffff",
      streakRing: "0969da",
      streakFire: "2563eb",
      streakLabel: "0969da",
      streakSide: "57606a",
      trophyTheme: "flat",
      activityTheme: "github-light",
      typingColor: "0969DA"
    };
  }

  const themeMap = {
    cyberpunk:  { theme: "radical",     trophy: "radical",    activity: "react-dark" },
    neofetch:   { theme: "merko",       trophy: "matrix",     activity: "github-dark" },
    bento:      { theme: "tokyonight",  trophy: "tokyonight", activity: "react-dark" },
    rpg:        { theme: "dracula",     trophy: "dracula",    activity: "react-dark" },
    arcade8bit: { theme: "radical",     trophy: "dracula",    activity: "react-dark" },
    kawaii:     { theme: "dracula",     trophy: "dracula",    activity: "react-dark" },
    aurora:     { theme: "tokyonight",  trophy: "tokyonight", activity: "react-dark" },
    minimal:    { theme: "dark",        trophy: "flat",       activity: "github-dark" },
    synthwave:  { theme: "synthwave",   trophy: "radical",    activity: "react-dark" },
    nordic:     { theme: "nord",        trophy: "nord",       activity: "nord" },
    dracula:    { theme: "dracula",     trophy: "dracula",    activity: "dracula" },
    matrix:     { theme: "merko",       trophy: "matrix",     activity: "github-dark" },
    solarpunk:  { theme: "tokyonight",  trophy: "radical",    activity: "react-dark" },
    gruvbox:    { theme: "gruvbox",     trophy: "gruvbox",    activity: "gruvbox" }
  };

  const t = themeMap[arch.id] || themeMap.cyberpunk;
  const bgClean = (arch.bg || "#0d1117").replace("#", "");
  const accentClean = (arch.accent || "#58a6ff").replace("#", "");
  const accent2Clean = (arch.accent2 || "#f59e0b").replace("#", "");

  return {
    statsTheme: t.theme,
    statsBg: bgClean,
    statsTitle: accentClean,
    statsText: "c9d1d9",
    statsIcon: accent2Clean,
    statsBorder: "30363d",
    streakTheme: t.theme,
    streakBg: bgClean,
    streakRing: accentClean,
    streakFire: accent2Clean,
    streakLabel: accentClean,
    streakSide: "94a3b8",
    trophyTheme: t.trophy,
    activityTheme: t.activity,
    typingColor: accentClean
  };
}

function buildCategorizedSkills(selectedSkills, arch, format = "table") {
  if (!selectedSkills || selectedSkills.length === 0) return "";

  const categories = {
    languages: { name: "💻 Languages", items: [] },
    frontend:  { name: "🎨 Frontend & UI", items: [] },
    backend:   { name: "⚙️ Backend & APIs", items: [] },
    database:  { name: "🗄️ Database & Storage", items: [] },
    devops:    { name: "☁️ Cloud & DevOps", items: [] },
    tools:     { name: "🛠️ Tools & Platforms", items: [] }
  };

  const isLight = state.themeMode === "light";
  const iconTheme = (isLight || arch.id === "minimal") ? "light" : "dark";

  selectedSkills.forEach(sId => {
    const found = APP_DATA.techStack.find(t => t.id === sId);
    if (found && categories[found.category]) {
      categories[found.category].items.push(sId);
    } else {
      categories.tools.items.push(sId);
    }
  });

  const activeCats = Object.values(categories).filter(c => c.items.length > 0);
  if (activeCats.length === 0) {
    return `<div align="center">\n  <a href="https://skillicons.dev">\n    <img src="https://skillicons.dev/icons?i=${selectedSkills.join(",")}&theme=${iconTheme}&perline=10" />\n  </a>\n</div>\n\n`;
  }

  if (format === "table") {
    let md = `| Category | Technologies |\n|:---|:---|\n`;
    activeCats.forEach(cat => {
      const iconsUrl = `https://skillicons.dev/icons?i=${cat.items.join(",")}&theme=${iconTheme}`;
      md += `| **${cat.name}** | <a href="https://skillicons.dev"><img src="${iconsUrl}" /></a> |\n`;
    });
    return md + "\n";
  } else if (format === "list") {
    let md = "";
    activeCats.forEach(cat => {
      const iconsUrl = `https://skillicons.dev/icons?i=${cat.items.join(",")}&theme=${iconTheme}`;
      md += `**${cat.name}**<br/>\n<a href="https://skillicons.dev"><img src="${iconsUrl}" /></a>\n\n`;
    });
    return md;
  } else if (format === "minimal-text") {
    let md = "";
    activeCats.forEach(cat => {
      const names = cat.items.map(id => {
        const item = APP_DATA.techStack.find(t => t.id === id);
        return item ? item.name : id;
      }).join(" · ");
      md += `**${cat.name.replace(/[^a-zA-Z &]/g, "").trim()}:** \`${names}\`\n\n`;
    });
    return md;
  } else {
    let md = `<div align="center">\n`;
    activeCats.forEach(cat => {
      const iconsUrl = `https://skillicons.dev/icons?i=${cat.items.join(",")}&theme=${iconTheme}`;
      md += `  <a href="https://skillicons.dev"><img src="${iconsUrl}" /></a><br/>\n`;
    });
    md += `</div>\n\n`;
    return md;
  }
}

function buildProjectsMarkdown(u, arch, style) {
  if (!state.toggles.projects || !state.projects || state.projects.length === 0) return "";
  let out = "";
  const layout = style || state.projectStyle || "bento";

  if (layout === "pinned") {
    out += `<div align="center">\n`;
    state.projects.forEach(p => {
      const pinTheme = state.themeMode === "light" ? "default" : (arch.id === "minimal" ? "dark" : (arch.id === "neofetch" || arch.id === "matrix" ? "matrix" : (arch.id === "dracula" ? "dracula" : (arch.id === "nordic" ? "nord" : (arch.id === "gruvbox" ? "gruvbox" : "tokyonight")))));
      out += `  <a href="https://github.com/${u}/${p.repo || p.name}">\n`;
      out += `    <img src="https://github-readme-stats.vercel.app/api/pin/?username=${u}&repo=${p.repo || p.name}&theme=${pinTheme}&hide_border=true" />\n`;
      out += `  </a>\n`;
    });
    out += `</div>\n\n`;
  } else if (layout === "minimal" || arch.id === "minimal") {
    state.projects.forEach((p, i) => {
      const num = String(i + 1).padStart(2, "0");
      const demo = p.demoUrl ? `[Live Demo](${sanitizeUrl(p.demoUrl)}) &nbsp;•&nbsp; ` : "";
      const repo = `[Source Code](https://github.com/${u}/${p.repo || p.name})`;
      out += `**[${num}] ${p.name.toUpperCase()}** — ${p.desc}\n`;
      out += `\`${p.tags}\` ➔ ${demo}${repo}\n\n`;
    });
  } else if (layout === "bento") {
    state.projects.forEach(p => {
      const demoBadge = p.demoUrl ? `<a href="${sanitizeUrl(p.demoUrl)}"><img src="https://img.shields.io/badge/Live_Demo-0070f3?style=flat-square&logo=vercel&logoColor=white" /></a> ` : "";
      const repoBadge = `<a href="https://github.com/${u}/${p.repo || p.name}"><img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white" /></a>`;
      const starsBadge = p.stars ? ` <img src="https://img.shields.io/badge/Stars-⭐_${p.stars}-yellow?style=flat-square" />` : "";
      out += `> ### 💎 [${p.name}](https://github.com/${u}/${p.repo || p.name})\n`;
      out += `> ${p.desc}\n`;
      out += `> \n`;
      out += `> \`${p.tags}\` &nbsp;•&nbsp; ${demoBadge}${repoBadge}${starsBadge}\n\n`;
    });
  } else {
    // High-impact Clean Table (Default)
    out += `| 🚀 Project | ⚡ Tech Stack | 🌐 Live Demo & Source |\n|:---|:---|:---|\n`;
    state.projects.forEach(p => {
      const demoBadge = p.demoUrl ? `<a href="${sanitizeUrl(p.demoUrl)}"><img src="https://img.shields.io/badge/Live_Demo-0070f3?style=flat-square&logo=vercel&logoColor=white" /></a> ` : "";
      const repoBadge = `<a href="https://github.com/${u}/${p.repo || p.name}"><img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white" /></a>`;
      const starsBadge = p.stars ? ` <img src="https://img.shields.io/badge/Stars-⭐_${p.stars}-yellow?style=flat-square" />` : "";
      out += `| **[${p.name}](https://github.com/${u}/${p.repo || p.name})**<br/><sub>${p.desc}</sub> | \`${p.tags}\` | ${demoBadge}${repoBadge}${starsBadge} |\n`;
    });
    out += `\n`;
  }

  return out;
}

function buildGraphMarkdown(u, arch, mode) {
  if (!state.toggles.graphs) return "";
  const wt = getWidgetTheme(arch);
  let out = "";

  if (mode === "snake") {
    out += `<div align="center">\n  <picture>\n    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/${u}/${u}/output/github-contribution-grid-snake-dark.svg">\n    <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/${u}/${u}/output/github-contribution-grid-snake.svg">\n    <img alt="Snake eating contribution grid" src="https://raw.githubusercontent.com/${u}/${u}/output/github-contribution-grid-snake.svg">\n  </picture>\n</div>\n\n`;
  } else if (mode === "3d") {
    out += `<div align="center">\n  <img src="https://github-profile-trophy.vercel.app/?username=${u}&theme=${wt.trophyTheme}&no-frame=true&no-bg=true&margin_w=8" width="100%" />\n</div>\n\n`;
  } else if (mode === "streak") {
    out += `<div align="center">\n  <img src="https://github-readme-streak-stats.herokuapp.com/?user=${u}&theme=${wt.streakTheme}&background=${wt.streakBg}&ring=${wt.streakRing}&fire=${wt.streakFire}&currStreakLabel=${wt.streakLabel}&sideLabels=${wt.streakSide}&hide_border=true" height="165" />\n</div>\n\n`;
  } else if (mode === "all") {
    out += `<div align="center">\n  <img src="https://github-readme-activity-graph.vercel.app/graph?username=${u}&theme=${wt.activityTheme}&hide_border=true&area=true" width="100%" />\n</div>\n\n`;
    out += `<div align="center">\n  <img src="https://github-readme-streak-stats.herokuapp.com/?user=${u}&theme=${wt.streakTheme}&background=${wt.streakBg}&ring=${wt.streakRing}&fire=${wt.streakFire}&currStreakLabel=${wt.streakLabel}&sideLabels=${wt.streakSide}&hide_border=true" height="165" />\n</div>\n\n`;
  } else {
    out += `<div align="center">\n  <img src="https://github-readme-activity-graph.vercel.app/graph?username=${u}&theme=${wt.activityTheme}&hide_border=true&area=true" width="100%" />\n</div>\n\n`;
  }

  return out;
}

function buildSocialBadges(style = "for-the-badge") {
  const b = [];
  if (state.socials.linkedin) {
    const handle = sanitizeHandle(state.socials.linkedin);
    b.push(`<a href="https://linkedin.com/in/${handle}" target="_blank"><img src="https://img.shields.io/badge/LinkedIn-%230077B5.svg?style=${style}&logo=linkedin&logoColor=white"/></a>`);
  }
  if (state.socials.twitter) {
    const handle = sanitizeHandle(state.socials.twitter);
    b.push(`<a href="https://x.com/${handle}" target="_blank"><img src="https://img.shields.io/badge/X-black.svg?style=${style}&logo=X&logoColor=white"/></a>`);
  }
  if (state.socials.discord) {
    const discordVal = state.socials.discord.trim();
    const discordUrl = /^https?:\/\//i.test(discordVal) ? discordVal : `https://discord.com/users/${discordVal}`;
    b.push(`<a href="${discordUrl}" target="_blank"><img src="https://img.shields.io/badge/Discord-%235865F2.svg?style=${style}&logo=discord&logoColor=white"/></a>`);
  }
  if (state.socials.portfolio) {
    const url = sanitizeUrl(state.socials.portfolio);
    b.push(`<a href="${url}" target="_blank"><img src="https://img.shields.io/badge/Portfolio-000000?style=${style}&logo=vercel&logoColor=white"/></a>`);
  }
  if (state.socials.email) {
    const email = sanitizeEmail(state.socials.email);
    b.push(`<a href="mailto:${email}"><img src="https://img.shields.io/badge/Email-D14836?style=${style}&logo=gmail&logoColor=white"/></a>`);
  }
  if (state.sponsors.buyMeCoffee) {
    const coffee = sanitizeHandle(state.sponsors.buyMeCoffee);
    b.push(`<a href="https://buymeacoffee.com/${coffee}" target="_blank"><img src="https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=${style}&logo=buy-me-a-coffee&logoColor=black"/></a>`);
  }
  return b;
}

function buildStatsMarkdown(u, arch) {
  if (!state.toggles.stats) return "";
  const wt = getWidgetTheme(arch);
  let md = "";
  md += `<div align="center">\n`;
  md += `  <img src="https://github-readme-stats.vercel.app/api?username=${u}&show_icons=true&theme=${wt.statsTheme}&hide_border=true&bg_color=${wt.statsBg}&title_color=${wt.statsTitle}&icon_color=${wt.statsIcon}&text_color=${wt.statsText}&rank_icon=github&include_all_commits=true" height="165" />\n`;
  md += `  &nbsp;\n`;
  md += `  <img src="https://github-readme-streak-stats.herokuapp.com/?user=${u}&theme=${wt.streakTheme}&hide_border=true&background=${wt.streakBg}&ring=${wt.streakRing}&fire=${wt.streakFire}&currStreakLabel=${wt.streakLabel}&sideLabels=${wt.streakSide}" height="165" />\n`;
  md += `</div>\n\n`;
  return md;
}

function buildLanguagesMarkdown(u, arch) {
  if (!state.toggles.languages) return "";
  const wt = getWidgetTheme(arch);
  return `<div align="center">\n  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=${u}&layout=compact&theme=${wt.statsTheme}&hide_border=true&bg_color=${wt.statsBg}&title_color=${wt.statsTitle}&text_color=${wt.statsText}&langs_count=8" height="140" />\n</div>\n\n`;
}

function buildTrophiesMarkdown(u, arch) {
  if (!state.toggles.trophies) return "";
  const wt = getWidgetTheme(arch);
  return `<div align="center">\n  <img src="https://github-profile-trophy.vercel.app/?username=${u}&theme=${wt.trophyTheme}&no-frame=true&no-bg=true&margin_w=8&column=7" width="100%" />\n</div>\n\n`;
}

// -------------------------------------------------------------
// UNIFIED MASTER MARKDOWN GENERATOR
// -------------------------------------------------------------
function generateMarkdown() {
  const u = encodeURIComponent(state.username ? state.username.trim() : "alexdev");
  const name = state.name ? state.name.trim() : "Alex Vance";
  const headline = state.headline ? state.headline.trim() : "Full-Stack Developer • Open Source Builder";
  const arch = APP_DATA.archetypes[state.currentArchetype] || APP_DATA.archetypes.cyberpunk;
  const wt = getWidgetTheme(arch);
  const badgeStyle = (arch.id === "neofetch" || arch.id === "minimal" || arch.id === "arcade8bit" || arch.id === "nordic" || arch.id === "matrix") ? "flat-square" : "for-the-badge";

  const activeTypingLines = state.typingLines
    .map(l => (l || "").trim())
    .filter(l => l.length > 0);

  let md = "";

  // 1. VIEWS COUNTER
  if (state.toggles.views) {
    const viewAccent = wt.statsTitle || "00f0ff";
    if (arch.id === "minimal") {
      md += `\`[ Views: ${u} ]\` &nbsp;•&nbsp; \`[ Status: Available ]\` &nbsp;•&nbsp; \`[ Location: Remote ]\`\n\n`;
    } else {
      md += `<div align="center">\n  <img src="https://komarev.com/ghpvc/?username=${u}&label=PROFILE+VIEWS&color=${viewAccent}&style=${badgeStyle}" alt="Profile Views" />\n</div>\n\n`;
    }
  }

  // 2. HEADER BANNER
  if (state.toggles.header) {
    if (arch.id === "neofetch") {
      md += "```ansi\n";
      md += `   /\\_/\\        ${u}@archlinux-zen [x86_64]\n`;
      md += `  ( o.o )       ─────────────────────────────────────────\n`;
      md += `   > ^ <        OS       : Arch Linux 6.10 Rolling\n`;
      md += `                Host     : ${name}\n`;
      md += `                Role     : ${headline}\n`;
      md += `                Shell    : zsh 5.9 (x86_64-pc-linux-gnu)\n`;
      md += `                Editor   : Neovim v0.10.0 + Lua\n`;
      md += `                Uptime   : 99.99% Continuous Delivery\n`;
      md += `                Fuel     : Fresh Coffee ☕\n`;
      md += "```\n\n";
    } else if (arch.id === "minimal") {
      md += `# ${name.toUpperCase()}\n`;
      md += `**${headline}**\n\n`;
      md += `*Building clean, modern web applications and contributing to open-source software.*\n\n`;
    } else if (arch.id === "matrix") {
      md += "```bash\n";
      md += `/* ─────────────────────────────────────────────────────────────\n`;
      md += `   DEVELOPER: ${name.toUpperCase()} // HANDLE: @${u.toUpperCase()}\n`;
      md += `   ROLE     : ${headline.toUpperCase()}\n`;
      md += `   STATUS   : ACTIVE & READY TO COLLABORATE\n`;
      md += `───────────────────────────────────────────────────────────── */\n`;
      md += "```\n\n";
    } else if (arch.id === "gruvbox") {
      md += "```lua\n";
      md += `-- ~/.config/nvim/lua/developer/profile.lua\n`;
      md += `local profile = {\n`;
      md += `  developer        = "${name}",\n`;
      md += `  role             = "${headline}",\n`;
      md += `  current_project  = "${state.statusBio.working.replace(/"/g, '\\"')}",\n`;
      md += `  learning         = "${state.statusBio.learning.replace(/"/g, '\\"')}",\n`;
      md += `  ask_me_about     = "${state.statusBio.askMe.replace(/"/g, '\\"')}",\n`;
      md += `  fun_fact         = "${state.statusBio.funFact.replace(/"/g, '\\"')}"\n`;
      md += `}\n`;
      md += `return profile\n`;
      md += "```\n\n";
    } else if (arch.id === "arcade8bit") {
      md += `<div align="center">\n  <img src="https://capsule-render.vercel.app/api?type=rect&color=gradient&customColorList=2,5,9&height=160&section=header&text=%F0%9F%95%B9%EF%B8%8F+${encodeURIComponent(name.toUpperCase())}+%F0%9F%95%B9%EF%B8%8F&fontSize=30&fontColor=facc15&fontAlignY=50" width="100%"/>\n</div>\n\n`;
    } else if (arch.id === "bento" || arch.id === "nordic") {
      const gradList = arch.id === "nordic" ? "12,18,24" : "10,20,30";
      const descCol = arch.id === "nordic" ? "88c0d0" : "38bdf8";
      md += `<div align="center">\n  <img src="https://capsule-render.vercel.app/api?type=slice&color=gradient&customColorList=${gradList}&height=190&section=header&text=${encodeURIComponent(name)}&fontSize=38&fontColor=ffffff&fontAlignY=42&desc=${encodeURIComponent(headline.slice(0, 50))}&descAlignY=66&descSize=15&descColor=${descCol}&animation=fadeIn" width="100%"/>\n</div>\n\n`;
    } else if (arch.id === "rpg") {
      md += `<div align="center">\n  <img src="https://capsule-render.vercel.app/api?type=soft&color=gradient&customColorList=2,6,12&height=210&section=header&text=%E2%9A%9C%EF%B8%8F+${encodeURIComponent(name.toUpperCase())}+%E2%9A%9C%EF%B8%8F&fontSize=32&fontColor=fbbf24&fontAlignY=42&desc=LEVEL+99+DEVELOPER+%7C+${encodeURIComponent(headline.slice(0, 35))}&descAlignY=65&descSize=14&descColor=ec4899&animation=fadeIn" width="100%"/>\n</div>\n\n`;
    } else if (arch.id === "kawaii") {
      md += `<div align="center">\n  <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=34,36,44&height=200&section=header&text=%F0%9F%8C%B8+${encodeURIComponent(name)}+%F0%9F%8C%B8&fontSize=34&fontColor=ffffff&fontAlignY=40&desc=(%E3%81%A5%EF%BD%A1%E2%97%94%E2%80%BF%E2%80%BF%E2%97%94%EF%BD%A1)%E3%81%A5+%E2%9C%A7+${encodeURIComponent(headline.slice(0, 30))}&descAlignY=65&descSize=14&descColor=f9a8d4&animation=twinkling" width="100%"/>\n</div>\n\n`;
    } else if (arch.id === "aurora") {
      md += `<div align="center">\n  <img src="https://capsule-render.vercel.app/api?type=soft&color=gradient&customColorList=20,24,26,28&height=200&section=header&text=%E2%9C%A6+${encodeURIComponent(name.toUpperCase())}+%E2%9C%A6&fontSize=36&fontColor=e0e7ff&fontAlignY=40&desc=FULL-STACK+DEVELOPER+%7C+${encodeURIComponent(headline.slice(0, 35))}&descAlignY=64&descSize=14&descColor=818cf8&animation=fadeIn" width="100%"/>\n</div>\n\n`;
    } else if (arch.id === "solarpunk") {
      md += `<div align="center">\n  <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,12,18&height=200&section=header&text=%F0%9F%8C%B1+${encodeURIComponent(name.toUpperCase())}&fontSize=34&fontColor=ffffff&fontAlignY=40&desc=FULL-STACK+DEVELOPER+%7C+${encodeURIComponent(headline.slice(0, 40))}&descAlignY=64&descSize=15&descColor=10b981&animation=fadeIn" width="100%"/>\n</div>\n\n`;
    } else if (arch.id === "dracula") {
      md += `<div align="center">\n  <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=28,30,34&height=220&section=header&text=%F0%9F%A7%9B+${encodeURIComponent(name.toUpperCase())}&fontSize=36&fontColor=ff79c6&fontAlignY=38&desc=FULL-STACK+DEVELOPER+%7C+${encodeURIComponent(headline.slice(0, 40))}&descAlignY=62&descSize=15&descColor=50fa7b&animation=fadeIn" width="100%"/>\n</div>\n\n`;
    } else if (arch.id === "synthwave") {
      md += `<div align="center">\n  <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=24,26,30&height=220&section=header&text=%F0%9F%8C%B4+${encodeURIComponent(name.toUpperCase())}&fontSize=36&fontColor=ff2a85&fontAlignY=38&desc=FULL-STACK+DEVELOPER+%7C+${encodeURIComponent(headline.slice(0, 40))}&descAlignY=62&descSize=15&descColor=ff9e00&animation=fadeIn" width="100%"/>\n</div>\n\n`;
    } else {
      // Cyberpunk default
      md += `<div align="center">\n  <img src="https://capsule-render.vercel.app/api?type=waving&color=auto&customColorList=1,13,24&height=220&section=header&text=${encodeURIComponent(name.toUpperCase())}&fontSize=36&fontColor=ffffff&fontAlignY=38&desc=FULL-STACK+DEVELOPER+%7C+${encodeURIComponent(headline.slice(0, 40))}&descAlignY=62&descSize=15&descColor=00f0ff&animation=fadeIn" width="100%"/>\n</div>\n\n`;
    }
  }

  // 3. ANIMATED TYPING BIO
  if (state.toggles.typing && activeTypingLines.length > 0) {
    const fontName = arch.font.includes("Code") || arch.font.includes("mono") ? "Fira+Code" : (arch.font.includes("Space") ? "Space+Grotesk" : "Inter");
    const lp = activeTypingLines.map(l => encodeURIComponent(l)).join(";");
    const typeColor = (wt.typingColor || "00F0FF").toUpperCase();
    md += `<div align="center">\n  <img src="https://readme-typing-svg.demolab.com?font=${fontName}&weight=600&size=19&duration=3000&pause=1000&color=${typeColor}&center=true&vCenter=true&width=750&height=48&lines=${lp}" alt="Typing SVG"/>\n</div>\n\n`;
  }

  // 4. SOCIAL BADGES
  const socialBadges = buildSocialBadges(badgeStyle);
  if (socialBadges.length > 0) {
    if (arch.id === "minimal") {
      const pillsMinimal = [];
      if (state.socials.linkedin)  pillsMinimal.push(`[LinkedIn](https://linkedin.com/in/${sanitizeHandle(state.socials.linkedin)})`);
      if (state.socials.twitter)   pillsMinimal.push(`[X / Twitter](https://x.com/${sanitizeHandle(state.socials.twitter)})`);
      if (state.socials.portfolio) pillsMinimal.push(`[Website](${sanitizeUrl(state.socials.portfolio)})`);
      if (state.socials.email)     pillsMinimal.push(`[Email](mailto:${sanitizeEmail(state.socials.email)})`);
      if (pillsMinimal.length > 0) {
        md += `${pillsMinimal.join(" &nbsp;·&nbsp; ")}\n\n`;
      }
    } else {
      md += `<div align="center">\n  ${socialBadges.join(" &nbsp; ")}\n</div>\n\n`;
    }
  }

  const divider = arch.id === "minimal"
    ? `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`
    : `---\n\n`;
  md += divider;

  // 5. STATUS & BIO SECTION
  if (state.toggles.statusBio) {
    if (arch.id === "neofetch") {
      md += "```bash\n";
      md += `┌──(user㉿dev)-[~/workspace]\n└─$ cat current_focus.json\n`;
      md += "```\n";
      md += "```json\n{\n";
      md += `  "working_on"  : "${state.statusBio.working.replace(/"/g, '\\"')}",\n`;
      md += `  "learning"    : "${state.statusBio.learning.replace(/"/g, '\\"')}",\n`;
      md += `  "ask_me_about": "${state.statusBio.askMe.replace(/"/g, '\\"')}",\n`;
      md += `  "fun_fact"    : "${state.statusBio.funFact.replace(/"/g, '\\"')}"\n`;
      md += `}\n\`\`\`\n\n`;
    } else if (arch.id === "rpg") {
      md += "```yaml\n";
      md += `╔══════════════════════════════════════════════════════════════╗\n`;
      md += `║             ⚜️  DEVELOPER PROFILE & STATS  ⚜️               ║\n`;
      md += `╠══════════════════════════════════════════════════════════════╣\n`;
      md += `║  DEVELOPER: ${name.slice(0, 46).padEnd(46)} ║\n`;
      md += `║  ROLE     : ${headline.slice(0, 46).padEnd(46)} ║\n`;
      md += `║  FOCUS (Energy) : [████████████████████] 100% (High Focus)     ║\n`;
      md += `║  FUEL (Coffee)  : [████████████████░░░░] 85% (Espresso)        ║\n`;
      md += `║  EXPERIENCE     : Level 99 Full-Stack Developer              ║\n`;
      md += `║  KEY STRENGTHS  : Clean Code, Fast Performance, Scalability    ║\n`;
      md += `╚══════════════════════════════════════════════════════════════╝\n`;
      md += "```\n\n";
      md += `### 📜 About Me & Current Quests\n\n`;
      md += `- ⚔️ **Current Project:** ${state.statusBio.working}\n`;
      md += `- 📖 **Currently Learning:** ${state.statusBio.learning}\n`;
      md += `- 💬 **Ask Me About:** ${state.statusBio.askMe}\n`;
      md += `- ⚡ **Fun Fact:** ${state.statusBio.funFact}\n\n`;
      md += divider;
    } else if (arch.id === "arcade8bit") {
      md += "```\n";
      md += `┌─────────────────────────────────────────────────────────────┐\n`;
      md += `│                🕹️  ARCADE HIGH SCORE BOARD  🕹️               │\n`;
      md += `│─────────────────────────────────────────────────────────────│\n`;
      md += `│  RANK  │  PLAYER                     │  SCORE    │  TIER    │\n`;
      md += `│─────────────────────────────────────────────────────────────│\n`;
      md += `│  #1    │  ${name.toUpperCase().slice(0, 25).padEnd(25)}  │  999,999  │  ★ MASTER │\n`;
      md += `│  #2    │  GITHUB_COMMUNITY           │  850,000  │  ★ PRO   │\n`;
      md += `│  #3    │  OPEN_SOURCE_BUILDER        │  740,000  │  ★ PRO   │\n`;
      md += `│─────────────────────────────────────────────────────────────│\n`;
      md += `│            ► PRESS START TO JOIN THE LEADERBOARD ◄          │\n`;
      md += `└─────────────────────────────────────────────────────────────┘\n`;
      md += "```\n\n";
      md += "```\n";
      md += `  [ PLAYER 1 PROFILE ]\n`;
      md += `  • CURRENT PROJECT: ${state.statusBio.working}\n`;
      md += `  • LEARNING       : ${state.statusBio.learning}\n`;
      md += `  • ASK ME ABOUT   : ${state.statusBio.askMe}\n`;
      md += `  • FUN FACT       : ${state.statusBio.funFact}\n`;
      md += "```\n\n";
    } else if (arch.id === "bento") {
      md += `### 🍱 About Me & Current Focus\n\n`;
      md += `| 🚀 **What I'm Building** | 📚 **What I'm Learning** |\n|:---|:---|\n`;
      md += `| ${state.statusBio.working} | ${state.statusBio.learning} |\n`;
      md += `| 💬 **Ask Me About** | ⚡ **Fun Fact** |\n`;
      md += `| ${state.statusBio.askMe} | ${state.statusBio.funFact} |\n\n`;
      md += divider;
    } else if (arch.id === "minimal") {
      md += `### // 01 / ABOUT ME\n\n`;
      md += `- **Current Project:** ${state.statusBio.working}\n`;
      md += `- **Currently Learning:** ${state.statusBio.learning}\n`;
      md += `- **Ask Me About:** ${state.statusBio.askMe}\n`;
      md += `- **Fun Fact:** ${state.statusBio.funFact}\n\n`;
      md += divider;
    } else {
      // General Styled Status Grid
      const iconPrefix = arch.id === "solarpunk" ? "🌱" : (arch.id === "dracula" ? "🧛" : (arch.id === "nordic" ? "❄️" : (arch.id === "kawaii" ? "🌸" : (arch.id === "synthwave" ? "🌴" : "⚡"))));
      md += `### ${iconPrefix} About Me & Current Focus\n\n`;
      md += `| Section | Details |\n|:---|:---|\n`;
      md += `| 🎯 **Current Project** | ${state.statusBio.working} |\n`;
      md += `| 📚 **Currently Learning** | ${state.statusBio.learning} |\n`;
      md += `| 💬 **Ask Me About** | ${state.statusBio.askMe} |\n`;
      md += `| ⚡ **Fun Fact** | ${state.statusBio.funFact} |\n\n`;
      md += divider;
    }
  }

  // 6. TECH STACK MATRIX
  if (state.selectedSkills.length > 0) {
    const skillsFormat = arch.id === "minimal" ? "minimal-text" : "table";
    const skillHeading = arch.id === "minimal"
      ? `### // 02 / SKILLS & TECHNOLOGIES\n\n`
      : `### 🛠️ Skills & Technologies\n\n`;

    if (arch.id === "neofetch") {
      md += "```bash\n";
      md += `┌──(user㉿dev)-[~/toolchain]\n└─$ pacman -Qe --skills\n`;
      md += "```\n\n";
    }

    md += skillHeading;
    md += buildCategorizedSkills(state.selectedSkills, arch, skillsFormat);
    md += divider;
  }

  // 7. FEATURED PROJECTS
  if (state.toggles.projects && state.projects.length > 0) {
    const projHeading = arch.id === "minimal"
      ? `### // 03 / FEATURED PROJECTS\n\n`
      : `### 📦 Featured Projects\n\n`;

    if (arch.id === "neofetch") {
      md += "```bash\n";
      md += `┌──(user㉿dev)-[~/projects]\n└─$ docker ps --format "table {{.Names}}\\t{{.Image}}\\t{{.Status}}"\n`;
      md += "```\n\n";
    }

    md += projHeading;
    md += buildProjectsMarkdown(u, arch, state.projectStyle);
    md += divider;
  }

  // 8. ACTIVITY & GRAPHS
  if (state.toggles.graphs) {
    const graphHeading = arch.id === "minimal"
      ? `### // 04 / GITHUB ACTIVITY\n\n`
      : `### 📈 GitHub Activity\n\n`;

    if (arch.id === "neofetch") {
      md += "```bash\n";
      md += `┌──(user㉿dev)-[~/activity]\n└─$ btop --live --git-activity\n`;
      md += "```\n\n";
    }

    md += graphHeading;
    md += buildGraphMarkdown(u, arch, state.graphStyle);
    md += `\n`;
  }

  // 9. GITHUB STATS & STREAK
  if (state.toggles.stats) {
    const statsHeading = arch.id === "minimal"
      ? `### // 05 / GITHUB STATS\n\n`
      : `### 📊 GitHub Stats & Metrics\n\n`;
    md += statsHeading;
    md += buildStatsMarkdown(u, arch);
  }

  // 10. TOP LANGUAGES
  if (state.toggles.languages) {
    md += buildLanguagesMarkdown(u, arch);
  }

  // 11. TROPHY SHOWCASE
  if (state.toggles.trophies) {
    md += buildTrophiesMarkdown(u, arch);
  }

  // 12. FOOTER & VIRAL BACKLINK BADGE
  if (arch.id === "kawaii" || arch.id === "synthwave" || arch.id === "aurora" || arch.id === "rpg" || arch.id === "cyberpunk") {
    const footerCustom = arch.id === "kawaii" ? "34,36,44" : (arch.id === "synthwave" ? "24,26,30" : (arch.id === "aurora" ? "20,24,26,28" : "1,13,24"));
    md += `<img src="https://capsule-render.vercel.app/api?type=waving&color=auto&customColorList=${footerCustom}&height=80&section=footer" width="100%"/>\n\n`;
  }

  if (state.toggles.viralBadge) {
    if (arch.id === "neofetch" || arch.id === "matrix") {
      md += `<div align="center">\n  <code>[ 0x00_OK ] &nbsp; Built with <a href="https://github.com/Ratul-NotFound/Github-Overview-Maker">Git View Pro</a> &nbsp; [ EOF ]</code>\n</div>\n`;
    } else if (arch.id === "minimal") {
      md += `<p><sub>Built with <a href="https://github.com/Ratul-NotFound/Github-Overview-Maker">Git View Pro</a></sub></p>\n`;
    } else {
      md += `<div align="center">\n  <sub>⚡ Built with <a href="https://github.com/Ratul-NotFound/Github-Overview-Maker">Git View Pro</a></sub>\n</div>\n`;
    }
  }

  return md;
}

// -------------------------------------------------------------
// MARKDOWN TO HTML RENDERER ENGINE
// -------------------------------------------------------------
function renderMarkdownToHtml(md, arch) {
  if (typeof marked !== "undefined" && typeof marked.parse === "function") {
    try {
      return marked.parse(md, {
        gfm: true,
        breaks: true
      });
    } catch (e) {
      console.warn("Marked parser error, falling back:", e);
    }
  }
  return fallbackMarkdownParse(md, arch);
}

function fallbackMarkdownParse(md, arch) {
  let html = md;

  // Preformatted Code Blocks
  html = html.replace(/```(bash|yaml|json|text|lua|ansi)?\n([\s\S]*?)```/g, (m, lang, code) => {
    const esc = code.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    return `<pre><code>${esc}</code></pre>`;
  });

  // Headers
  html = html.replace(/^### (.*$)/gim, '<h3 style="color: ' + arch.accent + ';">$1</h3>');
  html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
  html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');

  // Blockquotes
  html = html.replace(/^> (.*$)/gim, '<blockquote>$1</blockquote>');

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
  const headline = state.headline || "Full-Stack Developer • Open Source Builder";

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

  if (DOM.skillCountBadge) {
    DOM.skillCountBadge.textContent = `${state.selectedSkills.length} selected`;
  }

  if (DOM.projectCountBadge) {
    const count = state.projects.length;
    DOM.projectCountBadge.textContent = `${count} project${count === 1 ? "" : "s"}`;
  }

  const avatarLetters = document.querySelectorAll(".avatar-letter");
  avatarLetters.forEach(el => {
    el.textContent = (name.charAt(0) || u.charAt(0) || "A").toUpperCase();
  });

  // Set data-archetype attribute on mockupWindow for deep CSS skinning
  if (DOM.mockupWindow) {
    DOM.mockupWindow.setAttribute("data-archetype", arch.id);
  }

  // Render Visual Preview with Theme Colors & Typography
  if (DOM.livePreviewContainer) {
    if (state.themeMode === "light") {
      DOM.livePreviewContainer.style.backgroundColor = "#ffffff";
      DOM.livePreviewContainer.style.color = "#1f2328";
    } else {
      DOM.livePreviewContainer.style.backgroundColor = arch.bg || "#0d1117";
      DOM.livePreviewContainer.style.color = "#c9d1d9";
    }
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
    showToast("📋 Markdown copied to clipboard!");
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
  showToast("📋 Markdown copied to clipboard!");
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
  state.selectedSkills = shuffled.slice(0, 14).map(s => s.id);

  const styles = ["bento", "table", "pinned", "minimal"];
  state.projectStyle = styles[Math.floor(Math.random() * styles.length)];

  const graphs = ["activity", "streak", "3d", "snake", "all"];
  state.graphStyle = graphs[Math.floor(Math.random() * graphs.length)];

  syncStateToDom();
  renderArchetypeSelectors();
  renderTechGrid();
  updateStudio();
  showToast(`🎲 Transformed profile to ${APP_DATA.archetypes[randomKey].name}!`);
}

function resetAction() {
  const def = JSON.parse(JSON.stringify(DEFAULT_STATE));
  Object.keys(def).forEach(k => {
    state[k] = def[k];
  });
  state.projects = JSON.parse(JSON.stringify(APP_DATA.defaultProjects));

  syncStateToDom();
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
      title: "💻 Terminal Fastfetch System Card",
      desc: "Clean ASCII terminal specifications box with system stats, shell specs and developer uptime.",
      code: "```bash\n   /\\_/\\        alexdev@archlinux-zen [x86_64]\n  ( o.o )       -----------------------------------------\n   > ^ <        OS       : Arch Linux Rolling Release\n                Host     : Alex Vance\n                Role     : Full-Stack Developer\n                Uptime   : 99.99% // Continuous Delivery\n                Fuel     : Fresh Espresso ☕\n```"
    },
    {
      title: "⚔️ RPG Adventurer Sheet",
      desc: "Character Sheet with Focus (HP), Mana (Coffee), and developer class stats.",
      code: "```yaml\n╔══════════════════════════════════════════════════════════════╗\n║             ⚜️  DEVELOPER PROFILE & STATS  ⚜️               ║\n╠══════════════════════════════════════════════════════════════╣\n║  DEVELOPER: Alex Vance                                       ║\n║  ROLE     : Full-Stack Developer • Open Source Builder       ║\n║  FOCUS    : [████████████████████] 100% (High Energy)        ║\n║  FUEL     : [████████████████░░░░] 85% (Espresso)            ║\n║  EXPERIENCE: Level 99 Full-Stack Developer                   ║\n╚══════════════════════════════════════════════════════════════╝\n```"
    },
    {
      title: "🍱 Bento Grid Projects Showcase",
      desc: "Clean structured markdown cards with Live Demo, GitHub repository and Star badges.",
      code: "> ### 💎 [DevPulse Analytics](https://github.com/alexdev/devpulse)\n> Real-time GitHub statistics, commit streak analytics, and developer productivity dashboard.\n> \n> `TypeScript, React, Next.js, TailwindCSS` &nbsp;•&nbsp; <a href=\"https://devpulse.io\"><img src=\"https://img.shields.io/badge/Live_Demo-0070f3?style=flat-square&logo=vercel&logoColor=white\" /></a> <a href=\"https://github.com/alexdev/devpulse\"><img src=\"https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white\" /></a>"
    },
    {
      title: "👾 Retro 8-Bit Arcade High Scores",
      desc: "Classic arcade leaderboard frame to gamify your GitHub profile README.",
      code: "```\n┌─────────────────────────────────────────────────────────────┐\n│                🕹️  ARCADE HIGH SCORE BOARD  🕹️               │\n├─────────────────────────────────────────────────────────────┤\n│  RANK  │  PLAYER                     │  SCORE    │  TIER    │\n├─────────────────────────────────────────────────────────────┤\n│  #1    │  ALEX VANCE                 │  999,999  │  ★ MASTER│\n│  #2    │  GITHUB_COMMUNITY           │  850,000  │  ★ PRO   │\n│  #3    │  OPEN_SOURCE_BUILDER        │  740,000  │  ★ PRO   │\n└─────────────────────────────────────────────────────────────┘\n```"
    },
    {
      title: "🌊 Dynamic Activity Wave Graph",
      desc: "Real-time contribution wave graph generated automatically from your GitHub activity.",
      code: "<div align=\"center\">\n  <img src=\"https://github-readme-activity-graph.vercel.app/graph?username=alexdev&theme=react-dark&hide_border=true&area=true\" width=\"100%\" />\n</div>"
    },
    {
      title: "🔥 Real-Time Commit Streak Tracker",
      desc: "Live daily commit streak counter with fire flames and current streak record.",
      code: "<div align=\"center\">\n  <img src=\"https://github-readme-streak-stats.herokuapp.com/?user=alexdev&theme=tokyonight&hide_border=true&background=050811&ring=00f0ff&fire=ff0055&currStreakLabel=00f0ff&sideLabels=94a3b8\" height=\"165\" />\n</div>"
    }
  ];

  DOM.modalComponentList.innerHTML = "";
  snippets.forEach(item => {
    const card = document.createElement("div");
    card.className = "component-card";
    card.innerHTML = `
      <h3>${item.title}</h3>
      <p>${item.desc}</p>
      <pre><code>${item.code.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")}</code></pre>
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
