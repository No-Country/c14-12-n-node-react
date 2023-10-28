import axios from "axios";

const instance = axios.create({
  //baseURL: "http://localhost:4000/api",
  //withCredentials: true,
  baseURL: "https://marlui-map4che.koyeb.app/api",
  withCredentials: true,
});

export default instance;
