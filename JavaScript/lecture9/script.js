// Classes and objects in js

class Student {
    // By default all the members or parameters are public but if want to make it private then we need to use # with field name
    studName = "Ankit";
    // Now this becomes private member
    #age = 45;
    city = "Bhopal";
    isMale = true;

    // Similar to java we can also initilise class members with help of paramatrised constructor
    constructor(newStudName,newAge,newCity){
        this.studName = newStudName;
        this.#age = newAge;
        this.city = newCity;
    }

    walking(){
        console.log("Student " + this.studName + " from " + this.city + " is walking");
    }

    running(){
        console.log("Student is runnig at age" + this.#age);
    }

    // Similar to the members we can also create private functions
    #dancing(){
        console.log("Students are dancing");
    }

    // Similar to java inorder to access private members we have getters and setters
    get getAge(){
        return this.#age;
    }

    set setAge(age){
        this.#age = age;
    }
}

let student = new Student();
console.log(student.studName);
// Now if we try to access private member then we will not get it's value
console.log(student.age);
// Now In this way we can access private value using getter method
// Here we need to keep this thing in mind that it's not used like normal function call functionName() but just by it's name
console.log(student.getAge);
// Setting value to a private member
student.setAge = 55;
console.log(student.getAge);

student.walking();
student.running();

let student1 = new Student("Amit", 45, "Nagpur");
console.log(student1);
// Cannot directly access private function also
// student1.#dancing();


// Default value in paramatrized function
function sayMyName(name = "Deafault_Name"){
    console.log(name);
}
// There might be some case where we have a paramatrised function and we forgot to put value while calling function
// So we can put one default value while defining the arguments
sayMyName();

// There might be also this case where we have multiple parameters and they are dependent on someone 
function sayFullName(firstName = "Default_Name", lastName = firstName.toUpperCase()) {
    console.log("Full name is " + firstName + " " + lastName);
}
sayFullName();
// Case of passing null

// We can also pass objects and arrays as default arguemts
function returnValue(value = {name: "Default_name", age : 45, city: "Default_city"}){
    // We have of remember here that if we use + to concatinate the results then it will be converted to string so will not give correct result in this case of objects and arrays
    // So for these cases use , instead of + 
    console.log("Returning diffrent types of values", value);
}
returnValue();

function returnSomeValue(name = "Rahul"){
    console.log("Here is the name ", name);
}

// Case of passing null
// Null will be printed but if there is some dependecy then it will thow some error
returnSomeValue(null);

// Case of undefined
// In this case default value will be printed
returnSomeValue(undefined);

// We can also pass function as default parameter
function getBalance(){
    return 100;
}

function utility(name, balance = getBalance()){
    console.log("Utility ", name, " ", balance);
}

utility("Ankit");
utility("Ankit", 200);
