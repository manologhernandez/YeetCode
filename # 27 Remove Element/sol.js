/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
    
    let left = 0, right = nums.length - 1
    
    while (left <= right) {
        
        if (nums[left] == val) { // swap with right
            [nums[left], nums[right]] = [nums[right], nums[left]]
            right --
        }else{
            left ++
        }
        
    }
    // console.log(nums)
    return right + 1
    
    
    
};