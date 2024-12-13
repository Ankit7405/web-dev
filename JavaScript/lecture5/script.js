// Functions in js

// Function declarations
function sayMyName(){
    console.log("My name is Ankit Malviya");
}

// Function calling
sayMyName();

function countTill100(){
    for(let i = 1; i <= 100; i++){
        console.log(i);
    }
}

countTill100();

// Paramitrised function
function printNumberLimit(lowerLimit, upperLimit){
    for(let i = lowerLimit; i <= upperLimit; i++){
        console.log("Function print " + i);
    }
}

printNumberLimit(5, 10);

// Returning functions
function averageEntries(a, b, c){
    return (a + b + c) / 3;
}

console.log("Average of entries: " + averageEntries(2, 3, 4));

// This is also one way of using function here we don't give the name of the function and associate the function with a var name and then call the function also with that
const var123 = function(a, b){
    return a * b;
}
console.log(var123(2, 4));

// Arrow annotations of functions in js

// Normal way of writing function
// function expPow(x, y){
//     return x**y;
// }
// console.log(expPow(2, 10));

// This is function without it's name
// let expPow = function(x, y){
//     return x**y;
// }
// console.log(expPow(2, 12));

// Arrow conversion
let expPow = (x, y) => {
    return x**y;
}
console.log(expPow(2, 12));



