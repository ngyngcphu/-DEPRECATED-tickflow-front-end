import axios from "axios";

export const request = axios.create({
  baseURL: "http://localhost:3030"
});

export const callProject = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL
});
