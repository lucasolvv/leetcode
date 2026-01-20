/*
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. 
The relative order of the elements should be kept the same.
Consider the number of unique elements in nums to be k​​​​​​​​​​​​​​. After removing duplicates, return the number of unique elements k.
The first k elements of nums should contain the unique numbers in sorted order. The remaining elements beyond index k - 1 can be ignored.
*/

let nums = [0,0,1,1,1,2,2,3,3,4]
let nums2 = [1, 1, 2]

// preciso setar dois ponteiros, um ponteiro lento (writer) e um ponteiro rapido (reader)
//writer guarda o valor do primeiro elemento do array enquanto reader começa um a frente, e vai lendo o array
// nesse caso reader é o proprio indice de leitura do array. 
// sempre 


function removeDuplicates(nums) {
    let writer = 0;

    for (let i = 1; i < nums.length; i++) {
        let reader = i;

        if (nums[reader] !== nums[writer]) {
            writer++;
            nums[writer] = nums[reader];
        }
    }
    return writer + 1;
}

console.log(removeDuplicates(nums2));