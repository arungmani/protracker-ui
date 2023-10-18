import http from "../http-common";
import ITutorialData from "../types/Tutorial";

const getAll = () => {
  return http.get<Array<ITutorialData>>("/posts");
};

const get = (id: any) => {
  return http.get<ITutorialData>(`/posts/${id}`);
};

const create = (data: ITutorialData) => {
  return http.post<ITutorialData>("/posts", data);
};

const update = (id: any, data: ITutorialData) => {
  return http.put<any>(`/posts/${id}`, data);
};

const remove = (id: any) => {
  return http.delete<any>(`/posts/${id}`);
};

const removeAll = () => {
  return http.delete<any>(`/posts`);
};

const findByTitle = (title: string) => {
  return http.get<Array<ITutorialData>>(`/posts?title=${title}`);
};

const TutorialService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle,
};

export default TutorialService;
