function longestSubarray(nums: number[]): number {
  let startPtr = 0;
  let endPtr = 0;
  let zeros = 0;
  let maxOnes = 0;

  while (endPtr < nums.length) {
    if (nums[endPtr] === 0) {
      zeros++;
    }
    while (zeros > 1) {
      if (nums[startPtr] === 0) {
        zeros--;
      }
      startPtr++;
    }
    maxOnes = Math.max(maxOnes, endPtr - startPtr);
    endPtr++;
  }
  return maxOnes;
}

longestSubarray([0, 1, 1, 1, 0, 1, 1, 0, 1]);
