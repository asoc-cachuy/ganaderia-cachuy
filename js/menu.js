  document.addEventListener("DOMContentLoaded", function () {
    const hamburgerBtn = document.getElementById("hamburgerBtn");
    const navMenu = document.getElementById("navMenu");
    const menuOverlay = document.getElementById("menuOverlay");
    const links = document.querySelectorAll(".nav-link");

    // Función para abrir el menú
    function openMenu() {
      navMenu.classList.add("open");
      menuOverlay.classList.add("active");
    }

    // Función para cerrar el menú
    function closeMenu() {
      navMenu.classList.remove("open");
      menuOverlay.classList.remove("active");
    }

    // Toggle al hacer click en el botón hamburguesa
    hamburgerBtn.addEventListener("click", () => {
      const isOpen = navMenu.classList.contains("open");
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Cierra el menú si se hace click fuera (en el overlay)
    menuOverlay.addEventListener("click", () => {
      closeMenu();
    });

    // Activar el enlace actual
    const currentPath = window.location.pathname;
    links.forEach((link) => {
      const linkPath = new URL(link.href).pathname;
      if (currentPath === linkPath || (currentPath === "/" && linkPath === "/")) {
        link.classList.add("active");
      }

      // Opcional: cerrar menú al hacer clic en un link (en móvil)
      link.addEventListener("click", () => {
        closeMenu();
      });
    });
  });