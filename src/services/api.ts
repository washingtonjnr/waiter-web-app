import axios from "axios";

export const apiUrl = "http://localhost:3001";

export const api = axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  }
});
