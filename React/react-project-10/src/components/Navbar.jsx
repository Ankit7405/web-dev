import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import About from './About'
import Home from './Home'
import Dashborad from './Dashborad'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
            {/* Here we are using link tag that is from react router dom and not anchor tag because that will always reload the page */}
            <NavLink to='/' className={({isActive}) => isActive ? "active-link" : ""}><Home/></NavLink>
        </li>
        <li>
            <NavLink to='/about' className={({isActive}) => isActive ? "active-link" : ""}><About/></NavLink>
        </li>
        <li>
            <NavLink to='/dashboard' className={({isActive}) => isActive ? "active-link" : ""}><Dashborad/></NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
