import React from 'react';
import Carousel from './TestimonialCarousel';
import TestimonialCard from './Cards/TestimonialCard';

function Testimonials() {
  return (
    <section className="testimonials">
        <article className="testimonials-header">
            <h1>Testimonials</h1>
        </article>
        <section className="testimonials-cards">
            <TestimonialCard name="Logan" description="Love it!"/>
            <TestimonialCard name="Mike" description="Tasty!"/>
            <TestimonialCard name="Jennifer" description="Amazing food!"/>
            <TestimonialCard name="Emma" description="Wow!"/>
        </section>

        <section className="testimonials-carousel">
          <Carousel />
        </section>
    </section>
  )
}

export default Testimonials