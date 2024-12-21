import React from 'react'
import './Card.css'

function Card(props) {
  return (
    // These childers can be accessed using props
    <div>Card {props.name} <br/> {props.children}</div>
  )
}

export default Card