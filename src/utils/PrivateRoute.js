import React from "react";
import { Route, Redirect, Redirect } from "react-router-dom";

const Private = ({ component: Organizer, ...props }) => {
  return (
    <Route
      {...props}
      render={() => {
        if (localStorage.getItem("token")) {
          return <Organizer />;
        } else {
          return <Redirect to="/home" />;
        }
      }}
    />
  );
};

export default Private;
