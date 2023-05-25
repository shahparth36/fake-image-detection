import axios from "axios";

let baseURL = "http://localhost:5000/api";

const instance = axios.create({
  baseURL,
  timeout: 3000,
});

export default instance;