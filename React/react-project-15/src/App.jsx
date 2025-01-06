import { useState } from 'react'
import './App.css'
import Child from './components/Child';
import ExpensiveComponent from './components/ExpensiveComponent';
import { useCallback } from 'react';

function App() {
  const[count, setCount] = useState(0);

  // function handleIncrement(){
  //   setCount(count + 1);
  // }

  // And because of below mentioned problem we need to use useCallback() hook
  // Which is used to freeze the function
  // Syntax of this hook is first a function needs to be passed which we need to freeze
  // and then dependencies need to be passed on change of which our function should work
  // Here we have passed count as dependency which is not correct but if we don't pass then function will be freezed at count = 1
  // Which tells that useCallback() is not a perfect application here
  const handleIncrement = useCallback(
    () => {
      setCount(count + 1);
    },
    [count]
  );
  

  return (
    <>
      <p>Count : {count}</p>
      <button onClick={handleIncrement}>Increment</button> 
         {/* Now here we have passed a normal var as a prop to the child */}
         {/* But since if we are interacting with the count funcationality then also child component is re rendering which is not good */}

         {/* See now as a part of second case we have passed a function i.e handleIncrement as prop to the child */}
         {/* And now we can see that if we are again interating with count function then also Child is re rendering and React.memo is also not able to handle that */}
         {/* This is because of the fact that in react for chnge in state our page gets re renders and for every re render it assign a function one ref and when we are passing that function as prop */}
         {/* It considers it as diffrent ref and also considers it as a new function because of which it is re rendering */}
      <Child buttonName="Click Me" function={handleIncrement}/>
      <ExpensiveComponent/>
    </>
  )
}

export default App
