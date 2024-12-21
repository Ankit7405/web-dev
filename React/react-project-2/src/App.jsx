import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserCards from './componets/UserCards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='main-container' style={{"border-radius":"20px"}}>
      {/* Now here what we wanted is that for 3 cards I need to pass the names dynamically and that should be poluated accordingly */}
      {/* We can do that using props in React */}
      {/* In the below code we have passed user-name as props */}
      {/* We can also pass css with style attribuite like below */}
      <UserCards name="Ankit" desc="Description for User 1" style={{"border-radius":"20px"}}/>
      <UserCards name="Ankit Malviya" desc="Description for User 2" style={{"border-radius":"20px"}}/>
      <UserCards name="Anki" desc="Description for User 3" style={{"border-radius":"20px"}}/>
    </div>
    </>
  )
}

export default App
