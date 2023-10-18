import http from "../http-common";
import IProjectData from "../types/Project";

const getAll = () => {
  return http.get<Array<IProjectData>>("/api/project/allProjects");
};

const get = (id: any) => {
  return http.get<IProjectData>(`/posts/${id}`);
};

const create = (data: IProjectData) => {
  return http.post<IProjectData>("/posts", data);
};

const update = (id: any, data: IProjectData) => {
  return http.put<any>(`/posts/${id}`, data);
};

const remove = (id: any) => {
  return http.delete<any>(`/posts/${id}`);
};

const removeAll = () => {
  return http.delete<any>(`/posts`);
};

const findByTitle = (title: string) => {
  return http.get<Array<IProjectData>>(`/posts?title=${title}`);
};

const ProjectService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle,
};

export default ProjectService;
