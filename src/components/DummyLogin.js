import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { authorization } from "../utils/AxiosWithAuth";
// import history from "../utils/History";
// import axios from "axios";

const DummyLogin = () => {
  const { push } = useHistory();

  const user = {
    username: "abc",
    password: "123",
  };

  const submit = (e) => {
    e.preventDefault();
    authorization()
      .post("https://potluck-planner-bw.herokuapp.com/users/login", user)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("token", res.data.token);
        push("/Home");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form onSubmit={submit}>
        <button>Dummy Login</button>
      </form>
    </div>
  );
};
export default DummyLogin;
