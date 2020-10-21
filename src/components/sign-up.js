import React, { useState } from "react";
import * as yup from "yup";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { authorization } from '../utils/AxiosWithAuth';

export default function Signup() {
  const { push } = useHistory();

  const [signUpData, setSignUpData] = useState({
    username: "",
    password: "",
    fullname: "",
    email: "",
  });

  const onChange = (event) => {
    setSignUpData({
      ...signUpData,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    authorization()
      .post("https://potluck-planner-bw.herokuapp.com/users/register", signUpData)
      .then((result) => {
        console.log(result.data);
        localStorage.setItem("token", result.data.token);
        push("/Home");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>
          Username
          <input
            type="text"
            name="username"
            onChange={onChange}
            placeholder="Enter Username"
            maxLength="20"
          />
        </label>

        <label>
          Password
          <input
            type="text"
            name="password"
            onChange={onChange}
            placeholder="Enter Password"
            maxLength="12"
          />
        </label>

        <label>
          Full Name
          <input
            type="text"
            name="fullname"
            onChange={onChange}
            placeholder="Enter Your Full Name"
            maxLength="25"
          />
        </label>

        <label>
          Email
          <input
            type="email"
            name="email"
            onChange={onChange}
            placeholder="Enter Your Email"
            maxLength="35"
          />
        </label>

        <div>
          <button>Register Now!</button>
        </div>
      </form>
    </div>
  );
}
