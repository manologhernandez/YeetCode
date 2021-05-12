/**
 * @param {number[]} nums
 * @return {number}
 */
 var numIdenticalPairs = function(nums) {
    // brute force n^2
    // let count = 0
    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = i+1; j < nums.length; j++) {
    //         if(nums[i] == nums[j]) {
    //             count ++
    //         }
    //     }
    // }
    // return count
    
    // optimized n
    
    let count = 0
    let visited = {}
    for (let i = 0; i < nums.length; i ++) {
        if (nums[i] in visited){
            count += visited[nums[i]]
            visited[nums[i]] ++
        }else
            visited[nums[i]] = 1
    }
    return count
};