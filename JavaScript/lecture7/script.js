// Function uses in js -> Reasons why it is called first class members in js

// First -> Function as expression
let nameStatus = function sayMyName(){
    console.log("Hi My Name is Ankit Malviya");
    return "Done";
}

// sayMyName();

// Passing function as an argument
function greetMe(sayMyName, fullName){
    console.log("Greetings of the day " + fullName);
    sayMyName();
}

greetMe(nameStatus, "Ankit Malviya");

// Function inside function
function solve(number){
    return function(number){
        return number * number;
    }
}

let ans1 = solve(5);
// Since we are calling functon inside another function so the main function will return schema of another function that's why in this console we don't see any output
console.log(ans1);
// Now the answer would be returned
let ans2 = ans1(5);
console.log(ans2);

// Storing functions inside an array 
let arr = [
    function(a,b){
        return a + b;
    },
    function(a,b){
        return a - b;
    },
    function(a,b){
        return a * b;
    }
];
// Extracting the function using index
let arrElement = arr[0];
console.log(arrElement);
let ansFunc =  arrElement(5, 10);
console.log(ansFunc);

// Using function as an value of object
let obj = {
    name: "Ankit Malviya",
    city: "Bhopal",
    greet: function(name, city){
        console.log("Hello " + name + " from " + city);
    }
};

obj.greet("Ankit ", "Bhopal"));







