import axios from "axios";
import { endpointOperations } from "../config/endpoint";

export const getOperations = (id) => {
  return axios.get(`${endpointOperations}/user/${id}`);
};
export const getById = (id) => {
  return axios.get(`${endpointOperations}/${id}`);
};
export const destroy = (id) => {
  return axios.delete(`${endpointOperations}/${id}`);
};
export const save = (payload) => {
  return axios.post(`${endpointOperations}`, payload);
};
export const update = (payload) => {
  return axios.put(`${endpointOperations}`, payload);
};
