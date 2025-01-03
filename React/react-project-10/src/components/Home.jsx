import React from 'react'
import { useNavigate } from 'react-router'

// useNavigate is also an hook that is used to redirect to a particluar page
const navigate = useNavigate();
function handleClick(){
    navigate('/about');
}

const Home = () => {
  return (
    <div>
      Home
      <br />
      <button onClick={handleClick}>Move to About</button>
    </div>
  )
}

export default Home
