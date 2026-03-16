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

  // MODAL para walkthroughs - CORREGIDO
  const modal = document.getElementById('projectModal');
  const modalContent = document.getElementById('modalContent');
  const closeBtn = document.querySelector('.modal-close-neon');

  function closeModal() {
    if (modal) {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  window.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

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
          <li>Asistente IA integrado para consultas</li>
          <li>Gestión de sagas y metadatos avanzados</li>
          <li>Procesamiento de PDF/EPUB</li>
        </ul>

        <h3>🛠️ Stack Tecnológico</h3>
        <p><strong>Backend:</strong> Python/Flask, SQLite</p>
        <p><strong>Machine Learning:</strong> Sentence-Transformers, Scikit-learn</p>
        <p><strong>Frontend:</strong> HTML5, CSS3, JavaScript Vanilla</p>
      </div>
    `,
    elarmador: `
      <div class="walkthrough-section">
        <h2>⚒️ El Armador</h2>
        <p>Plataforma profesional para empresa de coordinación de proyectos de construcción.</p>
        <a href="https://github.com/PixXy-wEb/J0bs.git" target="_blank" class="repo-link"><i class="fab fa-github"></i> Ver repositorio</a>
        
        <h3>💻 Tecnologías</h3>
        <ul>
          <li><strong>Backend:</strong> Flask</li>
          <li><strong>Frontend:</strong> HTML5, CSS3, JavaScript Vanilla</li>
          <li><strong>Servicios:</strong> EmailJS, Unsplash API</li>
        </ul>

        <h3>✨ Características Destacadas</h3>
        <ul>
          <li>Glassmorphism y animaciones suaves</li>
          <li>Lightbox con navegación por teclado</li>
          <li>Filtros dinámicos sin recargar</li>
          <li>Formulario funcional con EmailJS</li>
        </ul>
      </div>
    `,
    noteninja: `
      <div class="walkthrough-section">
        <h2>📝 NoteNinja (En Proceso)</h2>
        <p>Herramienta educativa que automatiza la creación de materiales de estudio desde PDFs.</p>
        
        <h3>🎯 El Problema</h3>
        <p>Los estudiantes pierden horas creando flashcards manualmente. NoteNinja automatiza el proceso.</p>

        <h3>🏗️ Arquitectura</h3>
        <pre>Flask + PyPDF2 + Sesiones en memoria + Vanilla JS</pre>

        <h3>📊 Métricas de Performance</h3>
        <ul>
          <li>Tiempo procesamiento: 1.8s</li>
          <li>Memoria por PDF: 35MB</li>
          <li>Respuesta API: 150ms</li>
        </ul>
      </div>
    `
  };

  // CORREGIDO: Selección correcta de cards cliqueables
  document.querySelectorAll('.clickable-card').forEach(card => {
    card.addEventListener('click', (e) => {
      e.preventDefault();
      const project = card.getAttribute('data-project');
      console.log('Clicked project:', project); // Para debug
      
      if (project && walkthroughs[project]) {
        modalContent.innerHTML = walkthroughs[project];
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
      } else {
        console.log('No walkthrough found for:', project);
      }
    });
  });

  // Debug: Verificar que las cards existen
  console.log('Cards encontradas:', document.querySelectorAll('.clickable-card').length);

  // Inicializar sección activa
  window.addEventListener('load', () => {
    if (!document.querySelector('.section.active-section')) {
      activateSection('home');
    }
  });
})();
