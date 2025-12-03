import * as THREE from 'three';

let currentFrustumSize = 14;

export function createCamera() {
  const aspect = window.innerWidth / window.innerHeight;
  currentFrustumSize = 14; // Base frustum size
  
  const camera = new THREE.OrthographicCamera(
    currentFrustumSize * aspect / -2,
    currentFrustumSize * aspect / 2,
    currentFrustumSize / 2,
    currentFrustumSize / -2,
    1,
    1000
  );

  // Isometric view position
  camera.position.set(20, 20, 20);
  camera.lookAt(0, 0, 0);

  window.addEventListener('resize', () => {
    updateCameraFrustum(camera, currentFrustumSize);
  });

  return camera;
}

export function updateCameraZoom(camera, boardSize) {
  // Calculate frustum size based on board size
  // Base size 3-5 uses frustum 14, scales up for larger boards
  // Formula: baseFrustum + (size - 5) * zoomFactor
  // For size 7: 14 + (7-5)*2 = 18
  // For size 9: 14 + (9-5)*2 = 22
  const baseFrustum = 14;
  const zoomFactor = 2; // How much to zoom out per size increase above 5
  
  if (boardSize <= 5) {
    currentFrustumSize = baseFrustum;
  } else {
    currentFrustumSize = baseFrustum + (boardSize - 5) * zoomFactor;
  }
  
  updateCameraFrustum(camera, currentFrustumSize);
}

function updateCameraFrustum(camera, frustumSize) {
  const aspect = window.innerWidth / window.innerHeight;
  camera.left = -frustumSize * aspect / 2;
  camera.right = frustumSize * aspect / 2;
  camera.top = frustumSize / 2;
  camera.bottom = -frustumSize / 2;
  camera.updateProjectionMatrix();
}

