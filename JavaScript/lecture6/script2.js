// Sort method in an array
let arr7 = [2, 5, 1, 43, 3];
// This process is used to sort elements in ascending order 
arr7.sort((a, b) => a - b);
// This is used for sorting in desc order
arr7.sort((a, b) => b -a);
console.log(arr7);

// IndexOf Method in arrays
console.log(arr7.indexOf(43));

// Find function -> This method is used to find first element satisfying the condition we define as predicate
console.log(arr7.find((num) => num % 2 === 0));

// For each loop in js
arr7.forEach((value, index) => {
    console.log("Index value : " + index + " Value of respective index : " + value);
});

// For in loop
let obj = {
    name: "Ankit",
    age: 50,
    weight: 45,
    city: "Bhopal",
    // Here we can store key without "" also and with that also it's just that if you have some key valleu that includes space then we need to sotre it using ""
    "House no": 19,
    // We can also add function implementation as part of our object
    tellMyName: function(){
        console.log("Hello my name is Ankit Malviya");
        
    }
};

for(let key in obj){
    console.log(key, " ", obj[key]);
}

// For of loop in js
for(let value of arr7){
    console.log(value);
}

let strName = "Ankit Malviya";
for(let value of strName){
    console.log(value);
}

// Using arrays with function
function getSum(arr7) {
    let sum = 0;
    arr7.forEach((value) => {
        sum = sum + value;
    });
    return sum;
}
console.log(getSum(arr7));


 




