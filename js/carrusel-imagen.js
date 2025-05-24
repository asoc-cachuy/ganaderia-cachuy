const carrusel = document.getElementById('miniCarrusel');
const imgGrande = document.getElementById('img-grande');

let velocidad = 0.5; // px por frame (ajustable)
let desplazamiento = 0;

function animarCarrusel() {
  desplazamiento -= velocidad;
  carrusel.style.transform = `translateX(${desplazamiento}px)`;

  const primeraImg = carrusel.querySelector('img');
  const primeraAncho = primeraImg.offsetWidth + 16; // incluir gap

  // Si la primera imagen salió completamente, la mandamos al final
  if (Math.abs(desplazamiento) >= primeraAncho) {
    carrusel.appendChild(primeraImg);
    desplazamiento += primeraAncho; // ajustamos sin reiniciar
    carrusel.style.transform = `translateX(${desplazamiento}px)`;
  }

  requestAnimationFrame(animarCarrusel);
}

animarCarrusel();

// Cambiar imagen grande al hacer clic
carrusel.querySelectorAll('img').forEach(img => {
  img.addEventListener('click', () => {
    imgGrande.style.opacity = 0;
    setTimeout(() => {
      imgGrande.src = img.src;
      imgGrande.style.opacity = 1;
    }, 200);
  });
});