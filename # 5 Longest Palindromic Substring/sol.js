/**
 * @param {string} s
 * @return {string}
 */
 function expandCenter(s, L, R){
    while(L >= 0 && R < s.length && s[L] == s[R]){
            L--
            R++
        }
    return [L, R]
}
var longestPalindrome = function(s) {
    
    let maxCount = -1
    let start = 0, end = 1
    
    for (let i = 0 ; i < s.length; i ++){
        //assume each s[i] could be a center
        let [L, R] = expandCenter(s, i, i)
        
        if(R - L > maxCount) {
            start = L + 1
            end = R
            maxCount = R - L
        }
        
        [L, R] = expandCenter(s, i, i+1)
        
        if(R - L > maxCount) {
            start = L + 1
            end = R
            maxCount = R - L
        
        }
        
    }
    return s.slice(start, end)
    
    
};