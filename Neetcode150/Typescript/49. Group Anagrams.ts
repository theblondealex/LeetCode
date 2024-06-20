function groupAnagrams(strs: string[]): string[][] {
  const res: Map<string, string[]> = new Map();
  for (const s of strs) {
    const charcount: number[] = new Array(26).fill(0);
    for (const c of s) {
      charcount[c.charCodeAt(0) - "a".charCodeAt(0)]++;
    }
    const key: string = charcount.join();
    if (!res.has(key)) {
      res.set(key, []);
    }
    res.get(key)!.push(s);
  }
  return Array.from(res.values());
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log(groupAnagrams([""]));
console.log(groupAnagrams(["a"]));
