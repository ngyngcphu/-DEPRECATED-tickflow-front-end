import axios from "axios";

export const request = axios.create({
  baseURL: "http://localhost:3030"
});

export const callAPI = axios.create({
  baseURL: "http://localhost:3001/api/"
});
