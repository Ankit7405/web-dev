// Objects in js
// Here in js objects is basicaly used to store values in form of key value pair and also here we can store functions as well
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

console.log(obj);
// Assesing the function
obj.tellMyName();

// Creation od an array
let arr = [1, 2, "Ankit", null, undefined];
console.log(arr);
console.log(typeof(arr));

// Arrays can also be created using constructor
let arr1 = new Array(1, 2, null, 'Ankit', "Ankit");
console.log(arr1);
console.log(typeof(arr1));

// Asscessing the elements of an arrays
for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

// In built methods in arrays 

// Push method -> inserts the element to the last of an array
arr.push(234);
console.log(arr);

// Pop method -> removes the last elemet of our array
arr.pop();
console.log(arr);

// Shift method -> This method removes the first element of an array
arr.shift();
console.log(arr);

// UnShift method -> This method inserts the element at the starting of an array
arr.unshift(1);
console.log(arr);

// Slice method -> It's like a substring for an array and with this we can extract a part of an array
// Here we defone the starting and ending index but the starting is inclusive and ending index is exclusive
let arr2 = arr.slice(2, 3);
console.log(arr2);

// Splice method -> This method is very important method since with this we can insert and remove the elements from the array
arr.splice(1, 2, "Bhopal", 123);
console.log(arr);














