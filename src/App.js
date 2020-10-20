import React from "react";
import "./App.css";
import Private from "./utils/PrivateRoute";
import { Route, Switch, Link, useHistory } from "react-router-dom";
import Authorization from "./utils/AxiosWithAuth";
import Home from "./components/Home";

import DummyLogin from "./components/DummyLogin";

function App() {
  const { push } = useHistory();

  return (
    <div>
      <div className="App">
        <header className="App-header">
          <h1>Plan A Potluck</h1>
          {/* <Switch> */}
          {/* 
            login component
            */}
          <DummyLogin />
          <Link to="/Register">
            <button onClick={() => push("/Register")}>Register</button>
          </Link>
          <Route exact path="/" />

          <div className="">
            <Private exact path="/Home" component={Home} />
          </div>
          {/* </Switch> */}
        </header>
      </div>
      <h1>Potluck Planner, Track Team #8 </h1>
      <br></br>

      <h2>David Chang, Unit 2</h2>
      <br></br>
      <h2>Elijah Elliot, Unit 2</h2>
      <br></br>
      <h2>Christopher Stankiewicz, Unit 3</h2>
      <br></br>
      <h2>Tzong-Lian Tsay, Unit 3</h2>
      <br></br>
    </div>
  );
}

export default App;
