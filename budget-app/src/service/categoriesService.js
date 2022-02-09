import axios from "axios";
import { endpointCategories } from "../config/endpoint";

export const getCategories = (id) => axios.get(`${endpointCategories}/${id}`);
export const destroy = (id) => axios.delete(`${endpointCategories}/${id}`);
export const save = (payload) => {
  return axios.post(`${endpointCategories}`, payload);
};
export const update = (payload) => {
  return axios.put(`${endpointCategories}`, payload);
};
