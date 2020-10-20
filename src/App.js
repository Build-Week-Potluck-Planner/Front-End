import React from "react";
import "./App.css";
import Private from "./utils/PrivateRoute";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AxiosWithAuth from "./utils/AxiosWithAuth";
import { OrganizerCard } from "./components/OrganizerCard";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="App">
          <header className="App-header">
            <h1>Plan A Potluck</h1>
            <Route exact path="/" a />
          </header>
          <div className="">
            <Private path="/protected" component={OrganizerCard} />
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
