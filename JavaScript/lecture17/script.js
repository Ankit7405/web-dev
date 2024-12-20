// Promises are basically used for asynchronous process to mark it's state like : pending, resolved, reject
// It's basically comes into picture because there is no multihreading in JS and we have to some how handle async process or methods so we use this to handle it's execution result

// let firstPromise = new Promise( (resolve, reject) =>{
//     // If we put sync code inside this promise then it would run normally as it was runnig previously
//     // But since we are inside promise to it will return some state and in this case it will return pending state
//     console.log("Hello hi inside from promises");
//     // So to finalise some state we can use reject or resolved function
//     // reject(new Error("Internal Server Error"));
//     resolve();
// });

// let secondPromise = new Promise( (resolve, reject) => {
//     setTimeout(function sayMyName(){
//         console.log("My name is Ankit Malviya");
//     }, 10000);
//     resolve(200);
//     // When using reject state then the promise code will not be executed and directly this reject state is returned
//     //reject(new Error("This is error from promise"));
// });

// let thirdPromise = new Promise( (resolve, reject) => {
//     let status = true;
//     if(status){
//         resolve("Status is 200");
//     }else{
//         reject("Status is 400");
//     }
// });

// Now based on the state that is fullfiled or rejected we can also do some further actions like
// then() here tells that ok if your promise is fullfilled then what actions we need to do
// catch() here tells that ok if your promise goes onto rejected state then what we need to do
// thirdPromise.then((message) => {
//     console.log(message.toUpperCase());
// }).catch((error) => {
//     console.log(error.toUpperCase());
// });

// We can also use multiple chaning with then statement
// thirdPromise.then((message) => {
//     console.log("This is first success message " + message);
//     return "This is first success message " + message;
//     // Now the next then block will consume the returned value from previous block
// }).then((message) => {
//     console.log("This is second success message " + message);
//     return "This is second success message " + message;
// }).then((message) => {
//     console.log("This is thrird success message " + message);
// }).catch( (error) => {
//     console.log("This is error message " + error);
    
// }).finally((message) => {
//     console.log("I am finally and will be executed irrespective of exception or errors");
// });

// Now lets say we have a condition that we have multiple promises and we want to handle their behaviour with a single entity that is also other promise
let promiseSet1 = new Promise((resolve, reject) => {
    // This is also a way to write a timeout function where me mark the state and time and also promise message
    setTimeout(resolve, 1000, "First");
});

let promiseSet2 = new Promise((resolve, reject) => {
    // This is also a way to write a timeout function where me mark the state and time and also promise message
    setTimeout(resolve, 2000, "Second");
});

let promiseSet3 = new Promise((resolve, reject) => {
    // This is also a way to write a timeout function where me mark the state and time and also promise message
    setTimeout(reject, 3000, "Third");
});

// Now for this approch we have Promise.all method that take argument as array which will tell which promise to include
// And if all the promise is resolved then this promise will also be marked as resolved
// And if anyone of the promise is failed then then the main promise will also be failed
let mainPromise =  Promise.all([promiseSet1, promiseSet2, promiseSet3]).then((message) => {
    // If we have more then one promise then this message will also be in form of an array
    console.log("Success message " + message);
}).catch((error) => {
    console.log("Error message" + error);
});