  const carrusel = document.getElementById('carrusel');
  const items = carrusel.children;
  const itemWidth = items[0].offsetWidth + 16; // item width + margin-right
  let scrollPosition = 0;

  // Clona los elementos para bucle continuo
  carrusel.innerHTML += carrusel.innerHTML;

  function animarCarrusel() {
    scrollPosition += 0.5; // Velocidad
    if (scrollPosition >= carrusel.scrollWidth / 2) {
      scrollPosition = 0;
    }
    carrusel.style.transform = `translateX(-${scrollPosition}px)`;
    requestAnimationFrame(animarCarrusel);
  }

  requestAnimationFrame(animarCarrusel);