function mergeAlternately(word1: string, word2: string): string {
  const merged: string[] = [];
  for (let i = 0; i < word1.length + word2.length; i++) {
    merged.push(word1[i]);
    merged.push(word2[i]);
  }
  return merged.join("");
}

console.log(mergeAlternately("abc", "pqr"));
