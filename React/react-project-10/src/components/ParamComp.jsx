import React from 'react'
import { useParams } from 'react-router'

const ParamComp = () => {
    // As a part of url we are passing a path variable the we can handle that here using usePram() hook
    const {id} = useParams();
  return (
    <div>
      Param : {id}
    </div>
  )
}

export default ParamComp
