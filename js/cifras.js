const counters = document.querySelectorAll('.contador');

  const animateCounter = (counter) => {
    const target = +counter.getAttribute('data-target');
    const numberSpan = counter.querySelector('.numero');
    let count = 0;
    const duration = 2000; // Duración total en milisegundos
    const frameRate = 60;
    const totalFrames = Math.round(duration / (1000 / frameRate));
    const increment = target / totalFrames;
    let currentFrame = 0;

    const updateCounter = () => {
      count += increment;
      currentFrame++;
      if (currentFrame < totalFrames) {
        numberSpan.innerText = Math.floor(count);
        requestAnimationFrame(updateCounter);
      } else {
        numberSpan.innerText = target.toLocaleString('es-ES');
      }
    };

    updateCounter();
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target); // Detener observación después de animar 1 vez
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => {
    observer.observe(counter);
  });