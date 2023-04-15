import { callAPI } from "../utils/request";
import { ProjectProps } from "../components/pages/project/mockdata/ProjectInterface";

export const getProject = (id: string) => {
  return callAPI.get(`${id}`);
};

export const updateProject = (id: string, projectData: ProjectProps) => {
  return callAPI.patch(`${id}`, projectData);
};
