import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card';

function App() {
  // This is the ilustration of state lifting in React
  // Baiscally we have seen that there was flow of data from parent to child via props 
  // But what if we want to send data from child to parent in this case Card comp to App comp
  // State lifting -- Whenever child nodes have to maintain sync among them their responsibility is shifted to their parent to create/manage/change the state. The parent then send props to reflect changes in the child nodes.
  const [name, setName] = useState('');
  return (
    <>
      <div>
        {/* For this thing we have created a basic state and a function and passed it as an argument */}
        {/* Which we need to handle from child */}
        {/* And whatever changes done from child will be reflected here also */}
        <Card title="Card1" nameVar={name} setNameFunction={setName} />
        {/* As for checking this thing we can print same here */}
        <p>Value check in parent {name}</p>
        {/* Also now let's assume we have a relation where for a sigle parent there are multiple children then if we have updated the value from one child that */}
        {/* Can we again uitlised in other childs also  */}
        <Card title="Card2" nameVar={name} setNameFunction={setName} />
      </div>
    </>
  )
}

export default App
