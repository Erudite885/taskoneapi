import axios from "axios";

const apiUrl = "http://127.0.0.1:4010/api";

export const apiClient = axios.create({
  baseURL: apiUrl,
  timeout: 30000,
});
