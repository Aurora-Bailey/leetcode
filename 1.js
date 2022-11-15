/**
 * 1. Two Sum
 * https://leetcode.com/problems/two-sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// var twoSum = function(nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = nums.length - 1; j >= 0; j--) {
//             if (nums[i] + nums[j] == target && i !== j) return [i, j]
//         }
//     }
//     return false
// };

var twoSum = function(nums, target) {
    let hashmap = {}
    for (let i = nums.length - 1; i >=0 ; i--) {
        hashmap[nums[i]] = i
    }
    for (let i = nums.length - 1; i >=0 ; i--) {
        let compliment = target - nums[i]
        if (compliment in hashmap && hashmap[compliment] !== i) 
            return [i, hashmap[compliment]]
    }
};

console.log(twoSum([3,2,4], 6))