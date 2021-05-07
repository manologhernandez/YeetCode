/**
 * @param {number} num
 * @return {string}
 */

 function getDigits(num){
    
    let digits = 0
    while(num >= 1) {
        digits ++
        num = num / 10
    }
    
    return digits
    
}

var intToRoman = function(num) {
    let numCopy = num
    let digits = 0
    let ans = ""
    while(numCopy >= 1) {
        digits ++
        numCopy = numCopy / 10
    }
    while(num >= 1) {
        // for each digit
        let i = getDigits(num)
        let rem = num % (Math.pow(10, i-1))
        let curr = num - rem
        
        if(curr / Math.pow(10, i-1) == 4) {
            switch(i){ 
                case 3:
                    ans += "CD"
                    break
                case 2:
                    ans += "XL"
                    break
                case 1:
                    ans += "IV"
                    break
            }
        }else if(curr / Math.pow(10, i-1) == 9) {
            switch(i){
                case 3:
                    ans += "CM"
                    break
                case 2:
                    ans += "XC"
                    break
                case 1:
                    ans += "IX"
                    break
            }
        } else if(curr / Math.pow(10, i-1) >= 5) {
            switch(i){
                case 3:
                    ans += "D"    
                    break
                case 2:
                    ans += "L"
                    break
                case 1:
                    ans += "V"
                    break
            }
            rem += ((curr / Math.pow(10, i-1) - 5) * Math.pow(10, i-1))
        } else{
            while(curr > 0){
                switch(i){
                case 4:
                    ans += "M"
                    break
                case 3:
                    ans += "C"
                    break
                case 2:
                    ans += "X"
                    break
                case 1:
                    ans += "I"
                    break
            }
                curr -= Math.pow(10, i-1)
            }
        }
        
        num = rem
    }
    return ans
};