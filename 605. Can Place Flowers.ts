function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  let numAdjacentSpaces = 0;
  const plantedArr = [...flowerbed];
  if (n <= 0) return true;
  if (plantedArr.length === 1) return Boolean(!plantedArr[0]);

  for (let i = 0; i < flowerbed.length; i++) {
    if (plantedArr[i] === 1) continue;
    if (i === 0 && plantedArr[i + 1] === 0) {
      numAdjacentSpaces++;
      plantedArr[i] = 1;
    }
    if (i === flowerbed.length - 1 && plantedArr[i - 1] === 0) {
      numAdjacentSpaces++;
      plantedArr[i] = 1;
    }
    if (plantedArr[i - 1] === 0 && plantedArr[i + 1] === 0) {
      numAdjacentSpaces++;
      plantedArr[i] = 1;
    }
  }
  return Boolean(numAdjacentSpaces >= n);
}
console.log(canPlaceFlowers([0, 0, 1, 0, 0], 1));
