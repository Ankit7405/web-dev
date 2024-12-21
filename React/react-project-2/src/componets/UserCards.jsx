import React from 'react'
// We have to import the image / video or any other item that we will be using in this page
import profilePic from '../assets/1724476502479.jpeg'
// Also we need to import CSS file to make the styling effective
import './UserCards.css'

// This is a componet and as we know that reatc is component basis library
// Anin vague terms we can say that componet is just a function that returns some HTML code
// And here also we can see that creation of Arrow function and it is returning some html code

// In order to handle props that are sent from App.jsx we need to handle here  
const UserCards = (props) => {
  return (
    // Here we need to note that we cannot use class attribute since it is reserved for java script so as an altenative we need to use className
    <div className='user-container' style={props.style}>
        {/* And here we will be passing that name value like this how we do in js code also */}
        {/* That's why jsx file is told like it is place where we are runnig the html and js code combined */}
        <p id='user-name'>{props.name}</p>
        <img id='user-img' src={profilePic} alt='profilePic'></img>
        <p id='user-desc'>{props.desc}</p>
    </div>
  )
}

export default UserCards