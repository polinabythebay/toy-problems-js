


var isPrime = function(n) {
  if (n < 2) {
    return false;
  }

  if (n === 2 || n === 3 || n === 5) {
    return true;
  }

  var limit = Math.sqrt(n);

  for (var i = 7; i <= limit; i = i + 10) {
    console.log("i",i);

    // in Chrome modulo is much faster as
    // (j=n/i) === Math.floor(j)  than  as n%i === 0

    if ((j = n/i) === Math.floor(j)) {
      return false;
    }

    if ((j = n/(i+4)) === Math.floor(j)) {
      return false;
    }

    if ((j = n/(i+6)) === Math.floor(j)) {
      return false;
    }

  }
  return true;
}

//another method
//test if divisible by 2 or 3
//then check through all numbers of the form 6k ± 1 until squareroot(k)
//239812076741689
//current divisor: 915,173

////square root: 15,485,867

//precompute primes up to 15 million
//check against those primes
//if not divisible and still greater, than go to the method below

function primeTester (n) {

   if (n < 2) {
       return false;
   } else if (n % 2 === 0 || n % 3 === 0) {
       return false;
   }

   var limit = Math.squrt(n);
   for (var i = 5; i < limit; i = i + 6) {
        // console.log('n', n, 'divisor', i);
        // console.log("mod", n % i);
        
       if (n % i === 0 || n % (i + 2) === 0) {
           return false;
       }
   }
   return true;
}

var primeTester = function(n) {
    
    //edge cases
    if (typeof n !== 'number' || n <=1 || n%1 !== 0) {
        return false;
    }
    
    for (var i = 2; i <= Math.sqrt(n); i+=1) {
        if (n%i === 0) {
            return false;
        }
    }
    return true;
}