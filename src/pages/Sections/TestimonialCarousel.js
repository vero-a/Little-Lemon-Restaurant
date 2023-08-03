import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import TestimonialCard from './Cards/TestimonialCard';

function TestimonialCarousel() {
  return (
    <Carousel infiniteLoop={true} autoPlay={true} Interval={5000} showStatus={false}>
      <TestimonialCard name="Logan" description="Love it!"/>
      <TestimonialCard name="Mike" description="Tasty!"/>
      <TestimonialCard name="Jennifer" description="Amazing food!"/>
      <TestimonialCard name="Emma" description="Wow!"/>
    </Carousel>
  )
}

export default TestimonialCarousel