function maxArea(height: number[]): number {
  if (!height.length) return 0;
  //find two highest numbers with the greatest distance between them
  //the area = height * distance, e.g 8,5 has 5 *4 whicH is 20
  let highestArea = 0;
  let leftPtr = 0;
  let rightPtr = height.length - 1;
  while (leftPtr < rightPtr) {
    const width = rightPtr - leftPtr;
    const smallerHeight = Math.min(height[leftPtr], height[rightPtr]);

    highestArea = Math.max(highestArea, width * smallerHeight);

    if (height[leftPtr] < height[rightPtr]) {
      leftPtr++;
    } else {
      rightPtr--;
    }
  }
  return highestArea;
}

maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
// maxArea([1, 1]);
