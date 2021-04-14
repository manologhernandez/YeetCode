/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  var complements = {};
  for (let i = 0; i < nums.length; i++) {
    var x = target - nums[i];
    if (x in complements) {
      return [i, complements[x]];
    } else {
      complements[nums[i]] = i;
    }
  }
};
