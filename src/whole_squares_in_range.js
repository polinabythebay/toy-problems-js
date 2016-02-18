//given a range A...B return
//how many whole squares you can find in that range
//for example, 4..17 has 3 whole squares (4, 9, 16)

function solution(A, B) {

    var counter = 0;
    var current = 0;
    
    //first attempt
    //iterate over range
    // for (var i = A; i <= B; i++) {
        
    //     //check if integer is a whole square
    //     current = Math.sqrt(Math.abs(i));
        
    //     console.log("current", current);
        
    //     if (current % 1 === 0) {
    //         counter++;
    //     }
        
    // }
    
    //take square root of both A and B
    var rootA =  Math.sqrt(Math.abs(A));
    var rootB = Math.sqrt(Math.abs(B));
   
    //take floor of B
    rootB = Math.floor(rootB);
    console.log("B root", rootB);
    
    //take ceiling of rootA if not a whole square
    if (rootA % 1 !== 0) {
        rootA = Math.ceil(rootA);
        console.log("A root", rootA);
    }
    
    //return whole numbers between range, inclusive
    for (var i = rootA; i <= rootB; i++) {
        counter++;
    }
    
    return counter;
}


solution(17, 18); //should return 3 because there are 3 whole square