// Better difficulty progression - slower ramp up
export const LEVELS = [
  // Theme 1: Neon Classic (Levels 1-10)
  { id: 1, size: 3, maxColors: 2, iceCount: 1 },
  { id: 2, size: 4, maxColors: 2, iceCount: 2 },
  { id: 3, size: 4, maxColors: 3, iceCount: 2 },
  { id: 4, size: 4, maxColors: 3, iceCount: 3 },
  { id: 5, size: 4, maxColors: 3, iceCount: 3 },
  { id: 6, size: 5, maxColors: 4, iceCount: 4 },
  { id: 7, size: 5, maxColors: 4, iceCount: 4 },
  { id: 8, size: 5, maxColors: 4, iceCount: 5 },
  { id: 9, size: 5, maxColors: 5, iceCount: 5 },
  { id: 10, size: 5, maxColors: 5, iceCount: 6 },
  
  // Theme 2: Ocean Depths (Levels 11-20)
  { id: 11, size: 5, maxColors: 5, iceCount: 5 },
  { id: 12, size: 5, maxColors: 5, iceCount: 6 },
  { id: 13, size: 5, maxColors: 6, iceCount: 6 },
  { id: 14, size: 5, maxColors: 6, iceCount: 6 },
  { id: 15, size: 5, maxColors: 6, iceCount: 7 },
  { id: 16, size: 6, maxColors: 6, iceCount: 7 },
  { id: 17, size: 6, maxColors: 6, iceCount: 8 },
  { id: 18, size: 6, maxColors: 7, iceCount: 8 },
  { id: 19, size: 6, maxColors: 7, iceCount: 9 },
  { id: 20, size: 6, maxColors: 7, iceCount: 9 },
  
  // Theme 3: Sunset Fire (Levels 21-30)
  { id: 21, size: 6, maxColors: 7, iceCount: 8 },
  { id: 22, size: 6, maxColors: 7, iceCount: 9 },
  { id: 23, size: 6, maxColors: 8, iceCount: 9 },
  { id: 24, size: 6, maxColors: 8, iceCount: 10 },
  { id: 25, size: 7, maxColors: 8, iceCount: 10 },
  { id: 26, size: 7, maxColors: 8, iceCount: 11 },
  { id: 27, size: 7, maxColors: 8, iceCount: 11 },
  { id: 28, size: 7, maxColors: 9, iceCount: 12 },
  { id: 29, size: 7, maxColors: 9, iceCount: 12 },
  { id: 30, size: 7, maxColors: 9, iceCount: 13 },
  
  // Theme 4: Forest Magic (Levels 31-40)
  { id: 31, size: 7, maxColors: 9, iceCount: 12 },
  { id: 32, size: 7, maxColors: 9, iceCount: 13 },
  { id: 33, size: 7, maxColors: 9, iceCount: 13 },
  { id: 34, size: 8, maxColors: 9, iceCount: 14 },
  { id: 35, size: 8, maxColors: 9, iceCount: 14 },
  { id: 36, size: 8, maxColors: 9, iceCount: 15 },
  { id: 37, size: 8, maxColors: 9, iceCount: 15 },
  { id: 38, size: 8, maxColors: 9, iceCount: 16 },
  { id: 39, size: 8, maxColors: 9, iceCount: 16 },
  { id: 40, size: 8, maxColors: 9, iceCount: 17 },
  
  // Theme 5: Cosmic Purple (Levels 41-50)
  { id: 41, size: 8, maxColors: 9, iceCount: 16 },
  { id: 42, size: 8, maxColors: 9, iceCount: 17 },
  { id: 43, size: 8, maxColors: 9, iceCount: 17 },
  { id: 44, size: 8, maxColors: 9, iceCount: 18 },
  { id: 45, size: 9, maxColors: 9, iceCount: 18 },
  { id: 46, size: 9, maxColors: 9, iceCount: 19 },
  { id: 47, size: 9, maxColors: 9, iceCount: 19 },
  { id: 48, size: 9, maxColors: 9, iceCount: 20 },
  { id: 49, size: 9, maxColors: 9, iceCount: 20 },
  { id: 50, size: 9, maxColors: 9, iceCount: 21 }
];

export function getLevelConfig(levelId) {
  // If level is defined, return it
  if (levelId <= LEVELS.length) {
    return LEVELS[levelId - 1];
  }
  
  // Procedural fallback for infinite levels beyond 50
  // Much slower progression
  const baseLevel = LEVELS[LEVELS.length - 1];
  const extraLevels = levelId - LEVELS.length;
  
  // Every 5 levels, increase size or ice slightly
  const sizeIncrease = Math.floor(extraLevels / 5);
  const iceIncrease = Math.floor(extraLevels / 3);
  
  return {
    id: levelId,
    size: Math.min(10, baseLevel.size + sizeIncrease),
    maxColors: 9, // Cap at 9 colors
    iceCount: Math.min(Math.floor((baseLevel.size + sizeIncrease) ** 2 * 0.3), baseLevel.iceCount + iceIncrease),
    grid: null
  };
}
