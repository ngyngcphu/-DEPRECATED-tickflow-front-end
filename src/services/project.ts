import { callProject } from "../utils/request";
import { ProjectInterface } from "../interfaces/ProjectInterface";

export const getAllProjects = () => {
  return callProject.get("/projects");
};

export const createProject = (data: ProjectInterface) => {
  return callProject.post("/projects", data);
};

export const getProject = (id: string) => {
  return callProject.get("/projects/" + `${id}`);
};

export const updateProject = (id: string, projectData: ProjectInterface) => {
  return callProject.patch(`${id}`, projectData);
};
