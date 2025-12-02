import * as THREE from 'three';

export function createCamera() {
  const aspect = window.innerWidth / window.innerHeight;
  const frustumSize = 14; // Increased from 10 for more spacing around board
  
  const camera = new THREE.OrthographicCamera(
    frustumSize * aspect / -2,
    frustumSize * aspect / 2,
    frustumSize / 2,
    frustumSize / -2,
    1,
    1000
  );

  // Isometric view position
  camera.position.set(20, 20, 20);
  camera.lookAt(0, 0, 0);

  window.addEventListener('resize', () => {
    const aspect = window.innerWidth / window.innerHeight;
    camera.left = -frustumSize * aspect / 2;
    camera.right = frustumSize * aspect / 2;
    camera.top = frustumSize / 2;
    camera.bottom = -frustumSize / 2;
    camera.updateProjectionMatrix();
  });

  return camera;
}

