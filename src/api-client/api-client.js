import axios from "axios";

export const apiBase = axios.create({
  baseURL: "http://localhost:4000/api",
});
