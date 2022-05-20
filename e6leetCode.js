/* Ejercicio 6
283. Move Zeroes
Given an integer array nums, move all 0's to the end of it
while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array. */

let arr1 = [0,1,0,3,12]
let arr2 = [0]

function moveZeroes(nums) {
    let count = 0;
    for (let i = 0; i < nums.length; i++)
        if (nums[i] != 0){
            nums[count] = nums[i]
            count++
        }                   
    while (count < nums.length)
        nums[count++] = 0;
}

console.log("Ejercicio 6 Move Zeroes")
moveZeroes(arr1)
moveZeroes(arr2)
console.log(arr1)//[1,3,12,0,0]
console.log(arr2)//[0]