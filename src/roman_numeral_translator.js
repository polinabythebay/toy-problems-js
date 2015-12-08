var DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

function translateRomanNumeral (romanNumeral) {
  var total = 0;
  
  if (romanNumeral === '') {
      return 0;
  }
  
  for(var i = 0; i < romanNumeral.length; i++) {
    if (!DIGIT_VALUES[romanNumeral.charAt(i)] ) {
      return 'null';
    }
    if ( DIGIT_VALUES[romanNumeral.charAt(i)] < DIGIT_VALUES[romanNumeral.charAt(i+1)]) {
          total -=  DIGIT_VALUES[romanNumeral.charAt(i)];
      } else {
          total += DIGIT_VALUES[romanNumeral.charAt(i)];
      }
  }
  return total;
}
