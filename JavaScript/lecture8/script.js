// With var we can access the refrence of that vairiaqble before it is actually intansiated 
// Because in js it takes all the functions and var defined varaiable and instaiciate it at starting only

//Var case
// See in this case we don't get any error becase refrence of that var is already created at starting
console.log("marks before instincation", marks);
var marks = 100;
console.log("marks after instanciation", marks);

// const and let case
// Now this will throw error because let and const defined variable and functions are not instaciated at starting so it wil not be reached and we will get Reffrence error
console.log("marks before ins", marks);

// And because of this this piece of code will be considered as temporal dead zone
console.log("Hi there from dead zone");
console.log("Still this is dead zone");


let marks = 120;
console.log("marks after ins", marks);
