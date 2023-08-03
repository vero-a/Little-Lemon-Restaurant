import React from 'react';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function TestimonialCard(props) {
  return (
    <article className='individual-testimonial-card'>
        <section className='Star-ratings'>
          <FontAwesomeIcon icon={faStar} style={{color: "#f2df0d",}} />
          <FontAwesomeIcon icon={faStar} style={{color: "#f2df0d",}}/>
          <FontAwesomeIcon icon={faStar} style={{color: "#f2df0d",}}/>
          <FontAwesomeIcon icon={faStar} style={{color: "#f2df0d",}}/>
          <FontAwesomeIcon icon={faStar} style={{color: "#f2df0d",}}/>
        </section>
        <p>{props.description}</p>
        <h3>{props.name}</h3>
    </article>
  )
}

export default TestimonialCard