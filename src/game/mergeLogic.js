export function canMerge(cubeA, cubeB) {
  if (!cubeA || !cubeB) return false;
  return cubeA.colorId === cubeB.colorId && !cubeA.isMerging && !cubeB.isMerging;
}

