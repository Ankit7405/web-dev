// Loops in js 

// For loop
let count = 0;
for(let i = 0; i < 10; i++){
    count++;
    console.log("Hi This is for loop for iteration " + i);
}
console.log("Count is " + count);

// Use of break with for loop
// Here we need to see that onto whichever iteration we put brek that would not compplete its looping part till end 
for(let i = 0; i < 10; i++){
    if(i == 4){
        break;
    }else{
        console.log("Value print" + i);
    }
}

// Use of continue with for loop
// Continue keyword skip the particular iteration and then moves onto next iteration
for(let i = 0; i <= 10; i++){
    if(i % 2 != 0){
        continue;
    }else{
        console.log(i);
    }
}

// While loop
let i = 0;
while(i <= 10){
    console.log("While loop " + i);
    i++;
}

// Do while loop
// Generally we don't prefer using this type of loop because here in 1st iterations condition is not chanked will be executed withut any checks 
let k = 0;
do{
    console.log("Do while loop " + k);
    k++;
}while(k <= 10);

// Strings Examples

// Creation of strings in js
let name = "Ankit";
console.log(name);

let name1 = 'Ankit Malviya';
console.log(name1);

// If there are some enters in the string and we want it to be printed in that format then it is not possible in this way
// let name2 = "Ankit 
// Malviaya";
// console.log(name2);

// For this case we use tempalte String
let name2 = `Ankit 
Malviya 
is 
my 
name`;
console.log(name2);

// Using new keyword
let name3 = new String("Ankit");
console.log(name3);

// Concatination
let firstName = "Ankit ";
let lastName = "Malviya ";
console.log(firstName + lastName);

// Concation via placeholders 
console.log(`${firstName}${lastName}`);

// Length
console.log(firstName.length);

// Uppercase and lowercase
console.log(firstName.toUpperCase() + lastName.toLowerCase());

// Substrings 
let str = "Abrakadabra";
console.log(str.substring(4));
console.log(str.substring(1,5));

// Split
let str1 = "Hi My name is Ankit Malviya";
console.log(str1.split(" "));

// Join
let str123 = str1.split(" ");
console.log(str123.join(","));










