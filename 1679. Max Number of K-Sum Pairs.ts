function maxOperations(nums: number[], k: number): number {
  let maxOperations = 0;
  //map with key as its number and val as count
  const numMap = new Map<number, number>();

  for (const num of nums) {
    const complement = k - num;
    // biome-ignore lint/style/noNonNullAssertion: <explanation>
    if (numMap.has(complement) && numMap.get(complement)! > 0) {
      maxOperations++;
      // biome-ignore lint/style/noNonNullAssertion: <explanation>
      numMap.set(complement, numMap.get(complement)! - 1);
    } else {
      numMap.set(num, (numMap.get(num) || 0) + 1);
    }
  }
  return maxOperations;
}

console.log(maxOperations([1, 2, 3, 4, 2, 4, 3], 5));
