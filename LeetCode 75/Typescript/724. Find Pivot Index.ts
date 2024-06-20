// function pivotIndex(nums: number[]): number {
//   //split arr to two the left and right, do both sum the same, if yes return that index
//   //for loop for the index to look l/r from
//   let leftMostP = -1;

//   for (let i = 0; i < nums.length; i++) {
//     let leftSum = 0;
//     if (i !== 0) {
//       const leftArr = nums.slice(0, i);
//       //add all to the left to the left sum
//       for (let l = 0; l < leftArr.length; l++) {
//         leftSum += leftArr[l];
//       }
//     }
//     let rightSum = 0;
//     if (i !== nums.length - 1) {
//       const rightArr = nums.slice(i + 1);
//       //add all to the right to the left sum
//       for (let r = 0; r < rightArr.length; r++) {
//         rightSum += rightArr[r];
//       }
//     }
//     if (leftSum === rightSum) {
//       leftMostP = i;
//       break;
//     }
//   }
//   console.log(leftMostP);
//   return leftMostP;
// }

function pivotIndex(nums: number[]): number {
  const totalSum = nums.reduce((acc, num) => acc + num, 0);
  let leftSum = 0;

  for (let i = 0; i < nums.length; i++) {
    // If the left sum is equal to the right sum (totalSum - leftSum - nums[i])
    if (leftSum === totalSum - leftSum - nums[i]) {
      return i;
    }
    leftSum += nums[i];
  }
  return -1;
}

console.log(pivotIndex([2, 1, -1])); // Expected output: 0

pivotIndex([1, 7, 3, 6, 5, 6]);
