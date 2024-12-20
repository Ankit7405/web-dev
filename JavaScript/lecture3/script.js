// Examples of arthematic operators

let a = 5;
let b = 2;

// These are the examples of terenery operators 
console.log("Addition" + (a + b));
console.log("Substraction" + (a - b));
console.log("Multiplication" + (a * b));
console.log("Division" + (a / b));
console.log("Modulus" + (a % b));
console.log("Power like a to the power b" + (a ** b));

// These are the example of unary operator
let c = 5;
// Pre increment -> First print current value and then increase the value
console.log(c++);
console.log("Pre Increment",c);

let d = 5;
// Post increment -> First inc or dec the value and then print it
console.log(--d);
console.log(d);

// Comparison operator
// Loose equality it is denoted by ==
// Here it just compares the value and does not comapre the type of the variable and returns result 
console.log("5" == 5);
console.log(false == 5);

// Strict equality it is denoted by ===
// Here it comapares both value and type of the variable and if both are same then returns true otherwise returns false
console.log("5" === 5);
console.log(5 === 5);

// Terenary operator
let age = 17;
let voteStatus = age > 18 ? "I Can Vote" : "I cannot vote";
console.log(voteStatus);

// Logical Operator
// AND -> && all conditions to be true then only will return true
// OR -> || if anyone condition will become tru then will return true
// NOT -> ! negation

// There is one thing here what if we use logical operator with on boolean value
// There is concept of falsey and Truthy
// Falsey -> Undefined, null, 0, false, NaN, " "
// Truthy -> Anything that is not falsy
// Here in this case true and Ankit is also true so it will print Ankit
console.log(true && "Ankit"); 
console.log(true || 0);
console.log(false && 0);

// There is also concept of short circuiting
// Here we see that in fist condition itself we got true -> false || 7 -> 7 so other operaions are not conidered and result is returned directly
console.log(false || 7 || 10 || 45);

// Bitwise Operators

// AND Operator converts the number into binary form and then does the and operation
console.log(2 & 5);
// OR 
console.log(2 | 5);
// NOT -> Flips the binary bits of the number 
console.log(~1);
// XOR
console.log(2 ^ 2);
// Left shift -> basically it shifts the bits of the representation to left side but the provided number of times
// Lets say we need left shift of 5 by 1 5<<1 -> 10
// Generally a<<b -> a * 2^b
console.log(5<<1);
// Right Shift -> a>>b -> a / 2^b
console.log(10>>1);







