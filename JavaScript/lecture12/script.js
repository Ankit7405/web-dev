// Error handling in js
// Just like java we also use try catch and finally concepts
try{
    console.log("Inside try block");
    console.log(x);
}catch(err){
    console.log("Inside catch block handling logic");
    // These are the functions used to print error name and message
    console.log(err.name);
    console.log(err.message);
    
}finally{
    console.log("Finally logic here");
}

// Use of throw keyword to throw and error
try{
    let erroCode = 101;
    if(erroCode === 101){
        throw new Error("Invalid JSON");
    }
}catch(error){
    console.log(error.name);
    console.log(error.message);
}

// Creation of custom error 
class CustomError extends Error{
    constructor(message){
        super(message);
        this.name = "CustomError";
    }
}

try{
    throw new CustomError("Invalid JSON so throwing custom exception");
}catch(error){
    console.log(error.name);
    console.log(error.message);
}

