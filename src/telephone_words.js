//Write a function that takes up to four digits of a phone number, 
//and returns a list of all of the words that can be written on 
//the phone with that number. 
//(You should return all permutations, not only English words.)

var data = {
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

function telephoneWords (digitString) {
  // Write your code here, and
  // return your final answer.

  var arr = digitString.split("");

}

//first thought --> up to 4 nested for loops.
//however, that's not a super elegant solution


//examples
//"0002"
//=> [ "000A", "000B", "000C" ]

//1123

//1234

//0002

//5987



