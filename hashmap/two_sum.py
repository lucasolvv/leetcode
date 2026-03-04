from typing import List
nums=[2,5,5,11]
target=10
#nums = [3,4,5,6]

#target = 7

def twoSum(nums: List[int], target: int) -> List[int]:
    hasher = {}
    
    for i in range(len(nums)):
        current_num = nums[i] 
        complement = target - current_num
        if complement in hasher:
            return [hasher.get(complement), i]
        hasher[nums[i]] = i
    return [0, 0]

print(twoSum(nums, target))