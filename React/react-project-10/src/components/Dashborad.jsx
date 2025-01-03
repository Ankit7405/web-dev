import React from 'react'
import { Outlet } from 'react-router'

const Dashborad = () => {
  return (
    <div>
      Dashboard
      {/* If you are using children for routig then you have to give this Outlet tag for their parent */}
      <Outlet/>
    </div>
  )
}

export default Dashborad
