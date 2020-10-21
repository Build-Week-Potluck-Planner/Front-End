import React from "react";
import "./App.css";
import Organizer from "./components/Organizer";
import Private from "./utils/PrivateRoute";
import { Route, Switch, Link, useHistory } from "react-router-dom";
import Authorization from "./utils/AxiosWithAuth";
import Home from "./components/Home";

import DummyLogin from "./components/DummyLogin";

function App() {
  const { push } = useHistory();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Plan A Potluck!</h1>
      </header>
      <div className="App-body">
        {/* login component here, pre-loaded */}
        <DummyLogin />
        <br></br>
        <Link to="/Register">
          <button onClick={() => push("/Register")}>Register</button>
        </Link>
        <Private exact path="/Home" component={Home} />
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
      <Organizer />
    </div>
  );
}

export default App;
