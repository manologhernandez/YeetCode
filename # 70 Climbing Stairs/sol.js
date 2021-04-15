/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    
    //     // unoptimized
    //     var ways = 0
    //     function step(n){
    //         if(n == 0){
    //             ways ++
    //         }
    //         if (n < 0){
    //             return
    //         }
    //         step(n-1)
    //         step(n-2)
    //     }
    //     step(n)
    
    //     return ways
        // dynamic
        var ways = 0
        let solved = {}
        function step(n){
            
            if (n in solved){
                return solved[n]
            }
            
            // case 1: we reach a successful route. add 1
            if(n == 0){
                return 1
            }
            // case 2: we reach an unsuccessful route. do not add.
            if (n < 0){
                return 0
            }
            
            solved[n] = step(n-1) + step(n-2)
            return solved[n]
        }
        step(n)
        
        console.log(solved)
    
        return solved[n]
        
    };