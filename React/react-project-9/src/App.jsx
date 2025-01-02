import { createContext } from 'react'
import './App.css'
import ChildA from './components/ChildA'
import { useState } from 'react';
import ChildC from './components/ChildC';


// Step: 1 -> Create context
// const UserContext = createContext();

const ThemeContext = createContext();

function App() {

  // Concept of prop drilling: let's assume we have case of multilevel inheritance where we have one parent
  // And that has one child and then that child have one more child and so on
  // Now we want to send data from parent to the lowset level child we can do that using props
  // But here we need to pass that data through all the child at upper levels
  // And this is not correct since we need data in only one child and instead we are passing it through all the childs 
  // This concept is called prop drilling

  // And to overcome that we can use useContext hook

  // Step 3 : -> Passing of a value
  // const[user, setUser] = useState({name:"Ankit"});

  const[theme, setTheme] = useState('light');

  return (
    
    <>
      {/* Step 2: -> Wrapping of all the child inside a provider */}
      {/* This wrapping will make sure that these are the hild which would require the use of value sent from parent and can have more than one child also */}
      {/* <UserContext.Provider value={user}>
        <ChildA/>
      </UserContext.Provider> */}

      <ThemeContext.Provider value={{theme, setTheme}}>
        <div id='container' style={{backgroundColor:theme === 'light' ? "beige" : "black"}}>
          <ChildA/>
        </div>  
      </ThemeContext.Provider>


    </>
  )
}

export default App
// export {UserContext}
export {ThemeContext}
