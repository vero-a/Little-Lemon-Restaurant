import React from 'react';
import GreekSalad from '../../assets/greek salad.jpg';
import Bruschetta from '../../assets/Bruschetta.png';
import LemonDessert from '../../assets/lemon dessert.jpg';
import SpecialsCard from '../Sections/Cards/SpecialsCard';
import {Carousel} from 'react-responsive-carousel';

function SpecialsCarousel() {
  return (
    <Carousel infiniteLoop={true} autoPlay={true} Interval={5000} showStatus={false}>
        <SpecialsCard image={GreekSalad} name="Greek Salad" price="$12.99" description="Feta Cheese, tomato, lettuce"/>
        <SpecialsCard image={Bruschetta}name="Bruschetta" price="$5.99" description="Bread, mango, green onions"/>
        <SpecialsCard image={LemonDessert} name="Lemon Dessert" price="$5.00" description="Lemon bread, vanilla Icing"/>
    </Carousel>

  )
}

export default SpecialsCarousel