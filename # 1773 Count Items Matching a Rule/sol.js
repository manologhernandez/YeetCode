/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
 var countMatches = function(items, ruleKey, ruleValue) {
    
    let ruleMap = {
        "type": 0,
        "color": 1,
        "name": 2
    }
    
    //iterate over items, check if items[i][ruleMap[ruleKey]] = ruleValue
    let count = 0
    for (let item of items) {
        if(item[ruleMap[ruleKey]] == ruleValue){
            count ++
        }
    }
    
    return count
    
};