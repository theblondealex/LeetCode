/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  const zeroCount = nums.filter((item) => item === 0).length;
  nums.splice(0, nums.length, ...nums.filter((item) => item !== 0));
  for (let i = 0; i < zeroCount; i++) {
    nums.push(0);
  }
}

moveZeroes([0, 1, 0, 3, 12]);
