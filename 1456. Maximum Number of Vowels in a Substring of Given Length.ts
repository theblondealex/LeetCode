function maxVowels(s: string, k: number): number {
  let maxVowels = 0;
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  let currentSum = 0;

  //sliding window
  //get the initial
  for (let i = 0; i < k; i++) {
    if (vowels.has(s[i])) currentSum++;
  }

  maxVowels = currentSum;

  //move the window along and minus the first one and add the next
  for (let i = k; i < s.length; i++) {
    //get the letter before
    if (vowels.has(s[i - k])) {
      currentSum--;
    }
    //get the next letter
    if (vowels.has(s[i])) {
      currentSum++;
    }
    maxVowels = Math.max(maxVowels, currentSum);
  }
  return maxVowels;
}

maxVowels("abciiidef", 3);
