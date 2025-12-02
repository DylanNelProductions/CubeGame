import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three-stdlib';
import { getColorForTheme } from '../utils/themes.js';

export class Cube {
  constructor(x, z, colorId, type = 'normal', theme = null) {
    this.x = x;
    this.z = z;
    this.colorId = colorId;
    this.type = type; // 'normal' or 'ice'
    this.value = 1;
    this.isMerging = false;
    this.theme = theme;

    // Use RoundedBoxGeometry for smoother look
    const geometry = new RoundedBoxGeometry(0.9, 0.9, 0.9, 4, 0.1);
    let material;

    if (this.type === 'ice') {
      const iceColor = theme ? theme.iceColor : 0xaaddff;
      material = new THREE.MeshPhysicalMaterial({
        color: iceColor,
        transmission: 0.6, // Glass-like
        opacity: 0.8,
        transparent: true,
        roughness: 0.1,
        metalness: 0.1,
        thickness: 1.0, // Refraction volume
        ior: 1.5,
        emissive: iceColor,
        emissiveIntensity: 0.1
      });
    } else {
      const cubeColor = theme ? getColorForTheme(theme, colorId) : 0xff3b30;
      material = new THREE.MeshStandardMaterial({ 
        color: cubeColor,
        roughness: 0.4, // Less plastic
        metalness: 0.1,
        envMapIntensity: 1.5 // Requires env map for best effect
      });
    }
    
    this.mesh = new THREE.Mesh(geometry, material);
    this.mesh.castShadow = true;
    this.mesh.receiveShadow = true;
    
    this.updatePosition(x, z);
  }

  updatePosition(x, z) {
    this.x = x;
    this.z = z;
    this.mesh.position.set(x, 0.5, z); 
  }

  upgrade() {
    if (this.type === 'ice') return;
    this.value *= 2;
    this.colorId++;
    if (this.theme) {
      this.mesh.material.color.setHex(getColorForTheme(this.theme, this.colorId));
    }
  }

  dispose() {
    this.mesh.geometry.dispose();
    this.mesh.material.dispose();
  }
}
