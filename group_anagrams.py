'''
Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.

An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

Example 1:

Input: strs = ["act","pots","tops","cat","stop","hat"]

Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]

Example 2:

Input: strs = ["x"]

Output: [["x"]]
Example 3:

Input: strs = [""]

Output: [[""]]
'''
from typing import List

words = ["act","pots","tops","cat","stop","hat"]

def groupAnagrams(strs: List[str]) -> List[List[str]]:
    anagrams_groups = []
    group = []
    words_counter = {}
    for left in range(len(words)):
        left_word = words[left]
        for right in range(left + 1, len(words)):        
            right_word = words[right]
            if (len(words[left]) == len(words[right])):     
                for char in words[left]:
                    words_counter[char] = words_counter.get(char, 0) + 1
                for char in words[right]:
                    if char not in words_counter:
                        break
                    else: 
                        words_counter[char] = words_counter.get(char, 0) - 1
                group.append(words[left])
                group.append(words[right])
                
        anagrams_groups.append(group)
        
        
            
            
print(groupAnagrams(words))