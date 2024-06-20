function compress(chars: string[]): number {
  let i = 0;
  while (i < chars.length) {
    let count = 1;
    const nextIndex = i + 1;
    while (nextIndex < chars.length && chars[nextIndex] === chars[i]) {
      count++;
      chars.splice(nextIndex, 1);
    }
    if (count > 1) {
      const countChars = count.toString().split("");
      chars.splice(i + 1, 0, ...countChars);
      i += countChars.length;
    }
    i++;
  }
  return chars.length;
}
compress(["a", "a", "b", "b", "c", "c", "c"]);
// compress(["a"]);
// compress(["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"]);
