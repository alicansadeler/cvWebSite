export const REQ_TYPES = Object.freeze({
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
});

const instance = axios.create({
  baseURL: "https://668bdc690b61b8d23b0b7836.mockapi.io/acs/",
});

export const API = instance();
