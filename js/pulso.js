const redes = document.querySelector('.redes');

observer.observe(redes);

redes.addEventListener('mouseenter', () => {
  redes.classList.add('hovered');
  setTimeout(() => {
    redes.classList.remove('hovered');
  }, 2000);
});
