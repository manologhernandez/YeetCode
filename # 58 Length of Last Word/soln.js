/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
    s = s.trim()
    if(s == ""){
        return 0
    }
    
    let arr = s.split(" ")
    return arr[arr.length-1].length
};