function longestOnes(nums: number[], k: number): number {
  let startPtr = 0;
  let endPtr = 0;
  let zeros = 0;

  while (endPtr < nums.length) {
    if (nums[endPtr] === 0) {
      zeros++;
    }
    endPtr++;

    if (zeros > k) {
      if (nums[startPtr] === 0) {
        zeros--;
      }
      startPtr++;
    }
  }
  return endPtr - startPtr;
}

longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3);
