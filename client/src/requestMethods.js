import axios from "axios";


const BASE_URL = 'http://localhost:5000/api/';
const TOKEN ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ZDEwYjAwZDAxODZmZmU1NmM0NTE5YyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcyNTIyNjAxMywiZXhwIjoxNzI1NDg1MjEzfQ.WQPE1nXHjZqNbpMXwlRMTpoTXHwSSw_Urubdk8w08cI' 

export const publicRequest = axios.create({baseURL:BASE_URL});
export const userRequest = axios.create({
    baseURL:BASE_URL,
    headers:{token:`Bearer ${TOKEN}`}
})