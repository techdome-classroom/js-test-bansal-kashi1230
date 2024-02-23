/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const stack = [];
    const pairs = {
        '(': ')',
        '[': ']',
        '{': '}'
    };
    
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (pairs[char]) { 
            stack.push(char);
        } else { 
            const lastBracket = stack.pop();
            if (pairs[lastBracket] !== char) {
                return false;
            }
        }
    }
    
    return stack.length === 0;
    
};


module.exports={romanToInt}
