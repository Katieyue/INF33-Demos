"use strict";
function joinNTimes(arrOfStr, joinStr, n) {
    var joinedStr = '';
    for (var i = 0; i < n; i++) {
        joinedStr += arrOfStr.join(joinStr) + '\n';
    }
    return joinedStr;
}
console.log(joinNTimes(['hello', 'my', 'name', 'is', 'theresa'], ' ', 3));
