/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    // linear but with extra memory
    
    let seen = {}
    for (let i = 0; i < nums.length; i++) {
        if (!(nums[i] in seen)) {
            seen[nums[i]] = 1
        }else{
            delete seen[nums[i]]
        }
    }
    return( Object.keys(seen))
};