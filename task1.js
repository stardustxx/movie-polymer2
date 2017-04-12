// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
    // write your code in JavaScript (Node.js 6.4.0)

    var solutionLength = 0;

    // Define the regex pattern for uppercase and number
    var patternUpper = /[A-Z]/g;
    var patternNumber = /[0-9]/;

    // Split the array with number as separators
    var stringSplit = S.split(patternNumber);
    var stringSplitLength = stringSplit.length;

    if (stringSplit && stringSplitLength) {
        for (var i = 0; i < stringSplitLength; i++) {
            if (stringSplit[i] && stringSplit[i].length > solutionLength) {
                solutionLength = stringSplit[i].match(patternUpper) ? stringSplit[i].length : solutionLength;
            }
        }
    }

    return solutionLength || -1;
}