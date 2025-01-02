import { useEffect } from 'react'
import './App.css'
import { useState } from 'react'
import LoggerComponent from './components/loggerComponents'
import TimerComponent from './components/TimerComponent'
import DataFetcher from './components/DataFetcher'
import ResizeComponent from './components/ResizeComponent'
import MultiEffectComponent from './components/MultiEffectComponent'

function App() {

  // Use effect hook is used to handle any side effect operation on some element provided
  // Like for example on any portal if the user just logs in so we need to fetch the profile pricture from the db and then show on our portal as profile section
  
  // This is basic syntax for the useEffect hook
  // first -> Side effect function -> we can define like after any defined task what we need to do
  // second -> Clean up function
  // third -> Comma seprated dep list -> this is state variable where if any changes are done then the side effect function is called
  // useEffect(() => {
  //   first
  //   return () => {
  //     second
  //   }
  // }, [third])
  
  // const[count, setCount] = useState(0);
  // const[total, setTotal] = useState(1);

  // function handleClick(){
  //   setCount(count + 1);
  // }

  // function handleTotal(){
  //   setTotal(total + 1);
  // }

  // Varation 1 : Use without secound and third 
  // Now this will be called with every render of the webpage
  // Also will be called before every render before the count update logic
  // Also since we are using StrictMode in main.jsx that is dev mode so because of that this function will be called twice
  // useEffect(() => {
  //   alert("Varation 1 for useEffect is called");
  // })
  

  // Varation 2 : With empty dependency array
  // This varation will run only on first render and after that will not run
  // useEffect(() => {
  //   alert("Varation 2 for useEffect is called");
  // }, [])


  // Varation 3 : With some state variable as dep array
  // This varation will run only when the state varaible assigned gets changed
  // But here in this example we see that while loding page initially also this code runs
  // This is becase count is initially assigned as 0 and that here is also considered as change of state
  // useEffect(() => {
  //   alert("Varation 3 of useEffect");
  // }, [count])

  // Varation 4 : With multiple state variable
  // In this vartion we will be giving more than one state varaible and the when any of those updates then this code will be called
  // useEffect(() => {
  //   alert("Varation 4 of useEffect is called");
  // }, [count, total])

  // Varation 5 : With clean up function
  // In this varation we will be providing clean up function also based on some state variable
  // useEffect(() => {
  //     alert("Varation 5 of useEffect is called");
  //   return () => {
  //     // Here we can see for every click forts unmounting is called then the first part is updated
  //     // So this means that everytime we click first the unmounting of the value is done
  //     // Then the value is updated
  //     alert("Unmounting of count value");
  //   }
  // }, [count])
  
  
  return (
    <>
      {/* <div>
        <button onClick={handleClick}>
          Click Me
        </button>
        <br/>
        Count is : {count}
      </div>

      <div>
        <button onClick={handleTotal}>
          Update Total
        </button>
        <br/>
        Total is : {total}
      </div> */}

      {/* <LoggerComponent/> */}
      {/* <TimerComponent /> */}
      {/* <DataFetcher/> */}
      {/* <ResizeComponent/> */}
      {/* <MultiEffectComponent/> */}
    </>
  )
}

export default App
