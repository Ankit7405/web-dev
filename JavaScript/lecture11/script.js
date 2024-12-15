// Objects are dynamic in nature 

let obj = {
    name: "Ankit",
    age: 25,
    city: "Bhopal"
};

console.log(obj);
// Dynamically entering properties at runtime
obj.state = "Madhya Pradesh";
console.log(obj);

// This process is not considered as copying because it's just pointing to the same refrence as the orignal object
// let copyObj = obj;
// console.log(copyObj);

// Cloning using spread operator
// Now in this case a new refrence is created and then it is cloned
let copyObj = {...obj};
console.log(copyObj);

// Cloning using assign method
let cloneUsingAssign = Object.assign({}, obj);
console.log("Cloning using assign method", cloneUsingAssign);

let obj2 = {
    gender: "Male",
    experince: 3
};
// Here we are cloning a object from 2 different objects
cloneUsingAssign = Object.assign({}, obj, obj2);
console.log(cloneUsingAssign);

// Cloning of objects using iterations
// This method is not generally prefered because if there are nested objects then it becomes difficult to do cloning via for loop
let cloneUsingIteration = {};
for(let key in obj){
    let newKey = key;
    let newValue = obj[key];
    cloneUsingIteration[newKey] = newValue;
}
console.log("Cloning of objects using iterations", cloneUsingIteration);







