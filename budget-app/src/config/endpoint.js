import env from "react-dotenv";

const endpointBase = env.API_URL;

export const endpointOperations = `${endpointBase}/operations`;
export const endpointAuth = `${endpointBase}/auth`;
export const endpointCategories = `${endpointBase}/categories`;
