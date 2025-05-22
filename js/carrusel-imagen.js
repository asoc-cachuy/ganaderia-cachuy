    const miniaturas = document.querySelectorAll('.miniaturas img');
    const imgGrande = document.getElementById('img-grande');

    miniaturas.forEach((mini) => {
      mini.addEventListener('click', () => {
        const nueva = mini.src.replace('300x200', '900x600');
        imgGrande.src = nueva;
      });
    });