import axios from "./axios";

//const API = "https://marlui-map4che.koyeb.app/api";
const API = "http://localhost:4000/api";

export const registerRequest = (user) => axios.post(`/register`, user);

export const loginRequest = (user) => axios.post(`/login`, user);

export const verifyTokenRequest = () => axios.get("/verify");

export const signOutRequest = () => axios.post("/logout");
