import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import axios from "axios";

const schema = yup.object().shape({
  username: yup.string().required('Username is Required'),
  password: yup.string().required('Password is Required'),
})

export default function Login() {
  const { push } = useHistory();

  const [disabled, setDisabled] = useState(true);

  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const setLoginDataErrors = (name, value) => {
    yup.reach(schema, name).validate(value)
    .then(() => setErrors({ ...errors, [name]: '' }))
    .catch(err => setErrors({ ...errors, [name]: err.errors[0]}))
  };

  const onChange = (event) => {
    const { value, name } = event.target
    setLoginDataErrors(name, value)
    setLoginData({
      ...loginData,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://potluck-planner-bw.herokuapp.com/users/login", loginData)
      .then((result) => {
        console.log(result.data);
        localStorage.setItem("token", result.data.token);
        push("/Home");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    schema.isValid(loginData).then(valid => setDisabled(!valid))
  }, [loginData]);

  return (
    <div className="logIn inputs">

      <div style={{ color: "red" }}>
        <div>{errors.username}</div>
        <div>{errors.password}</div>
      </div>
      
      <form onSubmit={onSubmit}>
        <label>
          Username
          <input
            type="text"
            name="username"
            value={loginData.username}
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
            value={loginData.password}
            onChange={onChange}
            placeholder="Enter Password"
            maxLength="12"
          />
        </label>

        <div className="enter">
          <button disabled={disabled}>Enter</button>
        </div>
      </form>
    </div>
  );
}
