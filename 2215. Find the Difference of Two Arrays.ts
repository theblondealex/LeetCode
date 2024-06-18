function findDifference(nums1: number[], nums2: number[]): number[][] {
  const nums1Set = new Set<number>(nums1);
  const nums2Set = new Set<number>(nums2);

  const diff1 = [...nums1Set].filter((num) => !nums2Set.has(num));

  const diff2 = [...nums2Set].filter((num) => !nums1Set.has(num));

  return [diff1, diff2];
}
