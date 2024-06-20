function uniqueOccurrences(arr: number[]): boolean {
  const countMap: Map<number, number> = new Map();

  for (const num of arr) {
    if (countMap.has(num)) {
      // biome-ignore lint/style/noNonNullAssertion: <explanation>
      countMap.set(num, countMap.get(num)! + 1);
    } else {
      countMap.set(num, 1);
    }
  }

  const seenCounts: Set<number> = new Set();

  for (const value of countMap.values()) {
    if (seenCounts.has(value)) {
      return false;
    }
    seenCounts.add(value);
  }
  return true;
}

uniqueOccurrences([1, 2, 2, 1, 1, 3]);
