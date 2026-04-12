const blogPosts = [
  {
    category: "Tutorial",
    emoji: "🎨",
    title: "Getting Started with Figma",
    desc: "Components, auto layout, and rapid prototyping — the workflow I use every day.",
    date: "Jun 2025",
    color: "#6c5ce7",
  },
  {
    category: "UX",
    emoji: "📱",
    title: "UX Research from Scratch",
    desc: "How to run effective user interviews and usability tests without a big budget.",
    date: "May 2025",
    color: "#00d2ff",
  },
  {
    category: "Video",
    emoji: "🎬",
    title: "Video Editing Tips",
    desc: "Quick wins I learned working in broadcast production at Televida.",
    date: "Apr 2025",
    color: "#ff6b81",
  },
  {
    category: "Dev",
    emoji: "⚡",
    title: "Responsive Design Principles",
    desc: "Core concepts for building layouts that actually work on every screen.",
    date: "Mar 2025",
    color: "#fdcb6e",
  },
];

const skillBubbles = [
  { label: "UX Research", icon: "fas fa-search", large: true },
  { label: "Wireframing", icon: "fas fa-draw-polygon", large: false },
  { label: "Prototyping", icon: "fas fa-mouse-pointer", large: false },
  { label: "Figma", icon: "fab fa-figma", large: false },
  { label: "Responsive", icon: "fas fa-mobile-alt", large: true },
  { label: "HTML/CSS", icon: "fab fa-html5", large: false },
  { label: "JavaScript", icon: "fab fa-js", large: false },
  { label: "React", icon: "fab fa-react", large: false },
  { label: "Python", icon: "fab fa-python", large: true },
  { label: "Flask", icon: "fab fa-python", large: false },
  { label: "REST APIs", icon: "fas fa-server", large: false },
  { label: "NLP / ML", icon: "fas fa-brain", large: false },
];

const skillCards = [
  {
    icon: "fas fa-users",
    title: "Soft Skills",
    tags: ["Teamwork", "Communication", "Problem-solving", "Creativity", "Ownership"],
  },
  {
    icon: "fas fa-camera",
    title: "Audiovisual",
    tags: ["Video Editing", "Tricaster", "Broadcast Production", "Televida"],
  },
  {
    icon: "fas fa-globe",
    title: "Languages",
    tags: ["Spanish (native)", "English C2"],
  },
  {
    icon: "fas fa-tools",
    title: "Tools",
    tags: ["Git / GitHub", "SQLite", "EmailJS", "Unsplash API", "PyPDF2"],
  },
];

const projects = [
  {
    id: "el-armador-rd",
    title: "El Armador RD",
    emoji: "🏗️",
    tagline: "A real business website for a construction coordination company.",
    description:
      "Designed and developed a complete business website for El Armador RD, a real construction coordination company. The site presents services, strengthens trust, and gives the business a polished digital presence.",
    role:
      "I handled the full process end-to-end: UX planning, visual design, layout design, frontend development, content structure, and deployment preparation.",
    problemSolved:
      "The company needed a professional online presence to communicate credibility, explain services clearly, and support business growth with a modern website.",
    metrics: [
      "Full business website shipped",
      "Responsive across desktop, tablet, and mobile",
      "Improved brand credibility online",
      "Structured service presentation",
    ],
    highlights: [
      "Custom landing page and services layout",
      "Responsive design for multiple screen sizes",
      "Trust-building visual identity",
      "Business-focused UX structure",
      "Clean modern interface with clear calls to action",
    ],
    tech: [
      { label: "HTML5", icon: "fab fa-html5" },
      { label: "CSS3", icon: "fab fa-css3-alt" },
      { label: "JavaScript", icon: "fab fa-js" },
      { label: "Responsive Design", icon: "fas fa-mobile-alt" },
      { label: "Figma", icon: "fab fa-figma" },
    ],
    github: "https://github.com/PixXy-wEb/J0bs",
    demo: "https://elarmadorrd.com/",
    deployment: "Prepared for live business deployment with a production-ready responsive frontend.",
    mockup: "images/elarmador.png",
    isFeatured: true,
    isRealBusiness: true,
    isWIP: false,
  },
  {
    id: "ai-chatbot",
    title: "SuperLibrary",
    emoji: "🤖",
    tagline: "A smart library assistant that answers questions based on the books you read.",
    description:
      "Built a document-based chatbot system that lets users upload PDFs and ask questions about their contents. The application uses embeddings and retrieval logic to return relevant answers.",
    role:
      "I worked on UI design, frontend integration, Python backend logic, PDF text extraction, semantic search flow, and system structure.",
    problemSolved:
      "Users often struggle to manually search long PDF files. This project turns static documents into an interactive Q&A experience.",
    metrics: [
      "PDF parsing implemented",
      "Question-answering workflow built",
      "Semantic retrieval flow integrated",
      "Frontend + backend connected",
    ],
    highlights: [
      "PDF upload and text extraction",
      "Semantic search / embeddings workflow",
      "Interactive Q&A interface",
      "Backend API integration",
      "Useful for large document navigation",
    ],
    tech: [
      { label: "Python", icon: "fab fa-python" },
      { label: "Flask", icon: "fas fa-server" },
      { label: "NLP", icon: "fas fa-brain" },
      { label: "PyPDF2", icon: "fas fa-file-pdf" },
      { label: "SQLite", icon: "fas fa-database" },
    ],
    github: "https://github.com/PixXy-wEb/SuperLibrary",
    demo: "",
    deployment: "Local prototype built with backend APIs and document-processing pipeline.",
    mockup: "images/superlibrary.png",
    isFeatured: true,
    isRealBusiness: false,
    isWIP: true,
  },
  {
    id: "portfolio-site",
    title: "Dogs and Cats RD",
    emoji: "✨",
    tagline: "Helping dogs and cats live better lives",
    description:
      "A web platform focused on pets (dogs and cats), offering information, services, and possibly adoption or care-related resources to improve animal welfare and connect users with pet-related content or services. ",
    role:
      "Frontend web application / informational platform for pet care and awareness.",
    problemSolved:
      "Helps users easily access pet-related information and services in one place, addressing the lack of centralized resources for pet care, adoption, and education.",
    metrics: [
      "User engagement (time spent browsing pet content)",
      "Number of pet-related interactions (clicks, views, searches)",
      "Potential adoption/service conversions",
      "Content consumption (articles, galleries, or sections visited)",
    ],
    highlights: [
      "Clean, visual pet-focused UI (images, galleries)",
      "Sections dedicated to dogs and cats",
      "Interactive elements (buttons, navigation, possibly galleries)",
      "Emotional appeal (focus on animals and care)",
      "Simple and user-friendly structure",
    ],
    tech: [
      { label: "HTML5", icon: "fab fa-html5" },
      { label: "CSS3", icon: "fab fa-css3-alt" },
      { label: "JavaScript", icon: "fab fa-js" },
      { label: "UI Design", icon: "fas fa-palette" },
    ],
    github: "https://github.com/PixXy-wEb/DogsAndCatsRD",
    demo: "https://dogsandcatsrd.netlify.app/",
    deployment: "Frontend project structured for static hosting.",
    mockup: "images/dogsandcatrd.png",
    isFeatured: false,
    isRealBusiness: false,
    isWIP: false,
  },
  {
    id: "ux-case-study",
    title: "SouthYak",
    emoji: "📱",
    tagline: "Creative digital solutions for modern businesses.",
    description:
      "A modern web platform showcasing digital services such as custom software development, UI/UX design, and e-commerce solutions. It presents a professional portfolio-style layout aimed at attracting clients and demonstrating technical capabilities.",
    role:
      "Frontend developer / web designer (portfolio + service showcase website).",
    problemSolved:
      "Helps businesses understand and access digital solutions by clearly presenting services, past work, and capabilities in one place—reducing the friction of finding reliable developers or agencies.",
    metrics: [
      "Conversion rate (visitors → contact / inquiries)",
      "Portfolio engagement (projects viewed, time on site)",
      "Bounce rate",
      "Click-through rate on services",
      "Lead generation (contact forms submitted)",
    ],
    highlights: [
      "Clean, modern UI with professional aesthetic",
      "Service-based sections (e.g., UI/UX, development, integrations)",
      "Portfolio/project showcase",
      "Clear value proposition for businesses",
      "Structured layout for easy navigation",
      "Likely responsive design (mobile-friendly)",
      "Emphasis on custom solutions and flexibility",
    ],
    tech: [
      { label: "Figma", icon: "fab fa-figma" },
      { label: "Wireframing", icon: "fas fa-draw-polygon" },
      { label: "UX Research", icon: "fas fa-search" },
      { label: "Prototyping", icon: "fas fa-mouse-pointer" },
    ],
    github: "https://github.com/PixXy-wEb/SouthYak",
    demo: "https://pixxy-web.github.io/SouthYak/",
    deployment: "",
    mockup: "images/southyak.png",
    isFeatured: false,
    isRealBusiness: false,
    isWIP: false,
  },
];

function showSection(sectionId) {
  const sections = document.querySelectorAll(".section");
  const navLinks = document.querySelectorAll(".nav-link");

  sections.forEach((section) => {
    section.hidden = section.id !== sectionId;
  });

  navLinks.forEach((link) => {
    link.classList.toggle("active", link.dataset.section === sectionId);
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderBlog() {
  const container = document.getElementById("blog-posts");
  container.innerHTML = blogPosts.map((p) => `
    <div class="blog-card-vertical">
      <div class="blog-category" style="border-color:${p.color}; color:${p.color}; background:${p.color}22;">
        ${p.category}
      </div>
      <h3>${p.emoji} ${p.title}</h3>
      <p>${p.desc}</p>
      <div class="blog-meta">
        <span><i class="far fa-calendar"></i> ${p.date}</span>
        <span class="blog-coming-soon">Coming soon</span>
      </div>
    </div>
  `).join("");
}

function renderSkills() {
  const bubbleContainer = document.getElementById("skill-bubbles");
  const cardContainer = document.getElementById("skill-cards");

  bubbleContainer.innerHTML = skillBubbles.map((b, i) => `
    <div class="skill-bubble${b.large ? " large" : ""}" style="--delay:${i * 0.15}s">
      <i class="${b.icon}"></i>
      <span>${b.label}</span>
    </div>
  `).join("");

  cardContainer.innerHTML = skillCards.map((c) => `
    <div class="skill-card-modern">
      <div class="skill-icon-gradient"><i class="${c.icon}"></i></div>
      <h3>${c.title}</h3>
      <div class="skill-tags">
        ${c.tags.map((tag) => `<span>${tag}</span>`).join("")}
      </div>
    </div>
  `).join("");
}

function renderProjects() {
  const featuredContainer = document.getElementById("featured-projects");
  const otherContainer = document.getElementById("other-projects");
  const otherWrapper = document.getElementById("other-projects-wrapper");

  const featured = projects.filter((p) => p.isFeatured);
  const rest = projects.filter((p) => !p.isFeatured);

  featuredContainer.innerHTML = featured.map((project) => `
    <div class="featured-banner" data-project-id="${project.id}">
      <div class="featured-banner-left">
        <div class="featured-label">
          <i class="fas fa-star"></i> Featured Project
          ${project.isRealBusiness ? `<span class="featured-business-tag">🏗️ Real Business</span>` : ""}
        </div>
        <h3>${project.emoji} ${project.title}</h3>
        <p>${project.tagline}</p>
        <div class="featured-tech">
          ${project.tech.slice(0, 5).map((t) => `
            <span class="card-tech-chip">
              <i class="${t.icon}"></i> ${t.label}
            </span>
          `).join("")}
        </div>
        <div class="featured-actions">
          ${project.github ? `
            <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn-card-github">
              <i class="fab fa-github"></i> GitHub
            </a>
          ` : ""}
          ${project.demo ? `
            <a href="${project.demo}" target="_blank" rel="noopener noreferrer" class="btn-card-demo">
              <i class="fas fa-external-link-alt"></i> Live Demo
            </a>
          ` : `
            <span class="btn-card-demo btn-card-demo-disabled">
              <i class="fas fa-external-link-alt"></i> Demo Soon
            </span>
          `}
          <button class="btn-card-walkthrough" data-open-modal="${project.id}">
            <i class="fas fa-eye"></i> Walkthrough
          </button>
        </div>
      </div>
      <div class="featured-banner-right">
        <img src="${project.mockup}" alt="${project.title} mockup" loading="lazy" />
      </div>
    </div>
  `).join("");

  otherContainer.innerHTML = rest.map((project) => `
    <div class="project-card-3d clickable-card" data-project-id="${project.id}">
      <div class="card-content visible-card">
        <div class="card-mockup-thumb">
          <img src="${project.mockup}" alt="${project.title} screenshot" loading="lazy" />
          <div class="card-mockup-overlay">
            ${project.isRealBusiness ? `<span class="card-badge card-badge-business">🏗️ Real Client</span>` : ""}
            ${project.isWIP ? `<span class="card-badge card-badge-wip">🚧 WIP</span>` : ""}
          </div>
        </div>

        <div class="card-body">
          <div class="card-title-row">
            <span class="card-emoji">${project.emoji}</span>
            <h3>${project.title}</h3>
          </div>
          <p class="card-desktop">${project.tagline}</p>

          <div class="card-tech">
            ${project.tech.slice(0, 4).map((t) => `
              <span class="card-tech-chip">
                <i class="${t.icon}"></i> ${t.label}
              </span>
            `).join("")}
            ${project.tech.length > 4 ? `<span class="card-tech-chip">+${project.tech.length - 4}</span>` : ""}
          </div>

          <div class="card-actions">
            ${project.github ? `
              <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn-card-github">
                <i class="fab fa-github"></i> GitHub
              </a>
            ` : `
              <span class="btn-card-github btn-card-disabled">
                <i class="fab fa-github"></i> Private
              </span>
            `}
            ${project.demo ? `
              <a href="${project.demo}" target="_blank" rel="noopener noreferrer" class="btn-card-demo">
                <i class="fas fa-external-link-alt"></i> Demo
              </a>
            ` : `
              <span class="btn-card-demo btn-card-demo-disabled">
                <i class="fas fa-external-link-alt"></i> Soon
              </span>
            `}
            <button class="btn-card-walkthrough" data-open-modal="${project.id}">
              <i class="fas fa-eye"></i> Details
            </button>
          </div>
        </div>
      </div>
    </div>
  `).join("");

  otherWrapper.style.display = rest.length ? "block" : "none";

  addProjectListeners();
}

function openModal(projectId) {
  const project = projects.find((p) => p.id === projectId);
  if (!project) return;

  const modalRoot = document.getElementById("modal-root");

  modalRoot.innerHTML = `
    <div class="modal-neon" id="project-modal">
      <div class="modal-content-neon">
        <button class="modal-close-neon" id="modal-close" aria-label="Close">&times;</button>
        <div class="modal-body-neon">
          <div class="modal-header-row">
            <span class="modal-emoji">${project.emoji}</span>
            <div>
              <h2 class="modal-title">${project.title}</h2>
              <p class="modal-tagline">${project.tagline}</p>
            </div>
          </div>

          <div class="modal-badges">
            ${project.isFeatured ? `<span class="badge badge-featured">⭐ Featured Project</span>` : ""}
            ${project.isRealBusiness ? `<span class="badge badge-business">🏗️ Real Business Client</span>` : ""}
            ${project.isWIP ? `<span class="badge badge-wip">🚧 In Progress</span>` : ""}
          </div>

          <div class="modal-mockup">
            <img src="${project.mockup}" alt="${project.title} mockup" loading="lazy" />
          </div>

          <div class="modal-actions">
            ${project.github ? `
              <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn-modal-github">
                <i class="fab fa-github"></i> View on GitHub
              </a>
            ` : `
              <span class="btn-modal-disabled"><i class="fab fa-github"></i> Private Repo</span>
            `}

            ${project.demo ? `
              <a href="${project.demo}" target="_blank" rel="noopener noreferrer" class="btn-modal-demo">
                <i class="fas fa-external-link-alt"></i> Live Demo
              </a>
            ` : `
              <span class="btn-modal-disabled btn-modal-disabled-demo">
                <i class="fas fa-external-link-alt"></i> Demo Coming Soon
              </span>
            `}
          </div>

          <div class="walkthrough-section">
            <h3><i class="fas fa-align-left"></i> What I Built</h3>
            <p>${project.description}</p>

            <h3><i class="fas fa-person-digging"></i> My Role</h3>
            <p>${project.role}</p>

            <h3><i class="fas fa-lightbulb"></i> Problem Solved</h3>
            <div class="problem-solved-box">
              <p>${project.problemSolved}</p>
            </div>

            <h3><i class="fas fa-chart-line"></i> Results & Metrics</h3>
            <div class="metrics-row">
              ${project.metrics.map((m) => `
                <div class="metric-chip">
                  <i class="fas fa-check-circle"></i> ${m}
                </div>
              `).join("")}
            </div>

            <h3><i class="fas fa-star"></i> Key Features</h3>
            <ul class="modal-list">
              ${project.highlights.map((h) => `<li>${h}</li>`).join("")}
            </ul>

            <h3><i class="fas fa-layer-group"></i> Tech Stack</h3>
            <div class="modal-tech-stack">
              ${project.tech.map((t) => `
                <span class="modal-tech-chip">
                  <i class="${t.icon}"></i> ${t.label}
                </span>
              `).join("")}
            </div>

            ${project.deployment ? `
              <h3><i class="fas fa-cloud-upload-alt"></i> Deployment</h3>
              <p class="deployment-info">${project.deployment}</p>
            ` : ""}
          </div>
        </div>
      </div>
    </div>
  `;

  const modal = document.getElementById("project-modal");
  const closeBtn = document.getElementById("modal-close");

  closeBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener("keydown", escHandler);
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("modal-root").innerHTML = "";
  document.removeEventListener("keydown", escHandler);
  document.body.style.overflow = "";
}

function escHandler(e) {
  if (e.key === "Escape") closeModal();
}

function addProjectListeners() {
  document.querySelectorAll("[data-project-id]").forEach((card) => {
    card.addEventListener("click", () => {
      openModal(card.dataset.projectId);
    });
  });

  document.querySelectorAll("[data-open-modal]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      openModal(btn.dataset.openModal);
    });
  });

  document.querySelectorAll(".card-actions a, .featured-actions a").forEach((link) => {
    link.addEventListener("click", (e) => e.stopPropagation());
  });

  document.querySelectorAll(".card-actions span, .featured-actions span").forEach((item) => {
    item.addEventListener("click", (e) => e.stopPropagation());
  });
}

function initNavigation() {
  document.querySelectorAll(".nav-link").forEach((btn) => {
    btn.addEventListener("click", () => {
      showSection(btn.dataset.section);
    });
  });

  document.querySelectorAll("[data-go]").forEach((btn) => {
    btn.addEventListener("click", () => {
      showSection(btn.dataset.go);
    });
  });
}

function init() {
  renderBlog();
  renderSkills();
  renderProjects();
  initNavigation();
  showSection("home");
}

document.addEventListener("DOMContentLoaded", init);