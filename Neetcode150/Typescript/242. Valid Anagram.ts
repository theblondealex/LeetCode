/**
 * this function checks if two strings are anagrams
 * @param s a string to check if it is an anagram
 * @param t a string to check if it is an anagram
 * @returns true or false
 */

function isAnagram(s: string, t: string): boolean {
  const sToArr = s.split("").sort();
  const tToArr = t.split("").sort();
  if (sToArr.length !== tToArr.length) {
    return false;
  }
  for (let i = 0; i < sToArr.length; i++) {
    if (sToArr[i] !== tToArr[i]) {
      return false;
    }
  }
  return true;
}

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));
console.log(isAnagram("a", "ab"));
