/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
 var minWindow = function(s, t) {
    
    let sObj = {}, tObj = {}
    
    for(let char of t) {
        if (char in tObj){
            tObj[char] ++
        }else{
            tObj[char] = 1
        }        
    }
    
    let left = 0
    let right = 0
    let count = 0
    let minStr = ""
    let minStrLen = s.length+1
    
    while (right < s.length){
        if (s[right] in sObj) {
            sObj[s[right]] ++
        }else {
            sObj[s[right]] = 1
            
        }
        if ((s[right] in tObj) && sObj[s[right]] == tObj[s[right]]) { // all occurrences of letter in t are found in s now
                count ++
            while (count == Object.keys(tObj).length && left <= right) { //all leters of t now accounted for
                if (right - left + 1 < minStrLen){
                    minStrLen = right - left + 1
                    minStr = s.slice(left, right+1)
                }
                // increment left, update count each step, 
                
                sObj[s[left]] --
                // if (sObj[s[left]] == 0) {
                //     delete sObj[s[left]] //remove 0 occurrences
                // }
                if(s[left] in tObj && sObj[s[left]] < tObj[s[left]]) { // if we removed a letter found in t, decrement count
                    count --
                }
                
                left ++
                
            } 
        }
        
        right ++
    }
    
    return (minStr)
    
};