import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/Card.jsx'
import './App.css'
import Button from './components/Button.jsx'

function App() {
  const[count, setCount] = useState(0);
  function handleClickFunction(){
    setCount(count+1);
  }

  return (
    <><Card name="card-component">
      {/* The content inside the Component tag is considered as children of the componet and also can be accessed using props */}
      <h1>This is Sample heading</h1>
      <p>This is sample para1</p>
      <p>This is sample para2</p>
    </Card>
      {/* There is also an other way of sending childern like this */}
      {/* But we need to keep in mind that the inner of chard tag should be empty then only this will be considered otherwise the inner content will be considered as children */}
      <Card children="I am an other children">

      </Card>

      {/* For this button we want to pass the click function as an arguments for in this way we can pass this */}
      <Button handleClickVar={handleClickFunction}>
          <p>This is count {count}</p>
      </Button>
      </>
  )
}

export default App
