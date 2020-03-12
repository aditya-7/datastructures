/**
 * Write a function that takes a string that consists of only brackets- (,[,{,},],)
 * Make sure the brackets opened in the string are closed correctly.
 * The function should return true or false.
 * Input 1: node index.js 1 {[]}([((){})])
 * Output 1: true
 * Input 2: node index.js 1 {[]}([(()}{)])
 * Output 2: false
 * Input 3: node index.js 1 {[]}([((){})]
 * Output 3: false
 */

module.exports = function balanced(str) {
    var stack = [];
    for (i in str) {
        switch (str[i]) {
            case "{":
            case "[":
            case "(":
                stack.push(str[i]);
                break;
            case "}":
                if (stack.pop() !== "{") {
                    return false;
                }
                break;
            case "]":
                if (stack.pop() !== "[") {
                    return false;
                }
                break;
            case ")":
                if (stack.pop() !== "(") {
                    return false;
                }
                break;
            default:
                return false;
        }
    }
    return stack.length === 0;
}
