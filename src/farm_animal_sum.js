// Write a program to determine the answer to the following question.

// A farmer wants to spend exactly $100 to buy exactly 100 animals. 

// The animals each cost the following:
//     Cows: $10 
//     Pigs: $3
//     Chickens: 50¢

// He must buy at least one of each. 
// How many of each type of animal should he buy?

function pickAnimals(dollarAmt, numAnimals) {
    
    var denominations = [10, 3, 0.5];
    var purchaseList = {'chickens': 1, 'cows': 1, 'pigs': 1};
    var costList = {'0.5': 'chickens', 3: 'pigs', 10: 'cows'};
    
    var target = dollarAmt - 13.5;
    
    var output = [];
    
    function findCombinations(currentSum) {
        
        
        if (currentSum === target) {
          var totalAnimals = output.length + 3;
          if (totalAnimals >= numAnimals) {
             printAnimals();  
          }
             
        }
        
        for (var i = 0; i < denominations.length; i++) {
            var nextSum = currentSum + denominations[i];
            if (nextSum <= target) {
                output.push(denominations[i]);
                findCombinations(nextSum);
                output.pop();
            } else {
                return;
            }
        }
    }
    
    function printAnimals() {
        for (var i = 0; i < output.length; i++) {
            var animal = costList[output[i]];
            purchaseList[animal]++;
        }
        
        for (animal in purchaseList) {
            console.log(purchaseList[animal], animal);
            purchaseList[animal] = 1;
        }
        
        console.log("========================");
    }
    
    findCombinations(0);
    
}

pickAnimals(27, 2); //100, 100

