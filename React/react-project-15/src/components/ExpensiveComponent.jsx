import React from 'react'
import { useRef } from 'react';
import { useEffect } from 'react';
import { useCallback } from 'react';
import { useState } from 'react'

const ExpensiveComponent = () => {

  const[text, setText] = useState("");
  const[count, setCount] = useState(0);
  const prevFunctionRef = useRef(null);

// Now here we can see that we have an expensive operation and we have 2 state vars but by only one this expensive operation needs to be done
// So we have used useCallback() hook with dependecy as count only so now funxtion will be called for both the cases but only new ref created in case of count state var change 
const expensiveCalculation = useCallback(
    () => {
      console.log("Expensive calculation");
      let result = 0;
      for(let i = 0; i < 100000; i++){
        result += i;
      }
      return result;
    },
    [count]
  );

//   Varification for ref creation
useEffect(() => {
    if(prevFunctionRef.current){
        if(prevFunctionRef.current.value === expensiveCalculation){
            console.log("Function not created");
        }else{
            console.log("Function got created");
        }
    }else{
        prevFunctionRef.current = expensiveCalculation;
    }
}, [expensiveCalculation])


  return (
    <div>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder='Type text' />
      <br />
      <p>Expensive Calculation Result : {expensiveCalculation()}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  )
}

export default ExpensiveComponent
