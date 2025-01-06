import { useState } from 'react'
import './App.css'
import { useMemo } from 'react';

function App() {
  const[count, setCount] = useState(0);
  const[input, setInput] = useState(0);

  // Use memo hook is use for memoization in react
  // Basically for exapmle if we are doing some same operation and page is again and again getting render
  // So we can useMemo hook to store a particular iteration result and when our code comes to execute that function again it directly provides that result and that extra function is not called

  // Like here in this example if we directly call this function which has a for loop of 100000 which will create dealay for other operation like count also which is not correct
  // And this happends since we know that for change in state variable there will be re render so every time thi funcion will be executed and dealy is created
  // let doubleValue = handleExpensiveOperation(input);

  // So in order to save gurad that we use this hook
  // This takes one function which we need to safegurard and also and array which have state varaibles on which change this hook will be called
  let doubleValue = useMemo(() => handleExpensiveOperation(input), [input]);

  function handleExpensiveOperation(){
    console.log("Inside expensive operation");
    for(let i = 0; i < 1000000; i++){

    }
    return input * 2;
  }

  return (
    <>
      <button onClick={() => {setCount(count + 1)}}>Increment</button>
      <br/>
      <p>Count : {count}</p>
      <input type="number" value={input} onChange={(e) => setInput(e.target.value)} />
      <p>Double value: {doubleValue}</p>
    </>
  )
}

export default App
