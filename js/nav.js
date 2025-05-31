(() => {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || currentPath.includes(href)) {
      link.classList.add('active');
    }
  });
})();