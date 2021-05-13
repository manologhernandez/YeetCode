/**
 * @param {number} n
 * @return {string}
 */
 var countAndSay = function(n) {
    
    if (n == 1) {
        return "1"    
    }
    
    let str = countAndSay(n-1)
    return analyzeStr(str)
    
    
};


function analyzeStr(str) {
    let ans = ""
    let i = 0
    while (i < str.length) {
        let count = 1
        let j = i + 1
        while(j < str.length && str[i] == str[j] ) {
            count ++
            j++
        }
        ans += count.toString()
        ans += str[i]
        i = j
    }
    return ans
}