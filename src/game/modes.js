import { generateLevel } from './levelGenerator.js';

export const GAME_MODES = {
    CLASSIC: 'classic',
    TIME_ATTACK: 'time_attack',
    DAILY_CHALLENGE: 'daily_challenge',
    PUZZLE: 'puzzle'
};

export const MODE_CONFIGS = {
    [GAME_MODES.TIME_ATTACK]: {
        id: GAME_MODES.TIME_ATTACK,
        name: 'Time Attack',
        icon: '⏱️',
        description: 'Race against the clock!',
        quickRounds: false,
        oneLife: false
    },
    [GAME_MODES.DAILY_CHALLENGE]: {
        id: GAME_MODES.DAILY_CHALLENGE,
        name: 'Daily Challenge',
        icon: '📅',
        description: 'One unique challenge per day!',
        quickRounds: false,
        oneLife: true
    }
};

export class GameModeManager {
    constructor() {
        this.currentMode = GAME_MODES.CLASSIC;
        this.modeData = {
            level: 1,
            score: 0,
            timeRemaining: null,
            movesRemaining: null,
            lives: null
        };
    }

    setMode(mode) {
        this.currentMode = mode;
        this.resetModeData();
    }

    resetModeData() {
        const config = MODE_CONFIGS[this.currentMode];
        
        this.modeData = {
            level: 1,
            score: 0,
            timeRemaining: null,
            movesRemaining: null,
            lives: null,
            dailyRNG: null // Seeded RNG for daily challenge consistency
        };

        // Set mode-specific initial values
        if (this.currentMode === GAME_MODES.TIME_ATTACK) {
            // Calculate time based on first level difficulty
            this.modeData.timeRemaining = this.calculateTimeForLevel(1);
        } else if (this.currentMode === GAME_MODES.DAILY_CHALLENGE) {
            // Daily challenge has 3 lives
            this.modeData.lives = 3;
            // Initialize seeded RNG based on today's date
            const today = new Date();
            const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
            this.modeData.dailyRNG = this.seededRandom(seed);
        }
    }

    calculateTimeForLevel(level) {
        if (this.currentMode !== GAME_MODES.TIME_ATTACK) {
            return null;
        }
        
        const config = this.getLevelConfig(level);
        const { size, maxColors, iceCount } = config;
        
        // Base time calculation based on difficulty factors:
        // - Board size: larger boards need more time
        // - Ice count: more ice blocks need more time
        // - Colors: more colors add complexity
        
        const baseTime = 60; // 1 minute base
        const sizeMultiplier = size * 8; // ~8 seconds per grid unit
        const iceMultiplier = iceCount * 3; // ~3 seconds per ice block
        const colorMultiplier = (maxColors - 3) * 5; // ~5 seconds per extra color above 3
        
        // Calculate total time needed (with some buffer)
        const calculatedTime = baseTime + sizeMultiplier + iceMultiplier + colorMultiplier;
        
        // Round to nearest 5 seconds for cleaner display
        return Math.ceil(calculatedTime / 5) * 5;
    }

    getConfig() {
        if (this.currentMode === GAME_MODES.CLASSIC) {
            return { name: 'Classic', icon: '📚', description: 'Standard levels' };
        }
        return MODE_CONFIGS[this.currentMode] || {};
    }

    getLevelConfig(level) {
        if (this.currentMode === GAME_MODES.TIME_ATTACK) {
            // Time attack: medium boards, moderate difficulty
            const sizes = [4, 4, 5, 5, 5, 6, 6];
            const size = sizes[Math.min(level - 1, sizes.length - 1)];
            
            const maxColors = Math.min(3 + Math.floor(level / 2), 7);
            const iceCount = Math.floor(size * size * 0.2) + Math.floor(level / 3);
            
            return {
                size,
                maxColors,
                iceCount
            };
        } else if (this.currentMode === GAME_MODES.DAILY_CHALLENGE) {
            // Daily challenge: uses seeded RNG initialized in resetModeData()
            // This ensures the same challenge for everyone on the same day
            const rng = this.modeData.dailyRNG || this.seededRandom(
                new Date().getFullYear() * 10000 + 
                (new Date().getMonth() + 1) * 100 + 
                new Date().getDate()
            );
            
            const size = 5 + Math.floor(rng() * 3); // 5-7
            const maxColors = 4 + Math.floor(rng() * 4); // 4-7
            const iceCount = Math.floor(size * size * (0.2 + rng() * 0.15)); // 20-35% ice
            
            return {
                size,
                maxColors,
                iceCount,
                rng: rng // Pass RNG to level generator for consistent board layout
            };
        }
        
        // Default fallback
        return {
            size: 4,
            maxColors: 3,
            iceCount: 2
        };
    }

    seededRandom(seed) {
        let value = seed;
        return function() {
            value = (value * 9301 + 49297) % 233280;
            return value / 233280;
        };
    }

    getDailyChallengeDate() {
        // Returns the date string for the current daily challenge
        if (this.currentMode !== GAME_MODES.DAILY_CHALLENGE) {
            return null;
        }
        const today = new Date();
        return today.toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
    }

    levelComplete() {
        this.modeData.level++;
        
        // Update time for time attack mode based on next level difficulty
        if (this.currentMode === GAME_MODES.TIME_ATTACK) {
            // Calculate time needed for the next level
            const nextLevelTime = this.calculateTimeForLevel(this.modeData.level);
            // Add bonus time (20% of next level's time) for completing current level
            const bonusTime = Math.floor(nextLevelTime * 0.2);
            this.modeData.timeRemaining += bonusTime;
        }
        
        // Update score
        this.modeData.score += this.modeData.level * 100;
    }

    updateTime(seconds) {
        if (this.modeData.timeRemaining === null) return null;
        
        this.modeData.timeRemaining -= seconds;
        
        if (this.modeData.timeRemaining <= 0) {
            this.modeData.timeRemaining = 0;
            return 'timeout';
        }
        
        return 'ok';
    }

    useMove() {
        if (this.modeData.movesRemaining === null) return 'ok';
        
        this.modeData.movesRemaining--;
        
        if (this.modeData.movesRemaining <= 0) {
            return 'no_moves';
        }
        
        return 'ok';
    }

    loseLife() {
        if (this.modeData.lives === null) return 'ok';
        
        this.modeData.lives--;
        
        if (this.modeData.lives <= 0) {
            return 'game_over';
        }
        
        return 'continue';
    }
}
