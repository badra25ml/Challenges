var fact = function(n){
  if(n===0 || n===1){
    return 1;
  }
  return n*fact(n-1);
}
console.log(fact(0))
console.log(fact(1))

//1 1 2 3 5 8 13 21
//13: 8 + 5

var fib = function(n){
  if(n<=2){
    return 1
  }
  return fib(n-1)+fib(n-2);
}
console.log(fib(7))
console.log(fib(8))
