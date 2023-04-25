import axios from "axios";

export const request = axios.create({
  baseURL: "http://localhost:3030"
});

export const callProject = axios.create({
  baseURL: "https://mockserver.tickflow.net"
});
