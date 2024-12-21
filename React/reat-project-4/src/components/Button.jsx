import React from 'react'

const Button = (props) => {
  return (
    // This is how we pass an function dynamically using props
    <><button onClick={props.handleClickVar}>Click Me</button>
    <div>
    {props.children}
    </div>
    </>
  )
}

export default Button