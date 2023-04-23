import axios from "axios";
const BASE_URL = "https://fakenews-mzom.onrender.com";
export const signup = (data) => {
  return axios.post(`${BASE_URL}/signup`, data, {
    headers: { "Content-Type": "application/json" },
  });
};
export const login = (data) => {
  return axios.post(`${BASE_URL}/login`, data, {
    headers: { "Content-Type": "application/json" },
  });
};
