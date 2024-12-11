// // Below are are the examples of vairables in JS 

// // This is one way of assigninig the variable
// var age = 25;
// console.log(age);

// if(true){
//     // Since in this case agr was globally initialised so we can use it inside if block
//     console.log('Inside if block ' + age);    
// }

// function test(){
//     // Now this variable name is defined as function scoped so will only be used inside function and not outside if used will get error 
//     var name = "Ankit";
//     console.log("Name " + name);
// }
// // This will give RefrenceError
// // console.log(name);
// test();

// // These is also problem of redeclaring the values at anypoint using var and also changing the type of value
// var number = 123;
// console.log(number);
// var number = 456;
// console.log(number);

// // Type can also be changed which is very absurd thing about this
// var number = "Ankit";
// console.log(number);

// let is block level assigment of variables that means that it will be assessed within a block defines by {}
// {
// let a = 10;
// console.log(a);
// }
// Here we are outside the block {} so this will not be utilised 
// console.log(a);

// // Here redecleration of same variable is not possible
// let b = 20;
// // Will throw SyntaxError: Identifier 'b' has already been declared this error
// let b = 45;
// console.log(b);

// But assigning of diffrent value is possible here also
// Since JS being dynamically type language so we can change that value and type of variable 
// let c = 45;
// console.log(c);
// c = "Ankit";
// console.log(c);

// Now we have const to make a values constant throughout
// const value = 10;
// console.log(value);
// // Thi is not possble in const
// value = 20;
// console.log(value);

// Primitive datatypes

// This is an example of number datatype
let char = 123;
// This is an example of String
char = "abc";
// This is an example of boolean
char = true;
// This is an exaple of null datatype
char = null;
// This is an example of big data datatype
char = 646456575878778980890890980890890890890;
console.log(char);

// This is an exaple of undefined datatype
let name;
console.log(name);
// Here we have a function type of that tell that the vairble is of which datatype
console.log(typeof(name));

// This is an example of uniqiue symbole and also it's immutable also if we compare 2 same symboles it will return false
let x = Symbol("Kr$na");
console.log(x);







