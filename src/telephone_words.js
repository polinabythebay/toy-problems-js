//Write a function that takes up to four digits of a phone number, 
//and returns a list of all of the words that can be written on 
//the phone with that number. 
//(You should return all permutations, not only English words.)

/*************************************************************
Big O discussion

http://math.stackexchange.com/questions/1345148/the-time-complexity-of-the-n-ary-cartesian-product-over-n-sets

**************************************************************/

/*************************************************************
Recursive Version #1
**************************************************************/

var digitstrings = {
  0 : '0',
  1 : '1',
  2 : 'ABC',
  3 : 'DEF',
  4 : 'GHI',
  5 : 'JKL',
  6 : 'MNO',
  7 : 'PQRS',
  8 : 'TUV',
  9 : 'WXYZ'
}

var telephoneWordsRecursive = function(digitString) {
  //Save current words through closure loop
  var words = [];

  //subroutine to handle recursion
  //word builds on word we create
  //digits argument that holds remaining options
  var lettersForDigits = function (word, digits) {
    //base case
    if (digits.length === 0) {
      words.push(word);
      return;
    }
    //recurse
    //reference to first digit
    var currentDigit = digits[0];
    //store remaining digits
    var remainDigits = digits.slice(1);
    //get letter options for current digits
    var letters = phoneDigitsToLetters[currentDigit].split('');

    //run through them calling our subroutine recursively while passing in a word with
    //each letter added and the remaining digits
    for (var i = 0; i < letters.length; i++) {
      lettersForDigits(word + letters[i], remainDigits);
      //we're not popping any characters off after the recursion
    };
  };

  lettersForDigits('', digitString.split(''));
  return words;
}


/*************************************************************
Iterative Version with different data set
**************************************************************/
function telephoneWords (digitString) {
  
  var telephone_data = {
    0:['0'],
    1:['1'],
    2:['A','B','C'],
    3:['D','E','F'],
    4:['G','H','I'],
    5:['J','K','L'],
    6:['M','N','O'],
    7:['P','Q','R','S'],
    8:['T','U','V'],
    9:['W','X','Y','Z']
  }
  
  return flatten_to_string(
          cartesian_product(
            digit_to_data(digitString)));
            
  //input: string representing up to 4 numbers
  //output: array of arrays
  function digit_to_data(digitString) {
    var arr = digitString.split("");
    var words = [];
    for (var k = 0; k < arr.length; k++) {
      words.push(telephone_data[arr[k]]);
    }
    return words;
  }
  
  //input: two arrays
  //output: 1 array of arrays
  function array_product(arr1, arr2) {
    var product = [];
    for (var i = 0; i < arr1.length; i++) {
        for (var j = 0; j < arr2.length; j++) {
          var concat = arr1[i].concat(arr2[j]);
          product.push(concat);
        }
    }
    return product;
  }
  
  //input: array of n arrays
  //output: cartesian product of n arrays
  function cartesian_product(arrs) {
    var result = [[]];
    for (var i = 0; i < arrs.length; i++) {
      result = array_product(result, arrs[i]);
    }
    return result;
  }
  
  //input: array of arrays
  //output: array of strings
  function flatten_to_string(arrs) {
    var result = [];
    for (var i = 0; i < arrs.length; i++) {
      result[i] = '';
      for (var j = 0; j < arrs[i].length; j++) {
        result[i] = result[i] + arrs[i][j];
      }
    }
    return result;
  }
}

/*************************************************************
Slick Underscore.js Version
**************************************************************/
function cartesianProductOf() {
    return _.reduce(arguments, function(a, b) {
        return _.flatten(_.map(a, function(x) {
            return _.map(b, function(y) {
                return x.concat([y]);
            });
        }), true);
    }, [ [] ]);
};

cartesianProductOf([1, 2], [3, 4], ['a', 'b']); 

//combinations
//permutations
//power set: http://cwestblog.com/2011/05/02/power-set/
//cartesian product: http://cwestblog.com/2011/05/02/cartesian-product-of-multiple-arrays/










