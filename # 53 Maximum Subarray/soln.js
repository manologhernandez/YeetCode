/**
 * @param {number[]} nums
 * @return {number}
 */

// Kadane's Algorithm

var maxSubArray = function(nums) {
    var localSum = 0
    var globalSum = -1000000
    
    let n = nums.length
    
    for (let i = 0; i < n; i++) {
        localSum = Math.max(nums[i], nums[i] + localSum)
        if(globalSum < localSum){
            globalSum = localSum
        }
    }
    
    return globalSum
    
};