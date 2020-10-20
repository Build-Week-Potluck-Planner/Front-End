import React from "react";
import { Route, Redirect } from "react-router-dom";

const Private = ({ home: Home, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (localStorage.getItem("token")) {
          return <Home {...props} />;
        } else {
          return <Redirect to="/Home" />;
        }
      }}
    />
  );
};

export default Private;
