// sidebar.js — La Voz del Cuerpo
// Edita este archivo para actualizar el menú en TODAS las páginas a la vez.

(function () {
  const html = `
    <aside class="sidebar" id="sidebar">
      <div class="sidebar-logo">
        <span style="font-family:'High Spirited', cursive; font-size:1.25rem; font-weight:400; font-style:normal; color:var(--text); letter-spacing:0.01em; display:block; margin-bottom:0.2rem; text-transform:none;">Karla Moraga Aguilera</span>
        <span>Terapeuta Somática &amp; Docente</span>
      </div>

      <nav>
        <ul>
          <li><a href="index.html#inicio" onclick="closeSidebar()">Inicio</a></li>
          <li><a href="sobre-mi.html" onclick="closeSidebar()">Sobre mí</a></li>
          <li><a href="mi-trabajo.html" onclick="closeSidebar()">Mi trabajo</a></li>
          <li><a href="programas.html" onclick="closeSidebar()">Programas</a></li>
          <li><a href="emdr-los-angeles-chile.html" onclick="closeSidebar()">EMDR</a></li>
          <!-- Para mostrar la Masterclass, descomenta la línea de abajo. Para ocultarla, coméntala. -->
          <li><a href="masterclass-ansiedad-y-cuerpo.html" onclick="closeSidebar()" style="color:#9B8DC0;">Masterclass gratuita</a></li>
          <li><a href="semillas-y-reflexiones.html" onclick="closeSidebar()">Semillas y reflexiones</a></li>
          <li><a href="index.html#guias" onclick="closeSidebar()">Guías somáticas</a></li>
          <li><a href="index.html#recursos" onclick="closeSidebar()">Recursos gratuitos</a></li>
          <li><a href="index.html#agendar" onclick="closeSidebar()">Agendar</a></li>
          <li><a href="index.html#contacto" onclick="closeSidebar()">Contacto</a></li>
        </ul>
      </nav>

      <div class="sidebar-foot">
        © <span class="copy-year"></span> Karla Moraga Aguilera<br/>Todos los derechos reservados
      </div>
    </aside>
  `;

  // Inserta el sidebar al inicio del body
  document.body.insertAdjacentHTML('afterbegin', html);

  // Actualiza el año automáticamente
  const yearEl = document.querySelector('.copy-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
