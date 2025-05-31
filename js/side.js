  const producers = [
    {
      name: "María Quispe Huamani",
      phrase: "La tierra devuelve todo lo que se cuida con amor.",
      photo: "../images/perfil-proyecto.jpg",
      description: "Ganadera de tercera generación, comprometida con prácticas sostenibles y bienestar animal.",
    },
    {
      name: "Juan Mamani Ccahuana",
      phrase: "Un buen pasto hace buena leche.",
      photo: "../images/perfil-proyecto.jpg",
      description: "Líder comunal y promotor de la ganadería ecoeficiente en San Lorenzo de Quinti.",
    },
    // Puedes agregar más perfiles aquí
  ];

  const producerButtonsContainer = document.getElementById("producer-buttons");
  const cardContainer = document.getElementById("producer-card-container");

  // Renderiza botones
  producers.forEach((producer, index) => {
    const btn = document.createElement("button");
    btn.className = "producer-button";
    btn.innerHTML = `<img src="${producer.photo}" alt="Perfil de ${producer.name}" width="70" height="70">`;
    btn.addEventListener("click", () => renderProducerCard(producer));
    producerButtonsContainer.appendChild(btn);

    if (index === 0) {
      renderProducerCard(producer); // Renderiza el primero por defecto
    }
  });

  function renderProducerCard(producer) {
    cardContainer.innerHTML = `
      <div class="producer-card">
        <img class="producer-img" src="${producer.photo}" alt="${producer.name}">
        <h4>${producer.name}</h4>
        <blockquote>"${producer.phrase}"</blockquote>
        <p>${producer.description}</p>
      </div>
    `;
    // Animación con JavaScript
    const card = cardContainer.querySelector(".producer-card");
    card.style.opacity = 0;
    card.style.transform = "translateY(20px)";
    requestAnimationFrame(() => {
      card.style.transition = "all 0.5s ease";
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    });
  }