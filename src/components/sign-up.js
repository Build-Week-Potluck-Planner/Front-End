import React, { useEffect, useState } from "react";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import { authorization } from "../utils/AxiosWithAuth";
import styled from "styled-components";

const StyledCard = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  padding-left: 3%;
  padding-right: 3%;
`;

const Form = styled.form`
  margin: 2%;
  display: flex;
  flex-direction: column;
  padding: 10%;
  font-size: 30px;
  font-weight: bold;
`;

const SubmitButton = styled.button`
  margin: 5%;
  border-radius: 15px;
`;

const LoginButton = styled.button`
  border-radius: 15px;
`;

const Label = styled.label`
  padding-top: 5%;
  font-size: 25px;
  font-weight: normal;
`;

const P = styled.p`
  font-size: 16px;
`;

const Input = styled.input`
  padding: 5%;
  border-radius: 5px;
  border: 1px solid gray;
  font-weight: bold;
`;

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

  const [errors, setErrors] = useState({
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
        "https://potluck-planner--be.herokuapp.com/users/register",
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
      <Form onSubmit={onSubmit}>
        {" "}
        Create Your Account
        <Label>
          <Input
            type="text"
            name="username"
            value={signUpData.username}
            onChange={onChange}
            placeholder="Username"
            maxLength="20"
          />
        </Label>
        <Label>
          <Input
            type="text"
            name="password"
            value={signUpData.password}
            onChange={onChange}
            placeholder="Password"
            maxLength="12"
          />
        </Label>
        <Label>
          <Input
            type="text"
            name="full_name"
            value={signUpData.full_name}
            onChange={onChange}
            placeholder="Full Name"
            maxLength="25"
          />
        </Label>
        <Label>
          <Input
            type="email"
            name="email"
            value={signUpData.email}
            onChange={onChange}
            placeholder="Email"
            maxLength="35"
          />
        </Label>
        <div>
          <SubmitButton disabled={disabled}>Register Now!</SubmitButton>
          <P>Already Have an Account? Log In Here!</P>
          <LoginButton onClick={() => push("/login")}>Login</LoginButton>
        </div>
      </Form>
    </StyledCard>
  );
}
