from typing import List
from collections import defaultdict

class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        res = defaultdict(list) #map the charcount against list of anagrams
        for s in strs:
            charcount = [0]*26  #list with a-z
            for c in s:
                charcount[ord(c)-ord('a')] += 1
            res[tuple(charcount)].append(s)
        print(res)
        return res.values()
    

print(Solution().groupAnagrams(["eat","tea","tan","ate","nat","bat"]))