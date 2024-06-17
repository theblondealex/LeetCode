function increasingTriplet(nums: number[]): boolean {
  let smallest = nums[0];
  let secondSmallest: number | undefined = undefined;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= smallest) {
      smallest = nums[i];
    } else if (secondSmallest === undefined || secondSmallest > nums[i]) {
      secondSmallest = nums[i];
    } else if (nums[i] > secondSmallest) {
      return true;
    }
  }
  return false;
}

console.log(increasingTriplet([2, 4, -2, -3]));
// console.log(increasingTriplet([1, 2, 3, 4, 5]));
