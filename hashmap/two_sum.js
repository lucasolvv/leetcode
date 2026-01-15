/* 
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
*/

/*
Para resolver esse problema com hash map eu preciso subtrair o valor percorrido com o target, dai eu tenho quanto precisaria. 
dito isso, armazeno esse valor e seu index e contiuo percorrendo. Se eu achar esse valor dentro do array dps, é so retornalo.
*/

function twoSum(nums, target) {
    let hasher = new Map()

    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i];
        // calcular o complemento necessario para chegar ao valor target
        const complement = target - currentNum; 
        // checando se o complemento ja existe no array
        if (hasher.has(complement)) {
            // se existir, retorno o complemento e o index atual. 
            return [hasher.get(complement), i];
        }
        // se nao encontrar, adiciono o numero atual e seu index no hash
        hasher.set(currentNum, i);
    }
     // se nao tiver nada retorno vazio
  return []; 
}

const nums1 = [2, 7, 11, 15];
const target1 = 9;
console.log(`Indices for [${nums1}] with target ${target1}: [${twoSum(nums1, target1)}]`); // Output: [0, 1]