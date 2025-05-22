 const blocks = document.querySelectorAll('.block');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show'); // para que se oculte al salir
      }
    });
  }, {
    threshold: 0.1
  });

  blocks.forEach(block => observer.observe(block));