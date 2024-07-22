
// Tests for equality with strings 1
   console.log("Equality test with strings: " , "Apple" === "Apple");
   
// Tests for inequality with strings 2
   console.log("Ineuality test with strings: ", ("Apple" as string) != "Orange");   // (as string) intensionally bataya hai
   
// Tests using the lower case function
   console.log("Lower Case function test: ", "HELLO".toLowerCase() === "hello");

// Numerical tests involving equality
   console.log("Equality test with numbers: " , 22 === 22);

// Numerical tests involving inequality
   console.log("Inequality test with numbers: " , (22 as number) != 30);

// Numerical tests involving greater than
   console.log("Greater than test: ", 10 > 5);

// Numerical tests involving Less than
   console.log("Less than test: ", 5 < 10);

// Numerical tests involving greater than or equal
   console.log("Greater than or equal to test: ", 10 >= 10);
   
// Numerical tests involving less than or equal
   console.log("Less than or equal to test: ", 5 <= 5);
   
// Tests using "AND" operator
   console.log("And operator test: ", 5===5 && 10>5 );  // both condition should be true then the answer will be true 

// Tests using "OR" operator  
   console.log("OR operator test: ", 5===5 || 5>10 );  // only one condition is true the ans will be true

// Test whether an item is in a array
    let fruits :string[] =['Apple' , 'Banana', 'Orange'];
    console.log('Test "Apple" in the array: ', fruits.includes('Apple'));

//  Test whether an item is not in a array
     console.log('Test "Mango" is not in the array: ', !fruits.includes('Mango'));







    


