(function() {
  // Navegación entre secciones
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = {
    home: document.getElementById('home'),
    skills: document.getElementById('skills'),
    projects: document.getElementById('projects'),
    resume: document.getElementById('resume'),
    blog: document.getElementById('blog')
  };

  function activateSection(sectionId) {
    navLinks.forEach(link => link.classList.remove('active'));
    Object.values(sections).forEach(section => section.classList.remove('active-section'));

    const activeLink = Array.from(navLinks).find(link => link.dataset.section === sectionId);
    if (activeLink) activeLink.classList.add('active');
    if (sections[sectionId]) sections[sectionId].classList.add('active-section');
    
    // Scroll suave al inicio de la sección en móviles
    if (window.innerWidth <= 768) {
      document.querySelector('.main-content').scrollIntoView({ behavior: 'smooth' });
    }
  }

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const sectionId = link.dataset.section;
      if (sectionId) activateSection(sectionId);
    });
  });

  document.getElementById('exploreBtn')?.addEventListener('click', (e) => {
    e.preventDefault();
    activateSection('projects');
  });

  document.getElementById('contactBtn')?.addEventListener('click', () => {
    window.location.href = 'mailto:paulettedeleondg@gmail.com?subject=Contacto%20desde%20portfolio';
  });

  // MODAL para walkthroughs
  const modal = document.getElementById('projectModal');
  const modalContent = document.getElementById('modalContent');
  const closeBtn = document.querySelector('.modal-close-neon');

  function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }

  closeBtn.onclick = closeModal;
  window.onclick = (e) => {
    if (e.target === modal) closeModal();
  };

  // Contenido de los walkthroughs
  const walkthroughs = {
    superlibrary: `
      <div class="walkthrough-section">
        <h2>📚 SuperLibrary</h2>
        <p>Sistema de gestión de bibliotecas digitales con IA y recomendaciones semánticas.</p>
        <a href="https://github.com/PixXy-wEb/SuperLibrary.git" target="_blank" class="repo-link"><i class="fab fa-github"></i> Ver repositorio</a>
        
        <h3>🚀 Características</h3>
        <ul>
          <li>Motor de Recomendación Semántica con Vector Embeddings</li>
          <li>Asistente IA integrado</li>
          <li>Gestión de sagas y metadatos</li>
          <li>Procesamiento de PDF/EPUB</li>
        </ul>

        <h3>🛠️ Stack</h3>
        <p>Python/Flask, SQLite, Sentence-Transformers, Scikit-learn, HTML/CSS, Vanilla JS</p>
      </div>
    `,
    elarmador: `
      <div class="walkthrough-section">
        <h2>⚒️ El Armador</h2>
        <p>Plataforma profesional para empresa de construcción.</p>
        <a href="https://github.com/PixXy-wEb/J0bs.git" target="_blank" class="repo-link"><i class="fab fa-github"></i> Ver repositorio</a>
        
        <h3>💻 Tecnologías</h3>
        <p>Flask, HTML5, CSS3, EmailJS, Unsplash API</p>

        <h3>✨ Features</h3>
        <ul>
          <li>Glassmorphism y animaciones</li>
          <li>Lightbox con navegación</li>
          <li>Filtros dinámicos</li>
          <li>Formulario con EmailJS</li>
        </ul>
      </div>
    `,
    noteninja: `
      <div class="walkthrough-section">
        <h2>📝 NoteNinja (En Proceso)</h2>
        <p>Herramienta educativa que automatiza creación de materiales de estudio desde PDFs.</p>
        
        <h3>🎯 Problema</h3>
        <p>Estudiantes pierden horas creando flashcards manualmente.</p>

        <h3>🏗️ Arquitectura</h3>
        <pre>Flask + PyPDF2 + Sesiones + Vanilla JS</pre>
      </div>
    `
  };

  document.querySelectorAll('.clickable-card').forEach(card => {
    card.addEventListener('click', () => {
      const project = card.dataset.project;
      if (project && walkthroughs[project]) {
        modalContent.innerHTML = walkthroughs[project];
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
      }
    });
  });

  // Detectar orientación para ajustes
  window.addEventListener('orientationchange', function() {
    setTimeout(() => {
      // Reajustes necesarios
      window.scrollTo(0, 0);
    }, 100);
  });

  // Inicializar sección activa
  window.addEventListener('load', () => {
    if (!document.querySelector('.section.active-section')) {
      activateSection('home');
    }
  });
})();