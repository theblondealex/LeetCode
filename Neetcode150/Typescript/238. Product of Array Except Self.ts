function productExceptSelf(nums: number[]): number[] {
  let res: number[] = new Array(nums.length).fill(1);
  let left: number = 1;
  for (let i = 0; i < nums.length; i++) {
    res[i] *= left;
    left *= nums[i];
  }
  let right: number = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    res[i] *= right;
    right *= nums[i];
  }

  return res;
}

console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([-1, 1, 0, -3, 3]));
console.log(productExceptSelf([0, 0]));
