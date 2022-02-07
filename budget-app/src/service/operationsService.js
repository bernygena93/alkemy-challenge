import axios from "axios";
import { endpointOperations } from "../config/endpoint";

export const getOperations = (id) => {
  return axios.get(`${endpointOperations}/user/${id}`);
};
export const getById = (id) => {
  return axios.get(`${endpointOperations}/${id}`);
};
export const destroy = (id, header) => {
  return axios.delete(`${endpointOperations}/${id}`, header);
};
export const save = (payload, header) => {
  return axios.post(`${endpointOperations}`, payload, header);
};
export const update = (payload, header) => {
  return axios.put(`${endpointOperations}`, payload, header);
};
