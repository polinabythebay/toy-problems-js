function numberToEnglish (number) {
  //*******DATA********//
  
  var numbersToWords = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety'
  };

  var numberWords = {
    'zero':true,
    'one':true,
    'two':true,
    'three':true,
    'four':true,
    'five':true,
    'six':true,
    'seven':true,
    'eight':true,
    'nine':true,
    'ten':true,
    'eleven':true,
    'twelve':true,
    'thirteen':true,
    'fourteen':true,
    'fifteen':true,
    'sixteen':true,
    'seventeen':true,
    'eighteen':true,
    'nineteen':true,
    'twenty':true,
    'thirty':true,
    'forty':true,
    'fifty':true,
    'sixty':true,
    'seventy':true,
    'eighty':true,
    'ninety':true
  };

  var placesArray = ['ten',
                     'hundred',
                     'thousand',
                     'million',
                     'billion',
                     'trillion',
                     'quadrillion',
                     'quintillion' ];

  if (number === 0) {
      return 'zero';
  }
//add dashes where appropriate
  return addDashes(
          //flatten array and remove 'zero' words
          flattenNoZeroes(
            //add appropriate place (ex. hundreds, thousands)
            numToPlace(
              //process each group to convert to a words
              arrToEng(
                //split array into groups of three, starting from the back
                //return array of arrays
                splitByThree(number.toString().split("")))))).join(" ");
  
  //*******HELPER FUNCTIONS********//
  
  //add dashes where appropriate
  //ex. "thirty five" => "thirty-five"
  function addDashes(arr) {
   var result = [];
     for (var i = 0; i < arr.length; i++) {

        if (numberWords[arr[i]] && numberWords[arr[i+1]] ) {

          var temp = arr[i]+'-'+arr[i+1];
          result.push(temp);
          i++;
        } else {
          result.push(arr[i]);
        }
     }
     return result;
  }
  
  //ex. input:  [ [ 'zero', 'zero', 'twelve' ], [ 'three hundred', 'zero', 'ten', 'thousand' ] ];
  //output: [ 'three hundred', 'ten', 'thousand', 'twelve' ]
  function flattenNoZeroes(arrs) {
      var result = [];
      var noZeroes = [];
      
      //flatten
      for (var i = arrs.length-1; i >= 0; i--) {
          result = result.concat(arrs[i]);
      }
      
      //remove zeroes 
      for (var j = 0; j < result.length; j++) {
          if (result[j] != 'zero') {
              noZeroes.push(result[j]);
          }
      }
      return noZeroes;
  }
  
  //ex. input:  [ [ 'zero', 'zero', 'twelve' ], [ 'three', 'zero', 'ten' ] ];
  //output: [ [ 'zero', 'zero', 'twelve' ], [ 'three hundred', 'zero', 'ten', 'thousand' ] ]
  function numToPlace(arrs) {
      
      //if length == 3 and first thing is not zero
      //first thing gets "hundred" after it
      //tack on current numPlaces at the end of it
      
      var places = 1;
      var temp;
      
      for (var i = 0; i < arrs.length; i++) {
          if ((arrs[i].length === 3) && (arrs[i][0] != 'zero')) {
              //first thing gets hundred after it
              temp = arrs[i][0]+ " hundred";
              arrs[i][0] = temp;
          }
          //if places is > 100, gets value after it
          if (places > 1) {
              
              //check if triplet is all zeros ['zero','zero','zero']
              //it shouldn't return the place
              if (arrs[i][0] === 'zero'
               && arrs[i][1] === 'zero'
               && arrs[i][2] === 'zero') {
                //do nothing
               } else {
                //add value to the end of that array
                arrs[i].push(placesArray[places]);          
               }
          }
          places++;
      }
      return arrs;
  }
  
  //ex. input:  [ [ '0', '1', '2' ], [ '3', '1', '0' ] ];
  //output: [ [ 'zero', 'zero', 'twelve' ], [ 'three', 'zero', 'ten' ] ]
  function arrToEng(arr){
      var temp, combined;
      for (var i = 0; i < arr.length; i++) {
          //case 1
          if (arr[i].length === 1) {
              temp = numbersToWords[arr[i][0]];
              arr[i][0] = temp;
          }
          //case 2
          if (arr[i].length === 2) {
              combined = arr[i].join('');
              //check if combined is in object
              temp = numbersToWords[combined];
              if (temp) {
                  //assign first one to zero
                  arr[i][0] = 'zero';
                  
                  //second one to combined
                  arr[i][1] = temp;
              } else {
                  //both need to be separate
                  //not sure if I need to check 2 zeros here
                  temp = numbersToWords[arr[i][0]+0];
                  arr[i][0] = temp;
                  
                  temp = numbersToWords[arr[i][1]];
                  arr[i][1] = temp;
              }
          }
          //case 3
          if (arr[i].length === 3) {
              //index 0 is case 1
              temp = numbersToWords[arr[i][0]];
              arr[i][0] = temp;
              
              //index 1 and 2 are case 2
              combined = arr[i][1]+arr[i][2];
              temp = numbersToWords[combined];

              if (temp) {
                  arr[i][1] = 'zero';
                  arr[i][2] = temp;
              } else {
                  //both need to be separate
                  //check if 2 zeros 
                  if (arr[i][1] === '0') {
                      arr[i][1] = 'zero';
                  } else {
                   temp = numbersToWords[arr[i][1]+0];
                   arr[i][1] = temp;  
                  }
                  
                  temp = numbersToWords[arr[i][2]];
                  arr[i][2] = temp;
              }
          }
      }
      return arr;
  }
  
  //ex. input: [ '1', '2', '3', '4' ]
  //output: [ [ '2', '3', '4' ], [ '1' ] ]
  function splitByThree(arr) {
     //take an array, and split each element 
     //into a group of three
     //return array of arrays
      var count = 0;
      var current = [];
      var result = [];
      for (var i = arr.length-1; i >= 0; i--) {
          if (count === 0) {
              current = ([arr[i]]).concat(current);
              count++;
              continue;
          }
          if (count === 1) {
              current = ([arr[i]]).concat(current);
              count++;
              continue;
          }
          if (count === 2) {
              current = ([arr[i]]).concat(current);
              result.push(current);
              current = [];
              count = 0;
              continue;
          }
      }
      //if there's something left in currentArray
      //then add it to arrayOfArrays
      if (current.length > 0) {
          result.push(current);
      }
      return result;
  }
}

//testing
//numbers array
var numbers = [78193512,80,1000000000,845913,1000000,16,14,700000,
630,30,12,13,9,70,1000000000000000000,40,1000000000000,
922,19,7,1,8,5625,60,67,44,1000,90,17490,500,6,275,50000,
11,99,5,20,2,100,18,15,973563700353,575,9007199254740992,
10,2385024582,700,7,0,4,973563700,17,355003,1000000000000000,
50,2385024,3];

//english array
var english = [ 'seventy-eight million one hundred ninety-three thousand five hundred twelve',
  'eighty',
  'one billion',
  'eight hundred forty-five thousand nine hundred thirteen',
  'one million',
  'sixteen',
  'fourteen',
  'seven hundred thousand',
  'six hundred thirty',
  'thirty',
  'twelve',
  'thirteen',
  'nine',
  'seventy',
  'one quintillion',
  'forty',
  'one trillion',
  'nine hundred twenty-two',
  'nineteen',
  'seven',
  'one',
  'eight',
  'five thousand six hundred twenty-five',
  'sixty',
  'sixty-seven',
  'forty-four',
  'one thousand',
  'ninety',
  'seventeen thousand four hundred ninety',
  'five hundred',
  'six',
  'two hundred seventy-five',
  'fifty thousand',
  'eleven',
  'ninety-nine',
  'five',
  'twenty',
  'two',
  'one hundred',
  'eighteen',
  'fifteen',
  'nine hundred seventy-three billion five hundred sixty-three million seven hundred thousand three hundred fifty-three',
  'five hundred seventy-five',
  'nine quadrillion seven trillion one hundred ninety-nine billion two hundred fifty-four million seven hundred forty thousand nine hundred ninety-two',
  'ten',
  'two billion three hundred eighty-five million twenty-four thousand five hundred eighty-two',
  'seven hundred',
  'seven',
  'zero',
  'four',
  'nine hundred seventy-three million five hundred sixty-three thousand seven hundred',
  'seventeen',
  'three hundred fifty-five thousand three',
  'one quadrillion',
  'fifty',
  'two million three hundred eighty-five thousand twenty-four',
  'three' ];