/* ─────────────────────────────────────────────────
   nav.js · La Voz del Cuerpo
   Incluir en cada página con:
   <script src="nav.js"></script>
   justo antes de </body>
───────────────────────────────────────────────── */

(function () {

  /* ── 1. SIDEBAR ── */
  const sidebarHTML = `
    <aside class="sidebar" id="sidebar">
      <div class="sidebar-logo">
        <span style="font-family:'High Spirited',cursive;font-size:1.25rem;color:var(--text);display:block;margin-bottom:.2rem;">Karla Moraga Aguilera</span>
        <span>Terapeuta Somática &amp; Docente</span>
      </div>
      <nav>
        <ul>
          <li><a href="index.html">Inicio</a></li>
          <li><a href="sobre-mi.html">Sobre mí</a></li>
          <li><a href="mi-trabajo.html">Mi trabajo</a></li>
          <li><a href="programas.html">Programas</a></li>
          <li><a href="masterclass-ansiedad-y-cuerpo.html" style="color:#9B8DC0;">Masterclass gratuita</a></li>
          <li><a href="semillas-y-reflexiones.html">Semillas y reflexiones</a></li>
          <li><a href="index.html#guias">Guías somáticas</a></li>
          <li><a href="index.html#recursos">Recursos gratuitos</a></li>
          <li><a href="index.html#agendar">Agendar</a></li>
          <li><a href="index.html#contacto">Contacto</a></li>
        </ul>
      </nav>
      <div class="sidebar-foot">
        © <span class="copy-year"></span> Karla Moraga Aguilera<br/>Todos los derechos reservados
      </div>
    </aside>`;

  /* ── 2. HEADER ── */
  const headerHTML = `
    <header id="site-header" style="position:fixed;top:0;right:0;left:0;z-index:90;display:flex;justify-content:space-between;align-items:center;padding:1.2rem 3rem;background-image:url('1000049723.jpg');background-size:cover;background-position:center top;border-bottom:1px solid var(--line);">
      <a href="index.html" style="text-align:left;line-height:1.5;">
        <span style="font-family:'Brittany',cursive;font-size:2.2rem;color:#7a5c4a;display:block;letter-spacing:.02em;line-height:1;margin-bottom:.4rem;">Karla Moraga</span>
        <span style="font-family:var(--font-body);font-size:.65rem;letter-spacing:.18em;text-transform:uppercase;color:var(--text-muted);display:block;">Terapeuta Somática &amp; Docente</span>
      </a>
      <button class="menu-toggle" id="menuToggle" aria-label="Abrir menú" style="position:static;display:flex;background:#c4a882;padding:.55rem .65rem;border-radius:4px;border:none;cursor:pointer;">
        <span style="display:block;width:20px;height:1.5px;background:#fff8f2;margin:2px 0;"></span>
        <span style="display:block;width:20px;height:1.5px;background:#fff8f2;margin:2px 0;"></span>
        <span style="display:block;width:20px;height:1.5px;background:#fff8f2;margin:2px 0;"></span>
      </button>
    </header>`;

  /* ── 3. INYECTAR en el body ── */
  document.body.insertAdjacentHTML('afterbegin', sidebarHTML + headerHTML);

  /* ── 4. MARCAR link activo según la página actual ── */
  const currentPage = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.sidebar nav a').forEach(function (link) {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.style.color = '#76886E';
      link.style.borderBottomColor = '#A8B8A0';
    }
    /* Cerrar sidebar al hacer clic en cualquier link */
    link.addEventListener('click', function () {
      document.getElementById('sidebar').classList.remove('open');
    });
  });

  /* ── 5. LÓGICA del menú hamburguesa ── */
  const toggle  = document.getElementById('menuToggle');
  const sidebar = document.getElementById('sidebar');

  toggle.addEventListener('click', function (e) {
    e.stopPropagation();
    sidebar.classList.toggle('open');
  });

  document.addEventListener('click', function (e) {
    if (sidebar.classList.contains('open') &&
        !sidebar.contains(e.target) &&
        !toggle.contains(e.target)) {
      sidebar.classList.remove('open');
    }
  });

  /* ── 6. AÑO en sidebar ── */
  document.querySelectorAll('.copy-year').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

})();
