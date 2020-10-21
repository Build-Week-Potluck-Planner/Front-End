import React, { useEffect, useState } from "react";
import Form from "./Form";
import Event from "./Event";
import axios from "axios";
import * as yup from "yup";
import schema from "../schema";
import { Route, Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const initialEvents = [];
const initialDisabled = true;
const initialFormValues = {
  event_name: "",
  date: "",
  time: "",
  description: "",
  address: "",
  city: "",
  state: "",
  // guests: '',
};

const initialFormErrors = {
  event_name: "",
  date: "",
  time: "",
  description: "",
  address: "",
  city: "",
  state: "",
  // guests: '',
};

function Organizer() {
  const [events, setEvents] = useState(initialEvents);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);
  // const [selectedDate, setSelectedDate] = useState(new Date());

  const postNewEvent = (newEvent) => {
    axios
      .post("https://potluck-planner-bw.herokuapp.com/events/", newEvent)
      .then((res) => {
        console.log(res.data);
        setEvents([...events, res.data]);
        setFormValues(initialFormValues);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const inputChange = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const formSubmit = () => {
    const newEvent = {
      event_name: formValues.event_name.trim(),
      date: formValues.date,
      time: formValues.time,
      description: formValues.description.trim(),
      address: formValues.address.trim(),
      city: formValues.city.trim(),
      state: formValues.state.trim(),
      // guests: formValues.guests.trim(),
      // items: ['drinks', 'desserts', 'entrees', 'utensils', ].filter((item) => formValues[item]),
    };
    postNewEvent(newEvent);
  };

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  // console.log(formValues);
  // console.log(selectedDate);

  return (
    <div className="App">
      <Link id="home" to="/">
        Home
      </Link>
      <br></br>
      <Link id="newEvent" to="/potluck">
        Create a New Potluck Event
      </Link>
      <Route exact path="/potluck">
        <h2>Get Started</h2>

        <Form
          values={formValues}
          errors={formErrors}
          change={inputChange}
          submit={formSubmit}
          disabled={disabled}
        />
      </Route>
      <Route exact path="/">
        <h2>Home Page</h2>
        {events.map((event) => {
          return (
            <Event
              // key={event.id} - no longer needed per Tzong
              event_name={event.event_name}
              date={event.date}
              time={event.time}
              description={event.description}
              address={event.address}
              city={event.city}
              state={event.state}
              // guests={event.guests}
            />)
          })}
        </Route>
        <br></br>
        {/* <DatePicker selected={selectedDate} onChange={setSelectedDate} /> */}
    </div>
  ); //return
} //App

export default Organizer;
