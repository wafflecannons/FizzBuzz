var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

for (var i = 0; i < myArray.length; i++) {
    if (myArray[i] % 3 === 0) {          
        if (myArray[i] % 5 === 0) {
            console.log("FizzBuzz");        
        } else { console.log("Fizz");
      }
    }
    else if (myArray[i] % 5 === 0) {
        console.log("Buzz");                
    }
    else {
        console.log(myArray[i]);
    }   
}

//test