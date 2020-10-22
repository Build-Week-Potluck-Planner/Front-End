import React from "react";
import "./App.css";
import Organizer from "./components/Organizer";
import Private from "./utils/PrivateRoute";
import { Route, Link, useHistory } from "react-router-dom";

import Signup from "./components/sign-up";
import Home from "./components/Home";
import Login from "./components/log-in";
import Logout from "./components/Logout";
import DummyLogin from "./components/DummyLogin";

function App() {
  const { push } = useHistory();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Plan A Potluck!</h1>
      </header>
      <div className="App-body">
        {/* Load on App page*/}

        <Route exact path="/">
          <Login />
          <br></br>
          <DummyLogin />
          <br></br>
          <Link to="/signup">
            <button onClick={() => push("/signup")}>Signup</button>
          </Link>
        </Route>

        {/* Create Signup Route */}
        <Route path="/signup">
          <Signup />
        </Route>

        {/* Logout */}
        <Route path="/logout">
          <Logout />
        </Route>

        {/* Create Potluck Route */}

        <Route path="/potluck">
          <Organizer />
        </Route>
        {/* Home Page Route */}
        <Private path="/home" component={Home} />
      </div>
      <footer>
        <br></br>
        <h3>Potluck Planner, Track Team #8 </h3>
        <p>David Chang, Unit 2</p>
        <p>Elijah Elliot, Unit 2</p>
        <p>Christopher Stankiewicz, Unit 3</p>
        <p>Tzong-Lian Tsay, Unit 3</p>
        <br></br>
      </footer>
    </div>
  );
}

export default App;
