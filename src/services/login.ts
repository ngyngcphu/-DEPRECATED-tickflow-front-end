import { request } from "../utilities/request";

export const login = (username: string, password: string) => {
  return request.post("/api/login", {
    username,
    password
  });
};
