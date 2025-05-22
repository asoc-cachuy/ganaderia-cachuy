  window.addEventListener('load', () => {
    const bar = document.getElementById('progress-bar');
    bar.style.width = '100%';

    // Espera un momento y lo oculta
    setTimeout(() => {
      document.getElementById('progress-bar-container').style.display = 'none';
    }, 600); // puedes ajustar el tiempo
  });