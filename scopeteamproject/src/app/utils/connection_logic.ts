

// This function returns true if the second member of each pair is all the same
// Each selected connection should be passed here as a pair of [something, underlying connection]

function allSecondMembersEqual(pairs: [string, string][]): boolean {
  if (pairs.length === 0) {
    return true; 
  }

  const firstSecond = pairs[0][1]; 

  return pairs.slice(1).reduce((acc, [, second]) => acc && second === firstSecond, true);
  // simple fold left to determine if all elements are equal

}


let test1 = allSecondMembersEqual([["hi", "hi"], ["hello", "bye"], ["bye", "hi"]]);
console.log(test1);