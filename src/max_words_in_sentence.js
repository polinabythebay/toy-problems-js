//return the maximum words in a sentence
//words can be one letter or more
//sentences can have zero words
//sentences are separated by !,.,?

function solution(S) {

    //iterate through the string
    
    //push each sentence to an array
    var sentences = [];
    
    //split string by dots, ? or !
    var sentence = '';
    
    for (var i = 0; i < S.length; i++) {
        
        if (S.charAt(i) === '!' || S.charAt(i) === '?' || S.charAt(i) === '.') {
            sentences.push(sentence);
            sentence = '';
        } else {
            sentence = sentence + S.charAt(i);
        }
    }
    
    //check for sentence at the end without punctuation
    if (sentence !== '') {
        sentences.push(sentence);
    }
    
    //iterate through each sentence, count up words
    //base case is sentence with no words
    var maxWords = 0;
    var counter = 0;
    
    for (var j = 0; j < sentences.length; j++) {
        var wordArray = sentences[j].split(' ');
        //console.log("word array", wordArray);
        
        for (var k = 0; k < wordArray.length; k++) {
            if (wordArray[k] !== '') {
                counter++;
            }
        }
        
        if (counter > maxWords) {
            maxWords = counter;
        }
        counter = 0;
    }
    
    console.log("max words", maxWords);
    
}

solution("We test coders. Give us a try?");

solution("Forget  CVs..Save time . x x");

//Forget  CVs..Save time . x x

var str = "We test coders. Give us a try?";

//should return 4



