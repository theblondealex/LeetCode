function gcdOfStrings(str1: string, str2: string): string {
  const gcd = (x: number, y: number): number => {
    if (!y) return x;
    return gcd(y, x % y);
  };
  if (str1 + str2 !== str2 + str1) return "";

  return str1.slice(0, gcd(str1.length, str2.length));
}

console.log(gcdOfStrings("LEET", "CODE"));
