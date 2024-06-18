function isSubsequence(s: string, t: string): boolean {
  // BASE CASE: there is no more than one char left in the candidate subsequence and it's in the larger string
  if (s.length <= 1 && t.includes(s)) {
    return true;
  }
  // Check that the first char in s is in t, and if so, go deepeer with the remaining parts
  const firstCharInd = t.indexOf(s[0]);
  return (
    firstCharInd >= 0 &&
    isSubsequence(s.substring(1), t.substring(firstCharInd + 1))
  );
}

// console.log(isSubsequence("abc", "ahbgdc"));
console.log(isSubsequence("ab", "baab"));
