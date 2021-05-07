/**
 * @param {number} n
 * @return {string[]}
 */
 var generateParenthesis = function(n) {
    
    // recursive
    //case: either add a '(' or ')' depending on value on # of left '('s\
    // return when # of left '('s is more than n or equals 0
    
    let strings = []

    
    function generate(n, left, right, str){
        // console.log(left, right, str)
        if (str.length == (n*2)){
            strings.push(str.join(""))
            return
        }
        
                
        if (left < n) {
            str.push('(')
            generate(n, left+1, right, str)
            str.pop()
        }
        
        if (right < left){
            str.push(')')
            generate(n, left, right + 1, str)
            str.pop()
        }
    }
    
    generate(n, 0, 0, [])
    // console.log(strings)
    return strings
};