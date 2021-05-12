/**
 * @param {string} s
 * @return {number[]}
 */
 var diStringMatch = function(s) {
    let low = 0, high = s.length
    let ans = []
    for (let letter of s) {
        if (letter == "I"){
            ans.push(low)
            low++
        }else if (letter == "D") {
            ans.push(high)
            high --
        }
    }
    ans.push(low)
    return ans
};