import axios from "axios"

export const axiosInstanace = axios.create({
    baseURL:"https://chat-app-1-fdpo.onrender.com",
    withCredentials:true
});

