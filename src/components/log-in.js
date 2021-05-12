import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
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
});

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
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => setErrors({ ...errors, [name]: "" }))
      .catch((err) => setErrors({ ...errors, [name]: err.errors[0] }));
  };

  const onChange = (event) => {
    const { value, name } = event.target;
    setLoginDataErrors(name, value);
    setLoginData({
      ...loginData,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    authorization()
      .post("https://potluck-planner--be.herokuapp.com/users/login", loginData)
      .then((result) => {
        console.log(result.data);
        localStorage.setItem("token", result.data.token);
        localStorage.setItem("local_id", result.data.user_id);
        push("/Home");
      })
      .catch((error) => {
        console.log(error);
        window.alert("Username or Password is Incorrect");
      });
  };

  useEffect(() => {
    schema.isValid(loginData).then((valid) => setDisabled(!valid));
  }, [loginData]);

  return (
    <StyledCard>
      <div style={{ color: "red" }}>
        <div>{errors.username}</div>
        <div>{errors.password}</div>
      </div>

      <Form onSubmit={onSubmit}>
        {" "}
        Sign In
        <Label>
          <Input
            type="text"
            name="username"
            value={loginData.username}
            onChange={onChange}
            placeholder="Username"
            maxLength="20"
          />
        </Label>
        <Label>
          <Input
            type="text"
            name="password"
            value={loginData.password}
            onChange={onChange}
            placeholder="Password"
            maxLength="12"
          />
        </Label>
        <div className="enter">
          <SubmitButton disabled={disabled}>Enter</SubmitButton>
          <P>Don't Have an Account? Create One Now!</P>
          <LoginButton onClick={() => push("/signup")}>Signup</LoginButton>
        </div>
      </Form>
    </StyledCard>
  );
}
