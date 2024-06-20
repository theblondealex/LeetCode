class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        sorted_s = sorted(s)
        sorted_t = sorted(t)
        return sorted_s == sorted_t


# Create an instance of the Solution class
solution_instance = Solution()

# Call the isAnagram method and print the result
print(solution_instance.isAnagram("anagram", "nagaram"))
print(solution_instance.isAnagram("rat", "car"))
print(solution_instance.isAnagram("a", "ab"))