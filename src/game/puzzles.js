// Puzzle Mode - Pre-designed puzzle levels
export const PUZZLE_LEVELS = [
  {
    id: 1,
    size: 4,
    grid: [
      [1, 0, 0, 100],
      [0, 1, 100, 0],
      [100, 0, 1, 0],
      [0, 100, 0, 1]
    ],
    solution: "Merge strategically to break all ice"
  },
  {
    id: 2,
    size: 4,
    grid: [
      [1, 1, 0, 100],
      [0, 0, 100, 0],
      [100, 0, 0, 2],
      [0, 100, 2, 0]
    ],
    solution: "Create a chain reaction"
  },
  {
    id: 3,
    size: 5,
    grid: [
      [1, 0, 0, 0, 100],
      [0, 1, 0, 100, 0],
      [0, 0, 1, 0, 0],
      [100, 0, 0, 1, 0],
      [0, 100, 0, 0, 1]
    ],
    solution: "Plan your moves carefully"
  }
];

export function getPuzzleLevel(puzzleId) {
  const puzzle = PUZZLE_LEVELS.find(p => p.id === puzzleId);
  if (!puzzle) {
    // Return random puzzle if ID doesn't exist
    return PUZZLE_LEVELS[Math.floor(Math.random() * PUZZLE_LEVELS.length)];
  }
  return puzzle;
}

