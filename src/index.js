import { createRenderer } from './core/renderer.js';
import { createScene } from './core/scene.js';
import { createCamera } from './core/camera.js';
import { createLights } from './core/lights.js';
import { createComposer } from './core/composer.js';
import { InputManager } from './core/input.js';
import { Board } from './game/board.js';
import { COLORS } from './utils/colors.js';
import { SaveManager } from './core/save.js';
import { LEVELS, getLevelConfig } from './game/levels.js';
import { LeaderboardManager } from './core/leaderboard.js';
import * as THREE from 'three';

// Setup Core
const renderer = createRenderer();
document.getElementById('game-container').appendChild(renderer.domElement);

const scene = createScene();
const camera = createCamera();
const lights = createLights(scene);
const composer = createComposer(renderer, scene, camera);

// State
let board = null;
const clock = new THREE.Clock();
const savedData = SaveManager.getData();
let currentLevel = savedData.currentLevel;
let playerGamertag = savedData.gamertag;

// UI Elements
const levelEl = document.getElementById('level');
const scoreEl = document.getElementById('score');
const gameOverEl = document.getElementById('game-over');
const levelCompleteEl = document.getElementById('level-complete');
const restartBtn = document.getElementById('restart-btn');
const nextLevelBtn = document.getElementById('next-level-btn');
const legendContainer = document.getElementById('legend-container');

// Level Selector Elements
const levelsBtn = document.getElementById('levels-btn');
const levelSelector = document.getElementById('level-selector');
const levelsGrid = document.getElementById('levels-grid');
const closeLevelsBtn = document.getElementById('close-levels-btn');

// Gamertag & Leaderboard Elements
const gamertagModal = document.getElementById('gamertag-modal');
const gamertagInput = document.getElementById('gamertag-input');
const saveGamertagBtn = document.getElementById('save-gamertag-btn');
const leaderboardBtn = document.getElementById('leaderboard-btn');
const leaderboardModal = document.getElementById('leaderboard-modal');
const leaderboardList = document.getElementById('leaderboard-list');
const closeLeaderboardBtn = document.getElementById('close-leaderboard-btn');

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

function updateLegend() {
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

function renderLevelSelector() {
    levelsGrid.innerHTML = '';
    const maxUnlocked = SaveManager.getData().maxLevel;
    
    // Show LEVELS + a few extra procedural ones
    const totalToShow = Math.max(LEVELS.length + 2, maxUnlocked + 1);

    for (let i = 1; i <= totalToShow; i++) {
        const btn = document.createElement('div');
        btn.className = 'level-btn';
        btn.textContent = i;
        
        if (i > maxUnlocked) {
            btn.classList.add('locked');
        } else {
            btn.addEventListener('click', () => {
                levelSelector.classList.add('hidden');
                initGame(i);
            });
        }
        
        if (i === currentLevel) {
            btn.classList.add('active');
        }

        levelsGrid.appendChild(btn);
    }
}

async function renderLeaderboard() {
    leaderboardList.innerHTML = '<div>Loading...</div>';
    const entries = await LeaderboardManager.getLeaderboard();
    leaderboardList.innerHTML = '';
    
    entries.forEach((entry, index) => {
        const div = document.createElement('div');
        div.className = 'leaderboard-entry';
        if (entry.gamertag === playerGamertag) {
            div.classList.add('highlight');
        }
        
        div.innerHTML = `
            <span>#${index + 1} ${entry.gamertag}</span>
            <span>Lvl ${entry.level}</span>
        `;
        leaderboardList.appendChild(div);
    });
}

function checkGamertag() {
    if (!playerGamertag) {
        gamertagModal.classList.remove('hidden');
        return false;
    }
    return true;
}

saveGamertagBtn.addEventListener('click', async () => {
    const tag = gamertagInput.value.trim();
    if (tag.length < 3) {
        alert("Gamertag must be at least 3 characters.");
        return;
    }
    
    // Check collision
    saveGamertagBtn.disabled = true;
    saveGamertagBtn.textContent = "Checking...";
    
    const isTaken = await LeaderboardManager.isGamertagTaken(tag);
    if (isTaken) {
        alert("Gamertag already taken! Please choose another.");
        saveGamertagBtn.disabled = false;
        saveGamertagBtn.textContent = "Start Playing";
        return;
    }

    playerGamertag = tag;
    SaveManager.setGamertag(playerGamertag);
    gamertagModal.classList.add('hidden');
    
    // Update leaderboard with initial level
    await LeaderboardManager.updateScore(playerGamertag, SaveManager.getData().maxLevel);
    
    initGame(currentLevel);
});

function showGameOver() {
    gameOverEl.classList.remove('hidden');
}

function showLevelComplete() {
    // Unlock next level
    const nextLvl = currentLevel + 1;
    SaveManager.unlockLevel(nextLvl);
    
    // Update Leaderboard Score
    LeaderboardManager.updateScore(playerGamertag, nextLvl); // Async, fire and forget
    
    levelCompleteEl.classList.remove('hidden');
}

function initGame(level = 1) {
    // Ensure gamertag is set before starting
    if (!checkGamertag()) return;

    if (board) {
        scene.remove(board.group);
        board = null; 
    }
    
    currentLevel = level;
    SaveManager.setCurrentLevel(currentLevel);
    
    // Get Config
    const config = getLevelConfig(level);
    
    // Pass config size instead of hardcoded 4, pass level ID for difficulty scaling
    board = new Board(scene, config.size, currentLevel);
    
    board.onStatsChange(updateUI);
    board.onGameOver(showGameOver);
    board.onLevelComplete(showLevelComplete);
    
    updateLegend();
    
    gameOverEl.classList.add('hidden');
    levelCompleteEl.classList.add('hidden');
    levelSelector.classList.add('hidden');
    leaderboardModal.classList.add('hidden');
}

// Start Game (will prompt for gamertag if missing)
initGame(currentLevel);

// Input Handling
const input = new InputManager();

function handleMove(direction) {
    if (
        gameOverEl.classList.contains('hidden') && 
        levelCompleteEl.classList.contains('hidden') &&
        levelSelector.classList.contains('hidden') &&
        gamertagModal.classList.contains('hidden') &&
        leaderboardModal.classList.contains('hidden')
    ) {
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

// Keyboard Arrow Events
window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp') handleMove('up');
    if (e.key === 'ArrowDown') handleMove('down');
    if (e.key === 'ArrowLeft') handleMove('left');
    if (e.key === 'ArrowRight') handleMove('right');
});

// Restart Logic
restartBtn.addEventListener('click', () => {
    initGame(currentLevel); 
});

// Next Level Logic
nextLevelBtn.addEventListener('click', () => {
    initGame(currentLevel + 1);
});

// Level Selector Logic
levelsBtn.addEventListener('click', () => {
    renderLevelSelector();
    levelSelector.classList.remove('hidden');
});

closeLevelsBtn.addEventListener('click', () => {
    levelSelector.classList.add('hidden');
});

// Leaderboard Logic
leaderboardBtn.addEventListener('click', async () => {
    await renderLeaderboard();
    leaderboardModal.classList.remove('hidden');
});

closeLeaderboardBtn.addEventListener('click', () => {
    leaderboardModal.classList.add('hidden');
});

// Reset Data Logic
const resetBtn = document.getElementById('reset-btn');
resetBtn.addEventListener('click', () => {
    if (confirm("Are you sure you want to reset ALL progress and leaderboard data? This cannot be undone.")) {
        SaveManager.resetData();
        LeaderboardManager.resetLeaderboard();
        alert("Data reset! refreshing...");
        location.reload();
    }
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
