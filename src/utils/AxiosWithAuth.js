import axios from "axios";

const Authorization = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: "https://backend-bw.herokuapp.com",
    headers: {
      token: token,
    },
  });
};

export default Authorization;
