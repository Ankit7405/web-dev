import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';
import { useRef } from 'react';

function App() {
  const[count, setCount] = useState(0);
  // Now what if I wante one more variable to inscrease with count value
  // let x = 0;
  // In order to make the value of x persistant we can use useRef() hook
  let x = useRef(0);

  // Now the second and the main use case of useRef() hook is that we can create a refrence of any DOM element(button, para etc)
  // And with that refrence we can also change it's properties
  // Previously in JS we were doing that using getElementById and then changing properties
  let btnRef = useRef();


  function handleIncrement(){
    // x = x + 1;
    // Here we see that every time this function is called value of x is 1 only
    // That tells us that that for every render the whole file is loaded from sctract and everytime value of x is set as 0
    // This also means that value of x is not persistant

    // Now since we have used useRef hook so inorder to increase or access value we need to use x.current which stores the actual value
    x.current = x.current + 1;
    // Now after doing this value of x becomes persistant and also increases based on the action
    // Also for change in state we know that there will be re render bu if we useRef then there will be no re render
    console.log("Value of var x: ", x.current);
    setCount(count + 1);
  }

  function handleColorCng(){
    btnRef.current.style.backgroundColor = "red";
  }

  // We have used here a varitent of useEffect where it will be rerendered on every state change
  useEffect(() => {
    console.log("Rerender and for change in count value");
  });
  
  return (
    <>
      {/* Attching the btnRef to the desired button */}
      <button ref={btnRef} onClick={handleIncrement}>
        Increment
      </button>
      <br />
      <button onClick={handleColorCng}>
        Change Increment Color
      </button>
      <br />
      <div>Count: {count}</div>
    </>
  )
}

export default App
