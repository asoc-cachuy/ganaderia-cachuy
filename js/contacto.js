function toggleFaq(header) {
    const content = header.nextElementSibling;
    const isOpen = content.style.display === "block";

    // Cierra todos los contenidos
    document.querySelectorAll(".faq-content").forEach(el => el.style.display = "none");
    document.querySelectorAll(".boton-mas").forEach(btn => btn.textContent = "+");

    // Abre solo si estaba cerrado
    if (!isOpen) {
      content.style.display = "block";
      const btn = header.querySelector(".boton-mas");
      if (btn) btn.textContent = "–";
    }
  }