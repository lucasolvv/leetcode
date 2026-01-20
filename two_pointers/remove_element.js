/*
Given an integer array nums and an integer val, remove all occurrences of val in nums in-place.
The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.
Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:
Change the array nums such that the first k elements of nums contain the elements which are not equal to val. 
The remaining elements of nums are not important as well as the size of nums.
Return k.
*/

/*
A logica aqui acredito ser a mesma de remover elementos duplicados. 
Terei dois ponteiros, um reader e um writer. Writer aponta pro primeiro indice do array., 
Reader pode se iniciar um indice acima, para checharmos se o valor de 
*/

function removeElements(nums, val) {
    let writer = 0;
    for (let i = 0; i < nums.length; i++) {
        let reader = i; 

        if (nums[reader] !== val) {
            nums[writer] = nums[reader];
            writer++
        }
    }
    return writer;
}

let nums = [3,2,2,3]

console.log(removeElements(nums, 3));