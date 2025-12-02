import gsap from 'gsap';

export function animateMove(mesh, targetX, targetZ, duration = 0.2) {
  return new Promise(resolve => {
    gsap.to(mesh.position, {
      x: targetX,
      z: targetZ,
      duration: duration,
      ease: "power2.out",
      onComplete: resolve
    });
  });
}

export function animateMerge(mesh) {
  // Pop animation
  gsap.to(mesh.scale, {
    x: 1.2,
    y: 1.2,
    z: 1.2,
    duration: 0.1,
    yoyo: true,
    repeat: 1,
    ease: "power1.inOut"
  });
}

export function animateBounce(mesh, dirX, dirZ) {
  // Slight nudge
  const dist = 0.2;
  gsap.to(mesh.position, {
    x: mesh.position.x + dirX * dist,
    z: mesh.position.z + dirZ * dist,
    duration: 0.1,
    yoyo: true,
    repeat: 1,
    ease: "power1.inOut"
  });
}

export function animateIceBreak(mesh) {
    // Simple shatter effect (scale down + fade) - actual particles handled by particle system
    // This just removes the main block gracefully
    return new Promise(resolve => {
        gsap.to(mesh.scale, {
            x: 0, 
            y: 0, 
            z: 0, 
            duration: 0.2, 
            ease: "back.in(2)",
            onComplete: resolve 
        });
    });
}
