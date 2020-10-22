import React from "react";
import { useHistory } from "react-router-dom";

const Logout = () => {
  const { push } = useHistory();
  localStorage.clear();
  push("/");
  return <h3>Logging out...</h3>;
};

export default Logout;
