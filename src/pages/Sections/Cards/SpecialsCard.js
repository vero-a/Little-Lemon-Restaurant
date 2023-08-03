import React from 'react'
import { Link } from 'react-router-dom'

function SpecialsCard(props) {
  return (
    <div className="menu-card">
    <img src={props.image} alt="Specials Menu"></img>
    <section className="menu-card-content">
        <h1>{props.name}</h1>
        <h3>{props.price}</h3>
        <p>{props.description}</p>
        <Link className="special-button"to="/OrderOnline">Order a delivery</Link>
    </section>
    </div>
  )
}

export default SpecialsCard