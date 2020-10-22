import React, { useEffect, useState } from "react";
import * as yup from "yup";
import { useHistory, Route, Link } from "react-router-dom";
import { authorization } from "../utils/AxiosWithAuth";
import styled from 'styled-components'


const StyledCard = styled.div `
  border: 2px solid red;
  background-color: #ffffff;
`

const Form = styled.form `
  // border: 2px solid green;
  margin: 2%;
  display: flex;
  flex-direction: column;
  padding: 10%;
  font-size: 30px;
  font-weight: bold;
`

const SubmitButton = styled.button `
  margin: 5%;
`

const LoginButton = styled.button `

`

const Label = styled.label `
  // border: 2px solid green;
  padding-top: 5%;
  font-size: 25px;
  font-weight: normal;
`

const P = styled.p `
  font-size: 16px;
`

const Input = styled.input `
  padding: 3%;
  // border-radius: 15%;
`

const schema = yup.object().shape({
  username: yup.string().required("Username is Required"),
  password: yup.string().required("Password is Required"),
  full_name: yup.string().required("Full Name is Required"),
  email: yup.string().required("Email is required"),
});

export default function Signup() {
  const { push } = useHistory();

  const [disabled, setDisabled] = useState(true);

  const [signUpData, setSignUpData] = useState({
    username: "",
    password: "",
    full_name: "",
    email: "",
  });

  const[errors, setErrors] = useState({
    username: "",
    password: "",
    full_name: "",
    email: "",
  });

  const setLoginDataErrors = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => setErrors({ ...errors, [name]: "" }))
      .catch((err) => setErrors({ ...errors, [name]: err.errors[0] }));
  };

  const onChange = (event) => {
    const { value, name } = event.target;
    setLoginDataErrors(name, value);
    setSignUpData({
      ...signUpData,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    authorization()
      .post(
        "https://potluck-planner-bw.herokuapp.com/users/register",
        signUpData
      )
      .then((result) => {
        console.log(result.data);
        push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    schema.isValid(signUpData).then((valid) => setDisabled(!valid));
  }, [signUpData]);

  return (
    <StyledCard>
      <Form onSubmit={onSubmit}> Create Your Account!
        <Label>
          Username
          <Input
            type="text"
            name="username"
            value={signUpData.username}
            onChange={onChange}
            placeholder="Enter Username"
            maxLength="20"
          />
        </Label>

        <Label>
          Password
          <Input
            type="text"
            name="password"
            value={signUpData.password}
            onChange={onChange}
            placeholder="Enter Password"
            maxLength="12"
          />
        </Label>

        <Label>
          Full Name
          <Input
            type="text"
            name="full_name"
            value={signUpData.full_name}
            onChange={onChange}
            placeholder="Enter Your Full Name"
            maxLength="25"
          />
        </Label>

        <Label>
          Email
          <Input
            type="email"
            name="email"
            value={signUpData.email}
            onChange={onChange}
            placeholder="Enter Your Email"
            maxLength="35"
          />
        </Label>

        <div>
          <SubmitButton disabled={disabled}>Register Now!</SubmitButton>
          <P>Already Have an Account? Log In Here!</P>
          <button onClick={() => push("/login")}>Login</button>
        </div>
      </Form>
    </StyledCard>
  );
}
