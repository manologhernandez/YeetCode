/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {    
    let stack = []
    for (let c of s) {
        if(c == '(' || c == '{' || c == '['){
            stack.push(c)
        }else{
            let popped = stack.pop()
        
            if((popped == undefined) || (popped == '(' && c !=")") || (popped == '[' && c !="]") || (popped == '{' && c !="}") ){
                   return false
            }
            
        }
    }
    if (stack.length > 0){
        return false
    }
    return true
};