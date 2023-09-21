import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from "../pages/Home";
import Reservations from "../pages/Reservations";
import Menu from '../pages/Menu';
import About from '../pages/About';
import OrderOnline from '../pages/OrderOnline';
import Login from '../pages/Login';
import BookingConfirmation from '../pages/BookingConfirmation';

function Routing() {
  return (
    <Routes>
      <Route path='https://vero-a.github.io/Little-Lemon-Restaurant/' element={<Home/>}/>
      <Route path='/reservations' element={<Reservations/>}/>
      <Route path='/menu' element={<Menu/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/order-online' element={<OrderOnline/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/booking-confirmation' element={<BookingConfirmation/>}/>
    </Routes>
  )
}

export default Routing