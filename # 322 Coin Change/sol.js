/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
 var coinChange = function(coins, amount) {
    
    let visited = {}
    
    let path = getChange(coins, amount, visited)
    if (path == Math.pow(2,31) - 1) {
        return -1
    }
    return path
};


function getChange(coins, amount, visited){
    
    if (amount in visited) {
        return visited[amount]
    }
    
    if (amount == 0) {
        return 0
    }
    
    // go thru each coin path
    
    let minCoins = Math.pow (2, 31) - 1
    
    for(let i = 0; i < coins.length; i ++) {
        let change =  amount - coins[i]
        if (change < 0) { // if negative change, dont consider this coin anymore
            continue
        }
        
        let pathLength = getChange(coins, change, visited) + 1 // go down path, add 1 to account for current coin
        
        minCoins = Math.min(minCoins, pathLength)
        visited[amount] = minCoins
    }
    
    
    return minCoins
}