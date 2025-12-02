import * as THREE from 'three';
import gsap from 'gsap';

export class ParticleSystem {
  constructor(scene) {
    this.scene = scene;
    this.particles = [];
  }

  emit(x, z, color, count = 10) {
    const geometry = new THREE.BoxGeometry(0.15, 0.15, 0.15);
    const material = new THREE.MeshBasicMaterial({ color: color });

    for (let i = 0; i < count; i++) {
      const particle = new THREE.Mesh(geometry, material);
      particle.position.set(x, 0.5, z);
      
      // Random velocity
      const velX = (Math.random() - 0.5) * 4;
      const velY = Math.random() * 3 + 1;
      const velZ = (Math.random() - 0.5) * 4;

      this.scene.add(particle);
      this.particles.push({ mesh: particle, velX, velY, velZ, life: 1.0 });
    }
  }

  update(delta) {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.life -= delta * 1.5; // fade speed

      if (p.life <= 0) {
        this.scene.remove(p.mesh);
        p.mesh.geometry.dispose();
        p.mesh.material.dispose();
        this.particles.splice(i, 1);
        continue;
      }

      // Physics
      p.velY -= 9.8 * delta; // Gravity
      p.mesh.position.x += p.velX * delta;
      p.mesh.position.y += p.velY * delta;
      p.mesh.position.z += p.velZ * delta;
      
      // Rotation
      p.mesh.rotation.x += p.velZ * delta * 2;
      p.mesh.rotation.z -= p.velX * delta * 2;

      // Scale/Fade
      p.mesh.scale.setScalar(p.life);
    }
  }
}

