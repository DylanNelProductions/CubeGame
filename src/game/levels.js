export const LEVELS = [
  // Level 1: Tutorial - Very Easy
  {
    id: 1,
    size: 3,
    maxColors: 2, // Red, Orange
    iceCount: 1,
    grid: null // Random generation based on params
  },
  // Level 2: Getting Started
  {
    id: 2,
    size: 4,
    maxColors: 2, 
    iceCount: 2,
    grid: null
  },
  // Level 3: Introducing Yellow
  {
    id: 3,
    size: 4,
    maxColors: 3, // Red, Orange, Yellow
    iceCount: 3,
    grid: null
  },
  // Level 4: More Ice
  {
    id: 4,
    size: 4,
    maxColors: 3,
    iceCount: 4,
    grid: null
  },
  // Level 5: Green enters
  {
    id: 5,
    size: 5,
    maxColors: 4,
    iceCount: 5,
    grid: null
  },
  // Level 6: Crowded
  {
    id: 6,
    size: 5,
    maxColors: 4,
    iceCount: 7,
    grid: null
  },
  // Level 7: Teal enters
  {
    id: 7,
    size: 5,
    maxColors: 5,
    iceCount: 8,
    grid: null
  },
  // Level 8: Master
  {
    id: 8,
    size: 5,
    maxColors: 6,
    iceCount: 10,
    grid: null
  }
];

export function getLevelConfig(levelId) {
    // If level is defined, return it
    if (levelId <= LEVELS.length) {
        return LEVELS[levelId - 1];
    }
    // Procedural fallback for infinite levels
    return {
        id: levelId,
        size: 5,
        maxColors: Math.min(6, 3 + Math.floor((levelId - 1) / 5)),
        iceCount: Math.min(12, 5 + Math.floor((levelId - 5) / 2)),
        grid: null
    };
}

