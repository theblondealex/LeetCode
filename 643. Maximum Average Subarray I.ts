function findMaxAverage(nums: number[], k: number): number {
  let maxAverage = Number.NEGATIVE_INFINITY;
  let sum = 0;

  //get the first windows sum
  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }
  maxAverage = sum / k;

  //silde the window
  for (let i = k; i < nums.length; i++) {
    sum = sum - nums[i - k] + nums[i];
    maxAverage = Math.max(maxAverage, sum / k);
  }
  return maxAverage;
}

findMaxAverage([1, 12, -5, -6, 50, 3], 3);
