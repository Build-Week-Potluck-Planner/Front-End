import React, { useState } from "react";
import { Route } from "react-router-dom";

// Component Pages
// import createPotluck
// import organizerCard
// import guestCard
import { UserContext } from "../components/UserContext";

function Home() {
  // State variables
  const [editing, setEditing] = useState(false);
  const [potluckToEdit, setPotluckToEdit] = useState({});
  const [potlucks, setPotlucks] = useState([]);

  // Helper Functions
  const editPotluck = (potluck) => {
    setEditing(true);
    setPotluckToEdit(potluck);
  };

  // Initialize with current list of potlucks
  const getPotluck = () => {
    axios
      .get("http://backend-bw.herokuapp.com/potlucks")
      .then((res) => setPotlucks(res.data))
      .catch((err) => console.log(err.response));
  };

  useEffect(() => {
    getPotluck();
  }, []);

  // Delete Potluck, on separate function
  // const deletePotluck = (potluck) => {
  //   axiosWithAuth()
  //     .delete(`http://backend-bw.herokuapp.com/potlucks/${potluck.id}`, potluck)
  //     .then((res) => getPotluck())
  //     .catch((err) => console.log(err));
  // };

  // Edit Potluck, on separate function
  // const editPotluck = (e) => {
  //   e.preventDefault();
  //   axiosWithAuth()
  //     .put(`http://backend-bw.herokuapp.com/potlucks/${potluck.id}`, potluck)
  //     .then((res) => getPotluck())
  //     .catch((err) => console.log(err));
  // };

  // Render List of Potlucks

  return (
    <div className="Home">
      <h1>My Potlucks! </h1>
      <nav>{/* <logout></logout> */}</nav>
      <UserContext.Provider value={{ user }}></UserContext.Provider>
    </div>
  );
}
