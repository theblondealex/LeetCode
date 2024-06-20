function largestAltitude(gain: number[]): number {
  let highest = 0;
  let currentHeight = 0;

  for (let i = 0; i < gain.length; i++) {
    currentHeight += gain[i];
    highest = Math.max(highest, currentHeight);
  }
  return highest;
}

largestAltitude([-5, 1, 5, 0, -7]);
