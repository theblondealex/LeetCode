function reverseVowels(s: string): string {
  const finalArr: (string | null)[] = [];
  const blankedstr: string[] = [];
  const vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < s.length; i++) {
    const letter = s[i];
    if (vowels.includes(letter.toLowerCase())) {
      finalArr.push(null);
      blankedstr.push(letter);
    } else {
      finalArr.push(letter);
    }
  }
  for (let i = 0; i < finalArr.length; i++) {
    if (finalArr[i] === null) {
      finalArr[i] = blankedstr.pop() as string;
    }
  }
  return finalArr.join("");
}

reverseVowels("0P");
