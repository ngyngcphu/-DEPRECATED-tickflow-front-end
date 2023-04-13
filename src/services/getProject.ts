import { callAPI } from "../utils/request";

export const getProject = (id: string) => {
  return callAPI.get(`${id}`);
};
