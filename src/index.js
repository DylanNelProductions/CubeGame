import { createRenderer } from './core/renderer.js';
import { createScene } from './core/scene.js';
import { createCamera } from './core/camera.js';
import { createLights } from './core/lights.js';
import { createComposer } from './core/composer.js';
import { InputManager } from './core/input.js';
import { Board } from './game/board.js';
import { COLORS } from './utils/colors.js';
import * as THREE from 'three';

// Setup Core
const renderer = createRenderer();
document.getElementById('game-container').appendChild(renderer.domElement);

const scene = createScene();
const camera = createCamera();
const lights = createLights(scene);
const composer = createComposer(renderer, scene, camera);

// State
let currentLevel = 1;
let board = null;
const clock = new THREE.Clock();

// UI Elements
const levelEl = document.getElementById('level');
const scoreEl = document.getElementById('score');
const gameOverEl = document.getElementById('game-over');
const levelCompleteEl = document.getElementById('level-complete');
const restartBtn = document.getElementById('restart-btn');
const nextLevelBtn = document.getElementById('next-level-btn');
const legendContainer = document.getElementById('legend-container');

// Controls
const btnUp = document.getElementById('btn-up');
const btnDown = document.getElementById('btn-down');
const btnLeft = document.getElementById('btn-left');
const btnRight = document.getElementById('btn-right');

function updateUI(iceLeft, level) {
    scoreEl.textContent = `Ice Blocks: ${iceLeft}`;
    scoreEl.style.color = iceLeft === 0 ? '#64ff7b' : '#aaddff';
    levelEl.textContent = `Level: ${level}`;
}

function updateLegend(maxColorIndex) {
    legendContainer.innerHTML = '';
    const limit = Math.min(COLORS.length, 9); 
    
    for (let i = 0; i < limit; i++) {
        const hex = COLORS[i].toString(16).padStart(6, '0');
        const div = document.createElement('div');
        div.className = 'legend-item';
        div.style.backgroundColor = `#${hex}`;
        legendContainer.appendChild(div);
    }
}

function showGameOver() {
    gameOverEl.classList.remove('hidden');
}

function showLevelComplete() {
    levelCompleteEl.classList.remove('hidden');
}

function initGame(level = 1) {
    if (board) {
        scene.remove(board.group);
        board = null; 
    }
    
    currentLevel = level;
    board = new Board(scene, 4, currentLevel);
    
    board.onStatsChange(updateUI);
    board.onGameOver(showGameOver);
    board.onLevelComplete(showLevelComplete);
    
    updateLegend();
    
    gameOverEl.classList.add('hidden');
    levelCompleteEl.classList.add('hidden');
}

// Start Game
initGame(1);

// Input Handling
const input = new InputManager();

function handleMove(direction) {
    if (gameOverEl.classList.contains('hidden') && levelCompleteEl.classList.contains('hidden')) {
        board.move(direction);
    }
}

// Swipe Events
input.onSwipe(handleMove);

// Button Events
btnUp.addEventListener('click', () => handleMove('up'));
btnDown.addEventListener('click', () => handleMove('down'));
btnLeft.addEventListener('click', () => handleMove('left'));
btnRight.addEventListener('click', () => handleMove('right'));

// Keyboard Arrow Events (Bonus!)
window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp') handleMove('up');
    if (e.key === 'ArrowDown') handleMove('down');
    if (e.key === 'ArrowLeft') handleMove('left');
    if (e.key === 'ArrowRight') handleMove('right');
});

// Restart Logic
restartBtn.addEventListener('click', () => {
    initGame(currentLevel); // Retry same level
});

// Next Level Logic
nextLevelBtn.addEventListener('click', () => {
    initGame(currentLevel + 1);
});

// Main Loop
function animate() {
  requestAnimationFrame(animate);
  
  const delta = clock.getDelta();
  if (board) {
      board.update(delta);
  }

  composer.render();
}

animate();
