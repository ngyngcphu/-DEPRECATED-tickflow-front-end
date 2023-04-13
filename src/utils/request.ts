import axios from "axios";

export const request = axios.create({
  baseURL: "http://localhost:8080"
});

export const callAPI = axios.create({
  baseURL: "http://localhost:3001/api/"
});
