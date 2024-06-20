from typing import List
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        hashmap = {}
        for i in range(len(nums)):
            hashmap[nums[i]] = i
        for i in range(len(nums)):
            diff = target - nums[i]
            if diff in hashmap and hashmap[diff] != i:
                return [i, hashmap[diff]]


solution_instance = Solution()
print(solution_instance.twoSum([2,7,11,15], 9))