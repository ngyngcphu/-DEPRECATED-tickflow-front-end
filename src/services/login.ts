import { request } from "@utils";

export const login = (username: string, password: string) => {
  return request.post("/auth/login", {
    username,
    password
  });
};
