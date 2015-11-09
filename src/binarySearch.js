var binarySearch = function(array, target) {
  var min = 0;
  var max = array.length-1;
  var guess;
  while (min <= max) {
    guess = Math.floor((min+max)/2);
    if (array[guess] === target) {
      return guess;
    } else if (array[guess] < target) {
      min = guess++;
    } else {
      max = guess--;
    }
  }
  return -1;
}
