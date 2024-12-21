import React from 'react'

const Card = (props) => {
  return (
    <div>
        {/* With help of props you can handle both the state and the function */}
        {/* but in order to get value that usr has entered in input filed we have to use event properties similar to JS */}
      <input type="text" onChange={(event) =>{
        props.setNameFunction(event.target.value)
      }}/>
      <p>Name state variable inside Child component {props.nameVar} with Title as {props.title}</p>
    </div>
  )
}

export default Card
