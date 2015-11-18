//character frequency

//input: string
//output: array of arrays
//descending order by frequency
//if frequency is the same, ascending order by character

var charFreq = function(str) {
    var arr = str.split("");
    var bucket = {};
    for (var i = 0; i < arr.length; i++) {
        //store char frequencies
        if (bucket[arr[i]] === undefined) {
            bucket[arr[i]] = 1;
        } else {
            bucket[arr[i]]++;
        }
    }
    console.log(bucket);
    
  
}
charFreq("aaabbc");