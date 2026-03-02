
from typing import List

def hasDuplicate(nums: List[int]) -> bool:
    count = {}
    for i in nums:
        count[i] = count.get(i, 0) + 1
        if (count[i] > 1):
            return True
    return False

nums = [1, 2, 3, 4]

print(hasDuplicate(nums))