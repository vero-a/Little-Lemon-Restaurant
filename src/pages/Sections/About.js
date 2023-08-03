import React from 'react'

function About() {
  return (
    <article className="about-us">
    <section className="hero-text">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p className="about-subtext">Little Lemon is a family owned Mediterranean restaurant, located on  Maldove Street in Chicago, Illionis. Focused on traditional recipes served with a modern twist.</p>
    </section>

    <section className="overlap-images">
        <img className="about-1" src={require('../../assets/restaurant chef B.jpg')} alt="Little Lemon restaurant chef"></img>
        <img className="about-2" src={require('../../assets/restaurant.jpg')} alt="Little Lemon restaurant decor"></img>
    </section>
    </article>
  )
}

export default About