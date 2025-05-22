observer.observe(redes);

  const redes = document.querySelector('.redes');

  redes.addEventListener('mouseenter', () => {
    redes.classList.add('hovered');
    setTimeout(() => {
      redes.classList.remove('hovered');
    }, 2000);
  });
  