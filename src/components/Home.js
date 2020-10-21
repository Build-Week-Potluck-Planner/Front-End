import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import { EventCard } from "./EventCard";
import { UserCard } from "./UserCard";
import { authorization } from "../utils/AxiosWithAuth";

// Component Pages
import Organizer from "./Organizer";
// import organizerCard
// import guestCard
import { UserContext } from "../contexts/UserContext";

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
    authorization()
      .get("/events")
      .then((res) => {
        setPotlucks(res.data);
        console.log(res.data);
      })
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
  // const PotluckList = () => {
  //   const [list, setList] = useState([]);

  //   useEffect(() => {
  //     Authorization()
  //       .get("/events")
  //       .then((response) => {
  //         console.log(response.data);
  //         setList(response.data);
  //       })
  //       .catch((error) => console.log(error));
  //   }, []);
  //   return list;
  // };
  return (
    <div className="Home">
      <h1>My Potlucks! </h1>
      <section>
        <Organizer />
        <div>{/* CreatePotlucks */}</div>
      </section>
      <section>
        <div>
          {/* 
        Current list of potlucks
        Get /ev 
        */}
          {potlucks.map((potluck) => (
            <div>
              <EventCard props={potluck} key={potluck.event_id} />
            </div>
          ))}

          {/* <PotluckList /> */}
        </div>
      </section>
      <section>
        <div>{/* Invited to */}</div>
      </section>

      <nav>{/* <logout></logout> */}</nav>
      {/* <UserContext.Provider></UserContext.Provider> */}
    </div>
  );
}

export default Home;
