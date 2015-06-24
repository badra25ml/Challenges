var n2w = angular.module("n2w", []);
function n2wctrl($scope, $sce){

var allCases = {
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
};

$scope.words = [];
$scope.doStuff = function(){
  $scope.words = PERMS.calculate($scope.number)
                  .filter(function(e){
                    return !e.match((/[a-z][0-9]+[a-z]/) &&  !(/[a-z]{2,}/));
                  })
                  .map(function(e){
                    //e: 4abc => "4<span>abc</span>"
                     return {text: e, html:
                        $sce.trustAsHtml(e.replace(/([a-z]+)/g, '<span>$1</span>'))};
                 });
  }
}
n2w.controller("n2wctrl", n2wctrl);
