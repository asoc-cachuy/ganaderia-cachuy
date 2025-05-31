const redes = document.querySelector('.redes');

// Asegúrate de que el elemento existe antes de observarlo
if (redes) {
  // Crea el IntersectionObserver
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        redes.classList.add('visible'); // Puedes cambiar esta clase o comportamiento
      } else {
        redes.classList.remove('visible');
      }
    });
  }, {
    threshold: 0.5 // Puedes ajustar este valor según lo que necesites
  });

  // Observa el elemento
  observer.observe(redes);

  // Efecto de entrada con retardo
  redes.addEventListener('mouseenter', () => {
    redes.classList.add('hovered');
    setTimeout(() => {
      redes.classList.remove('hovered');
    }, 2000);
  });
}
