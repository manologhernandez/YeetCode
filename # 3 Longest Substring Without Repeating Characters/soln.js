/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    let visited = {}
    let count = 0
    let maxCount = 0
    let lPtr = -1
    for (let i = 0; i < s.length; i++) {
        if ((s[i] in visited) && visited[s[i]] >lPtr){
            lPtr = visited[s[i]]   
        }
        visited[s[i]] = i
        maxCount = Math.max(i-lPtr, maxCount)
    }
    return maxCount
};