// Math objects in js

console.log(Math.PI);

// Here in function we passs array as an argument and then it provides the maximum value out of it
console.log(Math.max(3, 103, 556, 2, 1));

console.log(Math.min(2, 0, -61, 567, 3));

console.log(Math.round(1.234));

console.log(Math.ceil(1.23));

console.log(Math.floor(2.678));

// Provides a random number between 1 and 0
console.log(Math.random());

console.log(Math.abs(-678));

console.log(Math.sqrt(144));

console.log(Math.pow(2, 10));

// Date objects in js

let date = new Date();
// This will give current time stamp 
console.log(date);

// With this way we give dates as arguments like first year -> month index(starting from 0) -> day -> time in hour -> min -> sec
let newDate = new Date(2021, 2, 21, 7);
console.log(newDate);

let newDate1 = new Date('1998 Nov 29');
console.log(newDate1);

// Extracting respective data from the object
console.log(date.getDay());
console.log(date.getFullYear);
console.log(date.getHours());

// Setting new fileds in out date
newDate1.setHours(5, 50);
console.log(newDate1);



 
 












