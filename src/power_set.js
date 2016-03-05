//Another way of doing it recursively. 

function powerSet(str) {
    
    var results = [];
    
    function generateSet(result, depth) {
        console.log(result, depth);
        
        //base case
        if (depth === str.length) {
            results.push(result);
            return;
        }
        
        //update
        var next_depth = depth+1;
        var next_result = result + str[depth];
        
        //go left
        generateSet(result, next_depth);
        
        //go right
        generateSet(next_result, next_depth);
        
    }
    
    generateSet('',0);
    return results;
}

 /********************************************************************** 
  *                                                                    *
  *                                                                    *
  *  Prompt: Given a set S, return the power set P(S), which is        *
  *          a set of all subsets of S.                                *
  *                                                                    *
  *  Input:  A String                                                  *
  *  Output: An Array with the power set of the input string           *
  *                                                                    *
  *  Example: S = "abc", P(S) = ['', 'a', 'b','c','ab','ac','bc','abc']*                                                               *
  *                                                                    *
  *  Note: There should not be any duplicates in the power set         *
  *        ('ab' and 'ba' are considered the same), and it will always *
  *        begin with an empty string ('')                             *
  *                                                                    *
  **********************************************************************/
 
var powerSet = function(str){
    var results = {}; //this handles cases like abca
    
    var generateSet = function(result, input) {
        //console.log(result, input);
        //push current to set
        if (!results[result]) {
            results[result] = true;
        }
        //check if base case
        if (input === '') {
            return;
        }
        for (var i = 0; i < input.length; i++) {
            var next_result = result + input[i];
            var next_input = input.slice(i+1);
            generateSet(next_result, next_input);
        }
        
    }
    
    generateSet('',str);
    return Object.keys(results);
}

powerSet('abca');
