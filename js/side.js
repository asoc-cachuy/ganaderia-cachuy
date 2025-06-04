
  const colors = ['#df0ef1', '#ec09bb', '#2196f3', '#7f00ff', '#00c853', '#ff6f00'];
  const nombres = document.querySelectorAll('.nombre');
  let currentIndex = 0;

  function actualizarColoresYAnimacion() {
    if (window.innerWidth <= 768) {
      nombres.forEach((nombre, i) => {
        nombre.classList.remove('active');
        nombre.style.color = '#fff'; // reset
      });

      const nombreActual = nombres[currentIndex];
      nombreActual.classList.add('active');
      nombreActual.style.color = colors[currentIndex % colors.length];

      currentIndex = (currentIndex + 1) % nombres.length;
    } else {
      // En escritorio, solo actualizar color
      nombres.forEach((nombre, i) => {
        nombre.style.color = colors[(currentIndex + i) % colors.length];
      });

      currentIndex = (currentIndex + 1) % colors.length;
    }
  }

  // Activar loop
  setInterval(actualizarColoresYAnimacion, 2000);
  actualizarColoresYAnimacion(); // inicial

