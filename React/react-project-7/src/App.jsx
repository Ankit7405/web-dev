import './App.css'

function App() {

  function handleClick(){
    alert("Button is clicked");
  }

  function handleHover(e){
    alert("Mouse over is done", e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault();
    alert("Action for form submission");
  }

  function fieldValidation(e){
    console.log("Value changed ", e.target.value);
  }

  return (
    <>
      <div>
        {/* Here in react we can do event handling in this easy way unlike in js where we need to selecto one elment then then add event listener and then add the function to write it's behaviour */}
        <button onClick={handleClick}>Click Me</button>

        {/* This type of function writing is wrong since it will cause imidient invocation without can event also just after loding the page which is not desirable */}
        {/* <button onClick={alert("Button Clicked")}>Click Me</button> */}
        {/* Correct way */}
        {/* <button onClick={() => alert("Button clicked")}>Click Me</button> */}

        {/* <p onMouseOver={handleHover}>
          Hi This a para for hover action
        </p> */}
      </div>

      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name: </label>
        <input id='name' type="text" onChange={fieldValidation} />
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default App
