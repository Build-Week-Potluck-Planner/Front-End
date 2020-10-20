import axios from "axios";

export const authorization = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: "https://potluck-planner-bw.herokuapp.com",
    headers: {
      authorization: token,
    },
  });
};
