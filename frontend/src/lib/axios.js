import axios from "axios";
 
export const axiosInstance = axios.create({
  baseURL: "https://chat-app-2tmo.onrender.com/api",
  withCredentials: true,
});

