import React from 'react';
import Heading from './Sections/Heading';
import Specials from './Sections/Specials';
import Testimonials from './Sections/Testimonials';
import About from './Sections/About';

function Home() {
  return (
    <div>
      <Heading/>
      <main>
        <Specials/>
        <Testimonials/>
        <About/>
      </main>
    </div>
  )
}

export default Home