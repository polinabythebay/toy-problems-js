//alternative numberToEnglish solution
//much more elegant than the first one I did

var numberToEnglish = function(num) {
  //reference to place magnitude of 1000
  var place;
  //reference to currentNumber being evaluted
  var currentNum;
  //reference to result or output
  var results = "";
  //reference to remaining numbers
  var numLeft;

  //if num exists in numToWords 
  if (numbersToWords[num]) {
    //set it to result
    results = numbersToWords[num];
  }
  
  //if num less than 100
  else if (num < 100) {
    // set currentNumber to Math.floor on num divided by 10
    currentNum = Math.floor(num/10) * 10;
    // set remaining Number reference with modulo 10
    numLeft = num % 10;
    // access numbersToWords Object with currentNumber * 10 + empty string + access numberToWords Object with remaining number
    results = numbersToWords[currentNum] + "-" + numbersToWords[numLeft];
  }

  //else
  else {
    //if num is less than 1000
    if (num < 1000) {
      //set place to 100
      place = 100;
    }
    //else
    else {
      //set place to 1000
      place = 1000;
        //while loop place * 1000 < num
        while (place * 1000 <= num) {
         //multiply place by 1000
         place *= 1000;
        }
    }
  
    //set currentNumber to Math.floor on num divided by place
    currentNum = Math.floor(num/place);
    //set remaining numbers to modulo place
    numLeft = num % place;
    //set results = recurse numberToEnglish with currentNumber + access numbersToPlace object with place
    results = numberToEnglish(currentNum) + " " + numbersToPlace[place]
    //reference to the rest of the string
    var restOfString;
    //recurse on the rest of the string
    restOfString = numberToEnglish(numLeft);
    if (restOfString !== "zero") {
      results += " " + restOfString;  
    }
    
}
    //return the results
    return results;

}