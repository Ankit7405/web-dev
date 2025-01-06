import React from 'react'

// When in case of passing just buttonName as prop from parent component we see that if we use React.memo then while interacting with parent things child is not re rendering
const Child = React.memo((props) => {
console.log("Re-rendering of child component");
  return (
    <div>
    <br />
      <button onClick={props.function}>{props.buttonName}</button>
    </div>
  )
});

export default Child
