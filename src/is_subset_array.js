/*************************************************************
Make an array method that can return whether or not a context 
array is a subset of an input array. To simplify the problem, 
you can assume that both arrays will contain only strings.
**************************************************************/

Array.prototype.isSubsetOf = function(input) {
    
  var freq = {};
  for (var i = 0; i < this.length; i++) {
    freq[this[i]] = 1;
  }

  for (var j = 0; j < input.length; j++) {
    if (freq[input[j]]) {
      delete freq[input[j]];
    }
  }

  return Object.keys(freq).length === 0;
};