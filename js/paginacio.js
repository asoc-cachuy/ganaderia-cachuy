
  const imagenes = [
    "../images/vaca1.jpeg", "../images/vaca1.jpeg", "../images/vaca1.jpeg",
    "../images/vaca1.jpeg", "../images/vaca1.jpeg", "../images/vaca1.jpeg",
    "../images/vaca1.jpeg", "../images/vaca1.jpeg", "../images/vaca1.jpeg",
    "../images/vaca1.jpeg", "../images/toro-noche1.jpg", "../images/vaca1.jpeg",
    "../images/vaca1.jpeg", "../images/vaca1.jpeg", "../images/vaca1.jpeg",
    "../images/vaca1.jpeg", "../images/vaca1.jpeg", "../images/vaca1.jpeg"
  ];

  const galeria = document.getElementById("galeria-grid");
  const paginacion = document.getElementById("paginacion");
  const imagenesPorPagina = 6;
  let paginaActual = 1;

  function mostrarPagina(pagina) {
    galeria.innerHTML = "";
    const inicio = (pagina - 1) * imagenesPorPagina;
    const fin = inicio + imagenesPorPagina;
    const imagenesPagina = imagenes.slice(inicio, fin);

    imagenesPagina.forEach(src => {
      const div = document.createElement("div");
      div.classList.add("galeria-item");
      div.innerHTML = `<img src="${src}" alt="Ejemplar">`;
      galeria.appendChild(div);
    });

    actualizarPaginacion(pagina);
  }

  function actualizarPaginacion(pagina) {
    paginacion.innerHTML = "";
    const totalPaginas = Math.ceil(imagenes.length / imagenesPorPagina);

    // Botón anterior
    const btnAnterior = document.createElement("button");
    btnAnterior.classList.add("btn-pag");
    btnAnterior.textContent = "« Anterior";
    btnAnterior.disabled = pagina === 1;
    btnAnterior.addEventListener("click", () => {
      if (paginaActual > 1) {
        paginaActual--;
        mostrarPagina(paginaActual);
      }
    });
    paginacion.appendChild(btnAnterior);

    // Botones de número
    for (let i = 1; i <= totalPaginas; i++) {
      const boton = document.createElement("button");
      boton.classList.add("btn-pag");
      if (i === pagina) boton.classList.add("active");
      boton.textContent = i;
      boton.addEventListener("click", () => {
        paginaActual = i;
        mostrarPagina(i);
      });
      paginacion.appendChild(boton);
    }

    // Botón siguiente
    const btnSiguiente = document.createElement("button");
    btnSiguiente.classList.add("btn-pag");
    btnSiguiente.textContent = "Siguiente »";
    btnSiguiente.disabled = pagina === totalPaginas;
    btnSiguiente.addEventListener("click", () => {
      if (paginaActual < totalPaginas) {
        paginaActual++;
        mostrarPagina(paginaActual);
      }
    });
    paginacion.appendChild(btnSiguiente);
  }

  // Iniciar galería
  mostrarPagina(paginaActual);

