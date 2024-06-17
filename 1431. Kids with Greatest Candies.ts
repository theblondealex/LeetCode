function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  const returnArr: boolean[] = [];
  const max = Math.max(...candies);
  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= max) {
      returnArr.push(true);
    } else {
      returnArr.push(false);
    }
  }
  return returnArr;
}

kidsWithCandies([4, 2, 1, 1, 2], 1);
