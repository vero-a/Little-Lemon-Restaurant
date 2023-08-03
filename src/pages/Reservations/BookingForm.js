import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function BookingForm({availableTimes, setAvailableTimes}) {
    const [date, setDate] = useState("");
    const [guests, setGuests] = useState("2");
    const [time,setTime] = useState("");
    const [occasion, setOccasion] =useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [tel, setTel] = useState("");
    const [email, setEmail] = useState("");
    const [comment, setComment] = useState("");



    const [selectedTime, setSelectedTime] = useState(availableTimes.map((times) => {
        return <option>{times}</option>
    }))

    function handleDateChange(e) {
        setDate(e.target.value);

        var stringify = e.target.value;
        const selectedDate = new Date(stringify);

        setAvailableTimes(selectedDate);

        setSelectedTime(availableTimes.map((times) => {
            return <option>{times}</option>
        }));
    }

    function handleTimeChange(e) {
        console.log(e.target.value);
        setTime(e.target.value);
    }

    const navigate = useNavigate();

    const onSubmit = (e) => {
      e.preventDefault();

      // redirect to /booking confirmation
      navigate('/booking-confirmation');

    }


  return (
    <form className='reservation-form' onSubmit={onSubmit}>

        <label htmlFor='date'>
            Date:
        </label> <br></br>
        <input
            type='date'
            id='date'
            required
            value={date}
            onChange={handleDateChange}
        /> <br></br>

        <label htmlFor='guests'>
            Number of Guests:
        </label> <br></br>
        <input
            type='number'
            id='guests'
            required
            min={1}
            max={12}
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
        /> <br></br>

        <label htmlFor='time'>
            Time:
        </label> <br></br>
        <select
            id='time'
            required
            value={time}
            onChange={handleTimeChange}
        >
            {selectedTime}
        </select> <br></br>

        <label htmlFor='occasion'>
            Occasion:
        </label> <br></br>
        <select
            id='occasion'
            required
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
            >
                <option value="Anniversary">Anniversary</option>
                <option value="Birthday">Birthday</option>
                <option value="Engagement">Engagement</option>
                <option value="Other">Other</option>
                <option value="None">None</option>
        </select> <br></br>

        <label htmlFor='firstName'>
            First Name:
        </label> <br></br>
        <input
            type='text'
            id='firstName'
            required
            minLength={2}
            maxLength={100}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
        /> <br></br>

        <label htmlFor='lastName'>
            Last Name:
        </label> <br></br>
        <input
            type='text'
            id='lastName'
            required
            minLength={2}
            maxLength={100}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
        /> <br></br>

         <label htmlFor='tel'>
            Phone Number:
        </label> <br></br>
        <input
            type='tel'
            id='tel'
            required
            minLength={10}
            maxLength={15}
            value={tel}
            onChange={(e) => setTel(e.target.value)}
        /> <br></br>

        <label htmlFor='email'>
            Email:
        </label> <br></br>
        <input
            type='email'
            id='email'
            required
            minLength={5}
            maxLength={100}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        /> <br></br>

        <label htmlFor='comment'>
            Comments:
        </label> <br></br>
        <textarea
            id='comment'
            rows={4}
            maxLength={200}
            value={comment}
            onChange={(e) => setComment(e.target.value)}>
        </textarea> <br></br>

        <small className='disclaimer'>
            <p>Disclaimer: <br></br>
            Table will be reserved for 15 min after reservation time, afterwards the table is no longer reserved. Please provide 24 hour notice for cancellations.</p>
        </small> <br></br>

        <button className='action-button' type='submit'>Make Your Reservation</button>
    </form>
  )
}

export default BookingForm