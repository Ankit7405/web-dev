import React from 'react'
import { useContext } from 'react'
// import { UserContext } from '../App';
import { ThemeContext } from '../App'

const ChildC = () => {
    //Step 4: -> Consuming of Value in a particular child
    // const user = useContext(UserContext); 
    const {theme, setTheme} = useContext(ThemeContext);

  function handleClick(){
    if(theme === 'light'){
        setTheme('dark');
    }else{
        setTheme('light');
    }
  }  
  return (
    <div>
      {/* {user.name} */}
      <button onClick={handleClick}>
        Change Theme
      </button>
    </div>
  )
}

export default ChildC
