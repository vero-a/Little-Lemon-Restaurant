import React from 'react';
import Heading from './Reservations/Heading';
import BookingForm from './Reservations/BookingForm';
import { useReducer } from 'react';
import { fetchAPI } from '../BookingsAPI';

function Header() {

  const updateTimes = (date) => {
    return fetchAPI(date);
  }

  const initializeTimes = fetchAPI(new Date());

  const [availableTimes, dispatch] = useReducer(updateTimes,initializeTimes);


  return (
    <div>
      <Heading/>
      <main>
        <BookingForm availableTimes={availableTimes} setAvailableTimes={dispatch}/>
      </main>
    </div>
  )
}

export default Header