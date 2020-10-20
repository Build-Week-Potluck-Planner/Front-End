import React, { useEffect, useState } from "react";
import Form from './Form';
import Event from './Event';
import axios from 'axios';
import * as yup from 'yup';
import schema from '../schema';
import { Route, Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const initialEvents = []
const initialDisabled = true
const initialFormValues = {
  name: '',
  email: '',
  organizer: '',
  guests: '',
  date: '',
  time: '',
  location: '',
  //item categories for now
  drinks: '',
  desserts: '',
  entrees: '',
  utensils: '',
}

const initialFormErrors = {
  name: '',
  email: '',
  organizer: '',
  guests: '',
  date: '',
  time: '',
  location: '',
  items: '',
}

function Organizer() {
  const [events, setEvents] = useState(initialEvents)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)
  const [startDate, setStartDate] = useState(new Date())

  const postNewEvent = (newEvent) => {
    axios.post('', newEvent)
    .then(res => {
      console.log(res.data)
      setEvents([...events, res.data])
      setFormValues(initialFormValues)
    })
    .catch(err => {
      console.log(err)
    })
  }

  const inputChange = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: '',
        })
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        })
      })
      setFormValues({
        ...formValues,
        [name]: value,
      })
  }

  const formSubmit = () => {
    const newEvent = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      organizer: formValues.organizer.trim(),
      guests: formValues.guests.trim(),
      date: formValues.date.trim(),
      time: formValues.time.trim(),
      location: formValues.location.trim(),
      items: ['drinks', 'desserts', 'entrees', 'utensils', ].filter((item) => formValues[item]),
    }
    postNewEvent(newEvent)
  }

  useEffect(() => {
    schema.isValid(formValues).then(valid => {
      setDisabled(!valid)
    })
  }, [formValues])

  return (
    <div className="App">
      <Link id='home' to='/'>
          Home
      </Link>
      <br></br>
      <Link id='newEvent' to='/potluck'>
          Create a New Potluck Event
      </Link>
        <Route exact path='/potluck'>
          <h2>Get Started</h2>
        
          <Form 
            values={formValues}
            errors={formErrors}
            change={inputChange}
            submit={formSubmit}
            disabled={disabled}
          />
        </Route>
        <Route exact path ='/'>
          <h2>Home Page</h2>
          {events.map((event) => {
            return <Event 
              key={event.id}
              name={event.name}
              email={event.email}
              organizer={event.organizer}
              guests={event.guests}
              date={event.date}
              time={event.time}
              location={event.location}
              drinks={event.drinks}
              desserts={event.desserts}
              entrees={event.entrees}
              utensils={event.utensils}
            />
          })}
        </Route>
        <br></br>
        <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
    </div>
  );//return
}//App

export default Organizer;