function twoSum(nums: number[], target: number): number[] | undefined {
  const m = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];

    if (m.has(diff) && m.get(diff) !== i) {
      const index = m.get(diff);
      if (index !== undefined) {
        return [index, i];
      }
    }
    m.set(nums[i], i);
  }
}
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
console.log(twoSum([3, 2, 3], 6));
console.log(twoSum([0, 4, 3, 0], 0));
