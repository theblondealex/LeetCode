function map(arr: number[], fn: (n: number, i: number) => number): number[] {
  const returnedArr: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    returnedArr.push(fn(arr[i], i));
  }
  return returnedArr;
}
