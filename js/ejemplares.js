function mostrarSeccion(id) {
    // Oculta todas las secciones
    const secciones = document.querySelectorAll('.seccion-ejemplares');
    secciones.forEach(sec => sec.classList.remove('activa'));

    // Muestra solo la sección seleccionada
    const activa = document.getElementById(id);
    if (activa) {
      activa.classList.add('activa');
    }
  }

  // Mostrar toros por defecto al cargar
  window.addEventListener('DOMContentLoaded', () => {
    mostrarSeccion('toros');
  });