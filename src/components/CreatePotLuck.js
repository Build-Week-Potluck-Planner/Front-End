import React from "react";
import Authorization from "../../Utilities/AxiosWithAuth";

let initialData = {
  name: name,
  date: date,
  time: time,
  items: [],
};

let CreatePotluck = (props) => {
  let [state, newState] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: name,
      date: date,
      time: time,
      items: [],
    };

    Authorization()
      .post("/potluck", data)
      .then((res) => {
        console.log(res);
        updateColors(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Bring in the form dont forget to import at top */}
      </form>
    </div>
  );
};

export default CreatePotluck;
