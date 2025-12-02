export function generateLevel(size = 4, maxColors = 2, difficulty = 1) {
  // 0: Empty
  // 1..N: Color ID + 1
  // 100: Ice Block
  
  const grid = [];
  const iceCount = Math.min(Math.floor(difficulty / 2) + 1, 6); // More ice as difficulty increases
  
  // Init empty grid
  for (let x = 0; x < size; x++) {
    const row = new Array(size).fill(0);
    grid.push(row);
  }

  // Place Ice
  let placedIce = 0;
  while (placedIce < iceCount) {
    const x = Math.floor(Math.random() * size);
    const z = Math.floor(Math.random() * size);
    // Don't block center too much early on? Random is fine for now.
    if (grid[x][z] === 0) {
      grid[x][z] = 100;
      placedIce++;
    }
  }

  // Place initial cubes
  for (let x = 0; x < size; x++) {
    for (let z = 0; z < size; z++) {
      if (grid[x][z] === 0) {
        // 30% chance of a cube
        if (Math.random() < 0.3) {
          grid[x][z] = Math.floor(Math.random() * maxColors) + 1; 
        }
      }
    }
  }
  
  return grid;
}
