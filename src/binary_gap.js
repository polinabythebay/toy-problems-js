//find largest gap in a binary string
//longest gap of zeroes between ones
var binaryGap = function(num) {
    
    var binaryString = binaryRepresentation(num);
    
    var largestGap = 0;
    var currentGap = 0;
    
    for (var i = 1; i < binaryString.length; i++) {
        
        if (binaryString.charAt(i) === '0') {
            currentGap++;
        }
        
        if (binaryString.charAt(i) === '1') {
            if (currentGap > largestGap) {
                largestGap = currentGap;
            }
            currentGap = 0;
        }

    }
    
    return largestGap;
}

//binary representation
//return binary representation of number

//divide number by 2
//if remainder = 0, add 0 to front
//if remainder = 1, add 1 to front
//take result and divide it to keep going
//stop when result is 1
//when result is 1, add 1 to front and return
    
var binaryRepresentation = function(num) {

    var binary = '';

    while (num !== 1) {
    
        if (num % 2 === 0) {
            binary = '0' + binary;
        } else {
            binary = '1' + binary;
        }
        
        num = Math.floor(num/2);
    }
    
    binary = '1' + binary;
    
    return binary;
}

binaryGap(8);