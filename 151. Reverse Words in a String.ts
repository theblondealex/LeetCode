function reverseWords(s: string): string {
  const finalArr: string[] = [...s.split(" ").reverse()];
  const filterFinalArr = finalArr.filter((item) => item !== "");
  return filterFinalArr.join(" ");
}

reverseWords("  hello world  ");
