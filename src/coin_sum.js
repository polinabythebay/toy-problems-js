//given n, how many combinations sum up to n from
//an array of numbers

coins = [2,1,5,10,20,50,100,200];

function makeChange(total, coins) {
    
    //sort coins from largest to smallest
    coins.sort(function(a,b) {return b-a});
    var combinations = 0;
    
    function recurse(index, remainder) {
        var coin = coins[index];
        if (index === coins.length-1) {
            //if smallest coin is always one,
            //do this
            combinations++;
            //otherwise, need to do this:
            //remainder % coin === 0 && combinations++;
            return;
        }
        
        while(remainder >= 0) {
            //console.log("index", index+1, "remainder", remainder);
            recurse(index+1, remainder);
            remainder -= coin;
        }
       
    }
    //start with largest coin at index 0
    recurse(0, total);
    return combinations;
}

makeChange(5,coins);






//////*************** Take TWO *******************/////////

//some approaches: iterate from highest to lowest
//if biggest coin is smaller
//if it is smaller, branch from there

//general: generate combinations that fit a constraint

function makeChange = function(total, coins) {
    //total number of valid coin combinations
    var counter = 0;
    coins.sort(function(a,b)(return a-b}));

    //create inner recursive function
    //index: which coin we're currently at
    function recurse (index, remainder) {
        //start with greatest coin in coin set
        //index = coins.length-1
        //remainder = total
        var coin = coins[index];

        //a base case that's reasonable: when remainder is 0
        //another base case: when index is last coin
        //we've gone through all possible coins
        if (index === 0) {
            //if index of 0 is 1, then just return counter++

            //we've found a valid combination
            //if the remaining change needed is evenly divisible
            //by the smallest coin
            //if so, increment
            remainder % coin === 0 && counter++;
            //short circuiting: if the first
            //is falsy, it doesn't do the rest of the
            //expression. if the first is truthy,
            //it does the rest of the expression
            //Idiom: a poor man's if
            //MORE clever than clear: value clarify

            //return out of this particular call
            return;
        }

        while (remainder >= 0) {
            recurse(index-1, remainder);
            //subtract the current coin we are on
            //from the remainder
            //if remainder >= 0, we keep 
            //recursing through our inner function
            remainder -= coin;
        }
    }

    recurse(coins.length-1, total);
    return counter;
}

//////*************** Take ONE *******************/////////

//1
//1, 1-1=0, add 1 possibility
//check next by popping 1, and adding next one (2)
//if 1-2 >= 0, add another possibility. else, pop off 2
//and add next one (5)

//once you get to the end of the array and you've popped off all values
//then you know you're done
function findSolution(num, index, stack) {
    var current_coin = coins[index];
    var current_num = num;
    
    //if we've gone to the end and 
    //still haven't found a solution
    //with our current stack
    if (index === coins.length) {
        
        console.log("got to the end");
        //we pop off another coin
        //and reset index to be the next coin
        // var next = stack.slice();
        // var last_coin = next.pop();
        // current_num = num + last_coin;
        // index = coins.indexOf(last_coin) + 1;
        
        // console.log("index", index, "next", next, "current num", current_num);
        
        // if (index > coins.length) {
        // console.log("we've returned");
        // return;  
        // }
        return;
    }
    
    //try to find a solution
    while(current_num > 0) {
    //if stack is empty and current value last value
    //return
    
    if (current_num - current_coin > 0) {
        stack.push(current_coin);
        //keep adding more to the stack
        current_num--;
        continue;
 
    }
    
    if (current_num - current_coin === 0) {
        //our current stack is one valid solution
        //push that valid solution to results
        stack.push(current_coin);
        results.push(stack);
        current_num--;
        continue;
    }
    
    current_num = current_num - current_coin;
    
    //if num < 0, it will break out of the while loop
    }
    
    //if num =< 0 and index is arr.length -1
    //then you need to pop off another one from the stack
    
    var next_stack = stack.slice();
    //if current num is 0, then just assign it to
    //the last value of the stack
    if (current_num === 0) {
        current_num = next_stack.pop();
    }
    
    //then assign it to num and try next index to 
    //find a solution
    if (current_num < 0) {
        current_num = num;
    }
    
    console.log("stack", stack, "index", index, "number", current_num);
    console.log("results", results);
    
    //go to next coin to find another solution
    index++;
    
    //recurse
    findSolution(current_num, index, next_stack);
}
var stack = [];
var num = 5;
var index = 0;
findSolution(num,index,stack);
stack = [ 1, 1, 1,];
findSolution(2,1,stack);