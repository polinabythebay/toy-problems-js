/*************************************************************
Fibonacci

**************************************************************/

/*************************************************************
Recursive

**************************************************************/
nthFibonacci = function(n) {  
    if (n === 0 || n === 1) {
        return n;
    }
    return nthFibonacci(n-1) + nthFibonacci(n-2);
};

/*************************************************************
Iterative

**************************************************************/

nthFibonacci = function(n) {  
  var x = 0;
  var y = 1;
  var sum = 1;
  
  for (var i = 2; i <= n; i++) {
    sum = x + y;
    x = y;
    y = sum;
  }
  
  return (n === 0 ? 0 : sum);
};

//alt iterative solution 

nthFibonacci = function(n) {  
  var fib = [0, 1];
  for (var i = 2; i < n + 1; i++) {
    fib[i] = fib[i-1] + fib[i-2];
  }
  return fib[n];
};

/*************************************************************
Other versions

**************************************************************/

var fibRecurs = function(n){
  return n < 2 ? n : fibRecurs(n-1) + fibRecurs(n-2);
};
​
var fibMem = function(n){
  for(var i = 0; i <= n; i++){
    fibMem.mem = i < 2 ? i : fibMem.mem[i-2] + fibMem.mem[i-1];
  }
  return fibMem.mem[n];
};
​
fibMem.mem = [];
​
var fibSpace = function(n){
  var mem = [0,1];
  for(; n > 1; n--){
    mem.push(mem.shift() +mem[0]);
  }
  return mem[n];
};