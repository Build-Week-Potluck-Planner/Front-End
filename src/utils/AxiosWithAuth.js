import axios from "axios";

const Authorization = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: "https://potluck-planner-bw.herokuapp.com",
    headers: {
      token: token,
    },
  });
};

export default Authorization;
