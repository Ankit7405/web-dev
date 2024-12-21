import React from 'react'
import './Counter.css'
import { useState } from 'react'

const Counter = () => {
    // This is use of hooks
    // Hooks is nothing but a way to connect to the funcationaliy provide by React so that we can reduce the basic js code and use inbuit React funcationalities
    // Similarly among one of the hooks we have useState hook which is used to store the star of any component
    // Like in this example we are using it to store the count state of a counter
    // Unserstanding syntax: count -> state variable defiens the state, setCount -> state function that defines the function that need to be called upon some actions, useState(0) -> this deine use of hooks and here for argument we give initail value   
    // Also once we have done this operation so the state of this variable is changed so throuout the application the value will be updated
    const [count, setCount] = useState(0);
  return (
    <div className='counter-container'>
        <p id='content'>You have clicked {count} times</p>
        {/* Here upon onClick action we are calling setcount() state function and also increasing state variable */}
        <button id='button' onClick={() => {
            setCount(count+1)
        }}>Click Me</button>
    </div>
  )
}

export default Counter