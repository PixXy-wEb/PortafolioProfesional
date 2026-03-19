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
        
        <h3>💻 Tecnologías</h3>
          <ul>
            <li><strong>Backend:</strong> Python, Flask</li>
            <li><strong>Machine Learning:</strong> NLP, Embeddings semánticos, Sistema de recomendación</li>
            <li><strong>Frontend:</strong> HTML5, CSS3, JavaScript Vanilla</li>
            <li><strong>Base de datos:</strong> SQLite</li>
            <li><strong>Procesamiento de archivos:</strong> EPUB y PDF parsing</li>
            <li><strong>Arquitectura:</strong> Modular MVC-like structure</li>
            <li><strong>IA:</strong> Motor de chatbot y búsqueda semántica</li>
          </ul>

          <h3>✨ Características Destacadas</h3>
          <ul>
            <li>Sistema completo de biblioteca digital con gestión de libros y sagas</li>
            <li>Motor de recomendaciones basado en similitud semántica</li>
            <li>Chatbot integrado para interacción con la biblioteca</li>
            <li>Procesamiento automático de archivos EPUB y PDF</li>
            <li>Generación y almacenamiento de embeddings para búsqueda inteligente</li>
            <li>Arquitectura modular separando frontend, lógica ML y servicios</li>
            <li>Interfaz web dinámica con múltiples vistas y paneles de gestión</li>
            <li>Sistema de búsqueda avanzada y resultados inteligentes</li>
            <li>Cacheo de embeddings para optimizar rendimiento</li>
            <li>Organización escalable preparada para expansión de modelos IA</li>
          </ul>
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
        
        <h3>💻 Tecnologías</h3>
          <ul>
            <li><strong>Backend:</strong> Python, Flask</li>
            <li><strong>Procesamiento de documentos:</strong> PyPDF2</li>
            <li><strong>Frontend:</strong> HTML5, CSS3, JavaScript Vanilla</li>
            <li><strong>Manejo de estado:</strong> Sesiones en memoria (Flask Sessions)</li>
            <li><strong>Arquitectura:</strong> API REST + Server-side rendering</li>
            <li><strong>Procesamiento de texto:</strong> Heurísticas NLP básicas</li>
            <li><strong>Seguridad:</strong> Validación de archivos, control de sesiones y límites de carga</li>
          </ul>

          <h3>✨ Características Destacadas</h3>
          <ul>
            <li>Generación automática de flashcards a partir de PDFs académicos</li>
            <li>Extracción y procesamiento inteligente de texto educativo</li>
            <li>Sistema interactivo de estudio dentro del navegador</li>
            <li>Arquitectura ligera optimizada para MVP y rápida iteración</li>
            <li>Manejo de estado mediante sesiones sin necesidad de base de datos</li>
            <li>Flujo completo: subida de archivo → análisis → generación de materiales</li>
            <li>UI responsive enfocada en productividad estudiantil</li>
            <li>Procesamiento eficiente con tiempos de respuesta optimizados</li>
            <li>Diseño preparado para futura integración con IA y modelos NLP avanzados</li>
            <li>Decisiones técnicas documentadas y orientadas a escalabilidad</li>
          </ul>
      </div>
    `,
    dogsandcatsrd: `
      <div class="walkthrough-section">
        <h2>🐶 Dogs and Cats RD</h2>
        <p>Landing Page para empresa de servicios veterinarios.</p>
        <a href="https://github.com/PixXy-wEb/DogsAndCatsRD.git" target="_blank" class="repo-link"><i class="fab fa-github"></i> Ver repositorio</a>
        
        <h3>💻 Tecnologías</h3>
          <ul>
            <li><strong>Frontend:</strong> HTML5, CSS3, JavaScript Vanilla</li>
            <li><strong>Tipografía:</strong> Google Fonts (Inter)</li>
            <li><strong>Iconografía:</strong> Font Awesome</li>
            <li><strong>Diseño:</strong> Responsive Design, Flexbox, CSS Grid</li>
            <li><strong>Recursos:</strong> CDN externos para optimización de carga</li>
          </ul>

          <h3>✨ Características Destacadas</h3>
          <ul>
            <li>Navegación One-Page con scroll interno entre secciones</li>
            <li>Navbar responsive con menú hamburguesa interactivo</li>
            <li>Hero section con overlay visual y llamadas a la acción (CTA)</li>
            <li>Sistema de diseño basado en tarjetas (card layout)</li>
            <li>Arquitectura modular por secciones reutilizables</li>
            <li>Diseño enfocado en conciencia social y storytelling visual</li>
            <li>Optimización ligera sin frameworks pesados</li>
            <li>Estructura semántica HTML5 y buenas prácticas de accesibilidad</li>
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
