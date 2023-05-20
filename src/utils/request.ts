import axios from "axios";

export const request = axios.create({
  baseURL: "http://192.168.1.10:3030"
});

export const callProject = axios.create({
  baseURL: "https://mockserver.tickflow.net"
});
