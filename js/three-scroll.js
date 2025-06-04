 // Tu código Three.js aquí
  const container = document.getElementById('canvas-container');

  // Escena y cámara
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
  camera.position.z = 50;

  // Renderer
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);

  // Colores que pediste
  const colores = ['#00c853', '#ff6f00', '#7f00ff', '#2196f3', '#ec09bb', '#df0ef1'];

  // Crear grupo para partículas
  const particulasGroup = new THREE.Group();
  scene.add(particulasGroup);

  // Crear partículas
  const PARTICULAS_CANTIDAD = 200;
  const particulas = [];

  for(let i=0; i<PARTICULAS_CANTIDAD; i++){
    // Crear geometría de punto
    const geometry = new THREE.SphereGeometry( Math.random() * 0.3 + 0.1, 8, 8);

    // Elegir color aleatorio del array
    const color = new THREE.Color(colores[Math.floor(Math.random()*colores.length)]);
    const material = new THREE.MeshBasicMaterial({ color });

    // Crear malla
    const particle = new THREE.Mesh(geometry, material);

    // Posición aleatoria en un cubo grande
    particle.position.set(
      (Math.random() - 0.5) * 100,
      (Math.random() - 0.5) * 100,
      (Math.random() - 0.5) * 100
    );

    // Velocidad aleatoria pequeña para animar movimiento
    particle.userData = {
      velocity: new THREE.Vector3(
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02
      )
    };

    particulasGroup.add(particle);
    particulas.push(particle);
  }

  // Animación
  function animate(){
    requestAnimationFrame(animate);

    // Mover partículas según su velocidad
    particulas.forEach(p => {
      p.position.add(p.userData.velocity);

      // Limites para que no se vayan muy lejos, vuelven a la zona
      ['x','y','z'].forEach(axis => {
        if(p.position[axis] > 50) p.position[axis] = -50;
        if(p.position[axis] < -50) p.position[axis] = 50;
      });
    });

    renderer.render(scene, camera);
  }
  animate();

  // Ajuste responsivo
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });