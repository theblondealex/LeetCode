type MultiDimensionalArray = (number | MultiDimensionalArray)[];

const flat = (arr: MultiDimensionalArray, n: number): MultiDimensionalArray => {
  const finalArr: MultiDimensionalArray = [];

  function flatHelper(array: MultiDimensionalArray, depth: number) {
    for (const item of array) {
      if (typeof item === "object" && depth < n) {
        flatHelper(item, depth + 1);
      } else {
        finalArr.push(item);
      }
    }
    return finalArr;
  }
  return flatHelper(arr, 0);
};

const arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
const n = 0;
console.log(flat(arr, n));
