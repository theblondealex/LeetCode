/**
 * This function checks if an array contains duplicate numbers.
 * @param {number[]} nums - The array of numbers to check.
 * @returns {boolean} - Returns true if the array contains duplicates, false otherwise.
 */
function containsDuplicate(nums: number[]): boolean {
  const newArr = [...new Set(nums)];
  console.log(newArr);
  return nums.length !== newArr.length;
}

console.log(containsDuplicate([1, 2, 3, 1])); // Outputs: true
console.log(containsDuplicate([1, 2, 3, 4])); // Outputs: false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // Outputs: true
