import { callProject } from "../utils/request";

export const getProjectField = () => {
  return callProject.get("/projectField");
};

export const getAllProjects = () => {
  return callProject.get("/projects");
};

export const createProject = (data: Project) => {
  return callProject.post("/projects", data);
};

export const getProject = (id: string) => {
  return callProject.get("/projects/" + `${id}`);
};

export const updateProject = (id: string, projectData: Project) => {
  return callProject.patch(`${id}`, projectData);
};
