import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginBtn from './components/LoginBtn';
import LogoutBtn from './components/LogoutBtn';

function App() {
  // Here we are trying to do conditional rendering using a state variable
  // Here we have created a state var named userLoggedIn and function setLoggedInStatus to set it's state 
  // Based on that we will be doing different type of rendering
  const[userLoggedIn, setLoggedInStatus] = useState(false);

  // There is also one type of rendering that is early return
  // This is like a base case thing based on some special conditions we will do conditional rendering
  if(!userLoggedIn){
    return(
      <LoginBtn/>
    )
  }

  // Here we have done rendering uing if else block
  // if(userLoggedIn){
  //   return(
  //     <LoginBtn />
  //   )
  // }else{
  //   return(
  //     <LogoutBtn/>
  //   )
  // }

  // This can also be used using ternery operator
  // return(
  //     userLoggedIn ? <LogoutBtn/> : <LoginBtn/>
  // )

  // This rendering can also be done using logical opearator based on some other parameters also 
  return(
    <div>
      <h1>Welcome to react understating</h1>
      <div>
        {/* This tells that id both both condition is true then only the div will be rendered on UI otherwise not */}
        {userLoggedIn && <LogoutBtn />}
      </div>
    </div>
  )


}

export default App
