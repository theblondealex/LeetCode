function topKFrequent(nums: number[], k: number): number[] {
  const frequencyMap: Map<number, number> = new Map();
  for (const num of nums) {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
  }
  const sortedEntries = [...frequencyMap.entries()].sort((a, b) => b[1] - a[1]);
  return sortedEntries.slice(0, k).map(([number]) => number);
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)); // Output: [1,2]
