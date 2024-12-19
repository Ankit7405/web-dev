// Below is the basic example showing concept of closure
// Here we have nested function
function outerFunction(){
    // We have defined one variable that belongs to outerFunction() scope
    let name = "Ankit Malviya";

    function innerFunction(){
        // And now we are calling this variable to be printed inside another function
        console.log(name);
    }

    // And we are returning the innerFunctionRef
    return innerFunction;
}

let innerFunctionRef =  outerFunction();
// Now as per general concept once the outer function executution is done the scoped variable should be garbage collected
// And the collected value when we try to reach should give error as in line 9
// But as per closure the function and it's blonged members(variables and inner functions) or binded together and when access independently outside nested scope will be working
// Here we need to keep in mind that copy of name is not created but instead refrence is still intact and that is utilised when that function is called
innerFunctionRef();