import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import EventCard from "../components/EventCard";
import { UserCard } from "./UserCard";
import { authorization } from "../utils/AxiosWithAuth";
import OrganizerCard from "../components/OrganizerCard";
// Component Pages
import Organizer from "./Organizer";
// import organizerCard
// import guestCard
import { UserContext } from "../contexts/UserContext";

function Home() {
  const { push } = useHistory();
  const localId = localStorage.getItem("local_id");

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
  const getPotlucks = () => {
    authorization()
      .get("/events")
      .then((res) => {
        setPotlucks(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err.response));
  };

  useEffect(() => {
    getPotlucks();
  }, []);

  // Delete Potluck, on separate function
  // const deletePotluck = (event_id) => {
  //   authorization()
  //     .delete("/events/:id", event_id)
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

  return (
    <div className="Home">
      <nav>
        <Link to="/logout">
          <button onClick={() => push("/logout")}>Logout</button>
        </Link>
      </nav>
      <h1> MY POTLUCKS! </h1>
      <Organizer />
      {potlucks.map((potluck) => (
        <div key={potluck.event_id}>
          {potluck.organizer_id === Number(localId) ? (
            <EventCard props={potluck} />
          ) : (
            ""
          )}
        </div>
      ))}
      <h1> INVITED TO POTLUCKS! </h1>
      <h1> ALL POTLUCKS! </h1>
      <section>
        {potlucks.map((potluck) => (
          <div key={potluck.event_id}>
            <EventCard props={potluck} />
          </div>
        ))}
      </section>
      <section>
        <div>
          <OrganizerCard />{" "}
        </div>
      </section>
    </div>
  );
}

export default Home;
