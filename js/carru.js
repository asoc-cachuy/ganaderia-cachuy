const carruselItems = document.querySelectorAll('.carrusel-item');
let currentIndex = 0;

setInterval(() => {
  carruselItems[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % carruselItems.length;
  carruselItems[currentIndex].classList.add('active');
}, 3000);

function prevImage() {
  carruselItems[currentIndex].classList.remove('active');
  currentIndex = (currentIndex - 1 + carruselItems.length) % carruselItems.length;
  carruselItems[currentIndex].classList.add('active');
}

function nextImage() {
  carruselItems[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % carruselItems.length;
  carruselItems[currentIndex].classList.add('active');
}