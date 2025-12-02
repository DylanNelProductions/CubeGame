import * as THREE from 'three';

export function createLights(scene) {
  // Soft ambient fill
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
  scene.add(ambientLight);

  // Main directional key light (warm)
  const dirLight = new THREE.DirectionalLight(0xffedd5, 1.2);
  dirLight.position.set(10, 20, 10);
  dirLight.castShadow = true;
  dirLight.shadow.mapSize.width = 2048;
  dirLight.shadow.mapSize.height = 2048;
  dirLight.shadow.camera.near = 0.5;
  dirLight.shadow.camera.far = 50;
  
  const d = 8;
  dirLight.shadow.camera.left = -d;
  dirLight.shadow.camera.right = d;
  dirLight.shadow.camera.top = d;
  dirLight.shadow.camera.bottom = -d;
  dirLight.shadow.bias = -0.001; // Reduce shadow artifacts

  scene.add(dirLight);

  // Rim light (Cool blue) for 3D definition
  const rimLight = new THREE.DirectionalLight(0xd5eaff, 0.6);
  rimLight.position.set(-10, 10, -5);
  scene.add(rimLight);

  // Optional: Add simple environment map logic in main scene setup if desired later
  // For now, this 3-point setup is much better than basic ambient+dir

  return { ambientLight, dirLight, rimLight };
}
