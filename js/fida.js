  const track = document.querySelector('.carrusel-track');
  let scrollAmount = 0;

  function autoScroll() {
    scrollAmount += 1;
    if (scrollAmount >= track.scrollWidth / 2) {
      scrollAmount = 0; // reinicia al llegar al medio (duplicado)
    }
    track.style.transform = `translateX(-${scrollAmount}px)`;
    requestAnimationFrame(autoScroll);
  }

  // Estilos en línea necesarios para mover el carrusel
  track.style.display = 'flex';
  track.style.gap = '2rem';
  track.style.transition = 'transform 0s linear';
  track.style.willChange = 'transform';

  // Contenedor overflow oculto
  const container = document.querySelector('.carrusel-infinito');
  container.style.overflow = 'hidden';
  container.style.width = '100%';

  autoScroll();