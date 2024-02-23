/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
     const romanValues = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000};
    let total = 0;
    let prevValue = 0;
    
    for (let i = 0; i < s.length; i++) {
        const value = romanValues[s[i]];
        if (value > prevValue) {
            total += value - 2 * prevValue; 
        } else {
            total += value;
        }
        prevValue = value;
    }
    
    return total;
    
};

module.exports = { isValid };


