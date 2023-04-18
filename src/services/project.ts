import { callAPI } from "../utils/request";
import { ProjectProps } from "../interfaces/ProjectInterface";

export const getAllProjects = () => {
  return callAPI.get("/allProjects");
};

export const getProject = (id: string) => {
  return callAPI.get("/project/" + `${id}`);
};

export const updateProject = (id: string, projectData: ProjectProps) => {
  return callAPI.patch(`${id}`, projectData);
};
