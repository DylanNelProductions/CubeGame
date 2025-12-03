import * as THREE from 'three';
import { Cube } from './cube.js';
import { generateLevel } from './levelGenerator.js';
import { animateMove, animateMerge, animateBounce, animateIceBreak } from './animations.js';
import { canMerge } from './mergeLogic.js';
import { ParticleSystem } from './particles.js';
import { getLevelConfig } from './levels.js';
import { getTheme } from '../utils/themes.js';
import { sounds } from '../core/audio.js'; // Import sounds
import gsap from 'gsap';

export class Board {
  constructor(scene, size = 4, level = 1, modeConfig = null) {
    this.scene = scene;
    this.level = level;
    
    // Use modeConfig if provided, otherwise use classic level config
    const config = modeConfig || getLevelConfig(level);
    this.size = config.size || size;
    this.maxColors = config.maxColors;
    this.theme = getTheme(level); 
    
    this.grid = []; 
    this.group = new THREE.Group();
    this.isAnimating = false;
    this.iceLeft = 0;
    
    this.statsListeners = []; 
    this.gameOverListeners = [];
    this.levelCompleteListeners = [];
    
    const offset = (this.size - 1) / 2;
    this.group.position.set(-offset, 0, -offset);
    
    this.scene.add(this.group);

    // Particles
    this.particles = new ParticleSystem(this.group);
    
    this.createFloor();
    this.initLevel(config);
  }

  update(delta) {
      this.particles.update(delta);
  }

  onStatsChange(callback) {
    this.statsListeners.push(callback);
  }

  onGameOver(callback) {
    this.gameOverListeners.push(callback);
  }

  onLevelComplete(callback) {
    this.levelCompleteListeners.push(callback);
  }

  updateStats() {
    this.statsListeners.forEach(cb => cb(this.iceLeft, this.level));
    
    if (this.iceLeft === 0) {
       // Wait a moment for animations to finish? 
       // Better to trigger this after move completion check.
    }
  }

  createFloor() {
    const floorColor = this.theme ? this.theme.floorColor : 0x2a2a2a;
    const center = (this.size - 1) / 2;
    
    // Main Floor
    const geometry = new THREE.PlaneGeometry(this.size, this.size);
    const material = new THREE.MeshStandardMaterial({ 
      color: floorColor,
      side: THREE.DoubleSide
    });
    const floor = new THREE.Mesh(geometry, material);
    floor.rotation.x = -Math.PI / 2;
    floor.position.set(center, 0, center);
    floor.receiveShadow = true;
    this.group.add(floor);

    // Subtle shadow/border plane underneath
    const shadowGeo = new THREE.PlaneGeometry(this.size + 0.4, this.size + 0.4);
    const shadowMat = new THREE.MeshBasicMaterial({ 
      color: 0x000000,
      transparent: true,
      opacity: 0.5,
      side: THREE.DoubleSide
    });
    const shadowPlane = new THREE.Mesh(shadowGeo, shadowMat);
    shadowPlane.rotation.x = -Math.PI / 2;
    shadowPlane.position.set(center, -0.05, center); // Just below
    this.group.add(shadowPlane);

    // Grid Helper
    const gridHelper = new THREE.GridHelper(this.size, this.size, 0x444444, 0x333333);
    gridHelper.position.set(center, 0.01, center);
    this.group.add(gridHelper);
  }

  initLevel(config) {
    // Pass full config to generator
    const levelData = generateLevel(config);
    this.grid = Array(this.size).fill(null).map(() => Array(this.size).fill(null));
    this.iceLeft = 0;

    for (let x = 0; x < this.size; x++) {
      for (let z = 0; z < this.size; z++) {
        const val = levelData[x][z];
        if (val === 100) {
          this.addCube(x, z, 0, 'ice');
          this.iceLeft++;
        } else if (val > 0) {
          this.addCube(x, z, val - 1, 'normal');
        }
      }
    }
    // Initial stats update
    setTimeout(() => this.updateStats(), 0);
  }

  addCube(x, z, colorId, type = 'normal') {
    const cube = new Cube(x, z, colorId, type, this.theme);
    this.grid[x][z] = cube;
    this.group.add(cube.mesh);
  }

  removeCube(cube) {
    this.group.remove(cube.mesh);
    cube.dispose();
    // Assuming cube is already removed from grid array where called
  }

  checkIceBreak(x, z) {
    // Check all 4 neighbors
    const neighbors = [
      {x: x+1, z: z}, {x: x-1, z: z},
      {x: x, z: z+1}, {x: x, z: z-1}
    ];

    neighbors.forEach(pos => {
      if (pos.x >= 0 && pos.x < this.size && pos.z >= 0 && pos.z < this.size) {
        const neighbor = this.grid[pos.x][pos.z];
        if (neighbor && neighbor.type === 'ice') {
          // Break Ice!
          this.grid[pos.x][pos.z] = null;
          this.iceLeft--;
          
          // Visual Effects
          sounds.playIceBreak();
          animateIceBreak(neighbor.mesh).then(() => {
              this.removeCube(neighbor);
          });
          const iceColor = this.theme ? this.theme.iceColor : 0xaaddff;
          this.particles.emit(neighbor.x, neighbor.z, iceColor, 15);
        }
      }
    });
    this.updateStats();
  }

  async move(direction) {
    if (this.isAnimating) return;
    this.isAnimating = true;

    // reset merging flags
    for(let x=0; x<this.size; x++) {
      for(let z=0; z<this.size; z++) {
        if(this.grid[x][z]) this.grid[x][z].isMerging = false;
      }
    }

    let moved = false;
    const moves = []; 

    const vector = { x: 0, z: 0 };
    if (direction === 'up') vector.z = -1; 
    if (direction === 'down') vector.z = 1;
    if (direction === 'left') vector.x = -1;
    if (direction === 'right') vector.x = 1;

    const xStart = vector.x === 1 ? this.size - 1 : 0;
    const xEnd = vector.x === 1 ? -1 : this.size;
    const xStep = vector.x === 1 ? -1 : 1;

    const zStart = vector.z === 1 ? this.size - 1 : 0;
    const zEnd = vector.z === 1 ? -1 : this.size;
    const zStep = vector.z === 1 ? -1 : 1;

    for (let x = xStart; x !== xEnd; x += xStep) {
      for (let z = zStart; z !== zEnd; z += zStep) {
        const cube = this.grid[x][z];
        if (!cube || cube.type === 'ice') continue; // Ice doesn't move

        let nextX = x + vector.x;
        let nextZ = z + vector.z;
        let destX = x;
        let destZ = z;
        let mergeTarget = null;

        while (
          nextX >= 0 && nextX < this.size &&
          nextZ >= 0 && nextZ < this.size
        ) {
          const nextCell = this.grid[nextX][nextZ];
          
          if (!nextCell) {
            destX = nextX;
            destZ = nextZ;
            nextX += vector.x;
            nextZ += vector.z;
          } else {
            // Check if ice
            if (nextCell.type === 'ice') {
               // Hit ice, stop here.
               break; 
            }
            if (canMerge(cube, nextCell)) {
              mergeTarget = nextCell;
              destX = nextX;
              destZ = nextZ;
            }
            break; 
          }
        }

        if (destX !== x || destZ !== z) {
          moved = true;
          this.grid[x][z] = null;
          
          if (mergeTarget) {
             mergeTarget.isMerging = true;
             moves.push(animateMove(cube.mesh, destX, destZ).then(() => {
                this.removeCube(cube);
                mergeTarget.upgrade();
                animateMerge(mergeTarget.mesh);
                sounds.playMerge();
                mergeTarget.isMerging = false;
                
                // Check Ice Break around the MERGE location
                this.checkIceBreak(destX, destZ);
             }));
          } else {
             this.grid[destX][destZ] = cube;
             cube.x = destX;
             cube.z = destZ;
             moves.push(animateMove(cube.mesh, destX, destZ));
          }
        }
      }
    }

    if (moved) {
      sounds.playMove();
      await Promise.all(moves);
      if (this.iceLeft === 0) {
        this.levelCompleteListeners.forEach(cb => cb());
      } else {
        this.spawnRandom();
      }
    }

    this.isAnimating = false;
    // Game over check should be if NO moves are possible
    // AND we haven't won yet.
    if (this.iceLeft > 0) {
       this.checkGameOver();
    }
  }

  spawnRandom() {
    const empty = [];
    for(let x=0; x<this.size; x++) {
      for(let z=0; z<this.size; z++) {
        if(!this.grid[x][z]) empty.push({x, z});
      }
    }
    if(empty.length > 0) {
       const pos = empty[Math.floor(Math.random() * empty.length)];
       this.addCube(pos.x, pos.z, Math.floor(Math.random() * this.maxColors)); 
       const cube = this.grid[pos.x][pos.z];
       cube.mesh.scale.set(0,0,0);
       gsap.to(cube.mesh.scale, { x:1, y:1, z:1, duration: 0.2 });
    }
  }

  checkGameOver() {
      // Check if board is full (excluding ice, but ice takes space so if grid is full of ice/cubes)
      for(let x=0; x<this.size; x++) {
          for(let z=0; z<this.size; z++) {
              if(!this.grid[x][z]) return; // Empty space exists
          }
      }

      // Check if any merge is possible
      for(let x=0; x<this.size; x++) {
          for(let z=0; z<this.size; z++) {
              const current = this.grid[x][z];
              if (!current || current.type === 'ice') continue;

              // Check right
              if(x < this.size - 1) {
                  const right = this.grid[x+1][z];
                  if(right && right.type !== 'ice' && right.colorId === current.colorId) return;
                  if(!right) return; // Should be caught by empty space check but good for safety
              }
              // Check down
              if(z < this.size - 1) {
                  const down = this.grid[x][z+1];
                  if(down && down.type !== 'ice' && down.colorId === current.colorId) return;
                  if(!down) return;
              }
          }
      }

      // No moves left
      this.gameOverListeners.forEach(cb => cb());
  }
}
