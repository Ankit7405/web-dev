import React from 'react'
import { useNavigate } from 'react-router'

const navigate = useNavigate();
function handleClick(){
    navigate('/dashboard');
}

const About = () => {
  return (
    <div>
      About
      <br />
      <button onClick={handleClick}>Move to Dashboard</button>
    </div>
  )
}

export default About
