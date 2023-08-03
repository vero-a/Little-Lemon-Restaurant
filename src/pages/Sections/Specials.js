import React from 'react';
import GreekSalad from '../../assets/greek salad.jpg';
import Bruschetta from '../../assets/Bruschetta.png';
import LemonDessert from '../../assets/lemon dessert.jpg';
import SpecialsCard from '../Sections/Cards/SpecialsCard';
import Carousel from '../Sections/SpecialsCarousel';
import { Link } from 'react-router-dom';

function Specials() {
  return (
    <section className="specials">
    <article className="specials-heading">
        <h1>Specials</h1>
        <Link className="action-button" to="/Menu">Online Menu</Link>
    </article>

    <section className="specials-cards">
        <SpecialsCard image={GreekSalad} name="Greek Salad" price="$12.99" description="Salad, made with tomato, lettuce, feta cheese, and olives.
         Dressed with salt and olive oil."/>
        <SpecialsCard image={Bruschetta}name="Bruschetta" price="$5.99" description="Toasted bread, topped with tomato and balsamic vinaigrette."/>
        <SpecialsCard image={LemonDessert} name="Lemon Dessert" price="$5.00" description="A 4 layer lemon cake with vanilla buttercream."/>
    </section>

    <section className="specials-carousel">
        <Carousel />
    </section>
    </section>

  )
}

export default Specials