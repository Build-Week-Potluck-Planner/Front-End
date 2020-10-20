import React from "react";
import { Route, Redirect } from "react-router-dom";
import OrganizerCard from "../components/OrganizerCard";

const Private = ({ component: OrganizerCard, ...props }) => {
  return (
    <Route
      {...props}
      render={() => {
        if (localStorage.getItem("token")) {
          return <OrganizerCard />;
        } else {
          return <Redirect to="/" />;
        }
      }}
    />
  );
};

export default Private;
