
from typing import List
class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        uniqueSet = set(nums)
        return len(uniqueSet) != len(nums)
        

    print(containsDuplicate([1, 2, 3, 1])); 
    print(containsDuplicate([1, 2, 3, 4])); 
    print(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); 