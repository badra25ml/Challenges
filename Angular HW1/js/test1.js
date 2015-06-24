var PERMS = {
allCases: {
"1": ['1'],
"2": ['a','b','c','2'],
"3": ['d','e','f','3'],
"4": ['g','h','i','4'],
"5": ['j','k','l','5'],
"6": ['m','n','o','6'],
"7": ['p','q','r','s','7'],
"8": ['t','u','v','8'],
"9": ['w','x','y','z','9'],
"0": ["0"]
},
 expandArrays:  function(a, b){
  var result = [];
  a.forEach(function(ae){
    b.forEach(function(be){
      result.push(ae + be);
    });
  });
  return result;
 }
};

PERMS.calculate = function(numberString){

if(numberString.length === 1){
  return PERMS.allCases[numberString];
}
var currentCases = PERMS.allCases[numberString[0]];
var remainingCases = PERMS.calculate(numberString.slice(1));
return PERMS.expandArrays(currentCases, remainingCases);
};
