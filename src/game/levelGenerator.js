export function generateLevel(config) {
  // config: { size, maxColors, iceCount, grid (optional fixed layout) }
  
  // If fixed grid is provided (future proofing), use it
  if (config.grid) {
      // Deep copy to prevent mutation of config
      return config.grid.map(row => [...row]);
  }

  const size = config.size;
  const grid = [];
  
  // Init empty grid
  for (let x = 0; x < size; x++) {
    const row = new Array(size).fill(0);
    grid.push(row);
  }

  // Place Ice
  let placedIce = 0;
  // Safety break to prevent infinite loop on full board
  let attempts = 0;
  while (placedIce < config.iceCount && attempts < 100) {
    const x = Math.floor(Math.random() * size);
    const z = Math.floor(Math.random() * size);
    
    if (grid[x][z] === 0) {
      grid[x][z] = 100;
      placedIce++;
    }
    attempts++;
  }

  // Place initial cubes
  for (let x = 0; x < size; x++) {
    for (let z = 0; z < size; z++) {
      if (grid[x][z] === 0) {
        // 30% chance of a cube
        if (Math.random() < 0.3) {
          grid[x][z] = Math.floor(Math.random() * config.maxColors) + 1; 
        }
      }
    }
  }
  
  return grid;
}
