  document.addEventListener('DOMContentLoaded', () => {
    const carrusel = document.getElementById('carrusel');
    const clones = carrusel.cloneNode(true);
    carrusel.append(...clones.children);
  });