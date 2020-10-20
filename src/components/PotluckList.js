import React, { useEffect } from "react";
import { authorization } from "../utils/AxiosWithAuth";
import Input from "../utils/ChangeInput";

const PotluckList = () => {
  const [list, setList] = Input([]);

  useEffect(() => {
    authorization()
      .get("/events")
      .then((response) => {
        console.log(response.data);
        setList(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  console.log(list);

  const deletePotluck = (event) => {
    authorization()
      .delete(`/event/${event.id}`)
      .then((res) => {
        console.log(res);
        window.location.reload();
      });
  };

  return (
    <div>
      {list.map((data) => (
        <div key={data.id}>
          <h1>{data.name}</h1>
          <h3>
            {data.date} | {data.time}
          </h3>
          <p>{data.items}</p>
          <button
            onClick={(e) => {
              e.stopPropagation();
              deletePotluck(data);
            }}
          >
            Delete Event
          </button>
        </div>
      ))}
    </div>
  );
};

export default PotluckList;
