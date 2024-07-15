import axios from "axios";

export const reqTypes = Object.freeze({
  POST: "post",
  GET: "get",
  PUT: "put",
  DELETE: "delete",
});

function createInstance() {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: "https://reqres.in/api",
    headers: {
      authorization: token,
    },
  });
}

export const API = createInstance();
