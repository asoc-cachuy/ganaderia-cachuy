document.addEventListener('DOMContentLoaded', () => {
    function crearProgress(id, porcentaje, color) {
      const circle = new ProgressBar.Circle(id, {
        color: color,
        trailColor: '#eee',
        strokeWidth: 6,
        trailWidth: 3,
        easing: 'easeInOut',
        duration: 1500,
        text: {
          autoStyleContainer: false
        },
        from: { color: color, width: 6 },
        to: { color: color, width: 6 },
        step: function(state, circle) {
          circle.setText(Math.round(circle.value() * 100) + '%');
        }
      });

      // Estilo del texto dentro del círculo
      circle.text.style.fontFamily = '"Segoe UI", Helvetica, sans-serif';
      circle.text.style.fontSize = '2rem';
      circle.text.style.color = '#000'; // puedes cambiarlo por el mismo color si quieres: color

      // Animar al valor especificado
      circle.animate(porcentaje / 100);
    }

    // Crear cada barra con color y valor diferente
    crearProgress('#progress1', 45, 'rgb(162, 0, 255)'); // verde
    crearProgress('#progress2', 70, 'rgb(162, 0, 255)'); // azul
    crearProgress('#progress3', 85, 'rgb(162, 0, 255)'); // naranja
  });