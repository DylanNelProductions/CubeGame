import { createRenderer } from './core/renderer.js';
import { createScene } from './core/scene.js';
import { createCamera, updateCameraZoom } from './core/camera.js';
import { createLights } from './core/lights.js';
import { createComposer } from './core/composer.js';
import { InputManager } from './core/input.js';
import { Board } from './game/board.js';
import { SaveManager } from './core/save.js';
import { LEVELS, getLevelConfig } from './game/levels.js';
import { LeaderboardManager } from './core/leaderboard.js';
import { getTheme } from './utils/themes.js';
import { GameModeManager, GAME_MODES, MODE_CONFIGS } from './game/modes.js';
import { getPuzzleLevel } from './game/puzzles.js';
import * as THREE from 'three';

// Prevent mobile browser zoom and scrolling
(function() {
  let lastTouchEnd = 0;
  
  // Prevent double-tap zoom
  document.addEventListener('touchend', function(event) {
    const now = Date.now();
    if (now - lastTouchEnd <= 300) {
      event.preventDefault();
    }
    lastTouchEnd = now;
  }, false);
  
  // Prevent pinch zoom
  document.addEventListener('gesturestart', function(e) {
    e.preventDefault();
  });
  
  document.addEventListener('gesturechange', function(e) {
    e.preventDefault();
  });
  
  document.addEventListener('gestureend', function(e) {
    e.preventDefault();
  });
  
  // Prevent default touch behaviors
  document.addEventListener('touchmove', function(e) {
    // Allow touchmove on interactive elements
    const target = e.target;
    if (target.tagName === 'INPUT' || target.tagName === 'BUTTON' || target.closest('button') || target.closest('input')) {
      return;
    }
    // Prevent scrolling on game area
    if (!target.closest('#leaderboard-list') && !target.closest('#levels-grid')) {
      e.preventDefault();
    }
  }, { passive: false });
  
  // Lock viewport on load
  window.addEventListener('load', function() {
    setTimeout(function() {
      window.scrollTo(0, 0);
      document.body.style.height = window.innerHeight + 'px';
    }, 0);
  });
  
  // Prevent address bar from affecting layout
  window.addEventListener('resize', function() {
    setTimeout(function() {
      window.scrollTo(0, 0);
      document.body.style.height = window.innerHeight + 'px';
    }, 0);
  });
  
  // Prevent pull-to-refresh on mobile
  document.body.addEventListener('touchstart', function(e) {
    if (e.touches.length > 1) {
      e.preventDefault();
    }
  }, { passive: false });
})();

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
const modeManager = new GameModeManager();
let modeTimer = null;

// UI Elements
const levelEl = document.getElementById('level');
const scoreEl = document.getElementById('score');
const gameOverEl = document.getElementById('game-over');
const levelCompleteEl = document.getElementById('level-complete');
const restartBtn = document.getElementById('restart-btn');
const nextLevelBtn = document.getElementById('next-level-btn');
const legendContainer = document.getElementById('legend-container');

// Level Selector Elements
const levelSelector = document.getElementById('level-selector');
const levelsGrid = document.getElementById('levels-grid');
const closeLevelsBtn = document.getElementById('close-levels-btn');

// Gamertag & Leaderboard Elements
const gamertagModal = document.getElementById('gamertag-modal');
const gamertagInput = document.getElementById('gamertag-input');
const saveGamertagBtn = document.getElementById('save-gamertag-btn');
const leaderboardModal = document.getElementById('leaderboard-modal');
const leaderboardList = document.getElementById('leaderboard-list');
const closeLeaderboardBtn = document.getElementById('close-leaderboard-btn');

// Bottom Nav Buttons
const navLevels = document.getElementById('nav-levels');
const navModes = document.getElementById('nav-modes');
const navLeaderboard = document.getElementById('nav-leaderboard');
const navGuide = document.getElementById('nav-guide');

// Mode Selector Elements
const modeSelector = document.getElementById('mode-selector');
const modesGrid = document.getElementById('modes-grid');
const closeModesBtn = document.getElementById('close-modes-btn');

// Controls
const btnUp = document.getElementById('btn-up');
const btnDown = document.getElementById('btn-down');
const btnLeft = document.getElementById('btn-left');
const btnRight = document.getElementById('btn-right');

function updateUI(iceLeft, level) {
    const modeConfig = modeManager.getConfig();
    let displayText = `Ice Blocks: ${iceLeft}`;
    
    // Mode-specific UI updates
    if (modeManager.modeData.timeRemaining !== null) {
        const mins = Math.floor(modeManager.modeData.timeRemaining / 60);
        const secs = Math.floor(modeManager.modeData.timeRemaining % 60);
        displayText += ` | Time: ${mins}:${secs.toString().padStart(2, '0')}`;
    }
    if (modeManager.modeData.movesRemaining !== null) {
        displayText += ` | Moves: ${modeManager.modeData.movesRemaining}`;
    }
    if (modeManager.modeData.lives !== null) {
        displayText += ` | Lives: ${modeManager.modeData.lives}`;
    }
    
    scoreEl.textContent = displayText;
    scoreEl.style.color = iceLeft === 0 ? '#64ff7b' : '#aaddff';
    
    const modeName = modeManager.currentMode !== GAME_MODES.CLASSIC ? ` [${modeConfig.name}]` : '';
    levelEl.textContent = `Level: ${level}${modeName}`;
}

function updateLegend() {
    legendContainer.innerHTML = '';
    const theme = getTheme(currentLevel);
    const limit = Math.min(theme.colors.length, 9); 
    for (let i = 0; i < limit; i++) {
        const hex = theme.colors[i].toString(16).padStart(6, '0');
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
    
    // Update leaderboard with initial level (Classic mode only)
    // maxLevel is only updated in Classic mode, so this is safe
    await LeaderboardManager.updateScore(playerGamertag, SaveManager.getData().maxLevel);
    
    initGame(currentLevel);
});

function showGameOver() {
    // Check if survival mode - lose a life instead
    if (modeManager.currentMode === GAME_MODES.SURVIVAL) {
        const result = modeManager.loseLife();
        if (result === 'game_over') {
            gameOverEl.classList.remove('hidden');
            if (modeTimer) clearInterval(modeTimer);
        } else {
            // Restart level with remaining lives
            setTimeout(() => {
                initGame(1, modeManager.currentMode);
            }, 500);
            return;
        }
    } else {
        gameOverEl.classList.remove('hidden');
        if (modeTimer) clearInterval(modeTimer);
    }
}

function showLevelComplete() {
    const config = modeManager.getConfig();
    
    if (modeManager.currentMode === GAME_MODES.CLASSIC) {
        // Classic mode - unlock next level and update leaderboard
        // NOTE: Leaderboard only tracks Classic mode progress
        const nextLvl = currentLevel + 1;
        SaveManager.unlockLevel(nextLvl);
        LeaderboardManager.updateScore(playerGamertag, nextLvl);
        levelCompleteEl.classList.remove('hidden');
    } else {
        // Special modes (Time Attack, Daily Challenge)
        // Do NOT update leaderboard - it's only for Classic mode
        // Mode-specific completion
        modeManager.levelComplete();
        
        if (config.oneLife) {
            // Daily Challenge mode - continue to next level
            setTimeout(() => {
                initGame(1, modeManager.currentMode);
            }, 1000);
        } else {
            // Time Attack mode - show completion and continue
            levelCompleteEl.classList.remove('hidden');
        }
    }
}

function initGame(level = 1, mode = null) {
    // Ensure gamertag is set before starting
    if (!checkGamertag()) return;

    if (board) {
        scene.remove(board.group);
        board = null; 
    }
    
    // Set mode if provided
    if (mode) {
        modeManager.setMode(mode);
    }
    
    currentLevel = level;
    // Only save progress in Classic mode (for leaderboard tracking)
    if (modeManager.currentMode === GAME_MODES.CLASSIC) {
        SaveManager.setCurrentLevel(currentLevel);
    }
    
    // Apply theme to scene background
    const theme = getTheme(currentLevel);
    scene.background = new THREE.Color(theme.background);
    
    // Get Config based on mode
    let config;
    if (modeManager.currentMode === GAME_MODES.CLASSIC) {
        config = getLevelConfig(level);
    } else if (modeManager.currentMode === GAME_MODES.PUZZLE) {
        // Puzzle mode - use fixed puzzle layout
        const puzzle = getPuzzleLevel(modeManager.modeData.level);
        config = {
            size: puzzle.size,
            maxColors: 6,
            iceCount: 0, // Will be calculated from grid
            grid: puzzle.grid
        };
        // Count ice in grid
        for (let x = 0; x < puzzle.size; x++) {
            for (let z = 0; z < puzzle.size; z++) {
                if (puzzle.grid[x][z] === 100) config.iceCount++;
            }
        }
    } else {
        config = modeManager.getLevelConfig(modeManager.modeData.level);
    }
    
    // Update camera zoom based on board size
    updateCameraZoom(camera, config.size);
    
    // Create board with mode config
    board = new Board(scene, config.size, currentLevel, modeManager.currentMode !== GAME_MODES.CLASSIC ? config : null);
    
    board.onStatsChange(updateUI);
    board.onGameOver(showGameOver);
    board.onLevelComplete(showLevelComplete);
    
    updateLegend();
    
    // Update time for Time Attack mode based on level difficulty
    if (modeManager.currentMode === GAME_MODES.TIME_ATTACK) {
        const requiredTime = modeManager.calculateTimeForLevel(modeManager.modeData.level);
        // If current time is less than required, set to required time
        // Otherwise keep the accumulated time (with bonuses)
        if (modeManager.modeData.timeRemaining < requiredTime) {
            modeManager.modeData.timeRemaining = requiredTime;
        }
    }
    
    // Start mode-specific timers
    if (modeManager.modeData.timeRemaining !== null) {
        startModeTimer();
    }
    
    gameOverEl.classList.add('hidden');
    levelCompleteEl.classList.add('hidden');
    levelSelector.classList.add('hidden');
    leaderboardModal.classList.add('hidden');
    modeSelector.classList.add('hidden');
}

function startModeTimer() {
    if (modeTimer) clearInterval(modeTimer);
    modeTimer = setInterval(() => {
        const result = modeManager.updateTime(1);
        if (result === 'timeout') {
            showGameOver();
            clearInterval(modeTimer);
        }
        updateUI(board ? board.iceLeft : 0, currentLevel);
    }, 1000);
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
        leaderboardModal.classList.contains('hidden') &&
        modeSelector.classList.contains('hidden')
    ) {
        // Check move limit for challenge mode
        const moveResult = modeManager.useMove();
        if (moveResult === 'no_moves') {
            showGameOver();
            return;
        }
        
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
    if (modeManager.currentMode === GAME_MODES.CLASSIC) {
        initGame(currentLevel);
    } else {
        initGame(1, modeManager.currentMode);
    }
});

// Next Level Logic
nextLevelBtn.addEventListener('click', () => {
    if (modeManager.currentMode === GAME_MODES.CLASSIC) {
        initGame(currentLevel + 1);
    } else {
        initGame(1, modeManager.currentMode);
    }
});

// Level Selector Logic
navLevels.addEventListener('click', () => {
    // Reset to classic mode when opening level selector
    if (modeManager.currentMode !== GAME_MODES.CLASSIC) {
        modeManager.setMode(GAME_MODES.CLASSIC);
    }
    renderLevelSelector();
    levelSelector.classList.remove('hidden');
});

closeLevelsBtn.addEventListener('click', () => {
    levelSelector.classList.add('hidden');
});

// Leaderboard Logic
navLeaderboard.addEventListener('click', async () => {
    await renderLeaderboard();
    leaderboardModal.classList.remove('hidden');
});

closeLeaderboardBtn.addEventListener('click', () => {
    leaderboardModal.classList.add('hidden');
});

// Legend Toggle Logic
navGuide.addEventListener('click', () => {
    legendContainer.classList.toggle('hidden');
});

// Mode Selector Logic
function renderModeSelector() {
    modesGrid.innerHTML = '';
    
    // Add "Back to Classic" option if in a mode
    if (modeManager.currentMode !== GAME_MODES.CLASSIC) {
        const classicBtn = document.createElement('div');
        classicBtn.className = 'mode-btn';
        classicBtn.style.background = 'linear-gradient(135deg, #64b0ff 0%, #4a90e2 100%)';
        classicBtn.innerHTML = `
            <div class="mode-btn-title">📚 Classic Mode</div>
            <div class="mode-btn-desc">Return to standard levels</div>
        `;
        classicBtn.addEventListener('click', () => {
            modeSelector.classList.add('hidden');
            modeManager.setMode(GAME_MODES.CLASSIC);
            initGame(SaveManager.getData().currentLevel);
        });
        modesGrid.appendChild(classicBtn);
    }
    
    Object.values(MODE_CONFIGS).forEach(modeConfig => {
        // Skip classic mode if already showing it as return option
        if (modeConfig.id === GAME_MODES.CLASSIC && modeManager.currentMode !== GAME_MODES.CLASSIC) {
            return;
        }
        
        const btn = document.createElement('div');
        btn.className = 'mode-btn';
        if (modeManager.currentMode === modeConfig.id) {
            btn.style.border = '3px solid #ffd93d';
            btn.style.boxShadow = '0 0 20px rgba(255, 217, 61, 0.5)';
        }
        btn.innerHTML = `
            <div class="mode-btn-title">${modeConfig.icon} ${modeConfig.name}</div>
            <div class="mode-btn-desc">${modeConfig.description}</div>
        `;
        
        btn.addEventListener('click', () => {
            modeSelector.classList.add('hidden');
            initGame(1, modeConfig.id);
        });
        
        modesGrid.appendChild(btn);
    });
}

navModes.addEventListener('click', () => {
    renderModeSelector();
    modeSelector.classList.remove('hidden');
});

closeModesBtn.addEventListener('click', () => {
    modeSelector.classList.add('hidden');
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
