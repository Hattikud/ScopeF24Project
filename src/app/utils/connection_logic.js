// This function returns true if the second member of each pair is all the same
// Each selected connection should be passed here to 
function allSecondMembersEqual(pairs) {
    if (pairs.length === 0) {
        return true;
    }
    var firstSecond = pairs[0][1];
    return pairs.slice(1).reduce(function (acc, _a) {
        var second = _a[1];
        return acc && second === firstSecond;
    }, true);
    // simple fold left to determine if all elements are equal
}
var test1 = allSecondMembersEqual([["hi", "hi"], ["hello", "bye"], ["bye", "hi"]]);
console.log(test1);
