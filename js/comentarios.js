  document.addEventListener("DOMContentLoaded", () => {
    const testimonios = document.querySelectorAll(".testimonio");
    const anteriorBtn = document.getElementById("anterior");
    const siguienteBtn = document.getElementById("siguiente");

    let index = 0;

    // Mostrar solo el primer testimonio al inicio
    testimonios.forEach((t, i) => {
      t.classList.remove("active");
    });
    testimonios[0].classList.add("active");

    // Función para cambiar testimonio
    const mostrarTestimonio = (nuevoIndex) => {
      testimonios[index].classList.remove("active");
      index = (nuevoIndex + testimonios.length) % testimonios.length;
      testimonios[index].classList.add("active");
    };

    // Eventos botones
    anteriorBtn.addEventListener("click", () => {
      mostrarTestimonio(index - 1);
    });

    siguienteBtn.addEventListener("click", () => {
      mostrarTestimonio(index + 1);
    });

    // ⚙️ Auto cambio cada 5 segundos
    setInterval(() => {
      mostrarTestimonio(index + 1);
    }, 5000);
  });