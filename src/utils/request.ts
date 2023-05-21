import axios from "axios";

export const request = axios.create({
  baseURL: "http://server.tickflow.net"
});

export const callProject = axios.create({
  baseURL: "https://mockserver.tickflow.net"
});
