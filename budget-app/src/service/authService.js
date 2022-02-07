import axios from "axios";
import { endpointAuth } from "../config/endpoint";

export const signup = (payload) => {
  return axios.post(`${endpointAuth}/signup`, payload);
};
export const signin = (payload) => {
  return axios.post(`${endpointAuth}/signin`, payload);
};
