const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.z = 10;

  const renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById('background-3d').appendChild(renderer.domElement);

  // Luz ambiental suave
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
  scene.add(ambientLight);

  const pointLight = new THREE.PointLight(0xffffff, 1, 50);
  pointLight.position.set(0, 0, 10);
  scene.add(pointLight);

  // Material con emisión de luz sutil
  const colors = ['#df0ef1', '#ec09bb', '#2196f3', '#7f00ff', '#ff6f00', '#00c853'];
  const segments = 6;
  const ringGroup = new THREE.Group();

  for (let i = 0; i < segments; i++) {
    const geometry = new THREE.TorusGeometry(3, 0.3, 16, 100, (Math.PI * 2) / segments);
    const material = new THREE.MeshStandardMaterial({
      color: colors[i],
      emissive: colors[i],
      emissiveIntensity: 0.5,
      roughness: 0.3,
      metalness: 0.5,
      transparent: true,
      opacity: 0.8
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.z = (Math.PI * 2 / segments) * i;
    ringGroup.add(mesh);
  }

  scene.add(ringGroup);

  // Animación
  function animate() {
    requestAnimationFrame(animate);
    ringGroup.rotation.z += 0.0015;
    renderer.render(scene, camera);
  }

  animate();

  // Responsivo
  window.addEventListener('resize', () => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    renderer.setSize(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  });